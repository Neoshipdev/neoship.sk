import type { LucideIcon } from 'lucide-react';
import {
  Package,
  Cable,
  PackageSearch,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  Truck,
  Boxes,
  LayoutDashboard,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  /** Ak je nastavené, kliknutie otvorí modal namiesto navigácie. */
  modal?: 'contact' | 'ebook' | 'helper';
};

export type NavColumn = {
  eyebrow: string;
  links: NavLink[];
};

export type NavItem =
  | { label: string; href: string }
  | { label: string; columns: NavColumn[] }
  | { label: string; links: NavLink[] };

export const mainServices: NavLink[] = [
  {
    label: 'Kuriérske služby',
    href: '/sluzby/kurierske-sluzby',
    description: 'SPS, GLS, Packeta, Slovenská pošta, DPD, SDS pod jednou strechou',
    icon: Truck,
  },
  {
    label: 'Hromadná tvorba balíkov',
    href: '/sluzby/hromadna-tvorba-balikov',
    description: 'Stovky štítkov za pár sekúnd',
    icon: Boxes,
  },
  {
    label: 'Expedičný systém Neoship',
    href: '/sluzby/expedicny-system-neoship',
    description: 'Centrálny dashboard pre celú expedíciu',
    icon: LayoutDashboard,
  },
];

export const functionalityLinks: NavLink[] = [
  {
    label: 'Prepojenia a tvorba balíkov',
    href: '/sluzby/prepojenia-a-tvorba-balikov',
    description: 'Pluginy pre Shoptet, WooCommerce, Pohoda',
    icon: Cable,
  },
  {
    label: 'Prehľad o balíkoch',
    href: '/sluzby/prehlad-o-balikoch',
    description: 'Tracking všetkých prepravcov naraz',
    icon: PackageSearch,
  },
  {
    label: 'Prehľad o financiách',
    href: '/sluzby/prehlad-o-financiach',
    description: 'Každé euro pod kontrolou',
    icon: Wallet,
  },
  {
    label: 'Párovanie dobierok',
    href: '/sluzby/parovanie-dobierok',
    description: 'Automatické párovanie + SEPA XML',
    icon: ArrowLeftRight,
  },
  {
    label: 'Štatistiky',
    href: '/sluzby/statistiky',
    description: 'Dáta pre lepšie rozhodovanie',
    icon: BarChart3,
  },
];

export const navigation: NavItem[] = [
  {
    label: 'Služby',
    columns: [
      { eyebrow: 'Hlavné služby', links: mainServices },
      { eyebrow: 'Funkcionality systému', links: functionalityLinks },
    ],
  },
  {
    label: 'Podpora',
    links: [
      { label: 'Návody', href: '/navody' },
      { label: 'FAQ', href: '/faq' },
      { label: 'E-book', href: '/#zdroje' },
      { label: 'Pomocník', href: '/#zdroje', modal: 'helper' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Spoločnosť',
    links: [
      { label: 'O firme', href: '/o-nas' },
      { label: 'Kariéra', href: '/kariera', badge: '0' },
      { label: 'Referencie', href: '/referencie' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  { label: 'Cenník', href: '/cennik' },
];

/* ───────────────────────── Hero mockup ───────────────────────── */

export type MockupRow = {
  checked: boolean;
  status: 'Doručený' | 'Na ceste' | 'Pripravený' | 'Vyzdvihnutie' | 'Štítok pripravený';
  trackingId: string;
  carrier: 'SPS' | 'GLS' | 'Packeta' | 'DPD';
  country: 'SK' | 'CZ' | 'HU' | 'AT';
};

export const mockupRows: MockupRow[] = [
  { checked: true, status: 'Doručený', trackingId: 'NS-10388339', carrier: 'SPS', country: 'SK' },
  { checked: true, status: 'Na ceste', trackingId: 'NS-10325327', carrier: 'GLS', country: 'CZ' },
  { checked: true, status: 'Pripravený', trackingId: 'NS-10248391', carrier: 'Packeta', country: 'SK' },
  { checked: false, status: 'Vyzdvihnutie', trackingId: 'NS-10231329', carrier: 'DPD', country: 'SK' },
  { checked: false, status: 'Štítok pripravený', trackingId: 'NS-10228342', carrier: 'SPS', country: 'CZ' },
];

/* ───────────────────────── Stats ───────────────────────── */

export const stats = [
  { value: 13, suffix: ' r.', label: 'na trhu' },
  { value: 1, suffix: ' mil.+', label: 'vyexpedovaných balíkov' },
  { value: 150, suffix: '+', label: 'stálych klientov' },
  { value: 24, suffix: '/7', label: 'prehľad o balíkoch a financiách' },
];

/* ───────────────────────── Services tabs ───────────────────────── */

export type ServiceTab = {
  id: string;
  title: string;
  icon: LucideIcon;
  intro: string;
  bullets: string[];
  cta: { label: string; href: string };
  image?: { src: string; alt: string };
};

export const serviceTabs: ServiceTab[] = [
  {
    id: 'kurierske',
    title: 'Kuriérske služby',
    icon: Truck,
    intro:
      'Partnerské kuriérske spoločnosti SPS, GLS, Packeta, Slovenská pošta a SDS dostupné okamžite cez Prémium balík, alebo vlastné zmluvy s DPD, SPS, GLS, Packetou a Slovenskou poštou cez Základ.',
    bullets: [
      'SPS, GLS, Packeta, Slovenská pošta, SDS okamžite – bez vlastných zmlúv (Prémium)',
      'Vlastné zmluvy s DPD, SPS, GLS, Packeta, Slovenská pošta (Základ)',
      'Doručenie na Slovensku aj do zahraničia',
      'Doručenie na adresu aj do výdajných miest',
    ],
    cta: { label: 'Pozrieť kuriérske služby', href: '/sluzby/kurierske-sluzby' },
    image: {
      src: '/images/dopravci.png',
      alt: 'Vyberte si svoju kuriérsku spoločnosť – DPD, GLS, SPS, Packeta',
    },
  },
  {
    id: 'hromadna',
    title: 'Hromadná tvorba balíkov',
    icon: Boxes,
    intro:
      'Stovky balíkov za pár sekúnd. Importy z e-shopu, hotové napojenia a rýchla tlač štítkov na termálnu aj bežnú tlačiareň.',
    bullets: [
      'Bezstarostná tvorba balíkov v sekundách',
      'Rýchla tlač štítkov – PDF aj termálna tlačiareň',
      'Hotové napojenia na Shoptet, WooCommerce, Pohoda',
      'Import a export súborov vo formátoch CSV, XML, TXT',
    ],
    cta: { label: 'Zistiť viac o hromadnej tvorbe', href: '/sluzby/hromadna-tvorba-balikov' },
    image: {
      src: '/images/hromadne.png',
      alt: 'Hromadná tvorba balíkov v expedičnom systéme Neoship',
    },
  },
  {
    id: 'system',
    title: 'Expedičný systém Neoship',
    icon: LayoutDashboard,
    intro:
      'Centrálny dashboard, kde máte všetko o expedícii pod kontrolou – od stavu balíkov, cez financie a dobierky, až po štatistiky a komunikáciu so zákazníkmi.',
    bullets: [
      'Všetky informácie o balíkoch v reálnom čase',
      'Financie, faktúry a dobierky na jednom mieste',
      'Detailné štatistiky a exporty pre účtovníctvo',
      'Personalizované e-maily a SMS pre zákazníkov',
    ],
    cta: { label: 'Objaviť expedičný systém', href: '/sluzby/expedicny-system-neoship' },
    image: {
      src: '/images/jedensystem.png',
      alt: 'Expedičný systém Neoship – všetko v jednom systéme',
    },
  },
];

/* ───────────────────────── Plan comparison ───────────────────────── */

export type PlanRowFlag = boolean;

export type PlanCategory = {
  title: string;
  rows: { label: string; premium: PlanRowFlag; basic: PlanRowFlag }[];
};

export const planComparison: PlanCategory[] = [
  {
    title: 'Prepojenia a tvorba balíkov',
    rows: [
      {
        label: 'Jedno prepojenie bez ohľadu na počet využívaných prepravcov',
        premium: true,
        basic: true,
      },
      { label: 'Prepojenie Neoshipu s e-shopom', premium: true, basic: true },
      { label: 'Prepojenie Neoshipu s fakturačným systémom', premium: true, basic: true },
      { label: 'Individuálne prepojenie cez API', premium: true, basic: true },
      {
        label: 'Hromadná tvorba balíkov cez .xml, .csv, .txt súbory',
        premium: true,
        basic: true,
      },
    ],
  },
  {
    title: 'Prehľad o balíkoch',
    rows: [
      { label: 'Nedoručené balíky', premium: true, basic: false },
      { label: 'Vrátené balíky', premium: true, basic: false },
      { label: 'Príplatkové služby', premium: true, basic: false },
      { label: 'Priebeh doručovania', premium: true, basic: true },
    ],
  },
  {
    title: 'Prehľad o financiách',
    rows: [
      { label: 'Detail ceny balíka', premium: true, basic: false },
      { label: 'Celkové náklady', premium: true, basic: false },
      { label: 'Náklady na vratky', premium: true, basic: false },
      { label: 'Vyplatené dobierky', premium: true, basic: false },
      { label: 'Nevyplatené dobierky', premium: true, basic: false },
      {
        label: 'Export do SEPA XML a párovanie dobierok s faktúrami',
        premium: true,
        basic: false,
      },
    ],
  },
  {
    title: 'Efektívna komunikácia',
    rows: [
      { label: 'Priama komunikácia s prepravcom', premium: true, basic: true },
      {
        label:
          'Individuálne notifikačné emaily pre príjemcov balíkov s prelinkom na sociálne siete a sledovanie balíka',
        premium: true,
        basic: true,
      },
      { label: 'Chat so zákazníckou podporou', premium: true, basic: true },
    ],
  },
  {
    title: 'Štatistiky',
    rows: [
      { label: 'Počet balíkov', premium: true, basic: true },
      { label: 'Spôsob doručenia', premium: true, basic: true },
      { label: 'Váhy balíkov', premium: true, basic: false },
      { label: '% pomer vratiek k celkovému počtu balíkov', premium: true, basic: false },
    ],
  },
];

/* ───────────────────────── Testimonials ───────────────────────── */

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  url: string;
  /** Voliteľné logo e-shopu (uložené v public/images/testimonials/). */
  logo?: string;
  /** Voliteľné zväčšenie loga (pre logá, ktoré sú v štandardnej veľkosti príliš malé). */
  logoLarge?: boolean;
};

import testimonialQuotes from './testimonials-quotes.json';

/**
 * Citáty (autor + company + quote) prevzaté priamo z homepage neoship.sk
 * cez `scripts/fetch-testimonials.mjs`. URL a logo mapujeme manuálne podľa company.
 */
type ExtractedQuote = {
  logoFile: string | null;
  author: string;
  company: string;
  quote: string;
};
const EXTRACTED = testimonialQuotes as ExtractedQuote[];

/** Mapovanie company → URL eshopu a názov logo súboru v public/images/testimonials/. */
const TESTIMONIAL_META: Record<string, { url: string; logo: string }> = {
  'madebythe.com': {
    url: 'https://madebythe.com',
    logo: '/images/testimonials/1676449926_madebythe.png',
  },
  'hovienkovo.sk': {
    url: 'https://hovienkovo.sk',
    logo: '/images/testimonials/hovienkovo.png',
  },
  'fragaria.sk': {
    url: 'https://fragaria.sk',
    logo: '/images/testimonials/fragaria.png',
  },
  'biostyle.sk': {
    url: 'https://biostyle.sk',
    logo: '/images/testimonials/biostyle-logo.jpg',
  },
  'topankaren.sk': {
    url: 'https://topankaren.sk',
    logo: '/images/testimonials/topankaren.jpeg',
  },
  'kristinatormova.sk': {
    url: 'https://kristinatormova.sk',
    logo: '/images/testimonials/logo-kristinatormova.png',
  },
  'autodielygafa.sk': {
    url: 'https://autodielygafa.sk',
    logo: '/images/testimonials/GAFA-LOGO-PRIMARY-RGB-BLACK.png',
  },
  'detskykutik.sk': {
    url: 'https://detskykutik.sk',
    logo: '/images/testimonials/1662468064_logo-detsky-kutik.jpg',
  },
  'kuchynovo.sk': {
    url: 'https://kuchynovo.sk',
    logo: '/images/testimonials/kuchynovo.jpg',
  },
};

const fromNeoship: Testimonial[] = EXTRACTED.map((e) => {
  const meta = TESTIMONIAL_META[e.company];
  return {
    quote: e.quote,
    author: e.author,
    company: e.company,
    url: meta?.url ?? '#',
    ...(meta?.logo ? { logo: meta.logo } : {}),
  };
});

export const testimonials: Testimonial[] = [
  ...fromNeoship,
  {
    quote:
      'Neoship nám veľmi zjednodušil administráciu a kontakt s dopravcami. Náš zákaznícky servis oceňuje jednoduché vyhľadávanie a možnosť kontaktovať všetkých dopravcov cez jeden systém. Mne pomáhajú štatistiky pri vyhodnocovaní vratkovosti a pomáhajú mi udržať si prehľad o zásielkach pri veľkom množstve zasielaných balíkov.',
    author: 'Juraj Balogh',
    company: 'Panta Rhei',
    url: 'https://www.pantarhei.sk',
    logo: '/images/testimonials/pantarhei.png',
    logoLarge: true,
  },
];

/* ───────────────────────── Functionality grid (home) ───────────────────────── */

export const homeFunctionalityCards = [
  {
    title: 'Prepojenia a tvorba balíkov',
    description:
      'Hotové integrácie pre Shoptet, WooCommerce, PrestaShop a SuperFaktúru. Jedna integrácia, všetci prepravcovia.',
    href: '/sluzby/prepojenia-a-tvorba-balikov',
    icon: Cable,
  },
  {
    title: 'Prehľad o balíkoch',
    description:
      'Všetky zásielky všetkých prepravcov v reálnom čase. Doručené, na ceste, vrátené aj reklamované.',
    href: '/sluzby/prehlad-o-balikoch',
    icon: PackageSearch,
  },
  {
    title: 'Prehľad o financiách',
    description:
      'Transparentné účtovanie každého balíka. Detail ceny, celkové náklady a náklady na vratky.',
    href: '/sluzby/prehlad-o-financiach',
    icon: Wallet,
  },
  {
    title: 'Párovanie dobierok',
    description:
      'Vyplatené aj nevyplatené dobierky ako na dlani. Hromadné párovanie k faktúram, exporty do SEPA XML.',
    href: '/sluzby/parovanie-dobierok',
    icon: ArrowLeftRight,
  },
  {
    title: 'Štatistiky',
    description:
      'Detailný štatistický prehľad o expedícii – počet balíkov, hmotnosti, krajiny doručenia, pomer vratiek.',
    href: '/sluzby/statistiky',
    icon: BarChart3,
  },
] as const;

/* ───────────────────────── Footer links ───────────────────────── */

export const footerColumns = [
  {
    title: 'Služby',
    links: [
      { label: 'Kuriérske služby', href: '/sluzby/kurierske-sluzby' },
      { label: 'Hromadná tvorba balíkov', href: '/sluzby/hromadna-tvorba-balikov' },
      { label: 'Expedičný systém Neoship', href: '/sluzby/expedicny-system-neoship' },
    ],
  },
  {
    title: 'Funkcionality',
    links: [
      { label: 'Prepojenia a tvorba balíkov', href: '/sluzby/prepojenia-a-tvorba-balikov' },
      { label: 'Prehľad o balíkoch', href: '/sluzby/prehlad-o-balikoch' },
      { label: 'Prehľad o financiách', href: '/sluzby/prehlad-o-financiach' },
      { label: 'Párovanie dobierok', href: '/sluzby/parovanie-dobierok' },
      { label: 'Štatistiky', href: '/sluzby/statistiky' },
    ],
  },
  {
    title: 'Podpora',
    links: [
      { label: 'Návody', href: '/navody' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Cenník', href: '/cennik' },
      { label: 'Staňte sa partnerom', href: '/stante-sa-partnerom' },
    ],
  },
  {
    title: 'Spoločnosť',
    links: [
      { label: 'O firme', href: '/o-nas' },
      { label: 'Kariéra', href: '/kariera' },
      { label: 'Referencie', href: '/referencie' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Užitočné linky',
    links: [
      { label: 'Pravidlá ochrany osobných údajov', href: '/pravidla-ochrany-osobnych-udajov' },
      { label: 'VOP NEOSHIP s.r.o.', href: '/vseobecne-obchodne-podmienky' },
      { label: 'API dokumentácia', href: 'https://doc.apiserver.neoship.sk' },
    ],
  },
];

/* ───────────────────────── Helpers ───────────────────────── */

export const carriers = ['SPS', 'GLS', 'Packeta', 'DPD'] as const;

export const integrations = [
  'Shoptet',
  'WooCommerce',
  'Shopify',
  'PrestaShop',
  'SuperFaktúra',
  'Pohoda',
] as const;
