import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { ModalsProvider } from '@/components/modals/ModalsProvider';
import { buildMetadata, organizationJsonLd } from '@/lib/seo';

const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({
  title: 'Neoship – Kuriérske služby, napojenia, jeden expedičný systém',
  description:
    'Modernú expedíciu pre váš e-shop. SPS, GLS, Packeta a DPD pod jednou strechou. Jedna zmluva, jedna faktúra, jedno riešenie.',
  path: '/',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={notoSans.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <ModalsProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </ModalsProvider>
      </body>
    </html>
  );
}
