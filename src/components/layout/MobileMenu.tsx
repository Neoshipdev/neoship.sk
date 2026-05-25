'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navigation } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { useModals } from '@/components/modals/ModalsProvider';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { open: openModal } = useModals();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-white lg:hidden flex flex-col"
        >
          <div className="container-x py-5 flex items-center justify-end">
            <button
              type="button"
              aria-label="Zatvoriť menu"
              onClick={onClose}
              className="w-11 h-11 rounded-full bg-surface flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto container-x pb-10">
            <ul className="divide-y divide-line">
              {navigation.map((item) => {
                const isPlain = 'href' in item && typeof item.href === 'string';
                const isCols = 'columns' in item;
                const isLinks = 'links' in item;
                const key = item.label;
                const isOpen = expanded === key;

                if (isPlain) {
                  return (
                    <li key={key}>
                      <Link
                        href={(item as { href: string }).href}
                        onClick={onClose}
                        className="block py-4 text-lg font-bold text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-4 text-lg font-bold text-ink"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-muted transition-transform',
                          isOpen && 'rotate-180 text-brand-orange',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-2 space-y-1">
                            {isCols &&
                              (item as { columns: typeof item extends { columns: infer C } ? C : never }).columns.map(
                                (col) => {
                                  const subKey = `${key}:${col.eyebrow}`;
                                  const subOpen = subExpanded === subKey;
                                  return (
                                    <div key={col.eyebrow}>
                                      <button
                                        type="button"
                                        onClick={() => setSubExpanded(subOpen ? null : subKey)}
                                        aria-expanded={subOpen}
                                        className="w-full flex items-center justify-between py-3 text-xs font-bold uppercase tracking-widest text-brand-orange"
                                      >
                                        {col.eyebrow}
                                        <ChevronDown
                                          className={cn(
                                            'w-4 h-4 transition-transform',
                                            subOpen && 'rotate-180',
                                          )}
                                        />
                                      </button>
                                      <AnimatePresence initial={false}>
                                        {subOpen && (
                                          <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-0.5 overflow-hidden"
                                          >
                                            {col.links.map((l) => (
                                              <li key={l.href}>
                                                <Link
                                                  href={l.href ?? '#'}
                                                  onClick={onClose}
                                                  className="block py-2 pl-3 text-base text-ink hover:text-brand-orange"
                                                >
                                                  {l.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </motion.ul>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                },
                              )}

                            {isLinks &&
                              (item as { links: typeof item extends { links: infer L } ? L : never }).links.map(
                                (l) => {
                                  const badge = l.badge && (
                                    <span className="text-xs bg-brand-orange text-white rounded-full px-2 py-0.5 font-bold">
                                      {l.badge}
                                    </span>
                                  );
                                  if (l.modal) {
                                    return (
                                      <button
                                        key={l.label}
                                        type="button"
                                        onClick={() => {
                                          onClose();
                                          openModal(l.modal!);
                                        }}
                                        className="w-full flex items-center justify-between py-2 pl-3 text-base text-ink hover:text-brand-orange text-left"
                                      >
                                        {l.label}
                                        {badge}
                                      </button>
                                    );
                                  }
                                  return (
                                    <Link
                                      key={l.href}
                                      href={l.href}
                                      onClick={onClose}
                                      className="flex items-center justify-between py-2 pl-3 text-base text-ink hover:text-brand-orange"
                                    >
                                      {l.label}
                                      {badge}
                                    </Link>
                                  );
                                },
                              )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6">
              <Button
                withArrow
                className="w-full justify-center"
                onClick={() => {
                  onClose();
                  openModal('contact');
                }}
              >
                Chcem vyskúšať
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
