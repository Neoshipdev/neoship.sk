export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string;
  /** Voliteľný titulný obrázok (uložený v public/images/blog/). */
  image?: string;
  /** Voliteľný odkaz na pôvodný plný článok (mimo redesignu). */
  sourceUrl?: string;
};

const blogPostsData: Omit<BlogPost, 'image' | 'sourceUrl'>[] = [
  {
    slug: 'ako-znizit-pomer-vratiek',
    title: 'Ako znížiť pomer vratiek vo vašom e-shope o 30 %',
    excerpt:
      'Vratky sú jedna z najdrahších položiek e-commerce biznisu. Pozreli sme sa na dáta a vybrali 7 postupov, ktoré reálne fungujú.',
    date: '2026-04-18',
    category: 'Optimalizácia',
    body: `Vratky stoja viac, než si väčšina e-shopov uvedomuje. Okrem dvojnásobnej dopravy si pripočítajte aj čas na manipuláciu, kontrolu kvality, vrátenie do skladu a často aj zníženie hodnoty tovaru. V tomto článku rozoberáme 7 osvedčených postupov, ktoré v praxi znižujú pomer vratiek aj o desiatky percent.\n\nPrvý krok je vždy zmerať. Bez aktuálnych dát o pomere vratiek podľa kategórií, produktov a krajín strieľate naslepo. Druhý krok je optimalizácia popisov produktov – kvalitné fotky, presné rozmery a video ukážky výrazne znižujú pomer vratiek z dôvodu „iné očakávanie".`,
  },
  {
    slug: 'sprievodca-medzinarodnou-expediciou',
    title: 'Sprievodca medzinárodnou expedíciou: SK, CZ, HU, AT, DE',
    excerpt:
      'Aké sú reálne náklady na zahraničné doručenie a ktoré prepravcovia sa oplatia pre ktorý smer? Praktické porovnanie.',
    date: '2026-03-22',
    category: 'Doprava',
    body: `Medzinárodná expedícia je pre rastúce slovenské e-shopy logický ďalší krok. Ale výber prepravcu pre konkrétnu krajinu môže rozhodovať o tom, či nový trh bude ziskový. Pozrime sa na čísla.\n\nPre Českú republiku dáva najlepšiu cenu Packeta a SPS. Pre Maďarsko a Rakúsko sa zvyčajne oplatí GLS. Nemecko je doménou DPD a GLS. Pre Poľsko si najlepšiu cenu pririeknete cez Packetu.`,
  },
  {
    slug: 'shoptet-expedicia-best-practices',
    title: 'Shoptet + Neoship: 5 best practices pre rýchlejšiu expedíciu',
    excerpt:
      'Ako vyťažiť maximum z integrácie Shoptet a Neoship. Tipy pre nastavenie, automatizáciu a tlač štítkov.',
    date: '2026-02-14',
    category: 'Integrácie',
    body: `Shoptet a Neoship sú obľúbená kombinácia pre slovenské a české e-shopy. Tu je päť tipov, ako spojiť obe platformy tak, aby ste denne ušetrili hodinu času.`,
  },
  {
    slug: 'dobierky-cashflow-2026',
    title: 'Dobierky a cashflow v roku 2026: dáta a trendy',
    excerpt:
      'Pomer dobierkových platieb medziročne klesá, ale stále tvoria významnú časť obratu e-shopov. Pozreli sme sa na čerstvé čísla.',
    date: '2026-01-30',
    category: 'Financie',
    body: `Pomer dobierkových platieb medziročne klesá o 4-6 percentuálnych bodov, no v niektorých segmentoch (móda, šperky) tvoria stále 30-40 % objednávok. Pre tieto e-shopy je cashflow z dobierok kľúčový.`,
  },
  {
    slug: 'tlac-stitkov-zebra-vs-brother',
    title: 'Tlač štítkov: Zebra vs. Brother v reálnej prevádzke',
    excerpt:
      'Otestovali sme dve najpopulárnejšie termálne tlačiarne. Ktorá sa oplatí pre stredne veľký e-shop?',
    date: '2025-12-12',
    category: 'Tlač',
    body: `Termálne tlačiarne sú pre e-shop, ktorý odosiela viac ako 50 balíkov denne, nevyhnutnosť. Otázka je len, akú zvoliť. Porovnali sme Zebra ZD220 a Brother QL-820NWB.`,
  },
  {
    slug: 'pickup-points-vs-domov',
    title: 'Výdajné miesta vs. doručenie domov: čo preferujú zákazníci?',
    excerpt:
      'Slovenskí a českí zákazníci si čoraz častejšie vyberajú výdajné miesta. Aké sú dôvody?',
    date: '2025-11-05',
    category: 'E-commerce',
    body: `V roku 2026 si už viac ako 45 % slovenských zákazníkov vyberá výdajné miesto. Čo stojí za tým trendom a ako sa naň pripraviť?`,
  },

  /* ── Články prevzaté z neoship.sk/blog ── */
  {
    slug: 'ako-sa-pripravit-na-vianoce-s-marketingom-na-autopilota',
    title: 'Ako sa pripraviť na Vianoce s marketingom na autopilota',
    excerpt:
      'Vianoce sú pre e-shopy najsilnejším obdobím roka. Pozrite si, ako pripraviť marketing tak, aby fungoval aj počas sviatkov takmer na autopilota.',
    date: '2024-10-09',
    category: 'Z diania ecommerce',
    body: `Vianočné obdobie prináša pre e-shopy zvýšený dopyt, ostrú konkurenciu aj meniace sa trendy na sociálnych sieťach. Bez prípravy sa z najsilnejšieho obdobia roka ľahko stane chaos.\n\nKľúčom je naplánovať kampane vopred, automatizovať opakované úlohy a postaviť expedíciu tak, aby zvládla nárazový objem objednávok. V tomto článku rozoberáme, ako si nastaviť marketing aj logistiku tak, aby sviatky bežali takmer na autopilota.`,
  },
  {
    slug: '13-vzdelavacka-s-neoshipom-jednokusovky-vs-zlozene-zasielky',
    title: '#13 Vzdelávačka s Neoshipom: Jednokusovky vs. zložené zásielky',
    excerpt:
      'Jednokusové objednávky alebo zložené zásielky? Vysvetľujeme rozdiel a kedy sa ktorá oplatí pri expedícii.',
    date: '2024-10-09',
    category: 'Vzdelávačka s Neoshipom',
    body: `V trinástej časti vzdelávačky sa pozrieme na rozdiel medzi jednokusovými objednávkami a zloženými zásielkami. Každý typ má svoje špecifiká pri balení, tlači štítkov aj kalkulácii ceny prepravy.\n\nVysvetlíme, kedy sa ktorý prístup oplatí a ako Neoship pomáha s oboma typmi zásielok bez zbytočnej manuálnej práce.`,
  },
  {
    slug: '12-vzdelavacka-s-neoshipom-ako-na-cenu-dopravy-v-kosiku',
    title: '#12 Vzdelávačka s Neoshipom: Ako na cenu dopravy v košíku?',
    excerpt:
      'Ako správne nastaviť cenu dopravy v košíku, aby ste neodrádzali zákazníkov a zároveň nestrácali na maržach.',
    date: '2024-08-22',
    category: 'Vzdelávačka s Neoshipom',
    body: `Cena dopravy v košíku je jeden z najčastejších dôvodov, prečo zákazníci opúšťajú objednávku. Príliš vysoká odrádza, príliš nízka ukrojí z marže.\n\nV dvanástej časti vzdelávačky rozoberáme stratégie nastavenia ceny dopravy – od dopravy zadarmo nad limit, cez fixnú sadzbu, až po dynamický výpočet podľa hmotnosti a destinácie.`,
  },
  {
    slug: '11-vzdelavacka-s-neoshipom-preco-pohodlna-tlac-stitkov-je-len-cast-uspechu',
    title: '#11 Vzdelávačka s Neoshipom: Prečo pohodlná tlač štítkov je len časť úspechu?',
    excerpt:
      'Pohodlná tlač štítkov je dôležitá, no je len jedným dielikom skladačky úspešnej expedície.',
    date: '2024-08-08',
    category: 'Vzdelávačka s Neoshipom',
    body: `Rýchla a pohodlná tlač štítkov výrazne zrýchľuje expedíciu. No sama o sebe nestačí – úspešná expedícia je celý proces od prijatia objednávky až po doručenie.\n\nV jedenástej časti vzdelávačky vysvetľujeme, ktoré ďalšie kroky musia fungovať spolu s tlačou štítkov, aby vám expedícia naozaj šetrila čas aj peniaze.`,
  },
  {
    slug: '10-vzdelavacka-s-neoshipom-5-najcastejsich-predsudkov-u-mensich-eshoparov',
    title: '#10 Vzdelávačka s Neoshipom: 5 najčastejších predsudkov u menších eshopárov',
    excerpt:
      'Päť najčastejších predsudkov, ktoré bránia menším e-shopom zefektívniť expedíciu – a prečo neplatia.',
    date: '2024-08-01',
    category: 'Vzdelávačka s Neoshipom',
    body: `Mnohí menší eshopári odkladajú prechod na expedičný systém pre rozšírené mýty – že je to drahé, zložité alebo určené len pre veľké e-shopy.\n\nV desiatej časti vzdelávačky rozoberáme päť najčastejších predsudkov a vysvetľujeme, prečo v skutočnosti neplatia ani pre malé e-shopy.`,
  },
  {
    slug: 'interview-s-luigi-s-box',
    title:
      'Pomáhame eshopom s personalizovaným vyhľadávaním, odporúčaním produktov a výpisom kategórií – Interview s Luigi’s Box',
    excerpt:
      'Rozhovor s Luigi’s Box o personalizovanom vyhľadávaní, odporúčaní produktov a výpise kategórií pre e-shopy.',
    date: '2024-07-15',
    category: 'Všetky novinky',
    body: `V rozhovore s tímom Luigi’s Box sme sa rozprávali o tom, ako personalizované vyhľadávanie, inteligentné odporúčanie produktov a prehľadný výpis kategórií dokážu zvýšiť konverzný pomer e-shopu.\n\nReč prišla aj na dáta, automatizáciu a to, ako sa nástroje pre e-commerce navzájom dopĺňajú s expedičným systémom Neoship.`,
  },
  {
    slug: '9-vzdelavacka-s-neoshipom-rolls-royce-alebo-skoda',
    title: '#9 Vzdelávačka s Neoshipom: Rolls Royce alebo Škoda?',
    excerpt:
      'Rolls Royce alebo Škoda? Prirovnanie, ktoré vám pomôže vybrať správne expedičné riešenie pre váš e-shop.',
    date: '2024-06-27',
    category: 'Vzdelávačka s Neoshipom',
    body: `Pri výbere expedičného riešenia nejde o to mať „najluxusnejší" nástroj, ale ten správny pre vašu veľkosť a potreby. Rovnako ako pri autách – nie každý potrebuje Rolls Royce.\n\nV deviatej časti vzdelávačky vysvetľujeme, ako si vybrať riešenie, ktoré sedí vášmu objemu zásielok, rozpočtu aj plánom rastu.`,
  },
  {
    slug: '8-vzdelavacka-s-neoshipom-vydajne-miesta-preco-ano-a-ktore',
    title: '#8 Vzdelávačka s Neoshipom: Výdajné miesta? Prečo áno a ktoré.',
    excerpt:
      'Výdajné miesta sú čoraz obľúbenejšie. Vysvetľujeme, prečo ich ponúkať a ktoré sa oplatí zaradiť.',
    date: '2024-06-05',
    category: 'Vzdelávačka s Neoshipom',
    body: `Výdajné miesta, boxy a automaty sú pre slovenských a českých zákazníkov čoraz preferovanejším spôsobom doručenia. Pre e-shop znamenajú nižšiu cenu dopravy aj menej neúspešných doručení.\n\nV ôsmej časti vzdelávačky radíme, prečo výdajné miesta ponúkať a ktoré siete sa oplatí zaradiť do vášho košíka.`,
  },
  {
    slug: 'ako-zlepsit-tvorbu-postov-na-socialnych-sietach',
    title: '9 tipov, ako zlepšiť tvorbu postov na sociálne siete',
    excerpt:
      '9 praktických tipov, ako tvoriť lepšie príspevky na sociálne siete a získať väčší dosah pre váš e-shop.',
    date: '2024-05-29',
    category: 'Všetky novinky',
    body: `Sociálne siete sú pre e-shopy dôležitým kanálom na budovanie značky aj získavanie objednávok. Kvalitný obsah však nevzniká náhodou.\n\nV tomto článku prinášame 9 praktických tipov, ako tvoriť pútavejšie príspevky – od plánovania a vizuálov, cez texty, až po správne načasovanie a prácu s dosahom.`,
  },
];

/**
 * Titulné obrázky prebraté z pôvodnej blogovej sekcie neoship.sk
 * (uložené v public/images/blog/).
 */
const BLOG_IMAGE: Record<string, string> = {
  'ako-sa-pripravit-na-vianoce-s-marketingom-na-autopilota': 'tomarco-uvodna-foto.png',
  '13-vzdelavacka-s-neoshipom-jednokusovky-vs-zlozene-zasielky':
    '13-Jednokusovky-vs-zlozene-zasielky.png',
  '12-vzdelavacka-s-neoshipom-ako-na-cenu-dopravy-v-kosiku':
    '12-Ako-na-cenu-dopravy-v-kosiku.png',
  '11-vzdelavacka-s-neoshipom-preco-pohodlna-tlac-stitkov-je-len-cast-uspechu':
    '11-Preco-pohodlna-tlac-stitkov-je-len-cast-uspechu.png',
  '10-vzdelavacka-s-neoshipom-5-najcastejsich-predsudkov-u-mensich-eshoparov':
    '10-5-najcastejsich-predsudkov-u-mensich-eshoparov.png',
  'interview-s-luigi-s-box': '1721114196_Luigi-s-Box.png',
  '9-vzdelavacka-s-neoshipom-rolls-royce-alebo-skoda': 'Rolls-Royce-alebo-Skoda.png',
  '8-vzdelavacka-s-neoshipom-vydajne-miesta-preco-ano-a-ktore':
    '8-Vydajne-miesta-Preco-ano-a-ktore.png',
  'ako-zlepsit-tvorbu-postov-na-socialnych-sietach':
    '9-tipov-ako-zlepsit-tvorbu-postov-na-socialne-siete.png',
};

const BLOG_SOURCE_BASE = 'https://www.neoship.sk/clanky';

/** Príspevky obohatené o cover image a sourceUrl (kde existujú). */
export const blogPosts: BlogPost[] = blogPostsData.map((p) => {
  const file = BLOG_IMAGE[p.slug];
  return {
    ...p,
    ...(file ? { image: `/images/blog/${file}` } : {}),
    ...(file ? { sourceUrl: `${BLOG_SOURCE_BASE}/${p.slug}` } : {}),
  };
});

/** Všetky príspevky zoradené od najnovšieho po najstarší. */
export const blogPostsSorted: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
