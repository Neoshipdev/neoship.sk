'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VerticalTabs, type TabItem } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { serviceTabs, type ServiceTab } from '@/lib/data';

export function ServicesTabs() {
  const tabs: TabItem[] = serviceTabs.map((s) => ({
    id: s.id,
    title: s.title,
    icon: s.icon,
    content: <TabContent {...s} />,
  }));

  return (
    <section id="sluzby" className="section-y bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Komplexné riešenie"
          title="Všetko pod jednou strechou"
          subtitle="Tri piliere, ktoré spolu pokrývajú celú vašu expedíciu – od prvého kontaktu s prepravcom až po doručenie balíka zákazníkovi."
        />

        <div className="mt-14">
          <VerticalTabs items={tabs} />
        </div>
      </Container>
    </section>
  );
}

function TabContent({ title, intro, bullets, cta, image }: ServiceTab) {
  if (image) {
    return (
      <div className="rounded-2xl bg-brand-orange text-white shadow-soft overflow-hidden">
        <div className="grid md:grid-cols-[1fr_420px] items-stretch">
          <div className="p-8 md:p-10 flex flex-col">
            <h3 className="heading-3 text-white">{title}</h3>
            <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">{intro}</p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white text-brand-orange flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href={cta.href} variant="inverse" withArrow>
                {cta.label}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center p-8 pt-0 md:p-10 md:pt-10 md:pl-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="w-full h-auto rounded-xl"
              unoptimized
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-line p-8 md:p-10 shadow-soft">
      <h3 className="heading-3 text-ink">{title}</h3>
      <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{intro}</p>

      <ul className="mt-6 grid sm:grid-cols-2 gap-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-ink">
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-orange-50 text-brand-orange flex items-center justify-center">
              <Check className="w-3 h-3" />
            </span>
            <span className="text-sm md:text-base">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href={cta.href} withArrow>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
