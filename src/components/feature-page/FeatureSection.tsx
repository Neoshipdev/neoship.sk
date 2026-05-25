'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { FeatureSectionContent } from '@/lib/feature-pages';

const visuals = [
  'bg-gradient-to-br from-brand-orange-50 to-brand-orange-100',
  'bg-gradient-to-br from-brand-purple-50 to-brand-purple-100',
  'bg-gradient-to-br from-emerald-50 to-emerald-100',
  'bg-gradient-to-br from-sky-50 to-sky-100',
  'bg-gradient-to-br from-amber-50 to-amber-100',
  'bg-gradient-to-br from-rose-50 to-rose-100',
  'bg-gradient-to-br from-violet-50 to-violet-100',
];

export function FeatureSection({
  section,
  index,
}: {
  section: FeatureSectionContent;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const visual = visuals[index % visuals.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
    >
      <div className={reverse ? 'md:order-2' : ''}>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">{section.h2}</h2>
        <p className="mt-4 body-lg">{section.body}</p>
        {section.bullets && section.bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {section.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-orange-50 text-brand-orange flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={cn(
          'rounded-2xl aspect-[4/3] md:aspect-[5/4] flex items-center justify-center relative overflow-hidden',
          visual,
          reverse ? 'md:order-1' : '',
        )}
        aria-hidden
      >
        <div className="absolute inset-0 opacity-30 hatched-circle rounded-2xl" />
        <span className="relative text-7xl md:text-8xl font-black text-white/90 select-none drop-shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
}
