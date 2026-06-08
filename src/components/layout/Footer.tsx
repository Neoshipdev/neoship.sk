import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { NewsletterBlock } from './NewsletterBlock';
import { footerColumns } from '@/lib/data';

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/neoship.sk/' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/neoship.sk/' },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/neoship-s-r-o/?originalSubdomain=sk',
  },
  {
    label: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/channel/UCAldjfqbjjdrLVSvb6Ah9tQ',
  },
];

const badges = [
  {
    src: '/images/bridge2.png',
    alt: 'Bridge – overená e-commerce firma',
    href: 'https://www.ecommercebridge.sk/ako-usetrit-cas-a-peniaze-pomocou-automatizacie-expedicnych-procesov-tomas-zaskvara-neoship/',
  },
  {
    src: '/images/bronzovy-shoptet-partner.png',
    alt: 'Bronzový Shoptet partner',
    href: 'https://partneri.shoptet.sk/profesionali/neoship/',
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-purple-900 text-white mt-24">
      <Container className="py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-16">
          <div>
            <Logo variant="white" />
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              Expedičná platforma pre slovenské a české e-shopy. SPS, GLS, Packeta, Slovenská pošta
              a SDS pod jednou strechou. Jedna zmluva, jedna faktúra, jedno riešenie.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {badges.map((badge) => (
                <a
                  key={badge.href}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={badge.alt}
                  className="inline-block rounded-lg overflow-hidden transition-transform hover:-translate-y-0.5"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={320}
                    height={88}
                    className="h-12 w-auto"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-orange-100">
                Sledujte nás
              </p>
              <div className="mt-3 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex w-10 h-10 rounded-full bg-white/10 hover:bg-brand-orange text-white items-center justify-center transition-colors"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-10">
              {footerColumns.map((col) => (
                <div key={col.title} className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-orange-100">
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/75 hover:text-white transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <NewsletterBlock className="mt-10" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Neoship. Všetky práva vyhradené.
          </p>
          <address className="not-italic text-sm text-white/60 flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:info@neoship.sk" className="hover:text-white transition-colors">
              info@neoship.sk
            </a>
            <a href="tel:+421917998494" className="hover:text-white transition-colors">
              0917 998 494
            </a>
          </address>
        </div>
      </Container>
    </footer>
  );
}
