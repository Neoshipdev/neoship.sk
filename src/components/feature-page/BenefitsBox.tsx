'use client';

import { motion } from 'framer-motion';
import type { FeaturePage } from '@/lib/feature-pages';

export function BenefitsBox({ data }: { data: FeaturePage['benefits'] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange via-brand-orange-600 to-brand-orange-700 text-white p-8 md:p-12">
      <div aria-hidden className="hatched-circle absolute -top-24 -right-16 w-[300px] h-[300px]" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-black text-white">{data.headline}</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {data.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-5"
            >
              <span className="text-3xl shrink-0">{item.emoji}</span>
              <div>
                <p className="font-bold text-white">{item.title}</p>
                <p className="text-sm text-white/85 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
