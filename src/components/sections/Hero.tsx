'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { DashboardMockup } from '@/components/mockup/DashboardMockup';
import { useModals } from '@/components/modals/ModalsProvider';

export function Hero() {
  const { open } = useModals();

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white pt-24 pb-32 md:pt-32 md:pb-40 -mt-20">
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" aria-hidden />

      {/* Decorative hatched circles */}
      <div
        aria-hidden
        className="hatched-circle absolute -top-24 -left-20 w-[420px] h-[420px]"
      />
      <div
        aria-hidden
        className="hatched-circle absolute top-1/3 -right-32 w-[520px] h-[520px]"
      />
      <div
        aria-hidden
        className="hatched-circle absolute -bottom-20 right-20 w-[320px] h-[320px]"
      />

      <Container className="relative pt-20">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="eyebrow text-brand-orange-100"
            >
              Expedičná platforma pre e-shopy
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="heading-1 mt-4 text-white"
            >
              Kuriérske služby, napojenia,{' '}
              <span className="text-brand-orange-100">jeden expedičný systém.</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-6 text-lg md:text-xl text-white/85 max-w-xl"
            >
              Zefektívnite čas, optimalizujte financie a zvýšte váš obchodný potenciál.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button variant="inverse" size="lg" withArrow onClick={() => open('contact')}>
                Chcem vyskúšať Neoship
              </Button>
            </motion.div>
          </motion.div>

          <div className="hidden md:block relative pr-2 lg:pr-0">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
