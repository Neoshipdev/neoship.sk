'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl',
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className={cn('eyebrow', invert && 'text-brand-orange-100')}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn('heading-2 mt-3', invert ? 'text-white' : 'text-ink')}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn('body-lg mt-5', invert && 'text-white/80')}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
