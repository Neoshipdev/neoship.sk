'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { NavColumn, NavLink } from '@/lib/data';
import { useModals } from '@/components/modals/ModalsProvider';

export function HeaderMegaMenu({ columns }: { columns: NavColumn[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
    >
      <div className="w-[760px] max-w-[calc(100vw-32px)] rounded-2xl bg-white shadow-soft-lg border border-line p-6 grid grid-cols-2 gap-6">
        {columns.map((col) => (
          <div key={col.eyebrow}>
            <p className="eyebrow mb-3">{col.eyebrow}</p>
            <ul className="space-y-1">
              {col.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href ?? '#'}
                      className={cn(
                        'flex items-start gap-3 px-3 py-3 rounded-xl transition-colors',
                        'hover:bg-brand-orange-50 group',
                      )}
                    >
                      {Icon && (
                        <span className="shrink-0 w-9 h-9 rounded-lg bg-brand-orange-50 flex items-center justify-center group-hover:bg-white">
                          <Icon className="w-5 h-5 text-brand-orange" />
                        </span>
                      )}
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-bold text-ink group-hover:text-brand-orange-700 transition-colors">
                          {link.label}
                        </span>
                        {link.description && (
                          <span className="block text-xs text-muted mt-0.5">
                            {link.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SimpleDropdown({ links }: { links: NavLink[] }) {
  const { open } = useModals();
  const itemClass =
    'w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-brand-orange-50 hover:text-brand-orange-700 transition-colors text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-0 pt-3 z-50"
    >
      <div className="min-w-[220px] rounded-2xl bg-white shadow-soft-lg border border-line p-2">
        <ul className="space-y-0.5">
          {links.map((l) => {
            const badge = l.badge && (
              <span className="text-xs bg-brand-orange text-white rounded-full px-2 py-0.5 font-bold">
                {l.badge}
              </span>
            );
            return (
              <li key={l.label}>
                {l.modal ? (
                  <button type="button" onClick={() => open(l.modal!)} className={itemClass}>
                    {l.label}
                    {badge}
                  </button>
                ) : (
                  <Link href={l.href} className={itemClass}>
                    {l.label}
                    {badge}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
