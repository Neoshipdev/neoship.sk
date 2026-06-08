import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { TryButton } from '@/components/ui/TryButton';
import { buildMetadata, serviceJsonLd, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kuriérske služby SPS, GLS, Packeta, DPD | Neoship',
  description:
    'Päť najpoužívanejších prepravcov na Slovensku a v Česku v jednom systéme. Prémium bez zmlúv, Základ s vlastnými zmluvami.',
  path: '/sluzby/kurierske-sluzby',
  keywords: ['kuriérske služby', 'SPS', 'GLS', 'Packeta', 'DPD', 'expedícia e-shop'],
});

const carriers = [
  {
    name: 'SPS',
    description: 'Slovak Parcel Service – spoľahlivý prepravca pre Slovensko a Česko.',
    countries: ['SK', 'CZ'],
  },
  {
    name: 'GLS',
    description: 'Európsky líder s rýchlym doručením po celej EÚ.',
    countries: ['SK', 'CZ', 'HU', 'AT', 'DE', 'PL'],
  },
  {
    name: 'Packeta',
    description: 'Najväčšia sieť výdajných miest a boxov v strednej Európe.',
    countries: ['SK', 'CZ', 'HU', 'AT', 'DE'],
  },
  {
    name: 'Slovenská pošta',
    description:
      'Pokrýva celé Slovensko aj svet. Na Slovensku doručuje na všetky existujúce adresy a na viac ako 1 800 výdajných miest.',
    countries: ['SK'],
  },
  {
    name: 'DPD',
    description: 'Globálny prepravca s premium službami pre B2B aj B2C.',
    countries: ['SK', 'CZ', 'HU', 'AT', 'DE', 'PL'],
  },
];

const advantages = [
  {
    image: '/images/obstaranie.png',
    title: 'Obstaráme prepravu za vás',
    text: 'Nemusíte obvolávať kuriérske spoločnosti, porovnávať zmluvné podmienky ani čakať na individuálne schvaľovanie spolupráce. V balíku Prémium za vás Neoship obstará prepravu cez svojich zmluvných dopravcov a vy môžete zásielky expedovať priamo z jedného systému.',
  },
  {
    image: '/images/13.png',
    title: 'Všetci prepravcovia na jednom mieste',
    text: 'Využite služby, kvalitu a výhody jednej alebo viacerých kuriérskych spoločností pod jednou strechou. Bez zbytočných zmlúv s jednotlivými prepravcami. Všetko vybavíme my. Ak nebudete spokojný s niektorým prepravcom, pohodlne a rýchlo ho môžete vymeniť.',
  },
  {
    image: '/images/14.png',
    title: 'Všetko vyriešime za vás',
    text: 'Jednou zmluvou s nami máte k dispozícii možnosť prepravovať balíky so všetkými partnerskými kuriérskymi spoločnosťami. Registráciu, zabezpečenie vyzdvihovania balíkov a ich prepravu kuriérom považujte za vyriešenú.',
  },
  {
    image: '/images/12.png',
    title: 'Bez zbytočnej administrácie',
    text: 'Bez ohľadu na počet využívaných prepravcov máte všetko zahrnuté v jednej faktúre, čím optimalizujete financie spojené s účtovníctvom.',
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
              name: 'Kuriérske služby',
              description:
                'SPS, GLS, Packeta a DPD pod jednou strechou – jedna zmluva, jedna faktúra.',
              url: `${SITE_URL}/sluzby/kurierske-sluzby`,
            }),
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Služby', href: '/#sluzby' },
          { label: 'Kuriérske služby a obstaranie prepravy', href: '/sluzby/kurierske-sluzby' },
        ]}
      />

      <PageHero
        eyebrow="Hlavná služba"
        title="Kuriérske služby a obstaranie prepravy pod jednou strechou"
        subtitle="Neoship za vás obstará prepravu u zmluvných prepravcov a sprístupní vám kuriérske služby v jednom expedičnom systéme. V balíku Prémium môžete posielať zásielky cez SPS, GLS, Packetu, Slovenskú poštu a SDS bez toho, aby ste museli samostatne riešiť zmluvy, registrácie alebo administratívu s jednotlivými dopravcami."
        image={{
          src: '/images/dopravci.png',
          alt: 'Vyberte si svoju kuriérsku spoločnosť – SPS, GLS, Packeta, Slovenská pošta, DPD',
        }}
      >
        <div className="max-w-2xl space-y-4 text-base md:text-lg leading-relaxed text-muted">
          <p>
            Vo verzii Základ máte samostatne uzavreté zmluvy s kuriérskymi spoločnosťami (SPS, GLS,
            Packeta, Slovenská pošta, DPD). Pre všetky z nich poskytneme rýchlu a pohodlnú tlač
            štítkov.
          </p>
          <p>
            Vy sa venujete objednávkam, my riešime prepravu, napojenie dopravcov, tlač štítkov aj
            prehľad o zásielkach.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/cennik" variant="inverse" className="text-ink" withArrow>
            Pozrieť cenník
          </Button>
          <TryButton>Chcem vyskúšať</TryButton>
        </div>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Naši partneri"
            title="Päť najpoužívanejších prepravcov v jednom systéme"
            subtitle="V Prémium balíku ich získate okamžite bez vlastných zmlúv. V Základe využijete svoje existujúce dohody."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {carriers.map((c) => (
              <div key={c.name} className="rounded-2xl bg-surface border border-line p-6">
                <p className="text-2xl font-black text-brand-orange">{c.name}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{c.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.countries.map((cc) => (
                    <span
                      key={cc}
                      className="text-[10px] font-bold tracking-wider bg-white border border-line text-ink rounded-full px-2 py-0.5"
                    >
                      {cc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Výhody"
            title="Prečo riešiť logistiku cez Neoship"
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

      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-4xl">
          <h2 className="heading-2 text-ink">Ako vám Neoship pomôže s prepravcami?</h2>
          <ul className="mt-6 space-y-4 body-lg">
            {[
              'Pri Prémium balíku máte SPS, GLS, Packetu, Slovenskú poštu a SDS okamžite k dispozícii. Žiadne podpisovanie zmlúv s prepravcami, žiadne čakanie na schválenie objemov.',
              'Pri Základe využívate svoje existujúce zmluvy s DPD, SPS, GLS, Slovenskú poštu a Packetu. Neoship je v tomto prípade len expedičná nadstavba nad vašimi dohodami.',
              'V oboch režimoch posielate na adresu aj do výdajných miest. Vrátane Z-boxov, automatov a tisícok výdajných miest.',
              'Zahraničné doručenie do Česka, Maďarska, Rakúska, Nemecka a Poľska je samozrejmosťou.',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-orange mt-1 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABanner
        headline="Vyberte si svoj balík kuriérskych služieb"
        subtitle="Ozveme sa vám a poradíme, či vám viac vyhovuje balík Prémium alebo Základ."
      />
    </>
  );
}
