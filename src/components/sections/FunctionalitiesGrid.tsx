'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { homeFunctionalityCards } from '@/lib/data';

export function FunctionalitiesGrid() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeader
          eyebrow="Funkcionality systému"
          title="Funkcionality, ktoré vám zjednodušia expedíciu"
          subtitle="Pozrite si, čo všetko získate s expedičným systémom Neoship – od prepojení s vaším e-shopom až po detailné štatistiky."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeFunctionalityCards.map((card, i) => {
            const Icon = card.icon;
            const isLargeRow = i >= 3;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={isLargeRow ? 'lg:col-span-3/2' : ''}
                style={isLargeRow ? { gridColumn: 'span 1 / span 1' } : undefined}
              >
                <Link
                  href={card.href}
                  className="group block h-full rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-brand-orange-50 text-brand-orange items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink group-hover:text-brand-orange-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-base text-muted leading-relaxed">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange">
                    Zistiť viac{' '}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
