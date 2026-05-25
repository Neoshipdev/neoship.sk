'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';
import { navody, NAVOD_CATEGORIES } from '@/lib/navody';

const FILTERS = ['Všetky návody', ...NAVOD_CATEGORIES] as const;

export function NavodyList() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Všetky návody');

  const visible =
    active === 'Všetky návody' ? navody : navody.filter((n) => n.category === active);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {/* Kategórie */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = f === active;
            const count =
              f === 'Všetky návody'
                ? navody.length
                : navody.filter((n) => n.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors',
                  isActive
                    ? 'bg-brand-orange text-white'
                    : 'bg-surface text-ink hover:bg-brand-orange-50 hover:text-brand-orange-700',
                )}
              >
                {f}
                <span
                  className={cn(
                    'text-xs rounded-full px-1.5 py-0.5',
                    isActive ? 'bg-white/20' : 'bg-white text-muted',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Návody */}
        <ul className="mt-10 grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((n) => (
              <motion.li
                key={n.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/navody/${n.slug}`}
                  className="group flex h-full flex-col sm:flex-row rounded-2xl bg-surface border border-line overflow-hidden hover:bg-white hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  <div className="sm:w-2/5 shrink-0 bg-white flex items-center justify-center p-4 sm:border-r sm:border-line">
                    <Image
                      src={n.image}
                      alt={n.title}
                      width={720}
                      height={400}
                      unoptimized
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {n.category}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-ink leading-snug group-hover:text-brand-orange-700 transition-colors">
                      {n.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-orange">
                      Čítať návod{' '}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </Container>
    </section>
  );
}
