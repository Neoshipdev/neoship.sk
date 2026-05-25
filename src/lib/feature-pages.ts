/**
 * Structured content for the 5 functionality subpages.
 * Each page is built from one object and rendered through the shared template
 * at `src/app/sluzby/[slug]/page.tsx`-style route — here each route file
 * imports the matching slug and passes it to <FeaturePageTemplate>.
 *
 * To add a new functionality subpage:
 *  1. Add a new entry to `featurePages` below.
 *  2. Create `src/app/sluzby/<slug>/page.tsx` that imports `featurePages['<slug>']`.
 *  3. Add it to the sitemap (`src/app/sitemap.ts`) and footer/navigation if needed.
 */

export type FeatureBullet = string;

export type FeatureSectionContent = {
  h2: string;
  body: string;
  bullets?: FeatureBullet[];
};

export type FeatureBenefit = {
  emoji: string;
  title: string;
  description: string;
};

export type FeaturePersona = {
  title: string;
  description: string;
};

export type FeatureStep = {
  number: number;
  title: string;
  description: string;
};

export type FeatureFaq = {
  question: string;
  answer: string;
};

export type FeatureCrossLink = {
  label: string;
  href: string;
  description: string;
};

export type FeaturePage = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    primaryCta: { label: string; openModal?: 'contact' };
    secondaryCta?: { label: string; href: string };
  };
  lead: string;
  sections: FeatureSectionContent[];
  benefits: {
    headline: string;
    items: FeatureBenefit[];
  };
  personas: {
    headline: string;
    items: FeaturePersona[];
  };
  steps?: {
    headline: string;
    items: FeatureStep[];
  };
  faq: FeatureFaq[];
  crossLinks: FeatureCrossLink[];
  cta: {
    headline: string;
    subtitle?: string;
    buttonLabel: string;
  };
};

/* ────────────────────────────────────────────────────────────────
   1) PREPOJENIA A TVORBA BALÍKOV
   ──────────────────────────────────────────────────────────────── */

const prepojeniaATvorbaBalikov: FeaturePage = {
  slug: 'prepojenia-a-tvorba-balikov',
  breadcrumbLabel: 'Prepojenia a tvorba balíkov',
  metadata: {
    title: 'Prepojenia a tvorba balíkov pre e-shop | Neoship',
    description:
      'Prepojte Neoship s vaším e-shopom alebo fakturačným systémom. Hotové integrácie pre Shoptet, WooCommerce, PrestaShop, SuperFaktúra, Pohoda. Hromadná tvorba balíkov cez API alebo importy.',
    keywords: [
      'prepojenie e-shopu',
      'integrácia kuriérskej služby',
      'API pre dopravcov',
      'hromadná tvorba balíkov',
      'plugin Shoptet',
      'plugin WooCommerce',
      'plugin PrestaShop',
    ],
  },
  hero: {
    eyebrow: 'Funkcionalita expedičného systému',
    h1: 'Prepojenia a tvorba balíkov pre váš e-shop',
    sub: 'Jedna integrácia, neobmedzené možnosti. Napojte Neoship na svoj e-shop alebo fakturačný systém a získajte rýchlu, pohodlnú a bezstarostnú tvorbu balíkov – bez ohľadu na to, koľko kuriérskych spoločností využívate dnes alebo budete využívať v budúcnosti.',
    primaryCta: { label: 'Chcem prepojenie', openModal: 'contact' },
    secondaryCta: { label: 'Pozrieť API dokumentáciu', href: 'https://doc.apiserver.neoship.sk' },
  },
  lead: 'Tvorba balíkov je jedna z najčastejších a najopakovanejších činností v každom e-shope. Ak ju musíte robiť ručne pre každú zásielku zvlášť, denne stratíte hodiny času. Neoship to mení – stačí jedno prepojenie s vaším e-shopom alebo fakturačným systémom a tvorba balíkov sa stáva otázkou pár klikov. A to nezávisle od toho, či využívate jedného alebo piatich prepravcov.',
  sections: [
    {
      h2: 'Rýchle a pohodlné napojenia bez zdĺhavej integrácie',
      body: 'Zabudnite na týždne strávené implementáciou API a tisícky eur za vývojárov. Naše hotové pluginy aktivujete za pár minút a s ich nastavením vám radi pomôžeme. Bez ohľadu na to, či máte e-shop na hotovej platforme alebo využívate špecializovaný fakturačný systém, máme pre vás riešenie pripravené na nasadenie ešte dnes.',
    },
    {
      h2: 'Hotové integrácie pre obľúbené slovenské a české platformy',
      body: 'Neoship má pripravené natívne prepojenia s najpoužívanejšími e-shopovými a fakturačnými systémami na trhu. Pre každú integráciu máme pripravený video návod, ktorý vás krok za krokom prevedie nastavením.',
      bullets: [
        'Shoptet – priame prepojenie cez API, export objednávok a tlač štítkov priamo v admine',
        'PrestaShop – plugin s podporou všetkých kuriérskych spoločností v Neoshipe',
        'WooCommerce – plugin pre WordPress s automatizovaným odosielaním zásielok',
        'SuperFaktúra – párovanie zásielok s faktúrami a automatické vyúčtovanie dobierok',
        'POHODA – integrácia obľúbeného účtovného systému s expedíciou na pár klikov',
        'NEONUS – prepojenie administračného systému s Neoshipom',
        'CREATIVE sites – natívna integrácia pre platformu',
      ],
    },
    {
      h2: 'Jedna integrácia pre všetkých prepravcov',
      body: 'Najväčšia výhoda Neoshipu? Jedným prepojením vyriešite napojenie všetkých kuriérskych spoločností naraz. Ak sa rozhodnete pre nového dopravcu alebo zmeníte aktuálneho, nemusíte robiť žiadne nové vývojárske úpravy. Stačí prepnúť prepravcu v Neoshipe a všetko funguje ďalej – bez prestojov, bez dodatočných nákladov.',
    },
    {
      h2: 'Široké možnosti individuálneho napojenia cez API',
      body: 'Máte vlastný e-shop, ERP systém alebo zákazkový softvér? Naša otvorená REST API dokumentácia (doc.apiserver.neoship.sk) vám umožní vytvoriť napojenie presne na mieru. API podporuje tvorbu balíkov, generovanie štítkov, sledovanie zásielok, správu dobierok aj reklamácií. Pre vývojárov máme pripravené príklady volaní v najpoužívanejších jazykoch.',
    },
    {
      h2: 'Podpora exportovaných súborov (.csv, .xml, .txt)',
      body: 'Ak váš systém neumožňuje napojenie cez API, môžete balíky vytvárať aj cez import a export súborov vo formátoch .csv, .xml a .txt. Najlepšia správa? Súbory, ktoré používate u vášho aktuálneho prepravcu, môžete naďalej využívať aj po prechode na Neoship. Bez prepisovania, bez nutnosti meniť procesy. Náš systém automaticky rozpozná štruktúru a zásielky vytvorí presne tak, ako ste zvyknutí.',
    },
    {
      h2: 'Hromadná tvorba balíkov – stovky zásielok za sekundy',
      body: 'Namiesto klikania na každý balík zvlášť môžete vytvoriť celú dennú dávku zásielok jedným kliknutím. Vyberte všetky aktuálne objednávky, potvrďte a Neoship vygeneruje všetky štítky naraz – pripravené na tlač buď ako PDF, alebo priamo na termálnu tlačiareň.',
    },
  ],
  benefits: {
    headline: 'Čo vám táto funkcionalita prinesie',
    items: [
      {
        emoji: '⏱️',
        title: 'Úspora niekoľkých hodín denne',
        description: 'Hromadná tvorba balíkov zruší opakované klikanie na každú objednávku zvlášť.',
      },
      {
        emoji: '💰',
        title: 'Žiadne náklady na vývoj',
        description: 'Pluginy sú zadarmo a aktivácia trvá minúty – nie týždne s vývojárom.',
      },
      {
        emoji: '🔄',
        title: 'Flexibilita pri zmene prepravcu',
        description: 'Jedno prepojenie pre všetkých – meňte prepravcov bez technických úprav.',
      },
      {
        emoji: '🛡️',
        title: 'Bezpečnosť a spoľahlivosť',
        description: 'Dáta sú chránené, prevádzka 24/7 a integrácie pravidelne aktualizované.',
      },
    ],
  },
  personas: {
    headline: 'Pre koho je to vhodné?',
    items: [
      {
        title: 'Začínajúci e-shop',
        description: 'Aktivujte plugin a začnite odosielať balíky ešte dnes – bez vývojárov.',
      },
      {
        title: 'Stredne veľký e-shop',
        description: 'Pripojte fakturačný systém a automatizujte tlač štítkov pre dennú dávku.',
      },
      {
        title: 'Veľký e-shop s vlastným riešením',
        description: 'Využite naše REST API a napojte Neoship presne podľa vašich procesov.',
      },
    ],
  },
  steps: {
    headline: 'Ako to funguje',
    items: [
      {
        number: 1,
        title: 'Vyberte typ napojenia',
        description: 'Plugin pre vašu platformu alebo API integrácia podľa zložitosti systému.',
      },
      {
        number: 2,
        title: 'Aktivujte za pár minút',
        description: 'S nastavením vám pomôžeme cez video návod alebo telefonicky.',
      },
      {
        number: 3,
        title: 'Vytvárajte balíky',
        description: 'Jednotlivo alebo hromadne, jedným klikom – bez čakania.',
      },
    ],
  },
  faq: [
    {
      question: 'Koľko stojí napojenie Neoshipu na môj e-shop?',
      answer: 'Aktivácia pluginov je zadarmo. Platíte iba za balíky podľa cenníka.',
    },
    {
      question: 'Ako dlho trvá implementácia?',
      answer:
        'Hotové pluginy spustíte za 10-30 minút. Pri API integrácii závisí od zložitosti vášho systému.',
    },
    {
      question: 'Funguje Neoship s mojím e-shopom?',
      answer:
        'Máme integrácie pre Shoptet, PrestaShop, WooCommerce, SuperFaktúru, Pohodu, NEONUS, CREATIVE sites. Ak váš systém nie je v zozname, pomôžeme s napojením cez API alebo cez import súborov.',
    },
    {
      question: 'Môžem využívať viacero prepravcov súčasne?',
      answer: 'Áno. Cez jedno prepojenie máte prístup ku všetkým kuriérskym spoločnostiam v Neoshipe.',
    },
    {
      question: 'Čo sa stane, keď zmením dopravcu?',
      answer: 'Nič na strane vášho systému. Stačí prepnúť prepravcu v Neoshipe.',
    },
  ],
  crossLinks: [
    {
      label: 'Prehľad o balíkoch',
      href: '/sluzby/prehlad-o-balikoch',
      description: 'Sledujte všetky balíky všetkých prepravcov v reálnom čase.',
    },
    {
      label: 'Expedičný systém Neoship',
      href: '/sluzby/expedicny-system-neoship',
      description: 'Komplexný dashboard pre celú vašu expedíciu.',
    },
    {
      label: 'Cenník',
      href: '/cennik',
      description: 'Pozrite si transparentné ceny za balíky.',
    },
  ],
  cta: {
    headline: 'Začnite expedovať efektívnejšie ešte dnes.',
    subtitle: 'Aktivujte plugin a vytvorte prvé balíky za pár minút.',
    buttonLabel: 'Chcem vyskúšať',
  },
};

/* ────────────────────────────────────────────────────────────────
   2) PREHĽAD O BALÍKOCH
   ──────────────────────────────────────────────────────────────── */

const prehladOBalikoch: FeaturePage = {
  slug: 'prehlad-o-balikoch',
  breadcrumbLabel: 'Prehľad o balíkoch',
  metadata: {
    title: 'Prehľad o balíkoch v reálnom čase | Neoship',
    description:
      'Sledujte všetky zásielky všetkých prepravcov z jedného expedičného systému. Doručené, na ceste, vrátené, reklamované balíky pod drobnohľadom 24/7.',
    keywords: [
      'prehľad balíkov',
      'sledovanie zásielok',
      'tracking',
      'doručené balíky',
      'vrátené balíky',
      'reklamácie zásielok',
    ],
  },
  hero: {
    eyebrow: 'Funkcionalita expedičného systému',
    h1: 'Prehľad o balíkoch v reálnom čase',
    sub: 'Majte všetky zásielky pod drobnohľadom – doručené, v preprave, nedoručené, vrátené aj reklamované. Z jedného expedičného systému, bez ohľadu na to, koľko prepravcov využívate.',
    primaryCta: { label: 'Chcem prehľad o balíkoch', openModal: 'contact' },
  },
  lead: 'Keď odosielate desiatky až stovky balíkov denne cez rôznych prepravcov, je takmer nemožné mať aktuálny prehľad bez správneho nástroja. Prihlasovať sa do piatich rôznych portálov, ručne kontrolovať stav každej zásielky a hľadať informácie v e-mailoch zaberá čas, ktorý môžete venovať rozvoju biznisu. Neoship všetko centralizuje – informácie o zásielkach všetkých dopravcov vidíte na jednej obrazovke v reálnom čase.',
  sections: [
    {
      h2: 'Všetky balíky všetkých prepravcov na jednom mieste',
      body: 'Neoship agreguje dáta zo SPS, GLS, Packety, DPD aj ďalších prepravcov a zobrazuje ich v jednotnom prehľadnom rozhraní. Bez prepínania medzi systémami, bez prihlasovania do desiatich portálov. Filtrujte podľa prepravcu, krajiny doručenia, stavu zásielky, dátumu odoslania alebo čísla objednávky.',
    },
    {
      h2: 'Detailné sledovanie každej zásielky',
      body: 'Pri každom balíku máte k dispozícii kompletnú históriu pohybu – kedy bol prevzatý kuriérom, kedy prišiel do depa, kedy bol odovzdaný na doručenie, kedy doručený.',
      bullets: [
        'Aktuálny stav a polohu balíka',
        'Časovú os pohybu zásielky',
        'Informácie o prijímateľovi',
        'Údaje o dobierke (ak je súčasťou)',
        'Históriu komunikácie s prepravcom',
      ],
    },
    {
      h2: 'Nedoručené balíky – rýchle riešenie problémov',
      body: 'Nedoručená zásielka znamená nahnevaného zákazníka aj potenciálne stratu objednávky. Neoship vám hneď ukáže, ktoré balíky sa nepodarilo doručiť, kde aktuálne sú a aký je dôvod. S jedným klikom môžete kontaktovať prepravcu priamo zo systému, požiadať o opätovné doručenie alebo dohodnúť výmenu doručovacej adresy.',
    },
    {
      h2: 'Vrátené balíky – kompletná správa vratiek',
      body: 'Vratky sú prirodzenou súčasťou e-commerce, ale ak ich nemáte pod kontrolou, môžu sa stať nákladnou nočnou morou. V Neoshipe vidíte všetky vrátené zásielky na jednom mieste vrátane dôvodu vrátenia, dátumu prevzatia a celkových nákladov spojených s vratkou. To vám umožňuje analyzovať dôvody vratiek a aktívne ich znižovať.',
    },
    {
      h2: 'Reklamované balíky a stratené zásielky',
      body: 'Pri reklamáciách rozhoduje rýchlosť. Neoship vám umožňuje označiť balík na reklamáciu priamo z prehľadu a zaznamenať komunikáciu s prepravcom. Vďaka centralizovanému evidovaniu máte presný prehľad o stave každej reklamácie a kompenzáciách od prepravcov.',
    },
    {
      h2: 'Príplatkové služby pod kontrolou',
      body: 'Sledujte zásielky s príplatkovými službami ako poistenie nad rámec, dobierka, doručenie do rúk vlastných, prelepenie či opätovné doručenie. Neoship eviduje, ktoré služby boli pri zásielke aktivované a koľko stáli.',
    },
    {
      h2: 'Priebeh doručovania v reálnom čase',
      body: 'Status zásielky sa aktualizuje automaticky podľa dát od prepravcov. Vy aj váš zákazník vidíte rovnaké informácie v rovnakom čase – žiadne prekvapenia, žiadne nedorozumenia.',
    },
  ],
  benefits: {
    headline: 'Čo vám táto funkcionalita prinesie',
    items: [
      {
        emoji: '🔍',
        title: '100 % prehľad',
        description: 'Všetky zásielky všetkých prepravcov na jednom mieste.',
      },
      {
        emoji: '⚡',
        title: 'Rýchle riešenie problémov',
        description: 'Komunikácia s prepravcom priamo zo systému – bez prepisovania údajov.',
      },
      {
        emoji: '📉',
        title: 'Nižšie náklady na vratky',
        description: 'Analýza dôvodov vrátenia vám pomôže ich systematicky znižovať.',
      },
      {
        emoji: '😊',
        title: 'Spokojnejší zákazníci',
        description: 'Aktuálne informácie o ich zásielkach v reálnom čase.',
      },
    ],
  },
  personas: {
    headline: 'Pre koho je to vhodné?',
    items: [
      {
        title: 'E-shopy s vysokým objemom zásielok',
        description: 'Sledujte stovky balíkov denne bez chaosu a prepínania medzi systémami.',
      },
      {
        title: 'E-shopy s viacerými prepravcami',
        description: 'Jeden prehľad namiesto piatich portálov – ušetríte čas aj nervy.',
      },
      {
        title: 'E-shopy s častými vratkami',
        description: 'Analyzujte dôvody vrátenia a znižujte ich pomer cielenými opatreniami.',
      },
    ],
  },
  faq: [
    {
      question: 'Ako často sa aktualizujú stavy zásielok?',
      answer:
        'Automaticky, podľa frekvencie aktualizácie zo strany prepravcov (typicky každých 10-30 minút).',
    },
    {
      question: 'Môžem komunikovať s prepravcom priamo zo systému?',
      answer:
        'Áno, pri každom balíku je tlačidlo na priamu komunikáciu. Žiadne prepisovanie údajov ani čakanie na linke.',
    },
    {
      question: 'Sú dáta zo všetkých prepravcov v rovnakom formáte?',
      answer: 'Áno. Neoship dáta unifikuje, takže ich porovnávate jednotne.',
    },
    {
      question: 'Môžem exportovať prehľad balíkov?',
      answer: 'Áno, do formátov CSV, XLS aj XML pre účtovníctvo alebo ďalšiu analýzu.',
    },
    {
      question: 'Ako dlho sú dáta o balíkoch dostupné?',
      answer: 'Štandardne minimálne 2 roky, pre účtovné účely podľa legislatívy.',
    },
  ],
  crossLinks: [
    {
      label: 'Prehľad o financiách',
      href: '/sluzby/prehlad-o-financiach',
      description: 'Detail ceny každého balíka a celkové náklady na expedíciu.',
    },
    {
      label: 'Štatistiky',
      href: '/sluzby/statistiky',
      description: 'Vývoj počtu balíkov, krajiny doručenia a pomer vratiek.',
    },
    {
      label: 'Párovanie dobierok',
      href: '/sluzby/parovanie-dobierok',
      description: 'Vyplatené aj nevyplatené dobierky ako na dlani.',
    },
  ],
  cta: {
    headline: 'Získajte kontrolu nad každou zásielkou.',
    subtitle: 'Spustite Neoship a zbavte sa chaosu s rôznymi portálmi prepravcov.',
    buttonLabel: 'Chcem vyskúšať',
  },
};

/* ────────────────────────────────────────────────────────────────
   3) PREHĽAD O FINANCIÁCH
   ──────────────────────────────────────────────────────────────── */

const prehladOFinanciach: FeaturePage = {
  slug: 'prehlad-o-financiach',
  breadcrumbLabel: 'Prehľad o financiách',
  metadata: {
    title: 'Prehľad o financiách v expedícii | Neoship',
    description:
      'Transparentné účtovanie každého balíka. Detail ceny, celkové náklady, náklady na vratky – každé euro pod kontrolou v expedičnom systéme Neoship.',
    keywords: [
      'náklady na expedíciu',
      'prehľad financií e-shop',
      'cena balíka',
      'náklady na vratky',
      'kalkulácia prepravy',
    ],
  },
  hero: {
    eyebrow: 'Funkcionalita expedičného systému',
    h1: 'Prehľad o financiách – každé euro pod kontrolou',
    sub: 'Transparentne, jednoducho a kedykoľvek si skontrolujete, za čo platíte. Detailná cena každého balíka, celkové náklady na expedíciu aj náklady na vratky – všetko v jednom systéme.',
    primaryCta: { label: 'Chcem mať financie pod kontrolou', openModal: 'contact' },
  },
  lead: 'V expedícii sa náklady ľahko schovajú v desiatkach malých položiek – príplatky za rozmer, poistenie, doručenie do rúk vlastných, neúspešné doručenia, vratky. Bez detailného prehľadu sa ľahko stane, že platíte viac, ako by ste mali. Neoship vám otvára čierne skrinky všetkých prepravcov a ukazuje každú položku jasne a transparentne, aby ste presne vedeli, za čo a koľko platíte.',
  sections: [
    {
      h2: 'Transparentné účtovanie každého balíka',
      body: 'Pri každej zásielke vidíte presný rozpad ceny – základná sadzba podľa hmotnosti a krajiny, príplatkové služby, poistenie, dobierka. Žiadne skryté poplatky, žiadne nepríjemné prekvapenia na konci mesiaca. Cenu balíka si môžete skontrolovať v reálnom čase priamo z prehľadu.',
    },
    {
      h2: 'Detail ceny balíka – položku po položke',
      body: 'Klik na ktorýkoľvek balík vám otvorí detailný cenník zásielky. Vďaka tomu môžete kalkulovať skutočné náklady na konkrétnu objednávku a vyhodnocovať jej maržu.',
      bullets: [
        'Základnú sadzbu za prepravu podľa hmotnosti a krajiny doručenia',
        'Príplatky (napr. nadrozmer, doručenie na adresu, doručenie v špeciálnom časovom okne)',
        'Cena za dobierku, ak je súčasťou',
        'Poistenie nad rámec štandardného krytia',
        'Vratky, ak balík nebol doručený a vrátil sa odosielateľovi',
      ],
    },
    {
      h2: 'Celkové náklady na expedíciu',
      body: 'Sumár za zvolené obdobie – deň, týždeň, mesiac, kvartál alebo vlastné rozpätie dátumov. Vidíte, koľko ste minuli celkovo, koľko priemerne na jeden balík, ako sa náklady vyvíjajú v čase a kde sú priestor na optimalizáciu.',
    },
    {
      h2: 'Náklady na vratky – často zabúdaná, ale podstatná položka',
      body: 'Vratka stojí dvakrát – raz pôvodnú dopravu, druhýkrát spätnú prepravu. V Neoshipe máte tieto náklady oddelene evidované a viete presne, akú časť celkového rozpočtu vám vratky odčerpávajú. Tieto dáta vám pomáhajú znižovať pomer vratiek a optimalizovať popis produktov, fotky a logistiku.',
    },
    {
      h2: 'Filtrovanie a exporty pre účtovníctvo',
      body: 'Náklady môžete filtrovať podľa prepravcu, krajiny, typu zásielky alebo časového obdobia. Všetky reporty exportujete do Excel, CSV, XML alebo SEPA XML a odovzdáte účtovníkovi alebo nahráte priamo do účtovného systému.',
    },
    {
      h2: 'Porovnanie cien medzi prepravcami',
      body: 'Vyhodnocujte, ktorý prepravca vám reálne vychádza najlacnejšie pre daný typ zásielky. Niekedy je rozdiel medzi prepravcami pri ľahkých balíkoch zanedbateľný, ale pri ťažkých alebo medzinárodných zásielkach môže byť dramatický. S Neoshipom máte dáta na podloženie každého rozhodnutia.',
    },
  ],
  benefits: {
    headline: 'Čo vám táto funkcionalita prinesie',
    items: [
      {
        emoji: '💎',
        title: 'Plná transparentnosť',
        description: 'Žiadne skryté poplatky a jasný rozpad každého balíka.',
      },
      {
        emoji: '📊',
        title: 'Lepšia kalkulácia marže',
        description: 'Skutočné náklady na expedíciu pri každom produkte a objednávke.',
      },
      {
        emoji: '✂️',
        title: 'Optimalizácia nákladov',
        description: 'Identifikujte drahé zásielky a šetrite cielene tam, kde to dáva zmysel.',
      },
      {
        emoji: '📥',
        title: 'Hladká účtovná uzávierka',
        description: 'Štruktúrované exporty pripravené pre účtovníka alebo účtovný systém.',
      },
    ],
  },
  personas: {
    headline: 'Pre koho je to vhodné?',
    items: [
      {
        title: 'CFO a finanční manažéri',
        description: 'Majte expedičné náklady pod kontrolou bez ručného spracovania faktúr.',
      },
      {
        title: 'Marketing a obchod',
        description: 'Kalkulujte správne marže produktov vrátane reálnych nákladov na dopravu.',
      },
      {
        title: 'Účtovníci',
        description: 'Exporty pripravené na ďalšie spracovanie – CSV, Excel, SEPA XML.',
      },
    ],
  },
  faq: [
    {
      question: 'Vidím skutočné fakturované ceny od prepravcov?',
      answer:
        'Áno, Neoship zobrazuje reálne náklady tak, ako vám ich fakturujú prepravcovia (alebo Neoship vo verzii Prémium).',
    },
    {
      question: 'Aké formáty exportu sú podporované?',
      answer: 'Excel, CSV, XML a SEPA XML.',
    },
    {
      question: 'Môžem exportovať náklady len pre konkrétny e-shop alebo divíziu?',
      answer:
        'Áno, podporujeme filtrovanie podľa zdrojového e-shopu, prepravcu, krajiny aj časového obdobia.',
    },
    {
      question: 'Ako sú evidované vratky?',
      answer:
        'Vratky sú evidované samostatne, takže presne vidíte, koľko vás stojí celý proces vrátenia zásielky.',
    },
    {
      question: 'Sú dáta o financiách zabezpečené?',
      answer: 'Áno. Neoship spĺňa štandardy zabezpečenia, vrátane GDPR a šifrovaného prenosu dát.',
    },
  ],
  crossLinks: [
    {
      label: 'Párovanie dobierok',
      href: '/sluzby/parovanie-dobierok',
      description: 'Automatické párovanie dobierok k faktúram a SEPA XML exporty.',
    },
    {
      label: 'Štatistiky',
      href: '/sluzby/statistiky',
      description: 'Hĺbková analýza expedície pre lepšie rozhodovanie.',
    },
    {
      label: 'Cenník',
      href: '/cennik',
      description: 'Pozrite si transparentné ceny za balíky.',
    },
  ],
  cta: {
    headline: 'Začnite šetriť na expedícii ešte dnes.',
    subtitle: 'Otvorte čiernu skrinku nákladov a získajte plnú kontrolu nad financiami.',
    buttonLabel: 'Chcem vyskúšať',
  },
};

/* ────────────────────────────────────────────────────────────────
   4) PÁROVANIE DOBIEROK
   ──────────────────────────────────────────────────────────────── */

const parovanieDobierok: FeaturePage = {
  slug: 'parovanie-dobierok',
  breadcrumbLabel: 'Párovanie dobierok',
  metadata: {
    title: 'Párovanie dobierok automaticky | Neoship',
    description:
      'Vyplatené aj nevyplatené dobierky ako na dlani. Hromadné párovanie k faktúram, export do SEPA XML, plánovanie cashflow – v expedičnom systéme Neoship.',
    keywords: [
      'párovanie dobierok',
      'dobierky e-shop',
      'SEPA XML export',
      'cashflow e-shop',
      'nevyplatené dobierky',
    ],
  },
  hero: {
    eyebrow: 'Funkcionalita expedičného systému',
    h1: 'Párovanie dobierok – cashflow pod kontrolou',
    sub: 'Dobierky všetkých prepravcov ako na dlani. Hromadné párovanie k faktúram, exporty do SEPA XML aj Excelu a prehľad nevyplatených dobierok pre plánovanie cashflow.',
    primaryCta: { label: 'Chcem mať dobierky pod kontrolou', openModal: 'contact' },
  },
  lead: 'Dobierky sú pre mnohé e-shopy stále kľúčový spôsob platby. Lenže s nimi prichádza administratíva – čakanie na vyplatenie, párovanie platieb od prepravcov k faktúram, sledovanie nevyplatených súm. Bez správneho systému strávite hodiny mesačne ručným ladením tabuliek a hľadaním chýbajúcich súm. Neoship to robí za vás – automaticky, presne a v reálnom čase.',
  sections: [
    {
      h2: 'Dobierky všetkých prepravcov v jednom prehľade',
      body: 'Bez ohľadu na to, či dobierky inkasuje SPS, GLS, Packeta, DPD alebo Slovenská pošta, Neoship všetky platby agreguje a zobrazuje na jednej obrazovke. Vidíte, koľko peňazí vám prepravcovia dlhujú, kedy boli inkasované a kedy ich máte očakávať na účet.',
    },
    {
      h2: 'Vyplatené dobierky – presne kedy a od koho',
      body: 'Pri každej dobierke vidíte presné údaje pre rýchle dohľadanie a vyúčtovanie. Vďaka tomu nemáte problém spätne dohľadať konkrétnu transakciu – aj keď sa pýta zákazník na potvrdenie alebo účtovník na pôvod platby.',
      bullets: [
        'Sumu dobierky a menu',
        'Dátum inkasovania zákazníkom',
        'Dátum vyplatenia zo strany prepravcu',
        'Variabilný symbol alebo referenciu transakcie',
        'Číslo balíka a meno zákazníka',
      ],
    },
    {
      h2: 'Nevyplatené dobierky – plánovanie cashflow',
      body: 'Cashflow plánovanie je pre rastúci e-shop existenčná téma. Neoship vám presne ukáže, koľko peňazí vám prepravcovia ešte dlhujú, kedy môžete očakávať vyplatenie a aké sumy prídu v ktorom týždni. Vďaka tomu dokážete realisticky plánovať nákupy tovaru, marketingové kampane aj výplaty zamestnancom.',
    },
    {
      h2: 'Hromadné párovanie dobierok k faktúram',
      body: 'Najväčšia bolesť e-commerce účtovníctva – manuálne priradzovanie inkasovaných platieb k vystaveným faktúram – zmizne. Neoship dobierky páruje hromadne aj individuálne, podľa variabilného symbolu, čísla balíka alebo sumy. Účtovník dostane jednoduchú správu, ktoré faktúry sú uhradené, ktoré ešte čakajú.',
    },
    {
      h2: 'Export do SEPA XML, Excel, CSV, XML',
      body: 'Aktuálny prehľad dobierok exportujete v ľubovoľnom formáte podľa potrieb vášho účtovníckého alebo bankového systému.',
      bullets: [
        'SEPA XML – pre rýchle nahranie do účtovného systému ako prijaté platby',
        'Excel (XLSX) – pre manuálnu kontrolu alebo prácu s dátami',
        'CSV – univerzálny formát pre import do iných systémov',
        'XML – pre individuálne automatizácie cez API',
      ],
    },
    {
      h2: 'Filter a vyhľadávanie',
      body: 'Hľadajte konkrétnu dobierku podľa čísla balíka, mena zákazníka, variabilného symbolu, sumy, prepravcu alebo dátumu. Výsledky aktualizujeme okamžite a vy nájdete každú jednu transakciu za sekundy.',
    },
  ],
  benefits: {
    headline: 'Čo vám táto funkcionalita prinesie',
    items: [
      {
        emoji: '💸',
        title: 'Žiadne stratené platby',
        description: 'Každú dobierku máte zaevidovanú a spárovanú s konkrétnym balíkom.',
      },
      {
        emoji: '📅',
        title: 'Predvídateľný cashflow',
        description: 'Vidíte, kedy a koľko peňazí vám prepravcovia ešte pošlú.',
      },
      {
        emoji: '⏱️',
        title: 'Úspora hodín mesačne',
        description: 'Automatické párovanie zruší ručné porovnávanie tabuliek.',
      },
      {
        emoji: '📑',
        title: 'Pripravené pre účtovníka',
        description: 'SEPA XML aj Excel exporty pripravené na priame nahranie.',
      },
    ],
  },
  personas: {
    headline: 'Pre koho je to vhodné?',
    items: [
      {
        title: 'E-shopy s vysokým podielom dobierok',
        description: 'Udržte si prehľad o stovkách platieb mesačne bez ručného ladenia.',
      },
      {
        title: 'Účtovné oddelenia',
        description: 'Ušetrite čas na opakujúcich sa činnostiach a sústreďte sa na analytiku.',
      },
      {
        title: 'Finančné riaditeľstvo',
        description: 'Plánujte cashflow na základe presných dát, nie odhadov.',
      },
    ],
  },
  steps: {
    headline: 'Ako to funguje',
    items: [
      {
        number: 1,
        title: 'Prepravca inkasuje dobierku',
        description: 'Informácia sa automaticky synchronizuje do Neoshipu.',
      },
      {
        number: 2,
        title: 'Neoship priradí platbu k zásielke',
        description: 'Vidíte ju ako „inkasovaná, čaká na vyplatenie".',
      },
      {
        number: 3,
        title: 'Po vyplatení od prepravcu',
        description: 'Platba prejde do stavu „vyplatená" a spárujete ju s faktúrou.',
      },
    ],
  },
  faq: [
    {
      question: 'Ako často sa dáta o dobierkach aktualizujú?',
      answer: 'Automaticky podľa frekvencie aktualizácie zo strany jednotlivých prepravcov.',
    },
    {
      question: 'Môžem zobraziť iba nevyplatené dobierky?',
      answer: 'Áno, jednoduchým filtrom v prehľade.',
    },
    {
      question: 'Podporujete SEPA XML formát pre import do banky?',
      answer: 'Áno, štandardný SEPA XML pre import do účtovných a bankových systémov.',
    },
    {
      question: 'Je párovanie automatické alebo manuálne?',
      answer:
        'Oboje. Neoship navrhne automatické párovanie, ktoré môžete potvrdiť alebo upraviť ručne.',
    },
    {
      question: 'Čo ak chýba dobierka, ktorá by mala byť vyplatená?',
      answer: 'Z prehľadu nevyplatených dobierok kontaktujete prepravcu priamo cez Neoship.',
    },
  ],
  crossLinks: [
    {
      label: 'Prehľad o financiách',
      href: '/sluzby/prehlad-o-financiach',
      description: 'Detail ceny každého balíka a celkové náklady na expedíciu.',
    },
    {
      label: 'Prehľad o balíkoch',
      href: '/sluzby/prehlad-o-balikoch',
      description: 'Sledujte všetky zásielky všetkých prepravcov v reálnom čase.',
    },
    {
      label: 'Expedičný systém Neoship',
      href: '/sluzby/expedicny-system-neoship',
      description: 'Komplexný dashboard pre celú vašu expedíciu.',
    },
  ],
  cta: {
    headline: 'Cashflow bez prekvapení začína tu.',
    subtitle: 'Spustite Neoship a získajte presný prehľad o všetkých dobierkach.',
    buttonLabel: 'Chcem vyskúšať',
  },
};

/* ────────────────────────────────────────────────────────────────
   5) ŠTATISTIKY
   ──────────────────────────────────────────────────────────────── */

const statistiky: FeaturePage = {
  slug: 'statistiky',
  breadcrumbLabel: 'Štatistiky',
  metadata: {
    title: 'Štatistiky expedície pre e-shop | Neoship',
    description:
      'Detailný štatistický prehľad o vašej expedícii. Počet balíkov, hmotnosti, krajiny doručenia, výdajné miesta a pomer vratiek – dáta pre lepšie rozhodovanie.',
    keywords: [
      'štatistiky e-shop',
      'štatistiky expedície',
      'počet balíkov',
      'pomer vratiek',
      'analýza doručovania',
      'BI pre e-commerce',
    ],
  },
  hero: {
    eyebrow: 'Funkcionalita expedičného systému',
    h1: 'Štatistiky expedície pre lepšie rozhodovanie',
    sub: 'Vývoj počtu balíkov podľa hmotnosti, krajín doručenia, doručenia na adresu či do výdajných miest. Vďaka štatistickému prehľadu sa dokážete efektívnejšie rozhodovať o ďalších aktivitách súvisiacich s expedovaním.',
    primaryCta: { label: 'Chcem detailné štatistiky', openModal: 'contact' },
  },
  lead: 'Dáta sú novodobá ropa, no v expedícii zostávajú pre väčšinu e-shopov nevyužité. A pritom práve dáta o tom, ako, kam a čo posielate, sú jedným z najsilnejších nástrojov pre optimalizáciu nákladov, výber prepravcov a strategické rozhodovanie o expanzii do nových krajín. Neoship vám tieto dáta servíruje v prehľadnej grafickej forme – bez nutnosti exportovať CSV a zápasiť s Excelom.',
  sections: [
    {
      h2: 'Komplexný štatistický prehľad expedície',
      body: 'Dashboard v Neoshipe vám na jednej obrazovke ukazuje kľúčové ukazovatele výkonu vašej expedície – počet balíkov, priemernú cenu, podiel jednotlivých prepravcov, najfrekventovanejšie krajiny doručenia, pomer vratiek a ďalšie. Filtre podľa časového obdobia (deň, týždeň, mesiac, kvartál, rok) vám umožnia porovnávať vývoj v čase.',
    },
    {
      h2: 'Počet balíkov v čase – sledujte rast aj sezónnosť',
      body: 'Graf vývoja počtu zásielok vám okamžite ukáže rast vášho biznisu, sezónne výkyvy aj efekt marketingových kampaní. Porovnávajte medziročne, medzimesačne alebo vlastné obdobia. Vďaka tomu môžete plánovať skladové zásoby, počet pracovníkov a kapacitu balenia.',
    },
    {
      h2: 'Štatistika podľa hmotnosti balíkov',
      body: 'Aké balíky najčastejšie odosielate? Ľahké balíky do 1 kg, balíky 1-5 kg, alebo ťažké balíky nad 10 kg? Distribúcia hmotností vám pomôže vyjednať lepšie sadzby s prepravcami pre vašu najtypickejšiu váhovú kategóriu, optimalizovať balenie a šetriť na obale.',
    },
    {
      h2: 'Krajiny doručenia a medzinárodná expedícia',
      body: 'Aký podiel zásielok ide do Česka, Maďarska, Rakúska, Nemecka, či ďalej? Štatistika podľa krajín doručenia vám ukáže, kde rastie dopyt a kam má zmysel cielene investovať do lokalizácie, marketingu alebo lokálnych dopravcov. Pre rastúce e-shopy je to základ pre rozhodnutie, či otvoriť lokálnu doménu alebo sklad v zahraničí.',
    },
    {
      h2: 'Doručenie na adresu vs. výdajné miesta',
      body: 'Preferujú vaši zákazníci doručenie na adresu, alebo si radšej balíky vyzdvihnú na pošte, v boxe alebo na výdajnom mieste? Tieto dáta vám pomôžu prispôsobiť ponuku spôsobov doručenia v e-shope a uprednostniť tých prepravcov, ktorých výdajné miesta zákazníci najviac využívajú.',
    },
    {
      h2: 'Pomer vratiek k celkovému počtu balíkov',
      body: 'Pomer vratiek je jeden z najdôležitejších ukazovateľov zdravia e-commerce biznisu. Neoship vám ho vypočíta automaticky, ukáže vývoj v čase a umožní vám porovnávať pomer vratiek medzi prepravcami alebo krajinami. Vysoký pomer vratiek je signál – môže ísť o problém s popisom produktov, kvalitou doručovania alebo segmentom zákazníkov. Bez dát ho nikdy neodhalíte.',
    },
    {
      h2: 'Exporty štatistík pre ďalšiu analýzu',
      body: 'Všetky štatistiky exportujete do Excelu alebo CSV pre hlbšiu analýzu vo vašich nástrojoch (Power BI, Google Data Studio, Tableau). Dáta tak žijú aj mimo Neoshipu – pre marketing, controlling, manažment.',
    },
  ],
  benefits: {
    headline: 'Čo vám táto funkcionalita prinesie',
    items: [
      {
        emoji: '📈',
        title: 'Lepšie strategické rozhodnutia',
        description: 'Založené na dátach, nie pocitoch – pri každom kroku biznisu.',
      },
      {
        emoji: '🎯',
        title: 'Cielená optimalizácia',
        description: 'Prepravcov, krajín a balení – tam, kde to dáva najväčší zmysel.',
      },
      {
        emoji: '🔬',
        title: 'Identifikácia anomálií',
        description: 'Nárast vratiek, výpadky doručovania a zmeny správania zákazníkov.',
      },
      {
        emoji: '🚀',
        title: 'Podklady pre rast',
        description: 'Kde investovať, čo škrtnúť a kam má zmysel expandovať.',
      },
    ],
  },
  personas: {
    headline: 'Pre koho je to vhodné?',
    items: [
      {
        title: 'Manažment e-shopu',
        description: 'Kľúčové ukazovatele na jednom dashboarde – bez čakania na reporty.',
      },
      {
        title: 'Marketing',
        description: 'Dáta o krajinách, sezónach a preferenciách zákazníkov pre kampane.',
      },
      {
        title: 'Controlling',
        description: 'Sledovanie efektivity expedície a identifikácia priestoru pre úspory.',
      },
    ],
  },
  faq: [
    {
      question: 'Sú štatistiky aktualizované v reálnom čase?',
      answer:
        'Áno, dashboard sa automaticky aktualizuje pri každej novej zásielke a stavovej zmene.',
    },
    {
      question: 'Môžem porovnávať obdobia medzi sebou?',
      answer: 'Áno, mesiac vs. mesiac, kvartál vs. kvartál, vlastné dátumové rozsahy.',
    },
    {
      question: 'Exportujem štatistiky pre vlastnú analýzu?',
      answer: 'Áno, do Excelu, CSV aj XML.',
    },
    {
      question: 'Sú štatistiky dostupné aj vo verzii Základ?',
      answer:
        'Vybrané ukazovatele áno (počet balíkov, krajiny). Detailné štatistiky (váhy, pomer vratiek) sú vo verzii Prémium.',
    },
    {
      question: 'Môžem si nastaviť vlastné KPI a alerty?',
      answer: 'Pracujeme na alertoch. Aktuálne sledujte kľúčové metriky priamo v dashboarde.',
    },
  ],
  crossLinks: [
    {
      label: 'Prehľad o balíkoch',
      href: '/sluzby/prehlad-o-balikoch',
      description: 'Detailné sledovanie každej zásielky v reálnom čase.',
    },
    {
      label: 'Prehľad o financiách',
      href: '/sluzby/prehlad-o-financiach',
      description: 'Detail ceny každého balíka a celkové náklady na expedíciu.',
    },
    {
      label: 'Expedičný systém Neoship',
      href: '/sluzby/expedicny-system-neoship',
      description: 'Komplexný dashboard pre celú vašu expedíciu.',
    },
  ],
  cta: {
    headline: 'Rozhodujte sa na základe dát, nie pocitov.',
    subtitle: 'Aktivujte expedičné štatistiky a získajte konkurenčnú výhodu.',
    buttonLabel: 'Chcem vyskúšať',
  },
};

/* ────────────────────────────────────────────────────────────────
   Registry
   ──────────────────────────────────────────────────────────────── */

export const featurePages = {
  'prepojenia-a-tvorba-balikov': prepojeniaATvorbaBalikov,
  'prehlad-o-balikoch': prehladOBalikoch,
  'prehlad-o-financiach': prehladOFinanciach,
  'parovanie-dobierok': parovanieDobierok,
  statistiky: statistiky,
} satisfies Record<string, FeaturePage>;

export type FeaturePageSlug = keyof typeof featurePages;

export const featurePageSlugs = Object.keys(featurePages) as FeaturePageSlug[];
