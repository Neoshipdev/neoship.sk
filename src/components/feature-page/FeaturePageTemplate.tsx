import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTABanner } from '@/components/sections/CTABanner';
import { FeatureHero } from './FeatureHero';
import { FeatureSection } from './FeatureSection';
import { BenefitsBox } from './BenefitsBox';
import { PersonasBox } from './PersonasBox';
import { StepsBox } from './StepsBox';
import { FAQAccordion } from './FAQAccordion';
import { CrossLinks } from './CrossLinks';
import type { FeaturePage } from '@/lib/feature-pages';

export function FeaturePageTemplate({ data }: { data: FeaturePage }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Služby', href: '/#sluzby' },
          { label: data.breadcrumbLabel, href: `/sluzby/${data.slug}` },
        ]}
      />

      <FeatureHero data={data} />

      <section className="py-14 md:py-20 bg-white">
        <Container>
          <p className="text-xl md:text-2xl text-ink leading-relaxed max-w-4xl">{data.lead}</p>
        </Container>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {data.sections.map((sec, i) => (
              <FeatureSection key={sec.h2} section={sec} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <BenefitsBox data={data.benefits} />
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <PersonasBox data={data.personas} />
        </Container>
      </section>

      {data.steps && (
        <section className="py-16 md:py-20 bg-surface">
          <Container>
            <StepsBox data={data.steps} />
          </Container>
        </section>
      )}

      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-4xl">
          <FAQAccordion items={data.faq} />
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <CrossLinks items={data.crossLinks} />
        </Container>
      </section>

      <CTABanner
        headline={data.cta.headline}
        subtitle={data.cta.subtitle}
        buttonLabel={data.cta.buttonLabel}
      />
    </>
  );
}
