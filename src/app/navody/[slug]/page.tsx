import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';
import { navody, getNavod } from '@/lib/navody';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return navody.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const navod = getNavod(params.slug);
  if (!navod) return buildMetadata({ title: 'Návod', description: 'Návody Neoship' });
  return buildMetadata({
    title: `${navod.title} | Návody Neoship`,
    description: navod.perex,
    path: `/navody/${navod.slug}`,
  });
}

export default function Page({ params }: Props) {
  const navod = getNavod(params.slug);
  if (!navod) return notFound();

  const related = navody
    .filter((n) => n.category === navod.category && n.slug !== navod.slug)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Návody', href: '/navody' },
          { label: navod.title, href: `/navody/${navod.slug}` },
        ]}
      />

      <article className="py-10 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
            {navod.category}
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-ink leading-tight">
            {navod.title}
          </h1>
          <p className="mt-5 text-lg text-ink/90 leading-relaxed">{navod.perex}</p>

          {!navod.hideHeroImage && (
            <Image
              src={navod.image}
              alt={navod.title}
              width={1200}
              height={672}
              unoptimized
              priority
              className="mt-8 w-full h-auto rounded-2xl border border-line shadow-soft"
            />
          )}

          {navod.video && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-line shadow-soft bg-ink">
              <div className="relative aspect-video">
                <iframe
                  src={navod.video}
                  title={navod.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="mt-10 space-y-6">
            {navod.blocks.map((block, i) => {
              if (block.type === 'text') {
                return (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-ink/90">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={i} className="text-xl md:text-2xl font-bold text-ink mt-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure
                    key={i}
                    className="rounded-2xl border border-line overflow-hidden bg-surface"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt ?? navod.title}
                      width={1000}
                      height={1000}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </figure>
                );
              }
              return (
                <div key={i}>
                  {block.title && (
                    <h2 className="text-xl md:text-2xl font-bold text-ink mb-4">{block.title}</h2>
                  )}
                  <ol className="space-y-3">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm font-black">
                          {idx + 1}
                        </span>
                        <span className="text-base leading-relaxed text-ink/90 pt-0.5">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>

          {navod.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold text-ink mb-5">Postup v obrázkoch</h2>
              <div className="space-y-5">
                {navod.gallery.map((src, i) => (
                  <figure key={src} className="rounded-2xl border border-line overflow-hidden bg-surface">
                    <Image
                      src={src}
                      alt={`${navod.title} – krok ${i + 1}`}
                      width={1000}
                      height={1000}
                      unoptimized
                      className="w-full h-auto"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-line">
            <Link
              href="/navody"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange-700"
            >
              <ArrowLeft className="w-4 h-4" /> Späť na návody
            </Link>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-surface">
          <Container>
            <h2 className="heading-3 text-ink">Súvisiace návody</h2>
            <ul className="mt-8 grid md:grid-cols-3 gap-5">
              {related.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/navody/${n.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white border border-line p-6 hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {n.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-ink leading-snug group-hover:text-brand-orange-700 transition-colors">
                      {n.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-orange">
                      <Check className="w-3.5 h-3.5" /> Otvoriť návod
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTABanner headline="Potrebujete pomôcť s nastavením?" />
    </>
  );
}
