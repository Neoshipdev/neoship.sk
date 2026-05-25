'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const points = [
  'Žiadne zmluvy s kuriérskymi spoločnosťami',
  'Jedna zmluva, jedna faktúra, jedno expedičné riešenie',
  'O všetko sa postaráme za vás',
];

export function TrustPoints() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-line bg-surface"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center">
                <Check className="w-5 h-5" />
              </span>
              <p className="text-lg font-bold text-ink leading-snug">{p}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
