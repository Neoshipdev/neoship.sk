import Image from 'next/image';
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

      {data.leadImage && (
        <section className="pt-4 pb-2 md:pt-6 md:pb-3 bg-white">
          <Container>
            <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={data.leadImage.src}
                alt={data.leadImage.alt}
                width={1600}
                height={900}
                unoptimized
                priority
                className="w-full h-auto"
              />
            </div>
          </Container>
        </section>
      )}

      {data.lead && (
        <section className="pt-2 pb-4 md:pt-3 md:pb-6 bg-white">
          <Container>
            <p className="text-xl md:text-2xl text-ink leading-relaxed max-w-4xl">{data.lead}</p>
          </Container>
        </section>
      )}

      <section className="py-10 md:py-16 bg-white">
        <Container>
          <div
            className={
              data.textOnlySections ? 'space-y-12 md:space-y-16' : 'space-y-20 md:space-y-28'
            }
          >
            {data.sections.map((sec, i) => (
              <FeatureSection
                key={sec.h2}
                section={sec}
                index={i}
                textOnly={data.textOnlySections}
              />
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
