import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';
import { blogPosts, getBlogPost } from '@/lib/blog';

type Props = { params: { slug: string } };

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

export default function Page({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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

          <p className="mt-8 text-lg font-medium text-ink/90 leading-relaxed">{post.excerpt}</p>

          <div className="mt-8 prose prose-lg max-w-none text-ink leading-relaxed">
            {post.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-lg leading-[1.75] text-ink/90 mb-5">
                {para}
              </p>
            ))}
          </div>

          {post.sourceUrl && (
            <div className="mt-10 rounded-2xl bg-surface border border-line p-6 md:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-ink">Celý článok na neoship.sk</p>
                <p className="text-sm text-muted mt-1">
                  Plné znenie pôvodného článku nájdete na zdrojovej stránke.
                </p>
              </div>
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-5 py-2.5 text-sm font-bold hover:bg-brand-orange-600 transition-colors whitespace-nowrap"
              >
                Čítať pôvodný článok <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

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
