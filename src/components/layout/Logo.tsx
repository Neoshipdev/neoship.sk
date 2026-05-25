'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';

type Variant = 'color' | 'white' | 'mixed';

/**
 * Neoship brand logo (official PNGs from /public/logos/).
 *
 *  - color  : light background (scrolled header, inner pages) → fully orange logo
 *  - white  : dark background (footer)                        → all-white logo
 *  - mixed  : dark background (hero header)                   → white "neo" + orange "ship"
 */
const sources: Record<Variant, string> = {
  color: '/logos/logo-neoship-oranzove.png',
  white: '/logos/logo-neoship-biele.png',
  mixed: '/logos/logo-neoship-bielo-oranzova.png',
};

export function Logo({ variant = 'color', className }: { variant?: Variant; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Neoship – domovská stránka"
      className={cn('inline-flex items-center', className)}
    >
      <Image
        src={sources[variant]}
        alt="Neoship"
        width={178}
        height={39}
        priority
        unoptimized
        className="h-9 w-auto"
      />
    </Link>
  );
}
