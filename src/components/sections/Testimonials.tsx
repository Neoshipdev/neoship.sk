'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/cn';

const VISIBLE_DESKTOP = 3;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Desktop posúva po 3 (stránky), mobil po 1 (aby sa zobrazili všetky recenzie).
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const step = isDesktop ? VISIBLE_DESKTOP : 1;
  const total = testimonials.length;

  useEffect(() => {
    if (hovered) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + step) % total);
    }, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [hovered, step, total]);

  const visible = Array.from({ length: VISIBLE_DESKTOP }).map(
    (_, i) => testimonials[(index + i) % testimonials.length],
  );

  return (
    <section className="section-y bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Referencie"
          title="Naši klienti hovoria za nás"
          subtitle="Stovky slovenských a českých e-shopov si vybrali Neoship pre svoju expedíciu."
        />

        <div
          className="mt-12 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="hidden lg:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.company}-${index}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <TestimonialCard {...t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile/tablet: single + dots */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].company}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <TestimonialCard {...testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - step + total) % total)}
              className="w-10 h-10 rounded-full bg-white border border-line shadow-soft hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center"
              aria-label="Predchádzajúce referencie"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: Math.ceil(total / step) }).map((_, p) => {
                const target = p * step;
                const active = Math.floor(index / step) === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setIndex(target)}
                    aria-label={`Prejsť na skupinu referencií ${p + 1}`}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      active ? 'w-6 bg-brand-orange' : 'w-2 bg-line',
                    )}
                  />
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + step) % total)}
              className="w-10 h-10 rounded-full bg-white border border-line shadow-soft hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center"
              aria-label="Ďalšie referencie"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  company,
  url,
  logo,
}: {
  quote: string;
  author: string;
  company: string;
  url: string;
  logo?: string;
}) {
  return (
    <article className="h-full rounded-2xl bg-white border border-line p-7 shadow-soft flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <Quote className="w-8 h-8 text-brand-orange-100 fill-brand-orange-50 shrink-0" />
        {logo && (
          <div className="relative h-10 w-28 shrink-0">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              unoptimized
              sizes="112px"
              className="object-contain object-right"
            />
          </div>
        )}
      </div>
      <p className="mt-4 text-base md:text-[17px] leading-relaxed text-ink flex-1">{quote}</p>
      <div className="mt-6 pt-5 border-t border-line">
        <p className="font-bold text-ink text-sm">{author}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-orange hover:underline"
        >
          {company}
        </a>
      </div>
    </article>
  );
}
