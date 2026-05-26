/**
 * Návody (tutoriály) prevzaté z neoship.sk/navody.
 * Každý návod má vlastnú podstránku /navody/[slug].
 */

export const NAVOD_CATEGORIES = [
  'Eshopové systémy',
  'Fakturačné systémy',
  'Manuály - Aktivácia pluginov',
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
      'Okrem eshopových systémov možete exportovať údaje o príjemcoch aj z fakturačných systémov, akým je napríklad aj Oberon. Pozrite sa, akým jednoduchým spôsobom vytvoríte z faktúr dáta pre prepravcu.',
    blocks: [],
    video: 'https://www.youtube.com/embed/jjkcQ3xbZgc',
    hideHeroImage: true,
  },
  {
    slug: 'hromadny-export-dat-z-omegy-do-neoshipu',
    title: 'Hromadný export dát z Omegy do Neoshipu',
    category: 'Fakturačné systémy',
    perex:
      'Expedujte pohodlne už aj z Omegy. Využite váš fakturačný systém nielen na správu faktúr, ale aj na veľkého pomocníka pri expedícii vašich balíkov. Nahliadnite, aké je to jednoduché.',
    blocks: [],
    video: 'https://www.youtube.com/embed/8tQtpBGRBcQ',
    hideHeroImage: true,
  },

  /* ───────────── Manuály - Aktivácia pluginov ───────────── */
  {
    slug: 'manual-nastavenie-packety-vydajnych-miest-v-shoptete',
    title: 'Manuál - nastavenie Packety (výdajných miest) v Shoptete',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Ako nastaviť zobrazovanie Packety a jej výdajných miest v košíku eshopu na Shoptete? V tomto manuále sa to krok po kroku dozviete.',
    blocks: [
      { type: 'text', text: 'V administrácii vášho eshopu prejdete na Prepojenie – Packeta:' },
      {
        type: 'image',
        src: '/images/navody/steps/1prepojenie-Packeta.png',
        alt: 'Prepojenie Packeta v administrácii Shoptetu',
      },
      {
        type: 'text',
        text: 'Zakliknete možnosť „Som zaregistrovaný“ a vložíte API kľúče, ktoré vám zašleme na vyžiadanie:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/2-Packeta.png',
        alt: 'Vloženie API kľúčov pre Packetu',
      },
      {
        type: 'text',
        text: 'Potom prejdete v menu na Nastavenia – Doprava a platby – Spôsoby dopravy:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/4-nastavenia-dopravy.png',
        alt: 'Nastavenia – Doprava a platby – Spôsoby dopravy',
      },
      { type: 'text', text: 'Pridáte nový spôsob dopravy:' },
      {
        type: 'image',
        src: '/images/navody/steps/Pridat-sposob-dopravy.png',
        alt: 'Pridať spôsob dopravy',
      },
      { type: 'heading', text: 'Vyplníte tieto polia:' },
      {
        type: 'steps',
        items: [
          'Názov: pomenujete Packetu tak, ako chcete, aby sa zobrazovala v košíku.',
          'Kuriérska spoločnosť: vyberiete „Packeta“.',
          'Prepravná služba: vyberiete „Pobočky a boxy“.',
          'Zakliknete viditeľnosť.',
          'Možnosti platieb: zakliknete tie možnosti, ktoré zákazníkom ponúkate alebo chcete ponúknuť.',
          'Uložíte.',
        ],
      },
      {
        type: 'image',
        src: '/images/navody/steps/Komplet-nastavenie.png',
        alt: 'Kompletné nastavenie dopravy',
      },
      {
        type: 'text',
        text: 'Keď to celé uložíte, kliknete si opäť na novo-nastavenú dopravu, kde sa vám dole zobrazí už aj Cenník. Tu si nastavíte cenu dopravy, ktorá sa bude zobrazovať pri Packete v košíku. Kliknete na „Uložiť a odísť“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446201_5a-nastavenie-ceny-dopravy.png',
        alt: 'Nastavenie ceny dopravy',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446225_5b-cena.png',
        alt: 'Cenník dopravy',
      },
      { type: 'text', text: 'V možnostiach dopravy pribudne „Packeta výdajné miesta“:' },
      {
        type: 'image',
        src: '/images/navody/steps/Zobrazenie-v-kosiku.png',
        alt: 'Zobrazenie Packety v košíku',
      },
      {
        type: 'text',
        text: 'Aby fungovalo prepojenie Neoship – Shoptet a správne sa do Neoshipu importovali prijaté objednávky, je potrebné upraviť ešte nastavenia v Neoshipe – v Konektore:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446534_7a-konektor.png',
        alt: 'Konektor Neoship – Shoptet',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446548_7b-edit-konektor.png',
        alt: 'Editácia konektora',
      },
      {
        type: 'text',
        text: 'Kliknete na „pridať prepravcu“. Otvorí sa prázdne pole. Z ponúkaných možností vľavo vyberiete Packeta. Z ponúkaných možností vpravo vyberiete prepravu, ktorú ste si nastavili, v našom prípade „Packeta výdajné miesta“, a uložíte:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446624_8a-pridat-prepravcu.png',
        alt: 'Pridanie prepravcu v Neoshipe',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1713446679_Mapovanie-prepravcov.png',
        alt: 'Mapovanie prepravcov v Neoshipe',
      },
    ],
  },
  {
    slug: 'manual-nastavenie-sps-gls-dpd-v-shoptete',
    title: 'Manuál - nastavenie dopravcov SPS, GLS, DPD v Shoptete',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Aby eshopy založené na platforme Shoptet mohli exportovať objednávkové dáta do Neoshipu, je potrebné správne nastaviť jednotlivých dopravcov v ich administrácii. Ako správne vytvoriť SPS, GLS a DPD prepravcu nájdete v tomto manuále.',
    blocks: [
      {
        type: 'text',
        text: 'V tomto konkrétnom manuále je vysvetlený a ukázaný príklad nastavenia SPS prepravy. Nastavenie GLS a DPD funguje na rovnakom princípe.',
      },
      {
        type: 'text',
        text: 'V administrácii vášho eshopu prejdete na Nastavenia – Doprava a platby – Spôsoby dopravy:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1-nastavenie.png',
        alt: 'Nastavenia – Doprava a platby – Spôsoby dopravy',
      },
      {
        type: 'text',
        text: 'Ak ste pred využívaním Neoshipu využívali prepravnú spoločnosť SPS (DPD, GLS), mali ste ju zapnutú v košíku a idete naďalej využívať služby SPS (DPD, GLS) ale v spolupráci s Neoshipom, je potrebné:',
      },
      {
        type: 'text',
        text: '1. Zneviditeľniť alebo odstrániť túto dopravu v spôsoboch dopravy, aby sa nezobrazovala v košíku:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/2-neviditelnost.png',
        alt: 'Skrytie pôvodného dopravcu v košíku',
      },
      {
        type: 'text',
        text: '2. Nastaviť „novú SPS (DPD, GLS)“ – kvôli správnemu importu dát do Neoshipu:',
      },
      {
        type: 'steps',
        items: [
          'Názov: pomenujete prepravcu tak, ako chcete, aby sa zobrazoval v košíku.',
          'Kuriérska spoločnosť: vyberiete „Vlastná preprava“.',
          'Prepravná služba: vyberiete „Vlastná preprava“.',
          'Zakliknete viditeľnosť.',
          'Možnosti platieb: zakliknete tie, ktoré zákazníkom ponúkate alebo chcete ponúknuť.',
          'Uložíte.',
        ],
      },
      {
        type: 'image',
        src: '/images/navody/steps/3-vytvorit-dopravu.png',
        alt: 'Vytvorenie novej dopravy',
      },
      {
        type: 'image',
        src: '/images/navody/steps/4-nastavenie-novej-dopravy.png',
        alt: 'Nastavenie polí novej dopravy',
      },
      {
        type: 'text',
        text: 'Keď to celé uložíte, kliknete si opäť na novo-nastavenú dopravu, kde sa vám dole zobrazí už aj Cenník. Tu si nastavíte cenu dopravy, ktorá sa bude zobrazovať pri prepravcovi v košíku. Kliknete na „Uložiť a odísť“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/5a-nastavenie-ceny-dopravy.png',
        alt: 'Nastavenie ceny dopravy',
      },
      { type: 'image', src: '/images/navody/steps/5b-cena.png', alt: 'Cenník dopravy' },
      {
        type: 'text',
        text: 'V košíku sa vám už bude zobrazovať SPS (DPD, GLS) doručenie na adresu:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/6-nastavena-doprava-v-kosiku.png',
        alt: 'Nastavená doprava v košíku',
      },
      {
        type: 'text',
        text: 'Aby fungovalo prepojenie Neoship – Shoptet a správne sa do Neoshipu importovali prijaté objednávky, je potrebné upraviť ešte nastavenia v Neoshipe – v Konektore:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/7a-konektor.png',
        alt: 'Konektor v Neoshipe',
      },
      {
        type: 'image',
        src: '/images/navody/steps/7b-edit-konektor.png',
        alt: 'Editácia konektora',
      },
      {
        type: 'text',
        text: 'Kliknete si na „pridať prepravcu“. Otvorí sa prázdne pole. Z ponúkaných možností vľavo vyberiete Slovak Parcel Service (Direct Parcel Distribution, GLS General Logistics Systems Slovakia s.r.o.). Z ponúkaných možností vpravo vyberiete prepravu, ktorú ste si nastavili, t.j. v našom prípade SPS doručenie na adresu. Nastavenie uložíte.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/8a-pridat-prepravcu.png',
        alt: 'Pridanie prepravcu v Neoshipe',
      },
      {
        type: 'image',
        src: '/images/navody/steps/8b-nastavenie-prepravcov-v-Neoshipe.png',
        alt: 'Nastavenie prepravcov v Neoshipe',
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-money-s4-money-s5',
    title: 'Manuál - Aktivácia konektora Neoship pre Money S4/Money S5',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Konektor Neoship pre zautomatizovanie expedície je určený pre všetky eshopy vystavujúce faktúry v Money S4/Money S5. Bezstarostná tvorba balíkov a pohodlná tlač štítkov už bude samozrejmosťou. Vďaka konektoru jednoducho vyexpedujete a vytlačíte štítky pre SPS, GLS a DPD.',
    blocks: [
      { type: 'text', text: '1. Na hornej lište v aplikácii Neoship uvidíte túto ikonku:' },
      {
        type: 'image',
        src: '/images/navody/steps/Ikona-konektora.png',
        alt: 'Ikona konektora v Neoshipe',
      },
      {
        type: 'text',
        text: '2. Po kliknutí na ikonu konektora sa zobrazí zoznam napojení, kde kliknete na nové napojenie:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Zoznam-napojeni.png',
        alt: 'Zoznam napojení v Neoshipe',
      },
      {
        type: 'text',
        text: '3. Z ponúkaných možností vyberiete Money S4/S5. Do poľa Názov napíšete vami zvolený názov prepojenia (je na vás, aký názov si zvolíte). Do poľa URL vložíte URL vášho fakturačného systému, v ktorom vystavujete faktúry. Ešte je potrebné doplniť API dáta, ako sú CLIENT ID a CLIENT SECRET – tieto vám poskytne váš správca alebo zamestnanec technickej podpory Money. Kliknete na Pokračovať.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Konektor-Money.png',
        alt: 'Konfigurácia konektora pre Money',
      },
      {
        type: 'text',
        text: '4. Konektor je nastavený. Aby sa do Neoshipu doťahovali korektné dáta z faktúr, je potrebné nastaviť prepravcov, ktorých v rámci služieb Neoshipu využívate alebo budete využívať, platobné metódy týkajúce sa dobierok, prípadne namapovať stĺpec z Money, ktorý hovorí o tom, z koľkých balíkov bude pozostávať zásielka pre príjemcu.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/nastavenia-konektora.png',
        alt: 'Nastavenia konektora',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1694517539_Mapovanie-prepravcov.png',
        alt: 'Mapovanie prepravcov',
      },

      { type: 'heading', text: 'Tvorba balíkov a štítkov' },
      {
        type: 'text',
        text: 'Ako dotiahnuť dáta z faktúr a následne z nich vytvoriť balíky a vytlačiť štítky, si môžete pozrieť v inštruktážnom videu.',
      },
      {
        type: 'text',
        text: '1. Na to, aby ste automatizovane dotiahli dáta z faktúr do Neoshipu a vytvorili k nim štítky, je potrebné kliknúť na ikonu balíka.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/import-balikov-z-Money.png',
        alt: 'Import balíkov z Money',
      },
      {
        type: 'text',
        text: '2. Zobrazí sa stránka so Zoznamom faktúr. V tomto momente si sami do filtra zadáte, aké faktúry chcete dostať do Neoshipu. Ak sú to práve dnešné, do filtra nie je potrebné zadávať nič – systém si ich dotiahne automaticky. Neoship našiel vo fakturačnom systéme 7 objednávok. (Ak budete chcieť do Neoshipu dotiahnuť faktúry z konkrétneho dňa alebo z iných dní, vo filtri je potrebné vybrať dátum ich vytvorenia.)',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Objednavky-v-Neoshipe.png',
        alt: 'Zoznam objednávok v Neoshipe',
      },
      { type: 'text', text: '3. Označíte si ich a kliknete na Import:' },
      {
        type: 'image',
        src: '/images/navody/steps/Oznacene-objednavky-a-prichystane-na-import.png',
        alt: 'Označené objednávky pripravené na import',
      },
      {
        type: 'text',
        text: '4. Po importe sa vám na kontrolu či prípadnú úpravu dát zobrazia opäť všetky dáta, a ak je všetko v poriadku, opäť kliknete na Import. Dáta sa nahrajú do zoznamu balíkov, odkiaľ si k nim už iba vytlačíte prepravné štítky.',
      },
      { type: 'image', src: '/images/navody/steps/Baliky.png', alt: 'Zoznam balíkov v Neoshipe' },
      {
        type: 'image',
        src: '/images/navody/steps/Priprava-na-tlac.png',
        alt: 'Príprava na tlač štítkov',
      },
    ],
  },
  {
    slug: 'manual-aktivacia-balikova-v-doplnku-neoship-pre-shoptet',
    title: 'Manuál - Aktivácia Balíkova v doplnku Neoship pre Shoptet',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Inštalácia mapky výdajných miest SPS = Balíkova v košíku eshopu je v rámci tohto manuálu možná iba pre klientov spoločnosti NEOSHIP s.r.o., ktorí zároveň majú aktivovaný doplnok Neoship v Shoptete.',
    blocks: [
      {
        type: 'text',
        text: '1. V administrácii Shoptetu, v Shoptet doplnkoch vyhľadáte SPS. Otvoríte a kliknete na „objednať doplnok“:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/sps-doplnok.png',
        alt: 'SPS doplnok v Shoptete',
      },
      { type: 'text', text: '2. Následne kliknete na „prejsť na nastavenie doplnku“:' },
      {
        type: 'image',
        src: '/images/navody/steps/Nastavenie-doplnku.png',
        alt: 'Prejsť na nastavenie doplnku',
      },
      {
        type: 'text',
        text: '3. V nastaveniach je potrebné mať vybraté a zakliknuté tieto možnosti (do prvých dvoch riadkov nedopĺňate nič):',
      },
      {
        type: 'image',
        src: '/images/navody/steps/nastavenie-moznosti.png',
        alt: 'Nastavenie možností doplnku',
      },
      {
        type: 'text',
        text: '4. Potom prejdete na nastavenie dopravy, aby sa doručenie do Balíkova zobrazovalo v košíku:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/zobrazovanie-v-kosiku.png',
        alt: 'Nastavenie zobrazovania dopravy v košíku',
      },
      {
        type: 'text',
        text: '5. V spôsoboch dopravy nájdete „balíkovo“ a kliknete na „x“, čím sa tento spôsob doručenia aktivuje:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/balikovo-x.png',
        alt: 'Aktivácia Balíkova kliknutím na x',
      },
      { type: 'text', text: 'Prepravca sa stane aktívnym a X vystrieda ikona potvrdenia:' },
      {
        type: 'image',
        src: '/images/navody/steps/ikona-potvrdenia.png',
        alt: 'Ikona potvrdenia aktivácie',
      },
      {
        type: 'text',
        text: '6. Kliknete na „balíkovo“ a prípadne upravíte názov, vyberiete možnosti platieb, v cenníku si vyberiete Slovensko a nastavíte si cenu, ktorá sa bude zobrazovať v košíku:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/nastavenia-balikova.png',
        alt: 'Nastavenia balíkova – názov, platby, ceny',
      },
      { type: 'text', text: 'To je všetko, čo je potrebné nastaviť v Shoptete.' },
      { type: 'text', text: '7. V Neoshipe kliknete na ikonu konektora:' },
      {
        type: 'image',
        src: '/images/navody/steps/Screenshot-from-2023-07-14-13-17-01.png',
        alt: 'Ikona konektora v Neoshipe',
      },
      { type: 'text', text: '8. V napojení kliknete na ikonu pera = editácia:' },
      { type: 'image', src: '/images/navody/steps/editacia.png', alt: 'Editácia napojenia' },
      { type: 'text', text: '9. Potom na „pridať prepravcu“:' },
      {
        type: 'image',
        src: '/images/navody/steps/pridat-prepravcu.png',
        alt: 'Pridať prepravcu',
      },
      {
        type: 'text',
        text: '10. V ľavom stĺpci vyberiete prepravcu SPS v Neoshipe, v pravom stĺpci vyberiete prepravcu = balíkovo (resp. tak, ako ste si ho nazvali v košíku). V pravom dolnom rohu nastavenia uložíte:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/balikovo-v-eshope.png',
        alt: 'Mapovanie SPS na balíkovo v e-shope',
      },
      {
        type: 'text',
        text: '11. Teraz je všetko pripravené na to, aby ste mohli jednoducho importovať objednávky s doručením do Balíkova priamo do Neoshipu a hromadne k nim generovať prepravné štítky.',
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-shoptet',
    title: 'Manuál - Aktivácia konektora Neoship pre Shoptet',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Automatizujte vašu expedíciu vďaka konektoru Neoship, ktorý je pripravený pre všetkých užívateľov Shoptetu. Bezstarostná tvorba balíkov a pohodlná tlač štítkov už bude samozrejmosťou. Vďaka konektoru vyexpedujete objednávky a vytlačíte štítky pre SPS, GLS a Packeta.',
    blocks: [
      { type: 'text', text: '1. Na hornej lište v aplikácii Neoship uvidíte túto ikonku:' },
      {
        type: 'image',
        src: '/images/navody/steps/Ikona-konektora.png',
        alt: 'Ikona konektora v Neoshipe',
      },
      {
        type: 'text',
        text: '2. Po kliknutí na ikonu konektora sa zobrazí zoznam napojení, kde kliknete na nové napojenie:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Zoznam-napojeni.png',
        alt: 'Zoznam napojení v Neoshipe',
      },
      {
        type: 'text',
        text: '3. Z ponúkaných možností vyberiete Shoptet. Do poľa Názov napíšete vami zvolený názov prepojenia (je na vás, aký názov si zvolíte). Do poľa URL vložíte vašu URL adresu eshopu až po lomku, napr. https://mojnajkrajsieshop.sk/. Pole API kľúč zatiaľ ostane prázdne. Kliknete na Pokračovať:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662373810_Nove-napojenie-Shoptet.png',
        alt: 'Nové napojenie Shoptet',
      },
      {
        type: 'text',
        text: '4. Potom sa prihlásite do administrácie vášho eshopu a v shoptet doplnkoch si vyhľadáte doplnok Neoship. Kliknete na Objednať a Inštalovať:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Doplnok-Neoship-v-Shoptete.png',
        alt: 'Doplnok Neoship v Shoptete',
      },
      { type: 'text', text: 'Doplnok sa úspešne nainštaloval:' },
      {
        type: 'image',
        src: '/images/navody/steps/Uspesna-instalacia-doplnku-Neoship-v-Shoptete.png',
        alt: 'Úspešná inštalácia doplnku Neoship v Shoptete',
      },
      {
        type: 'text',
        text: '5. Zároveň sa v tomto momente do Neoshipu, do poľa API kľúč, automaticky dotiahol vygenerovaný API kľúč na základe úspešne aktivovaného doplnku:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/API-kluc-v-Neoshipe.png',
        alt: 'API kľúč v Neoshipe',
      },
      {
        type: 'text',
        text: '6. Konektor je nastavený. Aby sa do Neoshipu doťahovali korektné dáta z objednávok, je potrebné nastaviť prepravcov, ktorých v rámci služieb Neoshipu využívate alebo budete využívať, a platobné metódy týkajúce sa dobierok. Zároveň si ľubovoľne môžete nastaviť zmenu stavu objednávky v Shoptete po importe dát do Neoshipu a tiež nastaviť zmenu stavu objednávky po doručení zásielky.',
      },
      { type: 'text', text: 'Urobíte tak cez ikonu pera:' },
      {
        type: 'image',
        src: '/images/navody/steps/Pridanie-prepravcov.png',
        alt: 'Pridanie prepravcov v konektore',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1683787860_Nastavenie-konektora-v-Neoshipe.png',
        alt: 'Nastavenie konektora v Neoshipe',
      },

      { type: 'heading', text: 'Tvorba balíkov a štítkov' },
      {
        type: 'text',
        text: 'Ako dotiahnuť dáta z objednávok a následne z nich vytvoriť balíky a vytlačiť štítky, si môžete pozrieť v inštruktážnom videu.',
      },
      { type: 'text', text: 'Alebo si krok po kroku prejdite nasledovný manuál:' },
      {
        type: 'text',
        text: '1. Na to, aby ste automatizovane dotiahli dáta z objednávok do Neoshipu a vytvorili k nim štítky, je potrebné kliknúť na ikonu balíka:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Kliknutie-na-zoznam-objednavok.png',
        alt: 'Kliknutie na zoznam objednávok',
      },
      {
        type: 'text',
        text: '2. Zobrazí sa stránka so Zoznamom objednávok. V tomto momente si sami do filtra zadáte, aké objednávky chcete dostať do Neoshipu. Ak sú to práve dnešné, do filtra nie je potrebné zadávať nič – systém si ich dotiahne automaticky. Neoship našiel v eshope 7 objednávok, z toho 4 prijaté na prepravu cez SPS a 3 cez GLS. (Ak to budú objednávky z konkrétneho dňa, vo filtri je potrebné vybrať dátum ich prijatia.)',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Objednavky-v-Neoshipe.png',
        alt: 'Zoznam objednávok v Neoshipe',
      },
      { type: 'text', text: '3. Objednávky si označíte a kliknete na Import:' },
      {
        type: 'image',
        src: '/images/navody/steps/Oznacene-objednavky-a-prichystane-na-import.png',
        alt: 'Označené objednávky pripravené na import',
      },
      {
        type: 'text',
        text: '4. Po importe sa vám na kontrolu, či prípadnú úpravu dát, zobrazia opäť všetky objednávky, a ak je všetko v poriadku, opäť kliknete na Import. Dáta sa nahrajú do zoznamu balíkov, odkiaľ si k nim už iba vytlačíte prepravné štítky:',
      },
      { type: 'image', src: '/images/navody/steps/Baliky.png', alt: 'Zoznam balíkov v Neoshipe' },
      {
        type: 'image',
        src: '/images/navody/steps/Priprava-na-tlac.png',
        alt: 'Príprava na tlač štítkov',
      },
    ],
  },
  {
    slug: 'manual-aktivacia-konektora-neoship-pre-prestashop',
    title: 'Manuál - Aktivácia konektora Neoship pre Prestashop',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Konektor Neoship pre PrestaShop (od verzie 1.7 a vyššie) slúži na automatizovaný prenos dát z objednávok pre bezstarostnú tvorbu balíkov a pohodlnú tlač prepravných štítkov – bez ohľadu na využívanú kuriérsku spoločnosť v Neoshipe.',
    blocks: [
      { type: 'heading', text: 'Čo je potrebné nastaviť vo vašom eshope?' },
      {
        type: 'text',
        text: '1. V aplikácii Neoship (sekcia Dokumenty → Moduly) si stiahnete ZIP súbor a v administrácii vášho e-shopu ho nahráte cez IMPROVE → Modules → Module Manager → Nahrať modul:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Nahrat-modul.png',
        alt: 'Nahranie modulu v PrestaShope',
      },
      {
        type: 'image',
        src: '/images/navody/steps/nahrat-modul-b.png',
        alt: 'Výber ZIP súboru modulu',
      },
      { type: 'text', text: 'Po inštalácii sa modul Neoship objaví v zozname modulov:' },
      {
        type: 'image',
        src: '/images/navody/steps/Neoship-modul.png',
        alt: 'Modul Neoship v zozname modulov',
      },
      {
        type: 'text',
        text: '2. V CONFIGURE → Advanced Parameters → Webservice pridáte nový webservice kľúč:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/pridat-novy-webservice-kluc.png',
        alt: 'Pridať nový webservice kľúč',
      },
      {
        type: 'text',
        text: 'Zadáte ľubovoľne zvolený názov kľúča a v oprávneniach povolíte tieto zdroje: addresses, carriers, countries, currencies, customers, neoship_orders, order_carriers, order_states, orders (pozri všetky povolené zdroje na obrázkoch nižšie).',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1663140881_Setovanie-API-kluca.png',
        alt: 'Nastavenie API kľúča – prehľad',
      },
      { type: 'image', src: '/images/navody/steps/1.png', alt: 'Povolenie zdroja addresses' },
      { type: 'image', src: '/images/navody/steps/2.png', alt: 'Povolenie zdroja carriers' },
      { type: 'image', src: '/images/navody/steps/3.png', alt: 'Povolenie zdroja countries' },
      { type: 'image', src: '/images/navody/steps/4-Neoship.png', alt: 'Povolenie zdroja neoship_orders' },
      { type: 'image', src: '/images/navody/steps/5.png', alt: 'Povolenie zdroja order_carriers' },
      { type: 'image', src: '/images/navody/steps/6.png', alt: 'Povolenie zdroja orders' },
      { type: 'text', text: 'Tieto nastavenia uložíte.' },
      { type: 'text', text: 'Potom kliknete na tlačidlo Vygenerovať:' },
      {
        type: 'image',
        src: '/images/navody/steps/Vygenerovanie-API-kluca.png',
        alt: 'Vygenerovanie API kľúča',
      },
      {
        type: 'text',
        text: 'Systém vám vygeneruje API kľúč – poznačte si ho, budete ho potrebovať pri nastavovaní napojenia v Neoshipe:',
      },
      { type: 'image', src: '/images/navody/steps/API-kluc.png', alt: 'Vygenerovaný API kľúč' },

      { type: 'heading', text: 'Čo je potrebné nastaviť v Neoshipe?' },
      { type: 'text', text: '1. Na hornej lište v aplikácii Neoship uvidíte túto ikonku:' },
      {
        type: 'image',
        src: '/images/navody/steps/1662380612_Ikona-konektora.png',
        alt: 'Ikona konektora v Neoshipe',
      },
      {
        type: 'text',
        text: '2. Zobrazí sa zoznam napojení, kde kliknete na nové napojenie:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662380647_Zoznam-napojeni.png',
        alt: 'Zoznam napojení v Neoshipe',
      },
      {
        type: 'text',
        text: '3. Z možností vyberiete Prestashop. Zadáte ľubovoľný názov prepojenia, do poľa URL vložíte adresu e-shopu až po lomku (napr. https://neoship.sk/) a do poľa API kľúč vložíte kľúč, ktorý ste si vygenerovali v administrácii e-shopu. Kliknete na Pokračovať.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Setovanie-napojenia-v-Neoshipe.png',
        alt: 'Nastavenie napojenia v Neoshipe',
      },
      {
        type: 'text',
        text: '4. Konektor je nastavený. Cez ikonu pera nastavíte prepravcov, ktorých v rámci Neoshipu využívate alebo budete využívať, a stav objednávky po importe dát do Neoshipu.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Nastavenie-napojenia.png',
        alt: 'Nastavenie prepravcov v napojení',
      },
      {
        type: 'image',
        src: '/images/navody/steps/mapovanie-prestashop.png',
        alt: 'Mapovanie prepravcov a stavov objednávok',
      },

      { type: 'heading', text: 'Tvorba balíkov a štítkov' },
      {
        type: 'text',
        text: 'Postup, ako dotiahnuť dáta z objednávok do Neoshipu a vytlačiť k nim prepravné štítky, si môžete pozrieť v inštruktážnom videu.',
      },
    ],
  },
  {
    slug: 'manual-aktivacia-pluginu-neoship-vo-woocommerce',
    title: 'Manuál - Aktivácia pluginu Neoship vo WooCommerce',
    category: 'Manuály - Aktivácia pluginov',
    perex:
      'Vďaka pluginu Neoship môžu eshopy hromadne exportovať objednávky do Neoshipu a pre exportované objednávky tlačiť štítky aj preberací protokol. Plugin Neoship je voľne dostupný vo WordPress administrácii a jeho aktivácia je podmienená využívaním služieb Neoshipu.',
    blocks: [
      { type: 'heading', text: 'Aktivácia pluginu Neoship' },
      { type: 'text', text: '1. Stiahnete a aktivujete si plugin Neoship:' },
      {
        type: 'image',
        src: '/images/navody/steps/1662534471_Plugin-Neoship.png',
        alt: 'Stiahnutie a aktivácia pluginu Neoship vo WordPress',
      },
      { type: 'text', text: '2. Kliknete na Nastavenia → Neoship:' },
      {
        type: 'image',
        src: '/images/navody/steps/Nastavenia-Neoship.png',
        alt: 'Nastavenia pluginu Neoship',
      },
      {
        type: 'text',
        text: '3. Vyplníte Client ID a Client secret (obdržíte ich od nás). Po kliknutí na „Uložiť zmeny“ sa vám musí zobraziť potvrdzujúca hláška „Prihlasovacie údaje sú správne“. V tomto momente je váš e-shop prepojený s Neoshipom.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/Prihlasovacie-udaje-su-spravne.png',
        alt: 'Potvrdzujúca hláška o správnych prihlasovacích údajoch',
      },
      {
        type: 'text',
        text: '4. V ľavom menu WooCommerce → Nastavenia → Doprava si vyberiete prepravcov, ktorých v rámci služieb Neoship využívate alebo budete využívať a ktorí sa zároveň aktivujú v košíku.',
      },
      {
        type: 'image',
        src: '/images/navody/steps/WooCommerce-Nastavenia.png',
        alt: 'WooCommerce – Nastavenia',
      },
      { type: 'image', src: '/images/navody/steps/Doprava.png', alt: 'Sekcia Doprava vo WooCommerce' },
      {
        type: 'text',
        text: '5. Ak posielate balíky na Slovensko aj do zahraničia, prepravcov nastavte pre zónu Slovensko a aj pre zónu zahraničie (resp. tak, ako ju máte vytvorenú):',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662536965_Zony-dopravy.png',
        alt: 'Zóny dopravy vo WooCommerce',
      },
      {
        type: 'text',
        text: '6. Cez tlačidlo „Pridať spôsob doručenia“ si vyberiete prepravcu alebo prepravcov, ktorých v rámci Neoship služieb využívate alebo budete využívať:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662536991_Pridat-sposob-dorucenia.png',
        alt: 'Pridať spôsob doručenia',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662537008_Vyber-konkretneho-prepravcu.png',
        alt: 'Výber konkrétneho prepravcu',
      },
      { type: 'text', text: '7. V našom prípade sme si vybrali GLS Kuriéra:' },
      {
        type: 'image',
        src: '/images/navody/steps/1662537024-Vyber-GLS-kuriera.png',
        alt: 'Výber GLS Kuriéra',
      },
      {
        type: 'text',
        text: '8. Ľubovoľne si ho môžete nazvať a zároveň mu nastaviť cenu za prepravu, ktorá sa bude zobrazovať zákazníkovi v košíku:',
      },
      {
        type: 'image',
        src: '/images/navody/steps/1662537122_Premenovanie-kuriera.png',
        alt: 'Premenovanie kuriéra a nastavenie ceny',
      },
      { type: 'text', text: 'Po týchto nastaveniach je všetko pripravené na automatizovanú expedíciu.' },
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
  'parovanie-dobierok-s-fakturami-v-moneys3': 'Parovanie-dobierok-s-fakturami-v-MoneyS3.png',
  'parovanie-dobierok-s-fakturami-v-superfakture':
    'Parovanie-dobierok-s-fakturami-v-SuperFakture.png',
  'parovanie-dobierok-s-fakturami-v-omege': 'Parovanie-dobierok-s-fakturami-v-Omege.png',
  'parovanie-dobierok-s-fakturami-v-pohode': 'Parovanie-dobierok-s-fakturami-v-Pohode.png',
};

/** Snímky obrazovky použité v jednotlivých návodoch (z neoship.sk), v poradí. */
const NAVOD_GALLERY: Record<string, string[]> = {
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
