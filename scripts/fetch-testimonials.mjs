#!/usr/bin/env node
/**
 * Jednorazový migračný skript:
 *  - stiahne https://www.neoship.sk/
 *  - z bloku "Spokojní zákazníci a ich príbehy" vyparsuje 9 testimoniálov
 *  - výsledok zapíše do src/lib/testimonials-quotes.json ako pole { author, company, quote }
 *
 * data.ts potom tento JSON naimportuje a citáty overlay-uje na existujúce recenzie
 * (mapovanie podľa indexu / company kľúča).
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'src/lib/testimonials-quotes.json');
const OUT_DIR = dirname(OUT);
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

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

function stripTags(s) {
  return decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

// Heuristika na zlúčenie autora a company:
//  - <h3>Author</h3>   <span>company.sk</span>
// alebo iné variácie. Robíme to v poradí, v akom sú v testimoniálnom bloku.

async function main() {
  const res = await fetch('https://www.neoship.sk/', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  // Vyrež blok od nadpisu "Spokojní zákazníci" po cta-img
  const start = html.indexOf('Spokojní zákazníci');
  if (start < 0) throw new Error('Sekcia Spokojní zákazníci nenájdená');
  const end = html.indexOf('cta-img', start);
  const block = html.slice(start, end > 0 ? end : start + 60000);

  // Reálna štruktúra karty na neoship.sk:
  //   <div class="item">
  //     <div class="testimonial-text"> QUOTE </div>
  //     <div class="testimonial-author row align-items-center">
  //       <div class="col-auto"><img src=".../logo.png" /></div>
  //       <div class="col ps-1">
  //         <strong>company.sk</strong>
  //         <span>Author Name</span>
  //       </div>
  //     </div>
  //   </div>

  // Najjednoduchšie: nájdi všetky výskyty `<div class="testimonial-text"> ... </div>`
  // a pre každý hľadaj nasledujúce <strong>, <span> a <img>.

  const itemRe =
    /<div[^>]*class="testimonial-text"[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*class="testimonial-author[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;

  const results = [];
  let m;
  while ((m = itemRe.exec(block)) !== null) {
    const quote = stripTags(m[1]).replace(/^[„"“]\s*/, '').replace(/\s*[""”]\s*$/, '').trim();
    const author = m[2];
    const imgMatch = author.match(/<img[^>]+src="([^"]+)"/i);
    const companyMatch = author.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
    const personMatch = author.match(/<span[^>]*>([\s\S]*?)<\/span>/i);
    if (!quote) continue;
    results.push({
      logoFile: imgMatch ? imgMatch[1].split('/').pop() : null,
      author: personMatch ? stripTags(personMatch[1]) : '',
      company: companyMatch ? stripTags(companyMatch[1]) : '',
      quote,
    });
  }

  if (results.length === 0) throw new Error('Nepodarilo sa vyparsovať žiadny testimonial');

  writeFileSync(OUT, JSON.stringify(results, null, 2) + '\n', 'utf8');
  console.log(`Zapísané: ${results.length} testimoniálov -> ${OUT}`);
  for (const r of results) {
    console.log(`  • ${r.author} / ${r.company} (${r.quote.length} znakov)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
