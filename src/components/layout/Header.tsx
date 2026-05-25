'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navigation, type NavColumn, type NavLink } from '@/lib/data';
import { Logo } from './Logo';
import { HeaderMegaMenu, SimpleDropdown } from './HeaderMegaMenu';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';
import { Container } from './Container';
import { useModals } from '@/components/modals/ModalsProvider';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openModal } = useModals();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          transparent
            ? 'bg-transparent border-b border-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-line shadow-soft',
        )}
      >
        <Container className="flex items-center gap-6 h-20">
          <Logo variant={transparent ? 'mixed' : 'color'} />

          <nav className="hidden lg:flex items-center gap-1 ml-4">
            {navigation.map((item, idx) => {
              const isPlain = 'href' in item && typeof item.href === 'string';
              const hasMega = 'columns' in item;
              const hasLinks = 'links' in item;
              const active = hoverIndex === idx;

              if (isPlain) {
                return (
                  <Link
                    key={item.label}
                    href={(item as { href: string }).href}
                    className={cn(
                      'px-3 py-2 text-sm font-bold transition-colors rounded-lg',
                      transparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-ink hover:text-brand-orange',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={active}
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors rounded-lg',
                      transparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-ink hover:text-brand-orange',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        active && 'rotate-180',
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {active && hasMega && (
                      <HeaderMegaMenu columns={(item as { columns: NavColumn[] }).columns} />
                    )}
                    {active && hasLinks && (
                      <SimpleDropdown links={(item as { links: NavLink[] }).links} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex-1" />

          <div className="hidden lg:block">
            <Button withArrow onClick={() => openModal('contact')}>
              Chcem vyskúšať
            </Button>
          </div>

          <button
            type="button"
            aria-label="Otvoriť menu"
            onClick={() => setMobileOpen(true)}
            className={cn(
              'lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors',
              transparent ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-surface text-ink',
            )}
          >
            <Menu className="w-5 h-5" />
          </button>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
