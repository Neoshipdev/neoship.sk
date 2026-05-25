'use client';

import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { planComparison } from '@/lib/data';
import { cn } from '@/lib/cn';

export function PlanComparison() {
  return (
    <section className="section-y bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Plány a balíky"
          title="Čo s Neoshipom získate?"
          subtitle="Porovnajte verzie Prémium a Základ. Prémium zahŕňa zmluvy s prepravcami, Základ využíva vaše existujúce zmluvy."
        />

        {/* Desktop: table */}
        <div className="mt-12 hidden lg:block overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
          <div className="grid grid-cols-[1.4fr_1fr_1fr]">
            <div className="bg-white px-8 py-6 border-b border-line">
              <p className="text-xs uppercase tracking-widest text-muted font-bold">Funkcia</p>
            </div>
            <div className="bg-brand-purple text-white px-8 py-6 border-b border-line text-center">
              <p className="text-xs uppercase tracking-widest text-brand-orange-100 font-bold">
                Odporúčané
              </p>
              <p className="mt-1 text-2xl font-black">Prémium</p>
            </div>
            <div className="bg-white px-8 py-6 border-b border-line text-center">
              <p className="text-xs uppercase tracking-widest text-muted font-bold">Klasický</p>
              <p className="mt-1 text-2xl font-black text-ink">Základ</p>
            </div>
          </div>

          {planComparison.map((cat) => (
            <div key={cat.title}>
              <div className="bg-surface px-8 py-3 border-b border-line">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-orange-700">
                  {cat.title}
                </p>
              </div>
              {cat.rows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-line last:border-b-0"
                >
                  <div className="px-8 py-4 text-ink">{row.label}</div>
                  <FlagCell ok={row.premium} highlighted />
                  <FlagCell ok={row.basic} />
                </motion.div>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-white">
            <div className="px-8 py-6" />
            <div className="px-8 py-6 bg-brand-purple-50 text-center">
              <Button href="/cennik" withArrow>
                Chcem Prémium
              </Button>
            </div>
            <div className="px-8 py-6 text-center">
              <Button href="/cennik" variant="outline" withArrow>
                Chcem Základ
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-12 lg:hidden grid gap-6">
          <PlanCard variant="premium" />
          <PlanCard variant="basic" />
        </div>
      </Container>
    </section>
  );
}

function FlagCell({ ok, highlighted }: { ok: boolean; highlighted?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center py-4',
        highlighted && 'bg-brand-purple-50',
      )}
    >
      {ok ? (
        <span className="w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center">
          <Check className="w-4 h-4" />
        </span>
      ) : (
        <span className="w-7 h-7 rounded-full bg-line/60 text-muted flex items-center justify-center">
          <Minus className="w-4 h-4" />
        </span>
      )}
    </div>
  );
}

function PlanCard({ variant }: { variant: 'premium' | 'basic' }) {
  const isPremium = variant === 'premium';
  return (
    <div
      className={cn(
        'rounded-2xl p-6 border shadow-soft',
        isPremium ? 'bg-brand-purple text-white border-brand-purple' : 'bg-white text-ink border-line',
      )}
    >
      <p
        className={cn(
          'text-xs uppercase tracking-widest font-bold',
          isPremium ? 'text-brand-orange-100' : 'text-muted',
        )}
      >
        {isPremium ? 'Odporúčané' : 'Klasický'}
      </p>
      <h3 className="mt-1 text-3xl font-black">{isPremium ? 'Prémium' : 'Základ'}</h3>
      <div className="mt-6 space-y-5">
        {planComparison.map((cat) => (
          <div key={cat.title}>
            <p
              className={cn(
                'text-xs font-bold uppercase tracking-wider',
                isPremium ? 'text-brand-orange-100' : 'text-brand-orange-700',
              )}
            >
              {cat.title}
            </p>
            <ul className="mt-2 space-y-1.5">
              {cat.rows.map((row) => {
                const ok = isPremium ? row.premium : row.basic;
                return (
                  <li key={row.label} className="flex items-start gap-2 text-sm">
                    {ok ? (
                      <Check className="w-4 h-4 mt-0.5 text-brand-orange shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 mt-0.5 opacity-40 shrink-0" />
                    )}
                    <span className={ok ? '' : 'opacity-50'}>{row.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button
          href="/cennik"
          variant={isPremium ? 'inverse' : 'primary'}
          withArrow
          className="w-full justify-center"
        >
          {isPremium ? 'Chcem Prémium' : 'Chcem Základ'}
        </Button>
      </div>
    </div>
  );
}
