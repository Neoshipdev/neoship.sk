'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';

export type TabItem = {
  id: string;
  title: string;
  icon?: LucideIcon;
  content: React.ReactNode;
};

export function VerticalTabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const activeItem = items.find((t) => t.id === active) ?? items[0];

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-12">
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0">
        {items.map((tab) => {
          const isActive = tab.id === active;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                'flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all shrink-0 lg:shrink',
                isActive
                  ? 'bg-brand-purple text-white shadow-soft'
                  : 'bg-white text-ink hover:bg-brand-orange-50',
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    'w-5 h-5 shrink-0',
                    isActive ? 'text-brand-orange-100' : 'text-brand-orange',
                  )}
                />
              )}
              <span className="font-bold text-base">{tab.title}</span>
            </button>
          );
        })}
      </div>

      <div className="min-h-[420px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeItem.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
