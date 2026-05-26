'use client';

import { motion } from 'framer-motion';
import { Bell, Check, CheckCheck, MoreHorizontal, Package, Search } from 'lucide-react';
import { mockupRows } from '@/lib/data';
import { cn } from '@/lib/cn';

const statusStyles: Record<string, string> = {
  Doručený: 'bg-emerald-50 text-emerald-700',
  'Na ceste': 'bg-blue-50 text-blue-700',
  Pripravený: 'bg-amber-50 text-amber-700',
  Vyzdvihnutie: 'bg-purple-50 text-purple-700',
  'Štítok pripravený': 'bg-orange-50 text-brand-orange-700',
};

const flag: Record<string, string> = {
  SK: '🇸🇰',
  CZ: '🇨🇿',
  HU: '🇭🇺',
  AT: '🇦🇹',
};

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Soft glow */}
      <div className="absolute -inset-10 bg-white/20 blur-3xl rounded-full -z-10" aria-hidden />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl bg-white shadow-soft-lg border border-line overflow-hidden"
      >
        {/* Header strip */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-surface">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="ml-3 flex-1 flex items-center gap-2 bg-white rounded-md px-2.5 py-1.5 text-xs text-muted border border-line">
            <Search className="w-3.5 h-3.5" /> neoship.sk / prehlad-balikov
          </div>
        </div>

        {/* Title row */}
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-brand-orange" />
            <h4 className="text-base font-bold text-ink">Prehľad balíkov</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <Bell className="w-4 h-4 text-muted" />
            <MoreHorizontal className="w-4 h-4 text-muted" />
          </div>
        </div>

        {/* Table */}
        <div className="px-5 pb-5 pt-3">
          <div className="grid grid-cols-[auto_1.2fr_1.2fr_1fr_auto] gap-x-3 text-[11px] uppercase tracking-wider text-muted font-semibold py-2 border-b border-line">
            <span className="opacity-0">x</span>
            <span>Stav</span>
            <span>Č. balíka</span>
            <span>Dopravca</span>
            <span>Krajina</span>
          </div>
          {mockupRows.map((row, i) => (
            <div
              key={row.trackingId}
              className={cn(
                'grid grid-cols-[auto_1.2fr_1.2fr_1fr_auto] gap-x-3 items-center py-3 text-sm',
                i !== mockupRows.length - 1 && 'border-b border-line/70',
              )}
            >
              <span
                className={cn(
                  'w-4 h-4 rounded border flex items-center justify-center',
                  row.checked
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : 'border-line bg-white',
                )}
              >
                {row.checked && <Check className="w-3 h-3" />}
              </span>
              <span
                className={cn(
                  'inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold',
                  statusStyles[row.status],
                )}
              >
                {row.status}
              </span>
              <span className="font-mono text-xs text-ink">{row.trackingId}</span>
              <span className="text-ink font-medium">{row.carrier}</span>
              <span className="text-lg leading-none">{flag[row.country]}</span>
            </div>
          ))}
          <div className="mt-3 flex items-center justify-between text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CheckCheck className="w-3.5 h-3.5 text-brand-orange" /> 3 z 5 označené
            </span>
            <span>Aktualizované teraz</span>
          </div>
        </div>
      </motion.div>

      {/* Marketplace pill — top right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -top-6 -right-4 lg:-right-12"
      >
        <div className="animate-float bg-white shadow-soft-lg rounded-full px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-ink border border-line">
          <span className="text-brand-purple">Shoptet</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span>WooCommerce</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span>Shopify</span>
          <span className="ml-1 inline-flex w-6 h-6 rounded-full bg-brand-orange-50 text-brand-orange items-center justify-center font-bold">
            +
          </span>
        </div>
      </motion.div>

      {/* Phone preview — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -bottom-8 -left-4 lg:-left-16 animate-float-delay"
      >
        <div className="w-[180px] rounded-[28px] bg-ink p-2 shadow-soft-lg border border-white/10">
          <div className="rounded-[22px] bg-white px-4 py-5 relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-ink rounded-full" />
            <div className="mt-3 flex items-start gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-brand-orange-50 text-brand-orange flex items-center justify-center text-lg">
                📦
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-wider text-muted font-bold">Neoship</p>
                <p className="text-xs font-bold text-ink leading-snug">
                  Váš balík NS-10388339 bol doručený.
                </p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="h-1.5 rounded-full bg-brand-orange" />
              <div className="h-1.5 rounded-full bg-brand-orange" />
              <div className="h-1.5 rounded-full bg-brand-orange" />
            </div>
            <p className="mt-2 text-[10px] text-muted">teraz · doručené</p>
          </div>
        </div>
      </motion.div>

      {/* Carriers pill — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-4 -right-4 lg:-right-10"
      >
        <div className="animate-float bg-white shadow-soft-lg rounded-full px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-ink border border-line">
          <span className="text-emerald-600">SPS</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="text-blue-600">GLS</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="text-rose-600">Packeta</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="text-amber-600">Slovenská pošta</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="text-red-600">DPD</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span className="text-violet-600">SDS</span>
        </div>
      </motion.div>
    </div>
  );
}
