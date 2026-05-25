import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { NavodyList } from '@/components/sections/NavodyList';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Návody pre Neoship | Krok za krokom',
  description:
    'Praktické návody na napojenie e-shopov a fakturačných systémov, aktiváciu pluginov, funkcionality Neoshipu a párovanie dobierok.',
  path: '/navody',
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'Návody', href: '/navody' }]} />

      <PageHero
        eyebrow="Vzdelávacie centrum"
        title="Návody pre Neoship"
        subtitle="Praktické sprievodce, ako využiť expedičný systém naplno – napojenie e-shopov a fakturačných systémov, aktivácia pluginov, funkcionality aj párovanie dobierok."
      />

      <NavodyList />

      <CTABanner
        headline="Nenašli ste návod, ktorý hľadáte?"
        subtitle="Napíšte nám – pošleme vám ho na mieru alebo natočíme video."
      />
    </>
  );
}
