#!/usr/bin/env node
/**
 * Jednorazový migračný skript:
 *  - načíta zoznam slugov z src/lib/blog.ts (z poľa blogPostsData)
 *  - pre každý článok stiahne https://www.neoship.sk/clanky/<slug>
 *  - vyparsuje obsahový blok (.col-lg-8.blog-detail-content)
 *  - HTML -> markdown-ish text s odsekmi a inline obrázkami
 *  - inline obrázky zo source stiahne do public/images/blog/inline/
 *  - v tele článku ich nahrádza markdown syntaxou: ![alt](/images/blog/inline/<file>.png)
 *  - filtruje navigačné a CTA bloky (Zaujímajú vás novinky..., Prihlásiť sa, Token, atď.)
 *  - výsledok zapíše do src/lib/blog-bodies.json ako { slug: body }
 *
 * Spusti: node scripts/fetch-blog-bodies.mjs
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_TS = resolve(ROOT, 'src/lib/blog.ts');
const OUT = resolve(ROOT, 'src/lib/blog-bodies.json');
const INLINE_DIR = resolve(ROOT, 'public/images/blog/inline');

if (!existsSync(INLINE_DIR)) mkdirSync(INLINE_DIR, { recursive: true });

const SRC = readFileSync(BLOG_TS, 'utf8');
const SLUGS = [...SRC.matchAll(/\bslug:\s*'([^']+)'/g)].map((m) => m[1]);
const UNIQUE = [...new Set(SLUGS)];

// Slugy, ktoré nemajú zdrojový článok na neoship.sk (placeholder/redesign posty)
const SKIP = new Set([
  'ako-znizit-pomer-vratiek',
  'dobierky-cashflow-2026',
  'pickup-points-vs-domov',
]);

/** Vytiahni obsah <div class="col-lg-8 blog-detail-content"> ... </div>. */
function extractContentBlock(html) {
  const startRe = /<div[^>]*class="[^"]*\bcol-lg-8\b[^"]*\bblog-detail-content\b[^"]*"[^>]*>/i;
  const m = startRe.exec(html);
  if (!m) return null;
  const startIdx = m.index + m[0].length;

  let depth = 1;
  const tagRe = /<\/?div\b[^>]*>/gi;
  tagRe.lastIndex = startIdx;
  let t;
  while ((t = tagRe.exec(html)) !== null) {
    if (t[0].startsWith('</')) {
      depth -= 1;
      if (depth === 0) return html.slice(startIdx, t.index);
    } else {
      depth += 1;
    }
  }
  return html.slice(startIdx);
}

function decode(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&bdquo;/g, '„')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, '…')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function getAttr(tag, name) {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i');
  const m = tag.match(re);
  return m ? decode(m[1]) : '';
}

/**
 * Vytiahne všetky <img> tagy z HTML, vráti pole { src, alt }
 * a HTML, kde sú img tagy nahradené placeholderom `[[IMG:n]]`.
 */
function extractImages(html) {
  const imgs = [];
  const replaced = html.replace(/<img\b[^>]*>/gi, (tag) => {
    let src = getAttr(tag, 'src');
    const alt = getAttr(tag, 'alt');
    if (!src) return '';
    // Vyhoď tematické/dekoračné obrázky šablóny
    if (/\/theme\//i.test(src)) return '';
    if (/\/files\/referencie\//i.test(src)) return '';
    if (/\/files\/referrals\//i.test(src)) return '';
    if (/favicon/i.test(src)) return '';
    if (/cta_mockup/i.test(src)) return '';
    if (/hero_(top|bottom)_shape/i.test(src)) return '';
    if (/logo\.svg/i.test(src)) return '';
    if (/bridge2\.png/i.test(src)) return '';
    if (/bronzovy-shoptet-partner/i.test(src)) return '';
    // Hlavný cover obrázok článku (= ten istý ako titulná foto blogu) tiež preskočíme
    if (/blog-detail--img|blog-detail-mobile/i.test(tag)) return '';

    // Normalizuj URL na absolútnu
    if (src.startsWith('/thumbs/')) {
      // /thumbs/1000×1000×max/<file>  ->  thumbs URL s 'x' (server akceptuje oba varianty)
      const fname = src.split('/').pop();
      src = `https://www.neoship.sk/thumbs/1000x1000xmax/${fname}`;
    } else if (src.startsWith('/files/')) {
      src = `https://www.neoship.sk${src}`;
    } else if (src.startsWith('//')) {
      src = `https:${src}`;
    }
    const idx = imgs.length;
    imgs.push({ src, alt });
    return `[[IMG:${idx}]]`;
  });
  return { imgs, html: replaced };
}

/** HTML obsahový blok -> čistý text s odsekmi a inline obrázkami (`![alt](path)`). */
function htmlToText(html, slugForImages) {
  let s = html;

  // Vyhoď skripty, style, komentáre, sociálne tlačidlá
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<div[^>]*class="[^"]*\bblog-social\b[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');

  // 1) Najskôr vytiahni obrázky a nahraď ich placeholdermi
  const { imgs, html: withPlaceholders } = extractImages(s);
  s = withPlaceholders;

  // 2) Štandardné nahradenia
  s = s.replace(/<br\s*\/?>/gi, '\n');

  // 2a) Nadpisy a podnadpisy -> markdown prefixy (## / ###),
  //     ktoré renderer v [slug]/page.tsx prevedie na <h2>/<h3>.
  //     Vnútorné whitespace/newlines sploštíme – heading nikdy nesmie obsahovať
  //     viacero riadkov, lebo by sa rozbil na osirelé `##` a samostatný text.
  s = s.replace(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/gi, (_, inner) => {
    const clean = inner.replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim();
    return clean ? `\n\n## ${clean}\n\n` : '';
  });
  s = s.replace(/<h[3-6][^>]*>([\s\S]*?)<\/h[3-6]>/gi, (_, inner) => {
    const clean = inner.replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim();
    return clean ? `\n\n### ${clean}\n\n` : '';
  });

  // 2b) "Bold-only" odseky: <p><strong>Nadpis</strong></p> -> ## Nadpis
  //     Neoship.sk často používa <p><strong>...</strong></p> ako vizuálne nadpisy.
  //     Limit na max 120 znakov vnútri, aby sme nepromovali bežné odseky s inline boldom.
  s = s.replace(
    /<p[^>]*>\s*<(strong|b)[^>]*>([^<]{4,120})<\/(strong|b)>\s*<\/p>/gi,
    '\n\n## $2\n\n',
  );

  s = s.replace(/<\/(p|li|ul|ol|blockquote|div|figure)>/gi, '$&\n\n');
  s = s.replace(/<li[^>]*>/gi, '• ');
  // figure samostatne, aby obrázok ostal v samostatnom odseku
  s = s.replace(/<figure[^>]*>/gi, '\n\n');

  // 3) Odstráň všetky zvyšné tagy (vrátane <strong>, <em> apod. vnútri nadpisov)
  s = s.replace(/<[^>]+>/g, '');

  // 3a) Po decodovaní môžu byť ## / ### s prebytočnými medzerami – upracme
  s = s.replace(/^[ \t]*## +/gm, '## ');
  s = s.replace(/^[ \t]*### +/gm, '### ');

  s = decode(s);

  // Normalizácia
  s = s.replace(/\r/g, '');
  s = s.replace(/[ \t]+/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');
  s = s.split('\n').map((line) => line.trim()).join('\n');
  s = s.replace(/\n{3,}/g, '\n\n').trim();

  // 4) Stop / dropping patterns – odseky ktoré sa majú vyhodiť celé.
  //    Voliteľný `## ` / `### ` prefix akceptujeme (nadpisy CTA blokov).
  const HEAD = /^(?:#{2,3}\s+)?/;
  const stopPatterns = [
    new RegExp(HEAD.source + 'Zdieľaj', 'i'),
    new RegExp(HEAD.source + 'Sdílej', 'i'),
    new RegExp(HEAD.source + 'Súvisiace', 'i'),
    new RegExp(HEAD.source + 'Súvisiac[íé]', 'i'),
    new RegExp(HEAD.source + 'Späť na', 'i'),
    new RegExp(HEAD.source + 'Predošl[ýy] článok', 'i'),
    new RegExp(HEAD.source + 'Ďalší článok', 'i'),
    new RegExp(HEAD.source + 'Čítaj[\\s\\S]*?(min|čítania)', 'i'),
    new RegExp(HEAD.source + 'Zaujímajú vás novinky', 'i'),
    new RegExp(HEAD.source + 'Nechajte nám svoj email', 'i'),
    new RegExp(HEAD.source + 'Prihlásiť sa\\s*$', 'i'),
    new RegExp(HEAD.source + 'Token\\s*$', 'i'),
    new RegExp(HEAD.source + 'Odoberať novinky', 'i'),
  ];

  // 5) Spracuj odseky – placeholder na konkrétny obrázok
  const paragraphs = s.split(/\n{2,}/).flatMap((p) => {
    const trimmed = p.trim();
    if (!trimmed) return [];
    if (stopPatterns.some((re) => re.test(trimmed))) return [];

    // Ak odsek obsahuje placeholdery, rozdeľ ich na samostatné odseky obrázkov
    if (trimmed.includes('[[IMG:')) {
      const parts = trimmed.split(/(\[\[IMG:\d+\]\])/g);
      const out = [];
      for (const part of parts) {
        const m = part.match(/^\[\[IMG:(\d+)\]\]$/);
        if (m) {
          const idx = Number(m[1]);
          const img = imgs[idx];
          if (img) out.push({ kind: 'img', img });
        } else {
          const t = part.trim();
          if (t) out.push({ kind: 'text', text: t });
        }
      }
      return out;
    }

    return [{ kind: 'text', text: trimmed }];
  });

  // 6) Naplánuj sťahovania obrázkov a vyrenderuj ako markdown
  const downloads = [];
  const rendered = paragraphs.map((p) => {
    if (p.kind === 'text') return p.text;
    const url = p.img.src;
    const fname = sanitizeFilename(basename(new URL(url).pathname));
    const localPath = `/images/blog/inline/${fname}`;
    downloads.push({ url, file: resolve(INLINE_DIR, fname) });
    const alt = p.img.alt || '';
    return `![${alt}](${localPath})`;
  });

  return { body: rendered.join('\n\n'), downloads };
}

function sanitizeFilename(name) {
  return decodeURIComponent(name).replace(/[^A-Za-z0-9._-]/g, '_');
}

async function fetchArticle(slug) {
  const url = `https://www.neoship.sk/clanky/${slug}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} pre ${slug}`);
  const html = await res.text();
  const block = extractContentBlock(html);
  if (!block) throw new Error(`Nenašiel som blog-detail-content pre ${slug}`);
  const { body, downloads } = htmlToText(block, slug);
  if (body.length < 30) throw new Error(`Príliš krátky výstup (${body.length}) pre ${slug}`);
  return { body, downloads };
}

async function downloadImage({ url, file }) {
  if (existsSync(file)) return { ok: true, skipped: true };
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        Referer: 'https://www.neoship.sk/',
      },
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    if (!res.body) return { ok: false, error: 'No body' };
    await pipeline(Readable.fromWeb(res.body), createWriteStream(file));
    return { ok: true, skipped: false };
  } catch (err) {
    return { ok: false, error: String(err.message ?? err) };
  }
}

// Main
const result = {};
const failures = [];
const targets = UNIQUE.filter((s) => !SKIP.has(s));
console.log(`Spracovávam ${targets.length} článkov...`);

const CONCURRENCY = 4;
let cursor = 0;
let processed = 0;
const allDownloads = [];

async function worker() {
  while (cursor < targets.length) {
    const idx = cursor++;
    const slug = targets[idx];
    try {
      const { body, downloads } = await fetchArticle(slug);
      result[slug] = body;
      allDownloads.push(...downloads);
      processed++;
      if (processed % 5 === 0 || processed === targets.length) {
        console.log(`  [${processed}/${targets.length}] (+${downloads.length} obr.)`);
      }
    } catch (err) {
      failures.push({ slug, error: String(err.message ?? err) });
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

writeFileSync(OUT, JSON.stringify(result, null, 2), 'utf8');
console.log(`\nÚspešne: ${Object.keys(result).length}`);

// Deduplikuj sťahovania podľa cieľového súboru
const uniqDl = [...new Map(allDownloads.map((d) => [d.file, d])).values()];
console.log(`\nSťahujem ${uniqDl.length} unikátnych inline obrázkov...`);
let dlOk = 0;
let dlSkip = 0;
let dlFail = 0;
const dlFailures = [];
let dlCursor = 0;
async function dlWorker() {
  while (dlCursor < uniqDl.length) {
    const item = uniqDl[dlCursor++];
    const r = await downloadImage(item);
    if (r.ok) {
      if (r.skipped) dlSkip++;
      else dlOk++;
    } else {
      dlFail++;
      dlFailures.push({ file: basename(item.file), error: r.error, url: item.url });
    }
  }
}
await Promise.all(Array.from({ length: 6 }, () => dlWorker()));
console.log(`  stiahnuté: ${dlOk}, preskočené (existujúce): ${dlSkip}, chyby: ${dlFail}`);
if (dlFailures.length) {
  console.log('\nChyby sťahovania:');
  for (const f of dlFailures.slice(0, 15)) console.log(`  ${f.file}: ${f.error} (${f.url})`);
  if (dlFailures.length > 15) console.log(`  ... a ďalších ${dlFailures.length - 15}`);
}

if (failures.length) {
  console.log(`\nZlyhalo načítanie článkov (${failures.length}):`);
  for (const f of failures) console.log(`  ${f.slug}: ${f.error}`);
}
console.log(`\nZapísané do: ${OUT}`);
