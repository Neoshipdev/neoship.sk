'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export function VideoSection() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-soft-lg bg-ink"
        >
          <div className="aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/LpL5Z8WVtaY"
              title="Neoship – ako funguje expedičná platforma"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
