import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';
import { testimonials } from '@/lib/data';

export const metadata: Metadata = buildMetadata({
  title: 'Referencie | Neoship – čo o nás hovoria klienti',
  description:
    'Pozrite si referencie od slovenských a českých e-shopov, ktoré používajú Neoship na svoju každodennú expedíciu.',
  path: '/referencie',
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Domov', href: '/' }, { label: 'Referencie', href: '/referencie' }]}
      />

      <PageHero
        eyebrow="Naši klienti"
        title="Referencie e-shopov, ktoré nám dôverujú"
        subtitle="Stovky e-shopov si vybrali Neoship. Tu sú názory niektorých z nich."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <li
                key={t.company}
                className="rounded-2xl bg-surface border border-line p-7 shadow-soft flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-orange-100 fill-brand-orange-50" />
                <p className="mt-4 text-base leading-relaxed text-ink flex-1">{t.quote}</p>
                <div className="mt-6 pt-5 border-t border-line">
                  <p className="font-bold text-ink text-sm">{t.author}</p>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-orange hover:underline"
                  >
                    {t.company}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner headline="Pridáte sa k spokojným klientom?" />
    </>
  );
}
