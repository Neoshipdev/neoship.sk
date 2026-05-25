'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, LifeBuoy, Download } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useModals } from '@/components/modals/ModalsProvider';

export function KnowHow() {
  const { open } = useModals();

  return (
    <section id="zdroje" className="section-y bg-white">
      <Container>
        <SectionHeader
          eyebrow="Naše know-how"
          title="Naše expedičné know-how"
          subtitle="Sumár trinástich rokov skúseností s logistikou pre slovenské a české e-shopy. Stiahnite si zadarmo a zlepšite expedíciu hneď."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <KnowHowCard
            number="01"
            icon={BookOpen}
            title="Ebook: Krok za krokom k správnemu expedičnému riešeniu"
            description="Ako zoptimalizovať náklady a dosiahnuť maximálnu spokojnosť zákazníkov? Stiahnite si E-book založený na 13 rokoch našich skúseností!"
            cta="Stiahnuť E-book"
            onClick={() => open('ebook')}
            backgroundImage="/images/ebook.png"
          />
          <KnowHowCard
            number="02"
            icon={LifeBuoy}
            title="Pomocník pre porovnanie cenových ponúk prepravcov"
            description="Analyzujte správne cenové ponuky kuriérskych spoločností a rozhodnite sa pre tú najlepšiu!"
            cta="Stiahnuť Pomocníka"
            onClick={() => open('helper')}
            backgroundImage="/images/pomocnik.png"
          />
        </div>
      </Container>
    </section>
  );
}

function KnowHowCard({
  number,
  icon: Icon,
  title,
  description,
  cta,
  onClick,
  backgroundImage,
}: {
  number: string;
  icon: typeof BookOpen;
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
  backgroundImage?: string;
}) {
  const hasBg = Boolean(backgroundImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative rounded-2xl border p-8 md:p-10 shadow-soft overflow-hidden',
        hasBg
          ? 'border-brand-purple-900/20'
          : 'border-line bg-gradient-to-br from-brand-purple-50 to-white',
      )}
    >
      {hasBg && (
        <Image
          src={backgroundImage as string}
          alt=""
          fill
          aria-hidden
          unoptimized
          className="object-cover"
        />
      )}

      {!hasBg && (
        <span className="absolute -top-2 right-6 text-[140px] font-black leading-none select-none text-brand-orange-50">
          {number}
        </span>
      )}
      <div className={cn('relative', hasBg && 'max-w-[56%]')}>
        {!hasBg && (
          <span className="inline-flex w-14 h-14 rounded-2xl bg-brand-orange text-white items-center justify-center">
            <Icon className="w-7 h-7" />
          </span>
        )}
        <h3
          className={cn(
            'text-2xl font-bold',
            hasBg ? 'text-white' : 'mt-5 text-ink',
          )}
        >
          {title}
        </h3>
        <p className={cn('mt-3 leading-relaxed', hasBg ? 'text-white/90' : 'text-muted')}>
          {description}
        </p>
        <div className="mt-6">
          <Button onClick={onClick} variant={hasBg ? 'inverse' : 'primary'} className="gap-2">
            <Download className="w-4 h-4" />
            {cta}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
