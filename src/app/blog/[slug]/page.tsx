import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';
import { blogPosts, getBlogPost } from '@/lib/blog';

type Props = { params: { slug: string } };

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'img'; src: string; alt: string };

/**
 * Konvencie pre body string:
 *  - "## " na začiatku odseku       -> h2
 *  - "### " na začiatku odseku      -> h3
 *  - "> " na začiatku odseku        -> blockquote
 *  - každý riadok odseku "• "/"- "  -> <ul>
 *  - "![alt](path)" (samostatný odsek) -> obrázok
 *  - inak                            -> <p>
 */
function parseBody(body: string): Block[] {
  const blocks: Block[] = [];
  const IMG_RE = /^!\[([^\]]*)\]\(([^)]+)\)$/;

  for (const raw of body.split(/\n{2,}/)) {
    const para = raw.trim();
    if (!para) continue;

    const imgMatch = para.match(IMG_RE);
    if (imgMatch) {
      blocks.push({ type: 'img', alt: imgMatch[1].trim(), src: imgMatch[2].trim() });
      continue;
    }

    // Osirelé hash znaky bez textu (## , ### , #### atď.) preskoč.
    if (/^#{1,6}\s*$/.test(para)) continue;

    // Markdown nadpisy: # / ## sa renderujú ako H2, ###+ ako H3.
    const headingMatch = para.match(/^(#{1,6})\s+(.+)$/s);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      if (text) {
        blocks.push({ type: level <= 2 ? 'h2' : 'h3', text });
        continue;
      }
    }

    if (para.startsWith('> ')) {
      blocks.push({ type: 'quote', text: para.slice(2).trim() });
      continue;
    }

    const lines = para.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length > 0 && lines.every((l) => /^[•\-]\s+/.test(l))) {
      blocks.push({
        type: 'ul',
        items: lines.map((l) => l.replace(/^[•\-]\s+/, '').trim()),
      });
      continue;
    }

    blocks.push({ type: 'p', text: para });
  }
  return blocks;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return buildMetadata({ title: 'Článok', description: 'Blog Neoship' });
  return buildMetadata({
    title: `${post.title} | Neoship Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

/** Vráti názov súboru z cesty obrázka (basename), bez query parametrov. */
function imageBasename(src: string | undefined): string | undefined {
  if (!src) return undefined;
  const path = src.split('?')[0];
  const idx = path.lastIndexOf('/');
  return idx >= 0 ? path.slice(idx + 1) : path;
}

export default function Page({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Inline obrázky, ktorých filename sa zhoduje s cover obrázkom, preskočíme,
  // aby sa cover nezopakoval znova v tele článku.
  const coverBasename = imageBasename(post.image);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-10 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            {post.category}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-ink leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('sk-SK', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              unoptimized
              priority
              className="mt-8 w-full h-auto rounded-2xl border border-line shadow-soft"
            />
          )}

          {post.video && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-line shadow-soft bg-ink">
              <div className="relative aspect-video">
                <iframe
                  src={post.video}
                  title={post.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          <p className="mt-8 text-lg font-medium text-ink/90 leading-relaxed">{post.excerpt}</p>

          <div className="mt-8 prose prose-lg max-w-none text-ink leading-relaxed">
            {parseBody(post.body).map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-12 mb-5 text-3xl md:text-4xl font-black tracking-tight text-ink leading-tight relative pl-5 border-l-4 border-brand-orange"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'h3') {
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 text-xl md:text-2xl font-bold tracking-tight text-ink leading-snug"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="my-5 space-y-2 list-disc pl-6 marker:text-brand-orange">
                    {block.items.map((it, j) => (
                      <li key={j} className="text-lg leading-[1.7] text-ink/90">
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={i}
                    className="my-6 border-l-4 border-brand-orange bg-surface px-5 py-4 rounded-r-xl text-lg italic text-ink/80"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === 'img') {
                // Preskoč, ak je to ten istý obrázok ako cover (zhodný filename).
                if (coverBasename && imageBasename(block.src) === coverBasename) {
                  return null;
                }
                return (
                  <figure
                    key={i}
                    className="my-8 rounded-2xl border border-line bg-surface p-3 flex justify-center"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt || post.title}
                      width={1000}
                      height={1000}
                      unoptimized
                      className="w-auto h-auto max-w-full rounded-xl"
                    />
                  </figure>
                );
              }
              return (
                <p key={i} className="text-lg leading-[1.75] text-ink/90 mb-5">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-line">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-700"
            >
              <ArrowLeft className="w-4 h-4" /> Späť na blog
            </Link>
          </div>
        </Container>
      </article>

      <section className="py-16 bg-surface">
        <Container>
          <h2 className="heading-3 text-ink">Ďalšie články</h2>
          <ul className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl bg-white border border-line p-6 hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-ink leading-snug group-hover:text-brand-orange-700 transition-colors">
                    {p.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner headline="Chceli by ste vyskúšať Neoship?" />
    </>
  );
}
