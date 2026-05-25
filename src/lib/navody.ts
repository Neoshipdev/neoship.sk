/**
 * Návody (tutoriály) prevzaté z neoship.sk/navody.
 * Každý návod má vlastnú podstránku /navody/[slug].
 */

export const NAVOD_CATEGORIES = [
  'Eshopové systémy',
  'Fakturačné systémy',
  'Manuály - Aktivácia pluginov',
  'Funkcionality v Neoshipe',
  'Párovanie dobierok',
] as const;

export type NavodCategory = (typeof NAVOD_CATEGORIES)[number];

export type NavodBlock =
  | { type: 'text'; text: string }
  | { type: 'steps'; title?: string; items: string[] }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'heading'; text: string };

export type Navod = {
  slug: string;
  title: string;
  category: NavodCategory;
  perex: string;
  blocks: NavodBlock[];
  image: string;
  /** Snímky obrazovky z postupu (z neoship.sk), v poradí. */
  gallery: string[];
  /** Voliteľné YouTube video (embed URL). */
  video?: string;
  /** Skryť titulný obrázok na detailnej stránke návodu (karta v zozname ho zobrazí ďalej). */
  hideHeroImage?: boolean;
};

const navodyData: Omit<Navod, 'image' | 'gallery'>[] = [
  /* ───────────── Eshopové systémy ───────────── */
  {
    slug: 'neoship-shoptet-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & Shoptet: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Eshopové systémy',
    perex:
      'Automatizujte vašu expedíciu vďaka konektoru Neoship, ktorý je pripravený pre všetkých užívateľov Shoptetu. Bezstarostná tvorba balíkov a pohodlná tlač štítkov už bude samozrejmosťou. Vďaka konektoru vyexpedujete objednávky a vytlačíte štítky pre SPS, GLS, Packetu a DPD.',
    blocks: [],
    video: 'https://www.youtube.com/embed/bbT6PK8kCr4?start=1',
    hideHeroImage: true,
  },
  {
    slug: 'neoship-prestashop-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & Prestashop: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Eshopové systémy',
    perex:
      'Konektor Neoship pre Prestashop slúži na automatizovaný prenos dát z objednávok za účelom bezstarostnej tvorby balíkov a pohodlnej tlače prepravných štítkov. Bezohľadu na využívanú kuriérsku spoločnosť v Neoshipe.',
    blocks: [],
    video: 'https://www.youtube.com/embed/Af2NW_-kXDA',
    hideHeroImage: true,
  },
  {
    slug: 'neoship-woocommerce-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & WooCommerce: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Eshopové systémy',
    perex:
      'Všetci eshopári na WooCommerce zbystrite pozornosť. Expedícia objednávok a automatizovaná tlač štítkov z WooCommerce je k dispozícii už pre 5 kuriérskych spoločností - GLS, SPS, Packeta a DPD. Okrem samotnej expedície môžete pri každej objednávke sledovať aj priebeh doručovania.',
    blocks: [],
    video: 'https://www.youtube.com/embed/BGYFseViOgc',
    hideHeroImage: true,
  },
  {
    slug: 'neoship-neonus-automatizacia-expedovania-s-dvomi-prepravnymi-alternativami',
    title: 'Neoship & Neonus: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Eshopové systémy',
    perex:
      'Aj eshopy vytvorené spoločnosťou Neonus môžu expedovať a tlačiť štítky priamo z eshopu. V module Neoship sú implementované možnosti exportu dát pre prepravné spoločnosti GLS, SPS a Packetu.',
    blocks: [],
    video: 'https://www.youtube.com/embed/G9dpt6GdNO0',
    hideHeroImage: true,
  },
  {
    slug: 'neoship-creative-sites-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title:
      'Neoship & CREATIVE sites: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Eshopové systémy',
    perex:
      'Modul Neoship v CREATIVE shope umožňuje automatizované expedovanie a tlač štítkov pre štyri prepravné spoločnosti: SPS, GLS a Packetu. Pre tieto účely si môžete vybrať jednu z nich alebo kombinovať všetky štyri. Nahliadnite do videa a dozviete sa viac.',
    blocks: [],
    video: 'https://www.youtube.com/embed/cxprOhU6qYE',
    hideHeroImage: true,
  },
  {
    slug: 'hromadny-export-dat-z-webarealu-do-neoshipu',
    title: 'Hromadný export dát z Webarealu do Neoshipu',
    category: 'Eshopové systémy',
    perex:
      'Ďalším z open-source riešení, odkiaľ jednoducho exportujete údaje o príjemcoch a nahráte ich do Neoshipu, je e-shopový systém Webareal.',
    blocks: [
      { type: 'heading', text: 'Pre export dát vo Webareali postupujete nasledovne:' },
      { type: 'text', text: '1. V administrácii si označíte objednávky, ktoré chcete expedovať.' },
      { type: 'text', text: '2. Kliknete na tlačidlo nastavení.' },
      {
        type: 'image',
        src: '/images/navody/steps/1665053052_1-Export-objednavok-z-Webarealu.png',
        alt: 'Export objednávok z Webarealu',
      },
      { type: 'text', text: '3. Z možností vyberiete GLS export.' },
      {
        type: 'image',
        src: '/images/navody/steps/1665053094_2-GLS-export-pre-Neoship.png',
        alt: 'GLS export pre Neoship',
      },
      {
        type: 'text',
        text: '4. V danom medzikroku sa vám zobrazia objednávky pripravené na export. Potvrdíte tlačidlom exportovať.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1665053125_3-Exportovat.png',
        alt: 'Tlačidlo Exportovať',
      },
      { type: 'text', text: '5. Vygeneruje sa vám CSV súbor, ktorý si uložíte.' },
      { type: 'image', src: '/images/navody/steps/1665053155_CSV-subor.png', alt: 'CSV súbor' },

      { type: 'heading', text: 'Pre import dát v Neoshipe postupujete nasledovne:' },
      { type: 'text', text: '1. Na hornej fialovej lište si kliknete na ikonku balíka:' },
      { type: 'image', src: '/images/navody/steps/1665056280_Balik.png', alt: 'Ikona balíka' },
      {
        type: 'text',
        text: '2. Vyberiete si, cez ktorého kuriéra budete posielať balíky a kliknete na tlačidlo „Importovať“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/import-CSV-do-Neoshipu-1.png',
        alt: 'Import CSV do Neoshipu',
      },
      { type: 'text', text: '3. Z uvedených možností si vyberiete:' },
      { type: 'image', src: '/images/navody/steps/Import-CSV-1.png', alt: 'Výber typu importu' },
      {
        type: 'text',
        text: '4. Dáta z objednávok sa nahrajú do Neoshipu, odkiaľ si vytlačíte štítky a preberací protokol.',
      },
    ],
  },
  {
    slug: 'hromadny-export-dat-z-clickeshopu-do-neoshipu',
    title: 'Hromadný export dát z Clickeshopu do Neoshipu',
    category: 'Eshopové systémy',
    perex:
      'V clickeshop systéme máte možnosť exportovať informácie z objednávok pre viaceré kuriérske spoločnosti. Konkrétny export pre „Neoship“ sa v exportných možnostiach nenachádza. Pre tieto účely však bude postačovať súbor určený pre akéhokoľvek kuriéra.',
    blocks: [
      { type: 'heading', text: 'Pre export dát v clickeshope postupujete nasledovne:' },
      { type: 'text', text: '1. V prehľade objednávok si zvolíte „Export dopravcovia“.' },
      { type: 'text', text: '2. Zvolíte si vami vybrané obdobie.' },
      {
        type: 'text',
        text: '3. Označíte si objednávky a vyberiete export pre kuriéra – môže to byť napr. GLS kuriér.',
      },

      { type: 'heading', text: 'Pre import dát do Neoshipu postupujete nasledovne:' },
      { type: 'text', text: '1. Na hornej fialovej lište si kliknete na ikonku balíka:' },
      {
        type: 'image',
        src: '/images/navody/steps/1662634730_ikona-balika-v-Neoshipe.png',
        alt: 'Ikona balíka v Neoshipe',
      },
      {
        type: 'text',
        text: '2. Vyberiete si, cez ktorého kuriéra budete posielať balíky a kliknete na tlačidlo „Importovať“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/import-CSV-do-Neoshipu.png',
        alt: 'Import CSV do Neoshipu',
      },
      { type: 'text', text: '3. Z uvedených možností si vyberiete:' },
      {
        type: 'image',
        src: '/images/navody/steps/Import-CSV-clickeshop.png',
        alt: 'Výber typu importu',
      },
      {
        type: 'text',
        text: '4. Dáta z objednávok sa nahrajú do Neoshipu, odkiaľ si vytlačíte štítky a preberací protokol.',
      },
    ],
  },
  {
    slug: 'hromadny-export-dat-z-bizniswebu-do-neoshipu',
    title: 'Hromadný export dát z BiznisWebu do Neoshipu',
    category: 'Eshopové systémy',
    perex:
      'Dáta s údajmi o príjemcoch dostanete z BiznisWebu veľmi jednoducho. Bude stačiť vyexportovaný XML súbor, ktorý jednoducho nahráte do Neoshipu. Tlač štítkov a všetky ďalšie náležitosti spojené so správou balíkov už realizujete v našom expedičnom systéme.',
    blocks: [
      { type: 'heading', text: 'Pre export dát v BiznisWebe postupujete nasledovne:' },
      {
        type: 'text',
        text: '1. V nastaveniach vyberiete Import/Export – Sprievodca a následne Export:',
      },
      { type: 'image', src: '/images/navody/steps/1-Biznisweb.png', alt: 'Import/Export v BiznisWebe' },
      { type: 'text', text: '2. Vyberiete formát XML:' },
      { type: 'image', src: '/images/navody/steps/2-Biznisweb.png', alt: 'Výber formátu XML' },
      { type: 'text', text: '3. Zvolíte Objednávky:' },
      { type: 'image', src: '/images/navody/steps/3-Biznisweb.png', alt: 'Voľba Objednávky' },
      {
        type: 'text',
        text: '4. Vo filtri si zvolíte, z ktorého dátumu si chcete exportovať objednávky. Výber potvrdíte tlačidlom EXPORT DATA:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/4-Biznisweb.png',
        alt: 'Filter dátumu a EXPORT DATA',
      },

      { type: 'heading', text: 'Pre import dát do Neoshipu postupujete nasledovne:' },
      { type: 'text', text: '1. Na hornej lište si kliknete na ikonku balíka:' },
      {
        type: 'image',
        src: '/images/navody/steps/ikona-balika-v-Neoshipe.png',
        alt: 'Ikona balíka v Neoshipe',
      },
      {
        type: 'text',
        text: '2. Vyberiete si, cez ktorého kuriéra budete posielať balíky a kliknete na tlačidlo „Importovať“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/import-XML-do-Neoshipu.png',
        alt: 'Import XML do Neoshipu',
      },
      { type: 'text', text: '3. Z uvedených možností si vyberiete:' },
      {
        type: 'image',
        src: '/images/navody/steps/vyber-XML-suboru-Biznisweb.png',
        alt: 'Výber XML súboru z BiznisWebu',
      },
      {
        type: 'text',
        text: '4. Dáta z objednávok sa nahrajú do Neoshipu, odkiaľ si vytlačíte štítky a preberací protokol.',
      },
    ],
  },

  /* ───────────── Fakturačné systémy ───────────── */
  {
    slug: 'neoship-moneys5-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & MoneyS5: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Fakturačné systémy',
    perex:
      'Do rodiny hotových riešení v Neoshipe pribudlo automatizované expedovanie z MoneyS5 (dostupné aj pre MoneyS4). Na pár klikov tak z vystavených faktúr dostanete dáta do aplikácie Neoship, z ktorej vygenerujete štítky pre rôzne kuriérske spoločnosti.',
    blocks: [],
    video: 'https://www.youtube.com/embed/vPay5ewett0',
    hideHeroImage: true,
  },
  {
    slug: 'hromadny-export-dat-z-pohody-do-neoshipu',
    title: 'Hromadný export dát z POHODY do Neoshipu',
    category: 'Fakturačné systémy',
    perex:
      'Pre používateľov POHODY je pripravené automatizované expedičné riešenie na mieru. K dispozícii je aj možnosť exportovať dáta z POHODY vo formáte XML.',
    blocks: [
      {
        type: 'text',
        text: '1. V časti fakturácia v agende vydaných faktúr označte tie, ktoré sú určené na expedovanie a zobrazte si ich v časti „moje označené“.',
      },
      { type: 'image', src: '/images/navody/steps/pohoda1.png', alt: 'Označené faktúry v Pohode' },
      {
        type: 'text',
        text: '2. Kliknutím pravým tlačidlom myši sa otvorí dialógové okno – zvolíte „export do XML“, vyberiete priečinok a súbor pomenujete.',
      },
      { type: 'image', src: '/images/navody/steps/pohoda2.png', alt: 'Export do XML' },
      { type: 'image', src: '/images/navody/steps/pohoda3.png', alt: 'Voľba priečinku a názvu súboru' },
      {
        type: 'text',
        text: '3. V ďalšom kroku sa zobrazí okno, v ktorom je potrebné mať nastavený typ exportu „Štandardný export XML POHODA“, a pokračujete ďalej.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/pohoda4.png',
        alt: 'Nastavenie typu exportu XML POHODA',
      },
      { type: 'text', text: '4. V tomto kroku len potvrdíte tlačidlom „Dokončiť“.' },
      { type: 'image', src: '/images/navody/steps/pohoda5.png', alt: 'Potvrdenie tlačidlom Dokončiť' },
      {
        type: 'text',
        text: '5. Stiahnutý XML súbor jednoducho nahráte do Neoshipu. Na hornej lište kliknete na ikonu balíka.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694074668_ikona-balika.png',
        alt: 'Ikona balíka v Neoshipe',
      },
      { type: 'text', text: '6. Vyberiete si prepravcu, cez ktorého chcete vytvoriť balíky.' },
      {
        type: 'image',
        src: '/images/navody/steps/1694074754_vyber-prepravcu.png',
        alt: 'Výber prepravcu',
      },
      { type: 'text', text: '7. Zvolíte možnosť „importovať POHODA“.' },
      {
        type: 'image',
        src: '/images/navody/steps/XML-Import-pohoda.png',
        alt: 'Import XML z Pohody',
      },
      { type: 'text', text: '8. Vyberiete súbor, ktorý ste si exportovali z Pohody.' },
      { type: 'image', src: '/images/navody/steps/Pohoda.png', alt: 'Výber XML súboru z Pohody' },
      {
        type: 'text',
        text: '9. Dáta sa nahrajú do Neoshipu. V tomto momente ich môžete dodatočne skontrolovať, upraviť alebo doplniť a uložiť.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694080157_Kontrola-dat.png',
        alt: 'Kontrola a úprava dát v Neoshipe',
      },
      {
        type: 'text',
        text: '10. V zozname balíkov ich označíte a vygenerujete prepravné štítky.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694080268_zoznam-balikov.png',
        alt: 'Zoznam balíkov v Neoshipe',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694080323_tlac-stitkov.png',
        alt: 'Tlač prepravných štítkov',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694080402_stitky.png',
        alt: 'Vytlačené prepravné štítky',
      },
    ],
  },
  {
    slug: 'hromadny-export-dat-z-moneys3-do-neoshipu',
    title: 'Hromadný export dát z MoneyS3 do Neoshipu',
    category: 'Fakturačné systémy',
    perex:
      'Aj z fakturačného systému MoneyS3 jednoducho exportujete dáta do Neoshipu a tlačíte štítky pre rôzne kuriérske spoločnosti. Náš manuál vám ukáže, ako na to.',
    blocks: [
      {
        type: 'text',
        text: '1. Ešte pred tým, ako budete chcieť vykonať export dát do CSV súboru, je potrebné si správne vybrať stĺpce, v ktorých budú obsiahnuté potrebné dáta na tvorbu balíkov a neskôr aj na tlač štítkov (výber stĺpcov stačí urobiť iba 1× – pri ďalších exportoch budete vždy začínať od kroku č. 2).',
      },
      {
        type: 'text',
        text: 'Jednotlivé stĺpce musia obsahovať tieto dáta: doklad, koncový príjemca, koncový príjemca ulica, koncový príjemca mesto, koncový príjemca PSČ, koncový príjemca štát, email, telefón, zostáva uhradiť (= suma dobierky). Ak vystavujete faktúry v rôznych menách, napr. v CZK, je potrebné zakliknúť aj „zostáva uhradiť v mene“ a „mena“.',
      },
      {
        type: 'text',
        text: 'Vyberiete si ich nasledovne: kliknete pravým tlačidlom na horný riadok s popisom stĺpcov a následne na „výber stĺpcov“.',
      },
      { type: 'image', src: '/images/navody/steps/vyber-stlpcov.png', alt: 'Výber stĺpcov v MoneyS3' },
      { type: 'text', text: 'Vyklikáte všetky údaje, ktoré sme uviedli v 1. kroku.' },
      {
        type: 'image',
        src: '/images/navody/steps/Vyklikane-vsetky-udaje.png',
        alt: 'Vyklikané všetky údaje',
      },
      { type: 'text', text: '2. V paneli nástrojov nájdete jednoduchý filter:' },
      {
        type: 'image',
        src: '/images/navody/steps/jednoduchy-filter.png',
        alt: 'Jednoduchý filter v MoneyS3',
      },
      {
        type: 'text',
        text: '3. Pomocou jednoduchého filtra si vyfiltrujete požadované faktúry. Nájdete v ňom veľa možností – najčastejšie budete pravdepodobne exportovať faktúry napr. za určité obdobie.',
      },
      {
        type: 'text',
        text: '4. Kliknete na ikonu „export do Excelu“. Excelovský súbor si pri ukladaní zmeníte na .csv, alebo si ho uložíte ako Excel a neskôr prekonvertujete do CSV.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1687957696_Export-do-Excelu.png',
        alt: 'Export do Excelu',
      },
      {
        type: 'text',
        text: '5. CSV súbor veľmi jednoducho nahráte do Neoshipu. V aplikácii kliknete na ikonu balíka.',
      },
      { type: 'image', src: '/images/navody/steps/ikona-balika.png', alt: 'Ikona balíka v Neoshipe' },
      { type: 'text', text: '6. Vyberiete si prepravcu, cez ktorého chcete vytvoriť balíky.' },
      { type: 'image', src: '/images/navody/steps/vyber-prepravcu.png', alt: 'Výber prepravcu' },
      { type: 'text', text: '7. Zvolíte možnosť „importovať CSV“.' },
      { type: 'image', src: '/images/navody/steps/import-CSV.png', alt: 'Import CSV' },
      { type: 'text', text: '8. Vyberiete súbor, ktorý ste si exportovali z MoneyS3.' },
      {
        type: 'image',
        src: '/images/navody/steps/export-subor-z-Money-S3.png',
        alt: 'Výber exportovaného súboru z MoneyS3',
      },
      {
        type: 'text',
        text: '9. Objaví sa vám tzv. mapovanie stĺpcov. Tu nie je potrebné nič meniť – jediné, čo je potrebné, je doplniť kód štátu. V prípade balíkov na Slovensko vyberiete SK a dáte nahrať.',
      },
      { type: 'image', src: '/images/navody/steps/mapovanie.png', alt: 'Mapovanie stĺpcov' },
      {
        type: 'text',
        text: '10. Dáta sa nahrajú do Neoshipu. V tomto momente ich môžete dodatočne upraviť, doplniť, skontrolovať a potvrdíte tlačidlom „uložiť“.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Kontrola-dat.png',
        alt: 'Kontrola a úprava dát v Neoshipe',
      },
      {
        type: 'text',
        text: '11. V zozname balíkov si ich označíte a vytlačíte k nim prepravné štítky:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/zoznam-balikov.png',
        alt: 'Zoznam balíkov v Neoshipe',
      },
      {
        type: 'image',
        src: '/images/navody/steps/tlac-stitkov.png',
        alt: 'Tlač prepravných štítkov',
      },
      { type: 'image', src: '/images/navody/steps/stitky.png', alt: 'Vytlačené prepravné štítky' },
    ],
  },
  {
    slug: 'neoship-superfaktura-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & SuperFaktúra: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Fakturačné systémy',
    perex:
      'Rýchlo a pohodlne vyexpedujete aj zo SuperFaktúry. Okrem toho priamo z administrácie vytlačíte aj štítky, a to pre tri prepravné spoločnosti: SPS, GLS a Packetu. Celé expedovanie tak prebehne z administrácie fakturačného systému.',
    blocks: [],
    video: 'https://www.youtube.com/embed/lIBKtUUBupY',
    hideHeroImage: true,
  },
  {
    slug: 'neoship-pohoda-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami',
    title: 'Neoship & POHODA: Automatizácia expedovania s viacerými prepravnými alternatívami',
    category: 'Fakturačné systémy',
    perex:
      'Pokračujeme v nadväzovaní spolupráce so spoločnosťami, ktorých riešenia a ich prepojenia s Neoshipom prinášajú našim súčasným aj potenciálnym zákazníkom komplexnosť služieb v rámci expedovania. Tentokrát sa môžu tešiť užívatelia ekonomického systému POHODA.',
    blocks: [],
    video: 'https://www.youtube.com/embed/QfQ8c7SbyTE',
    hideHeroImage: true,
  },
  {
    slug: 'hromadny-export-dat-z-oberonu-do-neoshipu',
    title: 'Hromadný export dát z Oberonu do Neoshipu',
    category: 'Fakturačné systémy',
    perex:
      'Okrem e-shopových systémov môžete exportovať údaje o príjemcoch aj z fakturačných systémov, akým je Oberon. Z faktúr jednoducho vytvoríte dáta pre prepravcu.',
    blocks: [
      {
        type: 'text',
        text: 'Z Oberonu vyexportujete údaje o objednávkach do súboru, ktorý nahráte do Neoshipu cez ikonu balíka – vyberiete prepravcu, zvolíte import a vytlačíte prepravné štítky.',
      },
    ],
  },
  {
    slug: 'hromadny-export-dat-z-omegy-do-neoshipu',
    title: 'Hromadný export dát z Omegy do Neoshipu',
    category: 'Fakturačné systémy',
    perex:
      'Expedujte pohodlne už aj z Omegy. Využite svoj fakturačný systém nielen na správu faktúr, ale aj ako pomocníka pri expedícii balíkov.',
    blocks: [
      {
        type: 'text',
        text: 'Z Omegy vyexportujete údaje o objednávkach do súboru, ktorý nahráte do Neoshipu cez ikonu balíka – vyberiete prepravcu, zvolíte import a vytlačíte prepravné štítky.',
      },
    ],
  },

  /* ───────────── Manuály - Aktivácia pluginov ───────────── */
  {
    slug: 'manual-nastavenie-packety-vydajnych-miest-v-shoptete',
    title: 'Manuál - nastavenie Packety (výdajných miest) v Shoptete',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Ako nastaviť zobrazovanie Packety a jej výdajných miest v košíku e-shopu na Shoptete? V tomto manuáli sa to dozviete krok po kroku.',
    blocks: [
      {
        type: 'steps',
        title: 'Postup nastavenia',
        items: [
          'Prepojte Packetu v administrácii – Prepojenia → Packeta, vyberte „Som registrovaný“ a zadajte API kľúče.',
          'Prejdite do Nastavenia → Doprava a platby → Spôsoby dopravy a pridajte novú metódu.',
          'Vyplňte povinné polia – pomenujte službu, ako kuriéra vyberte „Packeta“, typ služby „Pobočky a boxy“, zapnite viditeľnosť, vyberte platby a uložte.',
          'Otvorte novú dopravu a nastavte cenu za prepravu zobrazovanú v košíku.',
          'V nastaveniach konektora Neoship kliknite na pridať prepravcu, vľavo vyberte Packeta, vpravo ju namapujte na dopravu „Packeta výdajné miesta“ a uložte.',
        ],
      },
    ],
  },
  {
    slug: 'manual-nastavenie-sps-gls-dpd-v-shoptete',
    title: 'Manuál - nastavenie dopravcov SPS, GLS, DPD v Shoptete',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Aby e-shopy na platforme Shoptet mohli exportovať objednávkové dáta do Neoshipu, je potrebné správne nastaviť jednotlivých dopravcov. Manuál vysvetľuje nastavenie SPS – GLS a DPD postupujú rovnako.',
    blocks: [
      {
        type: 'steps',
        title: 'Postup nastavenia',
        items: [
          'Prejdite do Nastavenia → Doprava a platby → Spôsoby dopravy v administrácii e-shopu.',
          'Ak ste doteraz používali SPS/DPD/GLS priamo, skryte starého dopravcu v košíku, aby nevznikla duplicita.',
          'Vytvorte nového dopravcu – pomenujte ho podľa potreby, kuriérsku spoločnosť aj typ dopravy nastavte na „Vlastná doprava“, zapnite viditeľnosť, vyberte platby a uložte.',
          'Po uložení dopravu znova otvorte a nastavte cenník zobrazovaný v košíku.',
          'V konektore Neoship pridajte prepravcu – vyberte kuriérsku spoločnosť (SPS, DPD alebo GLS) a namapujte ju na novú dopravu.',
        ],
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-money-s4-money-s5',
    title: 'Manuál - Aktivácia konektora Neoship pre Money S4/Money S5',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Konektor Neoship na zautomatizovanie expedície je určený pre všetky e-shopy vystavujúce faktúry v Money S4/Money S5. Umožňuje jednoduchú tvorbu balíkov a tlač štítkov pre SPS, GLS a DPD.',
    blocks: [
      {
        type: 'steps',
        title: 'Aktivácia konektora',
        items: [
          'Vyhľadajte ikonu konektora na hornej lište aplikácie Neoship.',
          'Kliknite na ikonu a vyberte „nové napojenie“.',
          'Vyberte Money S4/S5 a vyplňte názov prepojenia, URL fakturačného systému a API dáta (CLIENT ID a CLIENT SECRET od správcu Money).',
          'Kliknite Pokračovať.',
          'Cez ikonu pera nastavte prepravcov, platobné metódy a namapujte stĺpce z Money.',
        ],
      },
      {
        type: 'steps',
        title: 'Tvorba balíkov a štítkov',
        items: [
          'Kliknite na ikonu balíka pre import faktúr.',
          'Zadajte filtre (dátum vytvorenia faktúry) a Neoship dotiahne relevantné objednávky.',
          'Označte faktúry a kliknite Import.',
          'Skontrolujte a upravte dáta, potom znova kliknite Import.',
          'Vytlačte prepravné štítky zo zoznamu balíkov.',
        ],
      },
    ],
  },
  {
    slug: 'manual-aktivacia-balikova-v-doplnku-neoship-pre-shoptet',
    title: 'Manuál - Aktivácia Balíkova v doplnku Neoship pre Shoptet',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Inštalácia mapy výdajných miest SPS (Balíkovo) v košíku e-shopu je podľa tohto manuálu možná pre klientov NEOSHIP s.r.o., ktorí majú aktivovaný doplnok Neoship v Shoptete.',
    blocks: [
      {
        type: 'steps',
        title: 'Postup aktivácie',
        items: [
          'V administrácii Shoptetu vyhľadajte SPS doplnok a objednajte si ho.',
          'Prejdite na nastavenie doplnku.',
          'V nastaveniach aktivujte požadované možnosti.',
          'Prejdite na nastavenie dopravy.',
          'V spôsoboch dopravy nájdite „balíkovo“ a aktivujte ho.',
          'Nakonfigurujte balíkovo – názov, platby a ceny pre Slovensko.',
          'V Neoshipe kliknite na ikonu konektora.',
          'V napojení kliknite na ikonu pera (editácia).',
          'Kliknite na „pridať prepravcu“.',
          'V ľavom stĺpci vyberte SPS, v pravom stĺpci balíkovo a nastavenie uložte.',
        ],
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-shoptet',
    title: 'Manuál - Aktivácia konektora Neoship pre Shoptet',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Automatizujte vašu expedíciu vďaka konektoru Neoship, ktorý je pripravený pre všetkých používateľov Shoptetu.',
    blocks: [
      {
        type: 'steps',
        title: 'Postup aktivácie',
        items: [
          'Kliknite na ikonu konektora na hornej lište aplikácie Neoship.',
          'Vyberte zobrazenie napojení a kliknite na „nové napojenie“.',
          'Vyberte Shoptet, zadajte názov prepojenia a URL e-shopu, API kľúč nechajte prázdny a pokračujte.',
          'Prihláste sa do administrácie e-shopu, v rozšíreniach Shoptetu nájdite doplnok Neoship a nainštalujte ho.',
          'API kľúč sa po úspešnej inštalácii automaticky doplní v Neoshipe.',
          'Cez ikonu pera nastavte prepravcov a platobné metódy, voliteľne aj zmeny stavov objednávok.',
          'Kliknite na ikonu balíka a importujte dnešné objednávky (alebo filtrujte podľa dátumu).',
          'Označte objednávky a kliknite Import na kontrolu dát.',
          'Potvrďte import znova, aby sa dáta načítali do zoznamu balíkov.',
          'Vytlačte prepravné štítky zo sekcie balíkov.',
        ],
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-prestashop',
    title: 'Manuál - Aktivácia konektora Neoship pre Prestashop',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Konektor Neoship pre PrestaShop (od verzie 1.7 a vyššie) slúži na automatizovaný prenos dát z objednávok pre bezstarostnú tvorbu balíkov a pohodlnú tlač prepravných štítkov.',
    blocks: [
      {
        type: 'steps',
        title: 'Nastavenie v PrestaShope',
        items: [
          'Stiahnite ZIP súbor z Neoshipu (Dokumenty → Moduly) a nahrajte ho cez IMPROVE → Modules → Module Manager.',
          'Vytvorte nový webservice kľúč v CONFIGURE → Advanced Parameters → Webservice s oprávneniami: addresses, carriers, countries, currencies, customers, neoship_orders, order_carriers, order_states, orders.',
          'Vygenerujte API kľúč a nastavenia uložte.',
        ],
      },
      {
        type: 'steps',
        title: 'Nastavenie v Neoshipe',
        items: [
          'Kliknite na ikonu konektora na hornej lište.',
          'Vyberte nové napojenie a typ platformy PrestaShop.',
          'Zadajte názov prepojenia, URL e-shopu a vygenerovaný API kľúč a pokračujte.',
          'Cez ikonu pera nastavte prepravcov a mapovanie stavov objednávok.',
        ],
      },
    ],
  },
  {
    slug: 'manual-aktivacia-pluginu-neoship-vo-woocommerce',
    title: 'Manuál - Aktivácia pluginu Neoship vo WooCommerce',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Vďaka pluginu Neoship môžu e-shopy hromadne exportovať objednávky do Neoshipu a pre exportované objednávky tlačiť štítky aj preberací protokol.',
    blocks: [
      {
        type: 'steps',
        title: 'Postup aktivácie',
        items: [
          'Stiahnite a aktivujte plugin Neoship z administrácie WordPress.',
          'Prejdite na Nastavenia → Neoship v administrácii.',
          'Vyplňte prihlasovacie údaje (Client ID a Client secret od Neoshipu) a uložte zmeny. Pri správnom nastavení sa zobrazí potvrdzujúca hláška o prepojení.',
          'Nastavte prepravcov cez WooCommerce → Nastavenia → Doprava. Vyberte kuriérske služby, ktoré využívate.',
          'Pre medzinárodné doručenie nakonfigurujte prepravcov pre zónu Slovensko aj pre zónu zahraničie.',
          'Pridajte spôsob doručenia a vyberte konkrétneho prepravcu.',
          'Pomenujte prepravcu a nastavte cenu za prepravu zobrazovanú v košíku.',
        ],
      },
    ],
  },

  /* ───────────── Funkcionality v Neoshipe ───────────── */
  {
    slug: 'neoship-premium',
    title: 'Neoship Prémium',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Neoship Prémium je určený pre e-shopy, ktoré chcú zjednodušiť a zautomatizovať expedíciu, doručovať balíky spoľahlivo a rýchlo a získať detailný prehľad o zásielkach aj financiách.',
    blocks: [
      {
        type: 'text',
        text: 'S jednou zmluvou, jednou faktúrou a jedným expedičným riešením spravujete viacerých kuriérov z jednej platformy.',
      },
      {
        type: 'text',
        text: 'Získate priamy export objednávok a tlač štítkov, prepojenia s e-shopovými aj účtovnými systémami a prehľadné rozhranie na sledovanie doručovania a platieb.',
      },
    ],
  },
  {
    slug: 'neoship-verzia-zaklad',
    title: 'Neoship Základ',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Neoship Základ je expedičné riešenie pre e-shopy, ktoré potrebujú zrýchliť a zautomatizovať expedíciu s využitím vlastných zmlúv s prepravcami.',
    blocks: [
      {
        type: 'text',
        text: 'Riešenie zjednodušuje tvorbu štítkov vďaka prepojeniam s platformami ako SuperFaktúra, PrestaShop a WooCommerce a podporuje hlavné kuriérske spoločnosti.',
      },
      {
        type: 'text',
        text: 'Získate úsporu času aj nákladov, transparentné sledovanie zásielok a prehľad nevyplatených dobierok – v jednoduchom a prehľadnom rozhraní.',
      },
    ],
  },
  {
    slug: 'aplikacia-neoship',
    title: 'Aplikácia Neoship',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Prehľad o doručených a nedoručených balíkoch všetkých prepravcov, o cene každej zásielky, o vyplatených a nevyplatených dobierkach, vývoj počtu zásielok, komunikácia s prepravcom aj vlastné notifikačné e-maily.',
    blocks: [
      {
        type: 'text',
        text: 'Aplikácia Neoship zjednodušuje správu zásielok – v jednom rozhraní vytvárate balíky, tlačíte štítky, sledujete doručovanie a párujete platby.',
      },
      {
        type: 'text',
        text: 'Integruje sa s účtovnými systémami ako SuperFaktúra aj so systémami ako POHODA, takže expedíciu riešite bez prepínania medzi nástrojmi.',
      },
    ],
  },
  {
    slug: 'statistiky',
    title: 'Štatistiky',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Vývoj počtu balíkov, najčastejšie posielané váhy, grafy s rozdelením balíkov na adresu a do výdajných miest, doručovanie na Slovensku a v zahraničí, zoznam vrátených balíkov aj ich percentuálny podiel – to všetko nájdete v štatistikách Neoshipu.',
    blocks: [
      {
        type: 'text',
        text: 'Komplexné sledovanie vyexpedovaných balíkov v čase umožňuje analyzovať, porovnávať a rozhodovať sa o expedícii na základe dát.',
      },
      {
        type: 'text',
        text: 'Prístup k dátam o vratkách vám umožní rýchlo reagovať na rastúci pomer vratiek a prijať nápravné opatrenia.',
      },
    ],
  },
  {
    slug: 'email',
    title: 'Email',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Neoship ponúka tri e-mailové šablóny na tvorbu vlastných textov s interaktívnymi odkazmi a firemnými farbami, a to v piatich jazykoch.',
    blocks: [
      {
        type: 'text',
        text: 'Na rozdiel od štandardného e-mailu o doručení od prepravcu Neoship umožňuje vytvoriť atraktívnejší e-mail, ktorý slúži ako marketingový nástroj.',
      },
      {
        type: 'text',
        text: 'Môžete v ňom informovať zákazníka o doručení zásielky, podporiť ďalší predaj, rozšíriť počet sledovateľov na sociálnych sieťach alebo pridať odkazy na akciové ponuky a výpredaje.',
      },
    ],
  },
  {
    slug: 'kalkulacia',
    title: 'Kalkulácia',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Kalkulačka Neoshipu rýchlo vypočíta cenu balíka vybraného prepravcu na základe váhy, spôsobu doručenia a ďalších parametrov – vrátane všetkých doplnkových služieb.',
    blocks: [
      {
        type: 'text',
        text: 'Komplexné cenníky prepravných spoločností sú ťažko čitateľné a často neukazujú finálnu cenu. Dodatočné poplatky za notifikácie, dobierku či spôsob platby výrazne ovplyvňujú konečnú sumu.',
      },
      {
        type: 'text',
        text: 'Neoship ponúka integrované riešenie s jednotnými cenami namiesto riešenia cez jednotlivé kuriérske služby.',
      },
    ],
  },
  {
    slug: 'dobierky',
    title: 'Dobierky',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Neoship poskytuje komplexný prehľad o dobierkach – s vyplatenými aj nevyplatenými zásielkami pracujete v samostatnom zobrazení s viacerými možnosťami filtrovania.',
    blocks: [
      {
        type: 'text',
        text: 'Vyplatené dobierky: systém centralizuje dáta o všetkých prijatých platbách. Filtrujete podľa prepravcu, krajiny doručenia, dátumu platby, sumy, variabilného symbolu, čísla zásielky, meny aj typu platby. Reporty exportujete v štyroch formátoch – Excel, CSV, XML a SEPA XML.',
      },
      {
        type: 'text',
        text: 'Nevyplatené dobierky: Neoship sleduje sumy dobierok, ktoré ešte neboli inkasované alebo pripísané na účet, čo pomáha plánovať cashflow aj budúce nákupy.',
      },
    ],
  },
  {
    slug: 'dashboard',
    title: 'Dashboard',
    category: 'Funkcionality v Neoshipe',
    perex:
      'Dashboard v Neoshipe je centralizovaný prehľad expedície s informáciami o doručených, nedoručených a zásielkach v preprave od všetkých prepravcov.',
    blocks: [
      {
        type: 'text',
        text: 'Dashboard zobrazuje tri kategórie balíkov – doručené (zelený box), nedoručené (červený box) a v preprave (oranžový box). Z každého boxu sa presmerujete na konkrétny balík a riešite problémy priamo.',
      },
      {
        type: 'text',
        text: 'Systém sumarizuje vyplatené dobierky podľa spôsobu platby a meny vrátane prehľadu nevyplatených dobierok. Eliminuje prepínanie medzi systémami viacerých prepravcov a umožňuje rýchlo riešiť situácie s prepravcom skôr, než vzniknú zákaznícke reklamácie.',
      },
    ],
  },

  /* ───────────── Párovanie dobierok ───────────── */
  {
    slug: 'parovanie-dobierok-s-fakturami-v-moneys3',
    title: 'Párovanie dobierok s faktúrami v MoneyS3',
    category: 'Párovanie dobierok',
    perex:
      'Aj e-shopy vystavujúce faktúry v MoneyS3 môžu vďaka SEPA XML súboru napárovať dobierky k faktúram hromadne.',
    blocks: [
      {
        type: 'steps',
        title: 'Export z Neoshipu',
        items: [
          'Prejdite do „Zoznam vyplatených dobierok“ v ľavom menu.',
          'Zadajte variabilný symbol (VS) z bankového výpisu; voliteľne filtrujte podľa dátumu platby.',
          'Vyberte možnosť „Exportovať SEPA“.',
        ],
      },
      {
        type: 'text',
        text: 'Import SEPA XML súboru a párovanie dobierok k faktúram dokončíte v MoneyS3 podľa dokumentácie MoneyS3.',
      },
    ],
  },
  {
    slug: 'parovanie-dobierok-s-fakturami-v-superfakture',
    title: 'Párovanie dobierok s faktúrami v SuperFaktúre',
    category: 'Párovanie dobierok',
    perex:
      'Zákazníci Neoshipu majú v expedičnom systéme k dispozícii zoznam vyplatených dobierok. Pre párovanie dobierok s faktúrami je možné tieto dáta exportovať v rôznych formátoch.',
    blocks: [
      {
        type: 'steps',
        title: 'Export z Neoshipu',
        items: [
          'V ľavom menu vyberte Zoznam vyplatených dobierok.',
          'Zadajte VS platby z bankového výpisu a vyberte dátum platby.',
          'V Exporte zvoľte možnosť Exportovať CSV.',
        ],
      },
      {
        type: 'steps',
        title: 'Import do SuperFaktúry',
        items: [
          'V administrácii SuperFaktúry prejdite na Nástroje → Platby.',
          'Vyberte možnosť importovať výpis.',
          'Z ponúkaných možností zvoľte Neoship.',
          'Vložte CSV súbor stiahnutý z Neoshipu.',
        ],
      },
      {
        type: 'text',
        text: 'Hoci boli dobierky vyplatené hromadne pod jedným variabilným symbolom, systém automaticky napáruje konkrétnu dobierku na správnu faktúru.',
      },
    ],
  },
  {
    slug: 'parovanie-dobierok-s-fakturami-v-omege',
    title: 'Párovanie dobierok s faktúrami v Omege',
    category: 'Párovanie dobierok',
    perex:
      'Zákazníci Neoshipu môžu exportovať dáta o vyplatených dobierkach v rôznych formátoch. Fakturačný systém Omega umožňuje hromadné párovanie dobierok s faktúrami cez SEPA XML.',
    blocks: [
      {
        type: 'steps',
        title: 'Export v Neoshipe',
        items: [
          'Prejdite do „Zoznam vyplatených dobierok“ v ľavom menu.',
          'Zadajte variabilný symbol (VS) do poľa „VS platby“, prípadne použite filter „platba na účte“.',
          'Vyberte „Exportovať SEPA“ a vygenerujte súbor pre párovanie v Omege.',
        ],
      },
      {
        type: 'steps',
        title: 'Import v Omege',
        items: [
          'Importujte SEPA XML súbor v „knihe účet v banke“ cez „import BV“.',
          'Vyberte formát SEPA XML a nahrajte stiahnutý súbor.',
          'Odstráňte záznam hromadnej platby z importovaného súboru.',
          'Skontrolujte transakcie účtu a zostatok.',
        ],
      },
    ],
  },
  {
    slug: 'parovanie-dobierok-s-fakturami-v-pohode',
    title: 'Párovanie dobierok s faktúrami v POHODE',
    category: 'Párovanie dobierok',
    perex:
      'Ako jednoducho párovať vyplatené dobierky s faktúrami v POHODE? Neoship ponúka export dobierok vo formáte SEPA XML, ktorý nahráte do POHODY a dobierky sa hromadne spárujú s vystavenými faktúrami.',
    blocks: [
      {
        type: 'steps',
        title: 'Export v Neoshipe',
        items: [
          'V menu vyberte Zoznam vyplatených dobierok.',
          'Zadajte variabilný symbol (VS) z účtovného výpisu a zvoľte dátum platby.',
          'V sekcii EXPORT vyberte možnosť „Exportovať SEPA“.',
        ],
      },
      {
        type: 'steps',
        title: 'Import a párovanie v POHODE',
        items: [
          'Pred importom nastavte agendu HOMEBANKING a zapnite SEPA XML.',
          'V Bankových účtoch vyberte elektronický platobný styk.',
          'V agende Banka vyberte Načítanie výpisov a zvoľte bankovú službu/účty.',
          'Aktivujte voľbu „Aut. likvidácia“ pre automatické spárovanie.',
          'Vyberte stiahnutý SEPA XML súbor z Neoshipu.',
          'Skontrolujte súbory na poslednej stránke sprievodcu a potvrďte import.',
        ],
      },
    ],
  },
];

/** Priradenie titulných obrázkov (z neoship.sk) k jednotlivým návodom. */
const NAVOD_IMAGE: Record<string, string> = {
  'neoship-shoptet-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-Shoptet.png',
  'neoship-prestashop-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-Prestashop.png',
  'neoship-woocommerce-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-WooCommerce.png',
  'neoship-neonus-automatizacia-expedovania-s-dvomi-prepravnymi-alternativami':
    'Neoship-Neonus.png',
  'neoship-creative-sites-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-Creativesites.png',
  'hromadny-export-dat-z-webarealu-do-neoshipu': 'Neoship-Webareal.png',
  'hromadny-export-dat-z-clickeshopu-do-neoshipu': 'Clickeshop-Neoship.png',
  'hromadny-export-dat-z-bizniswebu-do-neoshipu': 'Neoship-Biznisweb.png',
  'neoship-moneys5-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    '1696314589_Money-S5-Neoship.png',
  'hromadny-export-dat-z-pohody-do-neoshipu': 'Hromadny-export-dat-Pohoda.png',
  'hromadny-export-dat-z-moneys3-do-neoshipu': 'Neoship-MoneyS3.png',
  'neoship-superfaktura-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-SuperFaktura.png',
  'neoship-pohoda-automatizacia-expedovania-s-viacerymi-prepravnymi-alternativami':
    'Neoship-Pohoda.png',
  'hromadny-export-dat-z-oberonu-do-neoshipu': 'Neoship-Oberon.png',
  'hromadny-export-dat-z-omegy-do-neoshipu': 'Neoship-Omega.png',
  'manual-nastavenie-packety-vydajnych-miest-v-shoptete': 'Nastavenie-Packety.png',
  'manual-nastavenie-sps-gls-dpd-v-shoptete': 'Nastavenie-dopravcov-SPS-GLS-DPD-v-Shoptete.png',
  'manual-aktivacia-konektora-neoship-pre-money-s4-money-s5': '1696314589_Money-S5-Neoship.png',
  'manual-aktivacia-balikova-v-doplnku-neoship-pre-shoptet': 'Shoptet-Neoship-Balikovo.png',
  'manual-aktivacia-konektora-neoship-pre-shoptet': 'Konektor-Neoship-Shoptet.png',
  'manual-aktivacia-konektora-neoship-pre-prestashop': 'Konektor-Neoship-Prestashop.png',
  'manual-aktivacia-pluginu-neoship-vo-woocommerce': 'Plugin-Neoship-WooCommerce.png',
  'neoship-premium': 'Neoship-Premium.png',
  'neoship-verzia-zaklad': 'Neoship-Zaklad-1.png',
  'aplikacia-neoship': 'Aplikacia-Neoship.png',
  statistiky: 'statistiky.png',
  email: 'Email-1.png',
  kalkulacia: 'Kalkulacia-1.png',
  dobierky: 'Dobierky-1.png',
  dashboard: 'Dashboard.png',
  'parovanie-dobierok-s-fakturami-v-moneys3': 'Parovanie-dobierok-s-fakturami-v-MoneyS3.png',
  'parovanie-dobierok-s-fakturami-v-superfakture':
    'Parovanie-dobierok-s-fakturami-v-SuperFakture.png',
  'parovanie-dobierok-s-fakturami-v-omege': 'Parovanie-dobierok-s-fakturami-v-Omege.png',
  'parovanie-dobierok-s-fakturami-v-pohode': 'Parovanie-dobierok-s-fakturami-v-Pohode.png',
};

/** Snímky obrazovky použité v jednotlivých návodoch (z neoship.sk), v poradí. */
const NAVOD_GALLERY: Record<string, string[]> = {
  'manual-nastavenie-packety-vydajnych-miest-v-shoptete': [
    '1prepojenie-Packeta.png',
    '2-Packeta.png',
    '4-nastavenia-dopravy.png',
    'Pridat-sposob-dopravy.png',
    'Komplet-nastavenie.png',
    '1713446201_5a-nastavenie-ceny-dopravy.png',
    '1713446225_5b-cena.png',
    'Zobrazenie-v-kosiku.png',
    '1713446534_7a-konektor.png',
    '1713446548_7b-edit-konektor.png',
    '1713446624_8a-pridat-prepravcu.png',
    '1713446679_Mapovanie-prepravcov.png',
  ],
  'manual-nastavenie-sps-gls-dpd-v-shoptete': [
    '1-nastavenie.png',
    '2-neviditelnost.png',
    '3-vytvorit-dopravu.png',
    '4-nastavenie-novej-dopravy.png',
    '5a-nastavenie-ceny-dopravy.png',
    '5b-cena.png',
    '6-nastavena-doprava-v-kosiku.png',
    '7a-konektor.png',
    '7b-edit-konektor.png',
    '8a-pridat-prepravcu.png',
    '8b-nastavenie-prepravcov-v-Neoshipe.png',
  ],
  'manual-aktivacia-konektora-neoship-pre-money-s4-money-s5': [
    'Ikona-konektora.png',
    'Zoznam-napojeni.png',
    'Konektor-Money.png',
    'nastavenia-konektora.png',
    '1694517539_Mapovanie-prepravcov.png',
    'import-balikov-z-Money.png',
    'Objednavky-v-Neoshipe.png',
    'Oznacene-objednavky-a-prichystane-na-import.png',
    'Baliky.png',
    'Priprava-na-tlac.png',
  ],
  'manual-aktivacia-balikova-v-doplnku-neoship-pre-shoptet': [
    'sps-doplnok.png',
    'Nastavenie-doplnku.png',
    'nastavenie-moznosti.png',
    'zobrazovanie-v-kosiku.png',
    'balikovo-x.png',
    'ikona-potvrdenia.png',
    'nastavenia-balikova.png',
    'Screenshot-from-2023-07-14-13-17-01.png',
    'editacia.png',
    'pridat-prepravcu.png',
    'balikovo-v-eshope.png',
  ],
  'manual-aktivacia-konektora-neoship-pre-shoptet': [
    'Ikona-konektora.png',
    'Zoznam-napojeni.png',
    '1662373810_Nove-napojenie-Shoptet.png',
    'Doplnok-Neoship-v-Shoptete.png',
    'Uspesna-instalacia-doplnku-Neoship-v-Shoptete.png',
    'API-kluc-v-Neoshipe.png',
    'Pridanie-prepravcov.png',
    '1683787860_Nastavenie-konektora-v-Neoshipe.png',
    'Kliknutie-na-zoznam-objednavok.png',
    'Objednavky-v-Neoshipe.png',
    'Oznacene-objednavky-a-prichystane-na-import.png',
    'Baliky.png',
    'Priprava-na-tlac.png',
  ],
  'manual-aktivacia-konektora-neoship-pre-prestashop': [
    'Nahrat-modul.png',
    'nahrat-modul-b.png',
    'Neoship-modul.png',
    'pridat-novy-webservice-kluc.png',
    '1663140881_Setovanie-API-kluca.png',
    '1.png',
    '2.png',
    '3.png',
    '4-Neoship.png',
    '5.png',
    '6.png',
    'Vygenerovanie-API-kluca.png',
    'API-kluc.png',
    '1662380612_Ikona-konektora.png',
    '1662380647_Zoznam-napojeni.png',
    'Setovanie-napojenia-v-Neoshipe.png',
    'Nastavenie-napojenia.png',
    'mapovanie-prestashop.png',
  ],
  'manual-aktivacia-pluginu-neoship-vo-woocommerce': [
    '1662534471_Plugin-Neoship.png',
    'Nastavenia-Neoship.png',
    'Prihlasovacie-udaje-su-spravne.png',
    'WooCommerce-Nastavenia.png',
    'Doprava.png',
    '1662536965_Zony-dopravy.png',
    '1662536991_Pridat-sposob-dorucenia.png',
    '1662537008_Vyber-konkretneho-prepravcu.png',
    '1662537024-Vyber-GLS-kuriera.png',
    '1662537122_Premenovanie-kuriera.png',
  ],
  'parovanie-dobierok-s-fakturami-v-moneys3': [
    '1663141359_Zoznam-vyplatenych-dobierok.png',
    '1663141398_Filter-vyplatenych-dobierok.png',
    '1663141437_sepa-xml.png',
  ],
  'parovanie-dobierok-s-fakturami-v-superfakture': [
    '1663141359_Zoznam-vyplatenych-dobierok.png',
    '1663141398_Filter-vyplatenych-dobierok.png',
    '1663141437_sepa-xml.png',
    'Nastroje-platby-v-SuperFakture.png',
    'Importovanie-vypisu.png',
    'Neoship-vypis.png',
    'CSV-subor-v-SuperFakture.png',
  ],
  'parovanie-dobierok-s-fakturami-v-omege': [
    'Zoznam-vyplatenych-dobierok.png',
    'Filter-vyplatenych-dobierok.png',
    'sepa-xml.png',
    'Omega1.png',
    'Omega2.png',
    'Omega3.png',
    'Omega4.png',
    'Omega5.png',
    'Omega6.png',
  ],
  'parovanie-dobierok-s-fakturami-v-pohode': [
    '1662726804_Zoznam-vyplatenych-dobierok.png',
    '1662726850_Filter-vyplatenych-dobierok.png',
    '1662726882_sepa-xml.png',
    'Jednotlive-polozky-v-Homebankingu.png',
    'SEPA-XML-v-POHODE.png',
    'agenda-bankove-ucty.png',
    'Sprievodca-importom-bankovych-vypisov.png',
    'Vyber-podla-uctov.png',
    'Konkretny-SEPA-XML-subor.png',
    'Kontrola-importovanych-suborov.png',
    'Banka.png',
  ],
};

export const navody: Navod[] = navodyData.map((n) => ({
  ...n,
  image: `/images/navody/${NAVOD_IMAGE[n.slug] ?? 'Neoship-Shoptet.png'}`,
  gallery: (NAVOD_GALLERY[n.slug] ?? []).map((f) => `/images/navody/steps/${f}`),
}));

export function getNavod(slug: string): Navod | undefined {
  return navody.find((n) => n.slug === slug);
}
