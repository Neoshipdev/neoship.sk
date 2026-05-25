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
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: { src: string; alt: string };
}) {
  const text = (
    <div className={image ? '' : 'max-w-3xl'}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-[1.07] text-ink"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 body-lg max-w-2xl"
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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple-50 via-white to-white pt-10 pb-16 md:pt-14 md:pb-24">
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
