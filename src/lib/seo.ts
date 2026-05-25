import type { Metadata } from 'next';

export const SITE_URL = 'https://www.neoship.sk';

export const SITE_NAME = 'Neoship';

export const DEFAULT_DESCRIPTION =
  'Kuriérske služby, napojenia, jeden expedičný systém. Zefektívnite čas, optimalizujte financie a zvýšte váš obchodný potenciál.';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path = '/', keywords }: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'sk_SK',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/logo-neoship-oranzove.png`,
    sameAs: ['https://www.facebook.com/neoship.sk'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SK',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['Slovak', 'Czech'],
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: ['SK', 'CZ', 'AT', 'HU', 'DE', 'PL'],
  };
}
