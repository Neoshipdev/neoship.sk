import type { Metadata } from 'next';
import Image from 'next/image';
import { Boxes } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { TryButton } from '@/components/ui/TryButton';
import { buildMetadata, serviceJsonLd, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hromadná tvorba balíkov pre e-shop | Neoship',
  description:
    'Vytvorte stovky balíkov za pár sekúnd, tlačte štítky na termálnu aj bežnú tlačiareň a využite hotové napojenia na e-shopy a fakturačné systémy.',
  path: '/sluzby/hromadna-tvorba-balikov',
  keywords: ['hromadná tvorba balíkov', 'tlač štítkov', 'import objednávok', 'CSV XML balíky'],
});

type Feature = {
  image: string;
  title: string;
  text: string;
  linkText?: string;
  linkHref?: string;
};

const features: Feature[] = [
  {
    image: '/images/15.png',
    title: 'Rýchle a pohodlné napojenia',
    text: 'Neriešte zdĺhavé a finančne zaťažujúce napojenia z vášho e-shopu alebo fakturačného systému.',
  },
  {
    image: '/images/16.png',
    title: 'Jedna integrácia pre všetkých',
    text: 'Jednou integráciou vyriešite napojenie všetkých prepravcov. V prípade zmeny kuriérskej spoločnosti nemusíte riešiť nové napojenia.',
  },
  {
    image: '/images/17.png',
    title: 'Široké možnosti individuálneho napojenia',
    text: 'Ak potrebujete napojenie na mieru, určite to zvládnete cez naše API.',
    linkText: 'naše API',
    linkHref: 'https://doc.apiserver.neoship.sk/',
  },
  {
    image: '/images/18.png',
    title: 'Podpora exportovaných súborov',
    text: 'Ak váš systém neumožňuje tvorbu balíkov cez API, pohodlne to zvládnete aj cez export/import súborov .csv/.xml/.txt.',
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: 'Hromadná tvorba balíkov',
              description: 'Hromadná tvorba zásielok a tlač štítkov pre e-shopy.',
              url: `${SITE_URL}/sluzby/hromadna-tvorba-balikov`,
            }),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Služby', href: '/#sluzby' },
          { label: 'Hromadná tvorba balíkov', href: '/sluzby/hromadna-tvorba-balikov' },
        ]}
      />

      <PageHero
        eyebrow="Hlavná služba"
        title="Hromadná tvorba balíkov – stovky štítkov za pár sekúnd"
        subtitle="Bezstarostná tvorba balíkov, rýchla tlač štítkov, hotové napojenia a flexibilná podpora importov v presne tých formátoch, ktoré potrebujete. Hromadnú tvorbu balíkov môžete využívať vo verzii Prémium, aj vo verzii Základ."
        image={{
          src: '/images/hromadne.png',
          alt: 'Hromadná tvorba balíkov v expedičnom systéme Neoship',
        }}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/cennik" variant="inverse" className="text-ink" withArrow>
            Pozrieť cenník
          </Button>
          <TryButton>Chcem vyskúšať</TryButton>
        </div>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Hlavné výhody"
            title="Tvorba balíkov bez ručného klikania"
            subtitle="Optimalizujte najopakovanejšiu činnosť v expedícii."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white border border-line shadow-soft overflow-hidden flex flex-col"
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {f.linkText && f.linkHref
                      ? (() => {
                          const [before, after] = f.text.split(f.linkText);
                          return (
                            <>
                              {before}
                              <a
                                href={f.linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-orange font-medium hover:underline"
                              >
                                {f.linkText}
                              </a>
                              {after}
                            </>
                          );
                        })()
                      : f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">Ako to funguje</p>
              <h2 className="mt-3 heading-2 text-ink">Z dennej dávky objednávok k pripraveným štítkom</h2>
              <ol className="mt-6 space-y-5">
                {[
                  'Importujte objednávky z e-shopu alebo fakturačného systému (alebo nahrajte CSV/XML).',
                  'Vyberte dennú dávku zásielok a vyberte prepravcu pre každú z nich.',
                  'Vygenerujte všetky štítky naraz a vytlačte ich z termálnej alebo bežnej tlačiarne.',
                  'Odovzdajte balíky kuriérovi a sledujte ich v expedičnom systéme.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center font-black">
                      {i + 1}
                    </span>
                    <p className="text-ink leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl bg-white border border-line p-8 shadow-soft">
              <Boxes className="w-12 h-12 text-brand-orange" />
              <h3 className="mt-4 text-xl font-bold text-ink">Príklad: 200 balíkov v 30 sekundách</h3>
              <p className="mt-2 text-muted leading-relaxed">
                Stovky balíkov denne nie sú výnimkou. Naši klienti spracúvajú tisíce zásielok za
                deň – Neoship to zvládne bez problémov a bez čakania.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-2xl font-black text-brand-orange">200</p>
                  <p className="text-xs text-muted">balíkov</p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-2xl font-black text-brand-orange">30 s</p>
                  <p className="text-xs text-muted">na tlač</p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-2xl font-black text-brand-orange">1 klik</p>
                  <p className="text-xs text-muted">odoslanie</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner headline="Pripravení odosielať balíky rýchlejšie?" buttonLabel="Chcem vyskúšať" />
    </>
  );
}
