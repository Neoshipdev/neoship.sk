'use client';

import { motion } from 'framer-motion';
import type { FeaturePage } from '@/lib/feature-pages';

export function StepsBox({ data }: { data: NonNullable<FeaturePage['steps']> }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-ink">{data.headline}</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5 relative">
        {data.items.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative rounded-2xl bg-surface border border-line p-6"
          >
            <span className="inline-flex w-12 h-12 rounded-full bg-brand-orange text-white items-center justify-center text-lg font-black">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
