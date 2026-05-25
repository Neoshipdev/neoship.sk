import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = breadcrumbJsonLd(
    items.map((c) => ({ name: c.label, url: `${SITE_URL}${c.href}` })),
  );

  return (
    <Container className="pt-6 pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted/60" />}
                {isLast ? (
                  <span className="text-ink font-medium">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-brand-orange transition-colors">
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
