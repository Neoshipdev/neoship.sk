'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import type { FeaturePage } from '@/lib/feature-pages';

export function PersonasBox({ data }: { data: FeaturePage['personas'] }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-ink">{data.headline}</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {data.items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl bg-white border border-line p-6 shadow-soft"
          >
            <span className="inline-flex w-11 h-11 rounded-xl bg-brand-purple-50 text-brand-purple items-center justify-center">
              <User className="w-5 h-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
