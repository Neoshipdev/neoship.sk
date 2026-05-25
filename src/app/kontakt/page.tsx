import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kontakt | Neoship',
  description: 'Spojte sa s nami – e-mailom, telefonicky alebo cez kontaktný formulár.',
  path: '/kontakt',
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Kontakt', href: '/kontakt' }]} />

      <PageHero
        eyebrow="Kontakt"
        title="Sme tu pre vás každý pracovný deň"
        subtitle="Odpovedáme zvyčajne do hodiny. V naliehavých prípadoch volajte priamo."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-5">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="E-mail"
              primary="info@neoship.sk"
              href="mailto:info@neoship.sk"
              note="Odpovedáme zvyčajne do hodiny."
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Telefón"
              primary="0917 998 494"
              href="tel:+421917998494"
              note="Pondelok – piatok, 8:00 – 17:00"
            />
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Sídlo"
              primary="Bratislava, Slovensko"
              note="Návštevy len po dohode."
            />
          </div>

          <address className="mt-16 not-italic rounded-2xl bg-surface border border-line p-8 max-w-3xl">
            <p className="eyebrow">Fakturačné údaje</p>
            <p className="mt-2 text-ink">
              Neoship s. r. o.<br />
              Vajnorská 100<br />
              831 04 Bratislava<br />
              IČO: 12345678 · DIČ: 1234567890 · IČ DPH: SK1234567890
            </p>
          </address>
        </Container>
      </section>

      <CTABanner headline="Najjednoduchšia cesta? Vyplniť kontaktný formulár." />
    </>
  );
}

function ContactCard({
  icon,
  title,
  primary,
  href,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  primary: string;
  href?: string;
  note?: string;
}) {
  const Wrapper: React.ElementType = href ? 'a' : 'div';
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="block rounded-2xl bg-surface border border-line p-7 hover:shadow-soft-lg hover:-translate-y-1 transition-all"
    >
      <span className="inline-flex w-12 h-12 rounded-2xl bg-brand-orange text-white items-center justify-center">
        {icon}
      </span>
      <p className="mt-5 text-sm font-bold uppercase tracking-wider text-muted">{title}</p>
      <p className="mt-1 text-xl font-bold text-ink">{primary}</p>
      {note && <p className="mt-3 text-sm text-muted">{note}</p>}
    </Wrapper>
  );
}
