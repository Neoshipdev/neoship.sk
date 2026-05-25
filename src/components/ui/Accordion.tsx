'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-line border-y border-line', className)}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-bold text-ink group-hover:text-brand-orange transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-muted transition-transform duration-300 shrink-0',
                  isOpen && 'rotate-180 text-brand-orange',
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-10 body-lg whitespace-pre-line">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
