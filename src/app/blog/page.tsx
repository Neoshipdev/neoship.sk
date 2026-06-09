import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Calendar } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';
import { BLOG_SECTIONS, blogPostsSorted, type BlogSection } from '@/lib/blog';
import { cn } from '@/lib/cn';

export const metadata: Metadata = buildMetadata({
  title: 'Blog | Neoship – tipy na expedíciu pre e-shopy',
  description:
    'Praktické články o expedícii, kuriérskych službách, optimalizácii nákladov a rastovom hackingu pre e-shopy.',
  path: '/blog',
});

const PAGE_SIZE = 12;
const VALID_SECTIONS = new Set<BlogSection>(BLOG_SECTIONS.map((s) => s.key));

type Props = {
  searchParams?: { page?: string; section?: string };
};

export default function Page({ searchParams }: Props) {
  const rawSection = searchParams?.section;
  const activeSection: BlogSection | null =
    rawSection && VALID_SECTIONS.has(rawSection as BlogSection)
      ? (rawSection as BlogSection)
      : null;

  const filtered = activeSection
    ? blogPostsSorted.filter((p) => p.section === activeSection)
    : blogPostsSorted;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requested = Number.parseInt(searchParams?.page ?? '1', 10);
  const currentPage = Number.isFinite(requested)
    ? Math.min(Math.max(1, requested), totalPages)
    : 1;
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const sectionPrefix = activeSection ? `?section=${activeSection}` : '';
  const pageHref = (n: number) => {
    if (!activeSection) return n === 1 ? '/blog' : `/blog?page=${n}`;
    return n === 1
      ? `/blog?section=${activeSection}`
      : `/blog?section=${activeSection}&page=${n}`;
  };

  // Count posts per section pre tab badges.
  const countAll = blogPostsSorted.length;
  const countBySection: Record<BlogSection, number> = {
    clanky: 0,
    vzdelavacka: 0,
    'case-studies': 0,
  };
  for (const p of blogPostsSorted) countBySection[p.section]++;

  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Blog', href: '/blog' }]} />

      <PageHero
        eyebrow="Blog"
        title="Praktické tipy na expedíciu"
        subtitle="Pravidelné články o optimalizácii nákladov, novinkách v doprave, integráciách a tom, čo funguje v slovenskom a českom e-commerce."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          {/* Sekcie blogu – tab filter */}
          <nav
            aria-label="Sekcie blogu"
            className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <Link
              href="/blog"
              aria-current={activeSection === null ? 'page' : undefined}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors',
                activeSection === null
                  ? 'bg-brand-orange border-brand-orange text-white shadow-soft'
                  : 'bg-white border-line text-ink hover:border-brand-orange hover:text-brand-orange',
              )}
            >
              Všetky
              <span
                className={cn(
                  'inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-black',
                  activeSection === null
                    ? 'bg-white/20 text-white'
                    : 'bg-brand-orange-50 text-brand-orange',
                )}
              >
                {countAll}
              </span>
            </Link>
            {BLOG_SECTIONS.map((s) => {
              const active = activeSection === s.key;
              return (
                <Link
                  key={s.key}
                  href={`/blog?section=${s.key}`}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors',
                    active
                      ? 'bg-brand-orange border-brand-orange text-white shadow-soft'
                      : 'bg-white border-line text-ink hover:border-brand-orange hover:text-brand-orange',
                  )}
                >
                  {s.label}
                  <span
                    className={cn(
                      'inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-black',
                      active ? 'bg-white/20 text-white' : 'bg-brand-orange-50 text-brand-orange',
                    )}
                  >
                    {countBySection[s.key]}
                  </span>
                </Link>
              );
            })}
          </nav>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-2xl bg-surface border border-line overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  {p.image ? (
                    <div className="aspect-[16/9] relative overflow-hidden bg-surface">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-brand-orange-50 to-brand-purple-50 flex items-center justify-center text-6xl font-black text-brand-orange/40">
                      {p.category[0]}
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-ink leading-snug group-hover:text-brand-orange-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{p.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(p.date).toLocaleDateString('sk-SK', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-brand-orange font-bold">
                        Čítať{' '}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav
              aria-label="Stránkovanie blogu"
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
            >
              {currentPage > 1 ? (
                <Link
                  href={pageHref(currentPage - 1)}
                  rel="prev"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Predošlá
                </Link>
              ) : (
                <span
                  aria-disabled
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-muted opacity-50 cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" /> Predošlá
                </span>
              )}

              <ul className="flex flex-wrap items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                  const active = n === currentPage;
                  return (
                    <li key={n}>
                      <Link
                        href={pageHref(n)}
                        aria-current={active ? 'page' : undefined}
                        className={
                          active
                            ? 'inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full bg-brand-orange px-3 text-sm font-black text-white shadow-soft'
                            : 'inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border border-line bg-white px-3 text-sm font-bold text-ink hover:border-brand-orange hover:text-brand-orange transition-colors'
                        }
                      >
                        {n}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {currentPage < totalPages ? (
                <Link
                  href={pageHref(currentPage + 1)}
                  rel="next"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  Ďalšia <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span
                  aria-disabled
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-muted opacity-50 cursor-not-allowed"
                >
                  Ďalšia <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </nav>
          )}
        </Container>
      </section>

      <CTABanner headline="Chcete dostávať nové články?" subtitle="Prihláste sa do newslettera v päte stránky." />
    </>
  );
}
