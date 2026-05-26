import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { PlanComparison } from '@/components/sections/PlanComparison';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cenník Neoship | Prémium a Základ',
  description:
    'Transparentný cenník Neoshipu – aktivačný a servisný poplatok, cena za obstaranie prepravy, napojenie na prepravcu. Porovnajte verzie Prémium a Základ.',
  path: '/cennik',
});

type PriceItem = {
  name: string;
  description: string;
  rows: { label?: string; price: string }[];
};

const priceItems: PriceItem[] = [
  {
    name: 'Aktivačný poplatok',
    description:
      'Jednorazový poplatok za zriadenie používateľského účtu vrátane podpory pri integrácii. Napojenie na dvoch prepravcov je zdarma.',
    rows: [{ price: '39,99 € / prístup / jednorazovo' }],
  },
  {
    name: 'Servisný poplatok',
    description:
      'Mesačný poplatok zahŕňa technickú podporu, údržbu a aktualizácie systému. Výška sa určuje podľa počtu vytvorených štítkov.',
    rows: [
      { label: '0 – 100 štítkov', price: '14,99 € / mesiac' },
      { label: '101 – 700 štítkov', price: '19,99 € / mesiac' },
      { label: '701 a viac štítkov', price: '39,99 € / mesiac' },
    ],
  },
  {
    name: 'Obstaranie prepravy balíkov',
    description: 'Cena za vytvorenie štítku a obstaranie prepravy jednej zásielky.',
    rows: [
      { label: 'Verzia Základ', price: '0,04 € / štítok (bez ohľadu na prepravcu)' },
      { label: 'Verzia Prémium', price: 'Individuálna cenová ponuka (podľa prepravcu)' },
    ],
  },
  {
    name: 'Napojenie na prepravcu',
    description: 'Jednorazový poplatok za integráciu ďalšieho prepravcu nad rámec dvoch zdarma.',
    rows: [{ price: '29,99 € / prepravca / jednorazovo' }],
  },
  {
    name: 'Individuálne programátorské práce',
    description: 'Programátorské práce na mieru a úpravy importných či exportných súborov.',
    rows: [{ price: '39,99 € za každú začatú hodinu' }],
  },
];

const tiers = [
  {
    name: 'Prémium',
    price: 'Individuálna ponuka',
    period: 'jedna faktúra za všetkých prepravcov',
    perks: [
      'Bez vlastných zmlúv s prepravcami',
      'Jedna mesačná faktúra',
      'Reklamácie rieši Neoship',
      'Prioritná podpora',
    ],
    cta: 'Chcem Prémium',
    highlighted: true,
  },
  {
    name: 'Základ',
    price: 'Ceny podľa cenníka',
    period: 's vlastnými zmluvami prepravcov',
    perks: [
      'Vlastné zmluvy s DPD, SPS, GLS, Packeta',
      'Plný systém Neoship',
      'Pluginy a API',
      'Štandardná podpora',
    ],
    cta: 'Chcem Základ',
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Cenník', href: '/cennik' }]} />

      <PageHero
        eyebrow="Cenník"
        title="Transparentné ceny bez prekvapení"
        subtitle="Platíte len za to, čo využijete. Nižšie nájdete jednotlivé položky cenníka a porovnanie verzií Prémium a Základ."
        variant="dark"
      />

      {/* Jednotlivé položky cenníka */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Položky cenníka"
            title="Jednotlivé poplatky"
            subtitle="Prehľad poplatkov za používanie expedičného systému Neoship."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {priceItems.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-surface border border-line p-7 flex flex-col"
              >
                <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {item.rows.map((row) => (
                    <li
                      key={row.price + (row.label ?? '')}
                      className="flex items-baseline justify-between gap-4"
                    >
                      {row.label && (
                        <span className="text-sm text-muted">{row.label}</span>
                      )}
                      <span className="text-base font-bold text-brand-orange ml-auto text-right">
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted">
            Všetky ceny v tomto cenníku sú uvedené bez DPH.
          </p>
        </Container>
      </section>

      {/* Verzie Prémium a Základ */}
      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Verzie"
            title="Vyberte si verziu"
            subtitle="Prémium zahŕňa zmluvy s prepravcami a jednu faktúru. Základ využíva vaše existujúce zmluvy."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 border shadow-soft flex flex-col ${
                  t.highlighted
                    ? 'bg-brand-purple text-white border-brand-purple'
                    : 'bg-white text-ink border-line'
                }`}
              >
                {t.highlighted && (
                  <span className="self-start text-xs font-bold uppercase tracking-widest text-brand-orange-100 mb-3">
                    Odporúčané
                  </span>
                )}
                <h3 className="text-2xl font-black">{t.name}</h3>
                <p className="mt-4 text-3xl font-black">{t.price}</p>
                <p className={`text-sm ${t.highlighted ? 'text-white/80' : 'text-muted'}`}>
                  {t.period}
                </p>
                <ul
                  className={`mt-6 space-y-2 text-sm ${t.highlighted ? 'text-white/90' : 'text-ink'}`}
                >
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                          t.highlighted ? 'bg-brand-orange-100' : 'bg-brand-orange'
                        }`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="/kontakt"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${
                    t.highlighted
                      ? 'bg-white text-brand-orange hover:bg-brand-orange-50'
                      : 'bg-brand-orange text-white hover:bg-brand-orange-600'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PlanComparison />

      <CTABanner
        headline="Chceli by ste konkrétnu kalkuláciu?"
        subtitle="Pošlite nám detaily a pripravíme cenovú ponuku na mieru."
      />
    </>
  );
}
