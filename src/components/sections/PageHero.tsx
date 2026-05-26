'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  image,
  variant = 'light',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: { src: string; alt: string };
  /** 'light' = jemný fialový gradient s tmavým textom (default); 'dark' = sýty oranžovo-fialový gradient ako homepage hero. */
  variant?: 'light' | 'dark';
}) {
  const isDark = variant === 'dark';

  const text = (
    <div className={image ? '' : 'max-w-3xl'}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={isDark ? 'eyebrow text-brand-orange-100' : 'eyebrow'}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={
          isDark
            ? 'mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.07] text-white'
            : 'mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.07] text-ink'
        }
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={
            isDark
              ? 'mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-white/90'
              : 'mt-6 body-lg max-w-2xl'
          }
        >
          {subtitle}
        </motion.p>
      )}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      )}
    </div>
  );

  return (
    <section
      className={
        isDark
          ? 'relative overflow-hidden bg-hero-gradient text-white pt-14 pb-20 md:pt-20 md:pb-28'
          : 'relative overflow-hidden bg-gradient-to-br from-brand-purple-50 via-white to-white pt-10 pb-16 md:pt-14 md:pb-24'
      }
    >
      {isDark && (
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" aria-hidden />
      )}
      <Container className="relative">
        {image ? (
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            {text}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="order-first lg:order-last"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-soft"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        ) : (
          text
        )}
      </Container>
    </section>
  );
}
