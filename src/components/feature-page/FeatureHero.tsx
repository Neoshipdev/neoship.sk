'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { useModals } from '@/components/modals/ModalsProvider';
import type { FeaturePage } from '@/lib/feature-pages';

export function FeatureHero({ data }: { data: FeaturePage }) {
  const { open } = useModals();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple-50 via-white to-white pt-10 pb-20 md:pt-14 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 0%, rgba(233,78,27,0.08), transparent 50%)',
        }}
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {data.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.07] text-ink"
          >
            {data.hero.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 body-lg max-w-2xl"
          >
            {data.hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              withArrow
              onClick={() => open(data.hero.primaryCta.openModal ?? 'contact')}
            >
              {data.hero.primaryCta.label}
            </Button>
            {data.hero.secondaryCta && (
              <Button href={data.hero.secondaryCta.href} variant="outline" withArrow>
                {data.hero.secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
