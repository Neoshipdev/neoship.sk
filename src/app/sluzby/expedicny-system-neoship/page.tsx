import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { FunctionalitiesGrid } from '@/components/sections/FunctionalitiesGrid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { TryButton } from '@/components/ui/TryButton';
import { buildMetadata, serviceJsonLd, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Expedičný systém Neoship – dashboard pre e-shop',
  description:
    'Všetko o expedícii na jednom mieste – balíky, financie, dobierky, štatistiky aj e-maily zákazníkom. Centrálny dashboard pre váš e-shop.',
  path: '/sluzby/expedicny-system-neoship',
  keywords: ['expedičný systém', 'dashboard pre e-shop', 'manažment zásielok', 'OMS'],
});

const advantages = [
  {
    image: '/images/19.png',
    title: 'Len jeden expedičný systém',
    text: 'Bez ohľadu na využívaných prepravcov máte všetky informácie o vyexpedovaných balíkoch v jednom systéme.',
  },
  {
    image: '/images/20.png',
    title: 'Balíky pod drobnohľadom',
    text: 'Doručené, nedoručené, v preprave, vrátené, reklamované – všetky máte v Neoshipe pod kontrolou. Pri každom balíku môžete sledovať jeho detailné doručovanie.',
  },
  {
    image: '/images/21.png',
    title: 'Každé euro pod kontrolou',
    text: 'Transparentne, jednoducho a kedykoľvek si skontrolujete, za čo platíte. Detailná cena balíka ako aj celkové náklady.',
  },
  {
    image: '/images/22.png',
    title: 'Dobierky ako na dlani',
    text: 'Jednoduchý filter, export v rôznych formátoch (SEPA XML, Excel, CSV, XML) a možnosť hromadného párovania k faktúram, či dobierky boli vyplatené hromadne alebo individuálne. S plánovaním cashflow vám pomôže aj prehľad nevyplatených dobierok.',
  },
  {
    image: '/images/23.png',
    title: 'Detailný štatistický prehľad',
    text: 'Vývoj počtu balíkov podľa váhy, krajiny doručenia, doručenia na adresu či do výdajných miest. Vďaka štatistickému prehľadu sa dokážete efektívnejšie rozhodovať ohľadom ďalších aktivít súvisiacich s expedovaním.',
  },
  {
    image: '/images/24.png',
    title: 'Bezproblémová komunikácia',
    text: 'Bez prepisovania údajov, hľadania e-mailových adries a čakania na zákazníckej linke. Jedným klikom pri balíku v Neoshipe pohodlne vyriešite vašu požiadavku s prepravcom, čím predchádzate aj dodatočným nákladom.',
  },
  {
    image: '/images/25.png',
    title: 'Zanechajte dojem',
    text: 'Odlíšte sa od všedných e-mailov a dajte tým vašim emóciu. S vlastným logom, obrázkom, textom, interaktívnymi linkami a sociálnymi sieťami. S priamym sledovaním balíka a v rôznych jazykových verziách.',
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
              name: 'Expedičný systém Neoship',
              description: 'Centrálny dashboard pre celú expedíciu e-shopu.',
              url: `${SITE_URL}/sluzby/expedicny-system-neoship`,
            }),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Služby', href: '/#sluzby' },
          { label: 'Expedičný systém Neoship', href: '/sluzby/expedicny-system-neoship' },
        ]}
      />

      <PageHero
        eyebrow="Hlavná služba"
        title="Zahoďte starosti s balíkmi za hlavu"
        subtitle="S nami pohodlne vyriešite doručovanie, napojenie na váš e-shop alebo fakturačný systém a získate kontrolu nad celou expedíciou."
        image={{
          src: '/images/jedensystem.png',
          alt: 'Expedičný systém Neoship – všetko v jednom systéme',
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
            eyebrow="Výhody"
            title="Čo vám expedičný systém Neoship prinesie"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white border border-line shadow-soft overflow-hidden flex flex-col"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FunctionalitiesGrid />

      <CTABanner
        headline="Pripravení nasadiť expedovať efektívnejšie?"
        subtitle="Pomôžeme s nastavením, integráciou aj školením vášho tímu."
      />
    </>
  );
}
