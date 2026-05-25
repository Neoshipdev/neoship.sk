import type { Metadata } from 'next';
import { Mail, Phone, Quote, Send } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kariéra v Neoshipe | Pridaj sa k nám',
  description:
    'Hľadáme ľudí, ktorí sa budú v Neoshipe cítiť ako doma. Pošlite nám životopis aj keď momentálne nemáme otvorené pozície.',
  path: '/kariera',
});

const steps = [
  {
    number: 1,
    title: 'Pošli životopis a motivačný list',
    description: 'Stručne nám napíš o sebe, svojich skúsenostiach a o tom, čo ťa baví.',
  },
  {
    number: 2,
    title: 'Ozveme sa ti',
    description: 'Kontaktujeme ťa e-mailom alebo telefonicky a dohodneme si osobné stretnutie.',
  },
  {
    number: 3,
    title: 'Dostaneš spätnú väzbu',
    description: 'Po stretnutí dostaneš naše rozhodnutie spolu s odôvodnením.',
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Kariéra', href: '/kariera' }]} />

      <PageHero
        eyebrow="Kariéra"
        title="Pridaj sa k nám"
        subtitle="Sme presvedčení, že za kvalitou našich služieb stojí skvelý tím ľudí. Práve preto pri výbere nového kolegu zisťujeme nielen jeho vedomosti a skúsenosti, ale zameriavame sa aj na jeho charakter, vlastnosti, osobnosť, záľuby a podobne. Jednoducho, hľadáme vždy niekoho, kto sa bude u nás cítiť dobre a ľudia v Neoshipe sa stanú jeho druhou rodinou."
      />

      {/* Otvorené pozície – empty state */}
      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-3xl">
          <p className="eyebrow">Otvorené pozície</p>
          <h2 className="mt-3 heading-2 text-ink">Aktuálne nemáme otvorené žiadne voľné pozície</h2>
          <p className="mt-5 body-lg">
            Nenechaj sa ale odradiť — ak máš záujem u nás pracovať, neváhaj a pošli životopis. Radi
            si ho prečítame a ozveme sa, hneď ako sa otvorí vhodná príležitosť.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:info@neoship.sk?subject=Záujem o prácu v Neoshipe"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-bold hover:bg-brand-orange-600 transition-colors"
            >
              <Send className="w-4 h-4" /> Poslať životopis
            </a>
            <a
              href="tel:+421917998494"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-line text-ink px-6 py-3 text-sm font-bold hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4" /> 0917 998 494
            </a>
          </div>
        </Container>
      </section>

      {/* Motivačný citát */}
      <section className="py-16 md:py-20 bg-surface">
        <Container className="max-w-3xl">
          <figure className="rounded-2xl bg-white border border-line shadow-soft p-8 md:p-12 text-center">
            <Quote className="w-10 h-10 text-brand-orange mx-auto" />
            <blockquote className="mt-5 text-2xl md:text-3xl font-bold text-ink leading-snug">
              „Úspech je súčet malých snáh opakovaných deň čo deň."
            </blockquote>
          </figure>
        </Container>
      </section>

      {/* Výberový proces */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Výberové konanie"
            title="Ako u nás prebieha výber"
            subtitle="Tri jednoduché kroky od poslania CV po naše rozhodnutie."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-surface border border-line p-7 shadow-soft"
              >
                <span className="inline-flex w-12 h-12 rounded-full bg-brand-orange text-white items-center justify-center text-lg font-black">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Kontakt */}
      <section className="py-14 md:py-16 bg-surface">
        <Container className="max-w-3xl text-center">
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-3 heading-3 text-ink">Máš otázky? Ozvi sa nám.</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@neoship.sk"
              className="inline-flex items-center gap-2 text-base font-bold text-ink hover:text-brand-orange transition-colors"
            >
              <Mail className="w-5 h-5 text-brand-orange" /> info@neoship.sk
            </a>
            <a
              href="tel:+421917998494"
              className="inline-flex items-center gap-2 text-base font-bold text-ink hover:text-brand-orange transition-colors"
            >
              <Phone className="w-5 h-5 text-brand-orange" /> 0917 998 494
            </a>
          </div>
        </Container>
      </section>

      <CTABanner
        headline="Chceš sa o Neoshipe dozvedieť viac?"
        subtitle="Pozri si, ako pomáhame slovenským a českým e-shopom s expedíciou."
      />
    </>
  );
}
