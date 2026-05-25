'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { useModals } from '@/components/modals/ModalsProvider';

export function CTABanner({
  headline = 'Chceli by ste vyskúšať Neoship?',
  subtitle = 'Ozveme sa vám do 24 hodín a pomôžeme s nasadením vo vašom e-shope.',
  buttonLabel = 'Chcem vyskúšať',
}: {
  headline?: string;
  subtitle?: string;
  buttonLabel?: string;
}) {
  const { open } = useModals();

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-hero-gradient text-white p-10 md:p-14 lg:p-16 text-center"
        >
          <div aria-hidden className="hatched-circle absolute -top-20 -left-20 w-[260px] h-[260px]" />
          <div aria-hidden className="hatched-circle absolute -bottom-24 -right-16 w-[300px] h-[300px]" />

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">{headline}</h2>
            <p className="mt-4 text-base md:text-lg text-white/85">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="inverse" size="lg" withArrow onClick={() => open('contact')}>
                {buttonLabel}
              </Button>
              <Button href="/cennik" variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
                Pozrieť cenník
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
