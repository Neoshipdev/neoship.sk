import type { Metadata } from 'next';
import { Heart, Rocket, Users } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { Stats } from '@/components/sections/Stats';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'O firme | Neoship',
  description:
    'Sme tím, ktorý už 13 rokov pomáha slovenským a českým e-shopom s expedíciou. Spoznajte naše hodnoty, príbeh a víziu.',
  path: '/o-nas',
});

const values = [
  {
    icon: Heart,
    title: 'Záleží nám',
    text: 'Berieme expedíciu osobne. Keď náš klient rastie, rastieme aj my.',
  },
  {
    icon: Rocket,
    title: 'Hľadáme zlepšenia',
    text: 'Nestojíme na mieste. Každý mesiac niečo zjednodušíme alebo zrýchlime.',
  },
  {
    icon: Users,
    title: 'Tím robí všetko',
    text: 'Klienti, vývojári, podpora, kuriéri – všetko stojí na ľuďoch a spolupráci.',
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'O nás', href: '/o-nas' }]} />

      <PageHero
        eyebrow="O firme"
        title="13 rokov expedície pre slovenské a české e-shopy"
        subtitle="Sme tím logistov, vývojárov a expedičných veteránov, ktorí pomáhajú stovkám e-shopov posielať balíky chytrejšie."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">Náš príbeh</p>
              <h2 className="mt-3 heading-2 text-ink">Začali sme tým, čo nás trápilo</h2>
              <p className="mt-5 body-lg">
                Pred trinástimi rokmi sme sami prevádzkovali e-shop a denne sa borili s tým, že
                každý prepravca má vlastný portál, formát, faktúru a problém. Postavili sme si
                vlastný systém na expedíciu – a po pár mesiacoch sme zistili, že to isté riešenie
                potrebuje stovky ďalších slovenských a českých e-shopov. Tak vznikol Neoship.
              </p>
              <p className="mt-4 body-lg">
                Dnes sme jedným z najpoužívanejších expedičných systémov v regióne. Stále nás však
                najviac baví prvý moment, keď klient povie: &bdquo;Konečne sa môžem venovať predaju
                a nie lepidlovým štítkom.&ldquo;
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-purple to-brand-orange p-10 text-white">
              <p className="text-6xl font-black">13+</p>
              <p className="mt-2 text-lg">rokov na trhu</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black">150+</p>
                  <p className="text-sm text-white/80">klientov</p>
                </div>
                <div>
                  <p className="text-3xl font-black">1 mil.+</p>
                  <p className="text-sm text-white/80">balíkov</p>
                </div>
                <div>
                  <p className="text-3xl font-black">4</p>
                  <p className="text-sm text-white/80">kuriéri</p>
                </div>
                <div>
                  <p className="text-3xl font-black">8</p>
                  <p className="text-sm text-white/80">krajín</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <h2 className="heading-2 text-ink text-center">Hodnoty, ktoré nás vedú</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-line p-7 shadow-soft">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-brand-orange text-white items-center justify-center">
                  <v.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Stats />

      <CTABanner headline="Chceli by ste byť ďalší v rade?" />
    </>
  );
}
