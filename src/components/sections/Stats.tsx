'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { CountUp } from '@/components/ui/CountUp';
import { stats } from '@/lib/data';

export function Stats() {
  return (
    <section className="relative bg-brand-purple text-white py-20 md:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-purple-700 to-brand-purple-900 opacity-90"
      />
      <div aria-hidden className="hatched-circle absolute -top-32 -right-24 w-[420px] h-[420px]" />
      <div aria-hidden className="hatched-circle absolute -bottom-32 -left-24 w-[420px] h-[420px]" />

      <Container className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="text-5xl md:text-6xl font-black tracking-tight">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm md:text-base text-white/80 leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
