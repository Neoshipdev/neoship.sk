import type { Metadata } from 'next';
import { Handshake, Percent, Users } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Staňte sa partnerom Neoship | Affiliate a integrátorský program',
  description:
    'Ste agentúra, vývojár alebo prevádzkovateľ marketplace? Pridajte sa do partnerského programu Neoship a zarábajte spolu s nami.',
  path: '/stante-sa-partnerom',
});

const benefits = [
  {
    icon: Percent,
    title: 'Atraktívna provízia',
    text: 'Recurring odmena za každého aktívneho klienta, ktorého k nám privediete.',
  },
  {
    icon: Users,
    title: 'Spoločné kampane',
    text: 'Webináre, prípadové štúdie a co-marketing aktivity.',
  },
  {
    icon: Handshake,
    title: 'Technická podpora',
    text: 'Dedikovaný kontakt na vývojárov a prioritné riešenie integrácií.',
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Staňte sa partnerom', href: '/stante-sa-partnerom' },
        ]}
      />

      <PageHero
        eyebrow="Partnerský program"
        title="Staňte sa partnerom Neoship"
        subtitle="Spolupracujte s nami, ak vyvíjate e-shopové riešenia, prevádzkujete agentúru alebo budujete marketplace. Otvárame dvere pre spoločný rast."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-surface border border-line p-7">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-brand-orange text-white items-center justify-center">
                  <b.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container className="max-w-3xl">
          <h2 className="heading-2 text-ink">Pre koho je program určený</h2>
          <ul className="mt-6 space-y-3 body-lg">
            <li>• Digitálne agentúry, ktoré spravujú e-shopy klientov.</li>
            <li>• Vývojárske štúdiá robiace integrácie a custom e-commerce riešenia.</li>
            <li>• Konzultanti pre e-commerce a logistiku.</li>
            <li>• Prevádzkovatelia SaaS nástrojov pre e-shopy.</li>
          </ul>
        </Container>
      </section>

      <CTABanner
        headline="Máte záujem o partnerstvo?"
        subtitle="Napíšte nám pár slov a my sa vám ozveme s detailmi programu."
        buttonLabel="Napísať nám"
      />
    </>
  );
}
