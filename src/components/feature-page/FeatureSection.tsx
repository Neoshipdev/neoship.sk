'use client';

import Image from 'next/image';
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
  const hasLogos = section.logos && section.logos.length > 0;

  // Full-width layout pre sekciu so zoznamom lôg (integrácie) – bez číslovania, väčšie logá
  if (hasLogos) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">{section.h2}</h2>
        <p className="mt-4 body-lg max-w-3xl">{section.body}</p>

        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {section.logos!.map((logo) => (
            <li
              key={logo.name}
              className={cn(
                'group rounded-2xl bg-white border border-line p-6 flex flex-col items-center justify-center text-center min-h-[200px] hover:border-brand-orange hover:shadow-soft transition-all',
                logo.dimmed && 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0',
              )}
            >
              {logo.src ? (
                <div
                  className="relative w-full h-24 md:h-28 flex items-center justify-center"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-full h-24 md:h-28 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-black text-brand-orange/40">
                    {logo.name.charAt(0)}
                  </span>
                </div>
              )}
              <span className="mt-4 text-sm font-bold text-ink leading-tight">{logo.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

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
