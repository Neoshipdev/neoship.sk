/** Logické sekcie blogu, do ktorých sa každý príspevok zaraďuje. */
export type BlogSection = 'clanky' | 'vzdelavacka' | 'case-studies';

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
  /** Voliteľná YouTube embed URL pre video vložené priamo v článku. */
  video?: string;
  /** Sekcia, do ktorej príspevok patrí (odvodené v enrichment kroku). */
  section: BlogSection;
};

/**
 * Mapovanie post -> sekcia. Najprv podľa kategórie, potom slug heuristika
 * (články s "pripadova-studia" v slugu sú case studies).
 */
export function deriveBlogSection(post: Pick<BlogPost, 'slug' | 'category'>): BlogSection {
  if (post.category === 'Vzdelávačka s Neoshipom') return 'vzdelavacka';
  if (post.category === 'Prípadové štúdie') return 'case-studies';
  if (post.slug.includes('pripadova-studia') || post.slug.includes('case-study')) {
    return 'case-studies';
  }
  return 'clanky';
}

/** Metadáta pre jednotlivé sekcie blogu – label + URL hodnota. */
export const BLOG_SECTIONS: Array<{ key: BlogSection; label: string }> = [
  { key: 'clanky', label: 'Články' },
  { key: 'vzdelavacka', label: 'Vzdelávačka' },
  { key: 'case-studies', label: 'Case studies' },
];

const blogPostsData: Omit<BlogPost, 'image' | 'sourceUrl' | 'video' | 'section'>[] = [
  {
    slug: 'ako-znizit-pomer-vratiek',
    title: 'Ako znížiť pomer vratiek vo vašom e-shope o 30 %',
    excerpt:
      'Vratky sú jedna z najdrahších položiek e-commerce biznisu. Pozreli sme sa na dáta a vybrali 7 postupov, ktoré reálne fungujú.',
    date: '2026-04-18',
    category: 'Optimalizácia',
    body: `Vratky stoja viac, než si väčšina e-shopov uvedomuje. Okrem dvojnásobnej dopravy si pripočítajte aj čas na manipuláciu, kontrolu kvality, vrátenie do skladu a často aj zníženie hodnoty tovaru. Pri niektorých typoch tovaru môže byť vratka taká nákladná, že z pôvodne ziskovej objednávky vznikne stratová transakcia.

Dobrá správa je, že vratky sa dajú systematicky znižovať. Nie úplne odstrániť, ale dostať pod kontrolu. V tomto článku rozoberáme 7 osvedčených postupov, ktoré v praxi znižujú pomer vratiek aj o desiatky percent.

## 1. Najprv si zmerajte, kde vratky vznikajú

Prvý krok je vždy zmerať. Bez aktuálnych dát o pomere vratiek podľa kategórií, produktov, značiek, veľkostí a krajín strieľate naslepo.

Nestačí sledovať iba celkový počet vrátených objednávok. Dôležité je vedieť:

• ktoré produkty sa vracajú najčastejšie,
• aké sú najčastejšie dôvody vrátenia,
• či sa vratky týkajú konkrétnej veľkosti, farby alebo variantu,
• z ktorých krajín alebo regiónov prichádza najviac vratiek,
• pri ktorých dopravcoch alebo spôsoboch doručenia vzniká najviac problémov.

Až keď tieto dáta poznáte, viete robiť konkrétne opatrenia. Napríklad zistíte, že jeden model topánok má nadpriemernú vratkovosť pre zlý strih, konkrétny produkt má nepresné fotografie alebo určitá kategória potrebuje lepšiu veľkostnú tabuľku.

## 2. Zlepšite produktové popisy, fotografie a videá

Druhý krok je optimalizácia produktových stránok. Veľká časť vratiek vzniká preto, že zákazník dostane niečo iné, než očakával.

Najčastejší dôvod je jednoduchý: produkt na webe nebol dostatočne dobre vysvetlený.

Pomáha najmä:

• viac kvalitných fotografií z rôznych uhlov,
• detailné zábery materiálu, štruktúry a spracovania,
• presné rozmery produktu,
• fotografie produktu v reálnom použití,
• video ukážka,
• jasné informácie o veľkosti, strihu, materiáli alebo kompatibilite,
• upozornenie na špecifiká produktu.

Ak predávate oblečenie, nestačí napísať „veľkosť M". Zákazník potrebuje vedieť, či je strih slim, oversized, krátky, dlhý, elastický alebo pevný. Ak predávate technický produkt, zákazník potrebuje vedieť, s čím je kompatibilný a čo presne balenie obsahuje.

Čím lepšie zákazník pochopí produkt pred nákupom, tým menšia je šanca, že ho po doručení vráti.

## 3. Pridajte veľkostné tabuľky a odporúčania

Pri móde, obuvi, športovom vybavení alebo doplnkoch je veľkosť jeden z hlavných dôvodov vratiek. Ak zákazník nevie, ktorú veľkosť si má vybrať, často objedná viac variantov naraz a časť z nich vráti.

To výrazne zvyšuje náklady e-shopu.

Pomôcť môžu:

• prehľadné veľkostné tabuľky pri každom produkte,
• odporúčanie veľkosti podľa výšky, váhy alebo typu postavy,
• informácia, či produkt sedí menší alebo väčší,
• porovnanie s bežným číslovaním,
• zákaznícke recenzie s údajmi o veľkosti,
• jednoduchý veľkostný poradca.

Veľmi dobre fungujú aj krátke poznámky typu:

> „Model meria 180 cm a má na sebe veľkosť L."

Alebo:

> „Produkt má menší strih, odporúčame zvoliť o číslo väčšiu veľkosť."

Takéto drobnosti často rozhodujú o tom, či zákazník trafí správny výber hneď na prvýkrát.

## 4. Zbierajte dôvody vrátenia a pracujte s nimi

Ak zákazník produkt vracia, vždy by ste sa mali pýtať prečo. Nestačí všeobecná možnosť „nevyhovuje mi". Tá vám nič nepovie.

Lepšie je ponúknuť konkrétne dôvody:

• nesedí veľkosť,
• produkt vyzerá inak ako na fotke,
• nesprávna farba,
• poškodený tovar,
• dlhé doručenie,
• omylom objednané,
• slabá kvalita,
• nekompatibilné s mojím zariadením,
• našiel som lepšiu alternatívu.

Tieto dôvody by ste mali pravidelne vyhodnocovať. Ak sa pri jednom produkte opakuje dôvod „vyzerá inak ako na fotke", problém nie je v zákazníkoch, ale v prezentácii produktu. Ak sa pri konkrétnej veľkosti často objavuje „príliš malé", treba upraviť veľkostné odporúčanie.

Dôvody vrátenia sú veľmi cenná spätná väzba. E-shopy ich často iba evidujú, ale aktívne s nimi nepracujú. Práve tam býva veľký priestor na zníženie vratiek.

## 5. Zlepšite balenie a kontrolu pred odoslaním

Nie všetky vratky vznikajú kvôli zlému rozhodnutiu zákazníka. Časť z nich vzniká priamo v sklade alebo logistike.

Typické problémy:

• zákazník dostane nesprávny produkt,
• chýba príslušenstvo,
• produkt príde poškodený,
• balík je zle zabalený,
• etiketa je nalepená na nesprávnu zásielku,
• tovar neprejde výstupnou kontrolou.

Tieto chyby sú pre e-shop obzvlášť drahé, pretože im viete predísť. Pomáha zaviesť jednoduchú kontrolu pred expedíciou, skenovanie čiarových kódov, fotodokumentáciu zásielky alebo lepšie pravidlá balenia pre citlivý tovar.

Pri drahších alebo krehkých produktoch sa oplatí mať jasný baliaci štandard. Napríklad iný postup pre sklo, elektroniku, kozmetiku alebo produkty s vysokou hodnotou.

Každá chyba v expedícii zvyšuje nielen náklady, ale aj riziko, že zákazník sa už nevráti.

## 6. Nastavte komunikáciu pred nákupom aj po nákupe

Mnoho vratiek vzniká preto, že zákazník si nie je istý, čo kupuje. Preto je dôležité pomôcť mu ešte pred objednávkou.

Fungovať môže:

• živý chat,
• poradňa pri výbere,
• často kladené otázky pri produkte,
• odporúčané alternatívy,
• porovnanie produktov,
• automatické odporúčania podľa parametrov.

Ak zákazník váha medzi dvoma produktmi, dobrá rada pred nákupom môže zabrániť vratke po nákupe.

Dôležitá je aj komunikácia po objednávke. Zákazník by mal vedieť, kedy mu príde balík, čo má v zásielke očakávať a ako produkt správne použiť. Pri niektorých produktoch pomôže jednoduchý návod, video alebo e-mail s tipmi po doručení.

Napríklad pri elektronike, nábytku, športových pomôckach alebo kozmetike môže nesprávne použitie viesť k nespokojnosti a následnému vráteniu.

## 7. Sledujte produkty s vysokou vratkovosťou a rozhodujte sa podľa dát

Niektoré produkty sa jednoducho neoplatí predávať v aktuálnej podobe. Môžu mať dobrý predaj, ale zároveň tak vysokú vratkovosť, že znižujú celkovú maržu.

Preto sa oplatí pravidelne sledovať:

• produkty s najvyšším počtom vratiek,
• produkty s najvyšším percentom vratiek,
• produkty s najdrahším spracovaním vratky,
• produkty, ktoré sa po vrátení nedajú znova predať za plnú cenu.

Pri takýchto produktoch máte viac možností. Môžete upraviť popis, fotografie, veľkostnú tabuľku, cenu, odporúčanie veľkosti alebo balenie. Ak sa problém opakuje, môže byť lepšie produkt vyradiť, nahradiť alebo predávať iba s jasnejším upozornením.

Dôležité je nepozerať sa iba na tržby. Produkt, ktorý sa dobre predáva, nemusí byť automaticky ziskový, ak sa príliš často vracia.

## Ako môže vyzerať praktický plán na zníženie vratiek

Ak chcete znížiť vratky systematicky, odporúčame začať jednoducho:

• Vyexportujte si dáta o vratkách za posledné 3 až 6 mesiacov.
• Rozdeľte ich podľa produktov, kategórií, krajín a dôvodov vrátenia.
• Vyberte 10 produktov s najvyššou vratkovosťou.
• Skontrolujte ich fotografie, popisy, rozmery a zákaznícke recenzie.
• Doplňte chýbajúce informácie.
• Upravte veľkostné odporúčania alebo technické parametre.
• Po 30 až 60 dňoch porovnajte výsledky.

Nemusíte hneď prerábať celý e-shop. Najväčší efekt často prinesie optimalizácia malej skupiny produktov, ktoré generujú najviac vratiek.

## Záver

Zníženie vratiek nie je jednorazová úprava reklamačného procesu. Je to kombinácia lepších dát, presnejších produktových informácií, kvalitnejšej logistiky a lepšej komunikácie so zákazníkom.

Ak e-shop začne systematicky sledovať dôvody vratiek a pracovať s nimi, dokáže znížiť ich pomer aj o desiatky percent. V praxi to znamená nižšie logistické náklady, menej práce pre zákaznícku podporu, vyššiu spokojnosť zákazníkov a lepšiu maržu.

Najväčší rozdiel spravia často jednoduché veci: lepšie fotografie, presnejší popis, jasná veľkostná tabuľka, kontrola pred odoslaním a pravidelné vyhodnocovanie dát.

Vratky sa nedajú odstrániť úplne. Ale dajú sa riadiť. A práve to odlišuje e-shopy, ktoré na vratkách zbytočne strácajú peniaze, od tých, ktoré ich majú pod kontrolou.`,
  },
  {
    slug: 'dobierky-cashflow-2026',
    title: 'Dobierky a cashflow v roku 2026: dáta a trendy',
    excerpt:
      'Pomer dobierkových platieb medziročne klesá, ale stále tvoria významnú časť obratu e-shopov. Pozreli sme sa na čerstvé čísla, trendy a praktické dopady na cashflow.',
    date: '2026-01-30',
    category: 'Financie',
    body: `Dobierka už nie je taká dominantná ako pred niekoľkými rokmi. Zákazníci si čoraz častejšie zvykajú na platbu kartou, Apple Pay, Google Pay alebo bankový prevod. Napriek tomu dobierka z e-commerce nezmizla. V mnohých segmentoch je stále dôležitou súčasťou nákupného správania a pre e-shopy predstavuje významný faktor pri riadení hotovosti.

Podľa aktuálnych trendov pomer dobierkových platieb medziročne klesá približne o 4 až 6 percentuálnych bodov. To je viditeľný posun smerom k online platbám. No v niektorých kategóriách, najmä v móde, šperkoch, doplnkoch alebo pri produktoch s vyššou mierou impulzívneho nákupu, tvoria dobierky stále približne 30 až 40 % objednávok.

Pre tieto e-shopy nie je dobierka iba platobná metóda. Je to samostatná téma cashflow, logistiky, administratívy a rizika.

## Dobierka klesá, ale stále má silnú pozíciu

Online platby rastú najmä preto, že sú pre zákazníka pohodlnejšie. Zákazník zaplatí okamžite, objednávka sa rýchlejšie spracuje a e-shop má peniaze skôr. Z pohľadu obchodníka je to ideálny scenár.

Dobierka však stále zostáva populárna pri zákazníkoch, ktorí:

• nechcú platiť vopred,
• nemajú dôveru k novému e-shopu,
• objednávajú z e-shopu prvýkrát,
• chcú mať istotu, že zásielka reálne príde,
• sú zvyknutí platiť až pri doručení,
• nakupujú impulzívne a nechcú zadávať platobné údaje.

Zákazník pri dobierke vníma menšie riziko. E-shop však na seba preberá viac rizika. Tovar odošle bez toho, aby mal peniaze okamžite na účte.

## Prečo je dobierka problém pre cashflow

Pri online platbe má e-shop peniaze zvyčajne rýchlo dostupné. Pri dobierke je situácia iná. Peniaze najskôr vyberie dopravca alebo výdajné miesto, následne ich spracuje a až potom pošle e-shopu.

To znamená, že medzi odoslaním objednávky a reálnym pripísaním peňazí na účet môže vzniknúť časová medzera.

Táto medzera môže byť problém najmä pri e-shopoch, ktoré majú:

• vysoký podiel dobierok,
• rýchly rast objednávok,
• veľa zásob viazaných na sklade,
• nízke marže,
• drahú logistiku,
• sezónne výkyvy,
• vyšší podiel neprevzatých zásielok.

Pri väčšom objeme objednávok môžu byť v dobierkach viazané tisíce až desaťtisíce eur. Peniaze sú „na ceste", ale e-shop ich ešte nemá k dispozícii. Zároveň už musel zaplatiť tovar, balenie, sklad, dopravu, mzdy alebo marketing.

## Najväčšie riziko: neprevzaté dobierky

Najväčší problém dobierky nie je len oneskorený príjem peňazí. Najväčším rizikom je neprevzatá zásielka.

Pri platbe vopred zákazník už zaplatil. Pri dobierke sa môže jednoducho rozhodnúť, že si balík neprevezme. E-shop potom platí dopravu tam aj späť, manipulačné náklady a často rieši aj opätovné zaradenie tovaru do skladu.

Neprevzatá dobierka môže vzniknúť z rôznych dôvodov:

• zákazník si nákup rozmyslel,
• objednal podobný produkt inde,
• zabudol na zásielku,
• nebol dostupný,
• cena pri doručení ho odradila,
• objednávka bola impulzívna,
• doručenie trvalo príliš dlho.

Pre e-shop je dôležité sledovať nielen podiel dobierok, ale aj podiel neprevzatých dobierok. Práve ten ukazuje, aké veľké finančné riziko dobierka reálne prináša.

## Segmenty, kde dobierka stále hrá veľkú úlohu

Dobierka má najväčší význam v segmentoch, kde zákazník často nakupuje podľa pocitu, veľkosti, vzhľadu alebo dôvery.

Typicky ide o:

• módu,
• obuv,
• šperky,
• doplnky,
• kozmetiku,
• produkty pre domácnosť,
• darčekový tovar,
• sezónny sortiment.

Pri móde a šperkoch môže dobierka stále tvoriť 30 až 40 % objednávok. Dôvod je jednoduchý. Zákazník si chce zachovať pocit kontroly. Pri drahšom alebo osobnejšom produkte často nechce platiť vopred, najmä ak e-shop ešte nepozná.

Naopak, v technických segmentoch, pri opakovaných nákupoch alebo pri známych značkách je podiel online platieb zvyčajne vyšší.

## Ako dobierka ovplyvňuje plánovanie peňazí

Ak má e-shop veľký podiel dobierok, musí s tým počítať pri finančnom plánovaní. Nestačí pozerať iba na obrat v administrácii e-shopu.

Dôležité je sledovať:

• koľko objednávok je zaplatených vopred,
• koľko peňazí je viazaných v dobierkach,
• kedy dopravcovia posielajú vybrané dobierky,
• aký je priemerný čas pripísania dobierky na účet,
• aký je podiel neprevzatých zásielok,
• aké sú náklady na neprevzaté dobierky,
• koľko peňazí je potrebných na zásoby a marketing pred tým, než prídu platby.

E-shop môže mať na papieri vysoký obrat, ale v praxi môže mať napäté cashflow. Najmä v období rastu alebo sezóny, keď treba nakupovať viac tovaru a zároveň sa peniaze z dobierok vracajú oneskorene.

## Ako znížiť negatívny vplyv dobierok na cashflow

Cieľom nemusí byť dobierku úplne zrušiť. V niektorých segmentoch by to mohlo znížiť konverzný pomer. Lepšie je dobierku riadiť a postupne presúvať zákazníkov k online platbám.

Pomôcť môžu tieto opatrenia:

### 1. Zvýhodnite platbu vopred

Zákazník potrebuje dôvod, prečo si vybrať online platbu. Môže to byť lacnejšia doprava, rýchlejšie spracovanie objednávky alebo jednoduchšia reklamácia.

Aj malé cenové zvýhodnenie môže zmeniť správanie zákazníkov.

### 2. Dobierku spoplatnite férovo

Dobierka má pre e-shop reálne náklady. Preto je prirodzené, ak je drahšia ako platba kartou. Dôležité je komunikovať to jasne a transparentne.

Zákazník by mal vidieť, že dobierka je služba navyše, nie samozrejmosť bez nákladov.

### 3. Obmedzte dobierku pri rizikových objednávkach

Nie každá objednávka musí mať rovnaké možnosti platby. Pri drahých objednávkach, opakovaných neprevzatiach alebo podozrivom správaní môže e-shop ponúknuť iba platbu vopred.

Takéto pravidlá môžu výrazne znížiť náklady na neprevzaté zásielky.

### 4. Pripomínajte zákazníkovi doručenie

Veľa neprevzatých dobierok vzniká jednoducho preto, že zákazník zabudne. Pomáhajú automatické SMS, e-mailové notifikácie alebo pripomienky pred doručením.

Dobrá komunikácia môže znížiť počet neprevzatých zásielok bez toho, aby e-shop musel meniť platobné metódy.

### 5. Sledujte dopravcov a výdajné miesta

Nie všetci dopravcovia majú rovnaké výsledky pri dobierkach. Rozdiely môžu byť v rýchlosti doručenia, úspešnosti doručenia, komunikácii so zákazníkom aj v čase vyplatenia dobierok.

Pre cashflow je dôležité vedieť, ktorý dopravca posiela dobierky najrýchlejšie a pri ktorom vzniká najviac neprevzatých zásielok.

### 6. Motivujte opakovaných zákazníkov k online platbe

Ak zákazník u vás nakúpil viackrát a vždy si objednávku prevzal, môže byť vhodný čas ponúknuť mu výhodu pri platbe vopred.

Pri opakovaných zákazníkoch je dôvera vyššia. Preto je jednoduchšie meniť ich platobné návyky.

### 7. Vyhodnocujte dobierky samostatne

Dobierka by nemala byť len jedna položka v platobných metódach. Mala by mať vlastné reporty.

Sledujte najmä:

• podiel dobierok na objednávkach,
• podiel dobierok na obrate,
• priemernú hodnotu dobierkovej objednávky,
• priemerný čas vyplatenia dobierky,
• počet neprevzatých dobierok,
• náklady na neprevzaté dobierky,
• rozdiel podľa krajiny, dopravcu a kategórie.

Až tieto dáta ukážu, či je dobierka pre váš e-shop zdravá platobná metóda alebo skrytý problém.

## Dobierka nie je nepriateľ, ale treba ju riadiť

Dobierka má stále svoje miesto. Pre niektorých zákazníkov je to spôsob, ako získať dôveru k e-shopu. Pre niektoré segmenty je to platobná metóda, ktorá pomáha udržať konverzie.

Problém vzniká vtedy, keď e-shop dobierku nesleduje a nevie, koľko ho reálne stojí.

Ak dobierka tvorí 30 až 40 % objednávok, nejde o detail. Ide o významnú časť biznisu. Každé zlepšenie v rýchlosti vyplácania, úspešnosti doručenia alebo znížení neprevzatých zásielok môže mať priamy dopad na cashflow.

## Záver

Rok 2026 potvrdzuje jasný trend: dobierky postupne klesajú, ale stále nezmizli. Medziročne ich podiel klesá približne o 4 až 6 percentuálnych bodov, no v niektorých segmentoch stále tvoria významnú časť objednávok.

Pre e-shopy je preto dôležité nepozerať sa na dobierku iba ako na platobnú možnosť. Je to faktor, ktorý ovplyvňuje cashflow, logistiku, riziko aj zákaznícku skúsenosť.

Najlepšie výsledky dosiahnu e-shopy, ktoré dobierku nezrušia bez rozmyslu, ale začnú ju riadiť podľa dát. Budú sledovať podiel dobierok, neprevzaté zásielky, rýchlosť vyplácania a správanie zákazníkov podľa segmentov.

Dobierka môže byť stále užitočná. Ale iba vtedy, keď e-shop presne vie, koľko ho stojí, aké riziko prináša a ako vplýva na jeho cashflow.`,
  },
  {
    slug: 'pickup-points-vs-domov',
    title: 'Výdajné miesta vs. doručenie domov: čo preferujú zákazníci?',
    excerpt:
      'Slovenskí a českí zákazníci si čoraz častejšie vyberajú výdajné miesta. Aké sú dôvody a čo to znamená pre e-shopy?',
    date: '2025-11-05',
    category: 'E-commerce',
    body: `Doručenie domov bolo dlhé roky považované za najpohodlnejšiu možnosť online nákupu. Zákazník si objednal tovar a čakal, že mu ho kuriér prinesie priamo pred dvere. V posledných rokoch sa však nákupné správanie výrazne mení. Výdajné miesta, boxy a partnerské prevádzky sa stali bežnou súčasťou e-commerce logistiky.

V roku 2026 si už viac ako 45 % slovenských zákazníkov vyberá výdajné miesto. Podobný trend vidíme aj v Česku, kde sú zákazníci na výdajné siete zvyknutí ešte dlhšie. Tento posun nie je náhodný. Výdajné miesta zákazníkom riešia viacero praktických problémov naraz: čas, flexibilitu, cenu aj istotu doručenia.

Pre e-shopy to znamená jediné. Výdajné miesta už nie sú iba doplnková možnosť dopravy. Stávajú sa jedným z hlavných spôsobov doručenia.

## Prečo zákazníci čoraz častejšie volia výdajné miesta

Najväčšou výhodou výdajného miesta je sloboda. Zákazník nemusí čakať doma na kuriéra, prispôsobovať si deň doručeniu alebo riešiť, či bude v čase doručenia na adrese.

Balík si jednoducho vyzdvihne vtedy, keď sa mu to hodí.

Pre mnohých zákazníkov je to pohodlnejšie než doručenie domov. Najmä ak bývajú v meste, denne chodia okolo výdajného boxu, potravín, trafiky alebo nákupného centra, kde si zásielku môžu prevziať cestou z práce, školy alebo nákupu.

Výdajné miesta fungujú dobre hlavne preto, že sa prispôsobili reálnemu životu zákazníkov. Nie zákazník logistike, ale logistika zákazníkovi.

## Doručenie domov má stále svoje miesto

To však neznamená, že doručenie domov stráca význam úplne. Stále je dôležité najmä pri veľkých, ťažkých alebo drahších produktoch. Ak si zákazník objedná nábytok, väčší spotrebič, objemnú zásielku alebo tovar, ktorý nechce prenášať, doručenie domov je prirodzená voľba.

Doručenie na adresu preferujú aj zákazníci, ktorí:

• pracujú z domu,
• bývajú mimo mesta,
• nemajú výdajné miesto v blízkosti,
• objednávajú ťažký alebo objemný tovar,
• chcú zásielku dostať priamo do rúk,
• potrebujú expresné doručenie.

Preto by e-shop nemal doručenie domov nahrádzať výdajnými miestami úplne. Správna stratégia je ponúknuť zákazníkovi voľbu a dobre ju odkomunikovať.

## Cena je stále jeden z hlavných dôvodov

Jedným z najdôležitejších faktorov pri výbere dopravy je cena. Výdajné miesta sú pre zákazníka často lacnejšie než doručenie kuriérom na adresu.

Pri menších objednávkach môže rozdiel v cene rozhodnúť o dokončení nákupu. Ak zákazník vidí, že doručenie domov stojí výrazne viac, často si vyberie výdajné miesto alebo box.

Pre e-shop je to výhodné tiež. Doručenie na výdajné miesto býva logisticky efektívnejšie, má vyššiu úspešnosť doručenia a znižuje počet neúspešných pokusov o doručenie.

To znamená nižšie náklady a menej komplikácií.

## Flexibilita rozhoduje najmä v mestách

Vo väčších mestách je trend výdajných miest ešte výraznejší. Zákazníci majú často viacero možností v pešej vzdialenosti alebo po ceste do práce.

Výdajné boxy sú navyše dostupné nepretržite. To je obrovská výhoda pre ľudí, ktorí pracujú dlho, cestujú alebo nechcú riešiť otváracie hodiny prevádzok.

Pre zákazníka je dôležité, aby si mohol vybrať:

• miesto blízko domova,
• miesto blízko práce,
• box dostupný 24/7,
• prevádzku s dlhšími otváracími hodinami,
• najlacnejšiu možnosť,
• najrýchlejšiu možnosť.

Čím viac relevantných možností mu e-shop ponúkne, tým menšia je šanca, že nákup opustí v košíku.

## Výdajné miesta znižujú problém neúspešného doručenia

Pri doručení domov je najväčší problém načasovanie. Kuriér príde, zákazník nie je doma, telefón nezdvihne alebo si zásielku nestihne prevziať. Výsledkom sú opakované pokusy o doručenie, presmerovanie balíka alebo jeho návrat.

Výdajné miesto tento problém výrazne znižuje. Balík čaká na zákazníka niekoľko dní a zákazník si ho vyzdvihne vo vhodnom čase.

Pre e-shop to znamená:

• menej neúspešných doručení,
• menej komunikácie so zákazníckou podporou,
• nižšie riziko vrátenia zásielky,
• lepšiu predvídateľnosť logistiky,
• spokojnejšieho zákazníka.

Najmä pri dobierkach môže byť výdajné miesto výhodné, pretože zákazník má viac času a flexibility na prevzatie zásielky.

## Ako sa mení správanie zákazníkov v Česku a na Slovensku

Slovensko aj Česko majú v oblasti výdajných miest veľmi silný trh. Zákazníci si rýchlo zvykli na kombináciu boxov, výdajných miest a partnerských prevádzok.

V Česku je tento trend veľmi prirodzený už dlhšie. Zákazníci často očakávajú, že pri dokončení objednávky dostanú viacero možností výdaja a budú si môcť vybrať konkrétne miesto na mape.

Na Slovensku sa tento návyk v posledných rokoch výrazne zrýchlil. Ak si už viac ako 45 % zákazníkov vyberá výdajné miesto, nejde o okrajový jav. Ide o štandardné správanie veľkej časti trhu.

Pre e-shop to znamená, že výdajné miesta musia byť súčasťou základnej logistickej ponuky.

## Čo by mal mať e-shop vyriešené

Nestačí mať v pokladni jednu možnosť „výdajné miesto". Zákaznícka skúsenosť musí byť jednoduchá a prehľadná.

E-shop by mal mať vyriešené najmä:

• výber konkrétneho výdajného miesta v košíku,
• mapu alebo vyhľadávanie podľa adresy,
• jasnú cenu dopravy,
• informáciu o odhadovanom doručení,
• dostupnosť výdajných miest podľa dopravcu,
• správne odosielanie údajov do expedičného systému,
• automatické notifikácie zákazníkovi,
• jednoduché riešenie zmien alebo presmerovania zásielky.

Ak zákazník nevie rýchlo nájsť vhodné výdajné miesto, môže objednávku opustiť. Výber dopravy je preto dôležitá časť konverzného procesu.

## Prečo je výber dopravcov strategická téma

Výdajné miesta nie sú len o cene. Každý dopravca má inú sieť, inú dostupnosť, inú kvalitu doručenia a inú zákaznícku skúsenosť.

Pre e-shop je dôležité sledovať:

• ktoré výdajné siete zákazníci využívajú najviac,
• kde vzniká najviac problémov,
• ktoré pobočky majú dobrú úspešnosť výdaja,
• pri ktorých dopravcoch sú najčastejšie reklamácie,
• ako rýchlo sa zásielky doručujú,
• aký je podiel nevyzdvihnutých zásielok.

Najlepšia logistická stratégia nie je ponúknuť všetko každému. Najlepšia stratégia je ponúknuť také možnosti, ktoré zákazníci reálne využívajú a ktoré sú pre e-shop ekonomicky aj prevádzkovo výhodné.

## Ako výdajné miesta ovplyvňujú konverzie

Doprava je jeden z najcitlivejších momentov v nákupnom procese. Zákazník už má produkty v košíku, ale ešte stále sa môže rozhodnúť objednávku nedokončiť.

Ak v tomto kroku nenájde preferovaný spôsob doručenia, cena je príliš vysoká alebo výber miesta je komplikovaný, konverzia klesá.

Výdajné miesta môžu pomôcť zvýšiť dokončenie objednávky, pretože zákazník dostane lacnejšiu a flexibilnejšiu alternatívu k doručeniu domov.

Najmä pri menších objednávkach je to veľmi dôležité. Ak produkt stojí 20 eur a doručenie domov 5 eur, zákazník začína váhať. Ak má možnosť lacnejšieho výdajného miesta, objednávku pravdepodobnejšie dokončí.

## Výdajné miesta pomáhajú aj pri škálovaní e-shopu

Pre rastúce e-shopy je logistika často úzke miesto. Čím viac objednávok, tým väčší tlak na expedíciu, dopravcov, zákaznícku podporu a riešenie problémov.

Výdajné miesta môžu tento tlak znížiť. Doručenie je efektívnejšie, menej závislé od prítomnosti zákazníka na adrese a často lacnejšie.

Pre e-shop, ktorý rastie alebo expanduje do Česka a na Slovensko, je preto dôležité mať dobre nastavené výdajné siete už od začiatku.

## Ako sa na trend pripraviť

Ak e-shop ešte nemá výdajné miesta dobre spracované, mal by začať pri dátach. Nestačí predpokladať, čo zákazníci chcú. Treba sledovať, čo si reálne vyberajú.

Praktický postup môže vyzerať takto:

• Vyhodnoťte podiel doručenia domov a výdajných miest.
• Pozrite sa na rozdiel podľa krajiny, regiónu a kategórie.
• Sledujte cenu dopravy a jej vplyv na dokončenie objednávky.
• Porovnajte úspešnosť doručenia medzi dopravcami.
• Skontrolujte, či je výber výdajného miesta v košíku jednoduchý.
• Otestujte zvýraznenie najvýhodnejšej možnosti dopravy.
• Pravidelne vyhodnocujte nevyzdvihnuté zásielky.

Cieľom nie je zákazníka tlačiť do jednej možnosti. Cieľom je dať mu pohodlný výber a zároveň mať logistiku pod kontrolou.

## Záver

Výdajné miesta sa v roku 2026 stávajú jedným z najdôležitejších spôsobov doručenia v slovenskom a českom e-commerce. Ak si ich na Slovensku vyberá už viac ako 45 % zákazníkov, ide o trend, ktorý e-shopy nemôžu ignorovať.

Doručenie domov zostáva dôležité, najmä pri objemnejších alebo drahších produktoch. No pri bežných objednávkach zákazníci čoraz častejšie uprednostňujú flexibilitu, nižšiu cenu a možnosť vyzdvihnúť si balík vtedy, keď im to vyhovuje.

Pre e-shopy je preto kľúčové mať výdajné miesta dobre integrované v košíku, ponúknuť relevantných dopravcov, pracovať s dátami a sledovať reálne správanie zákazníkov.

Výdajné miesto už nie je alternatíva pre pár zákazníkov. Je to štandard, ktorý môže rozhodovať o tom, či zákazník objednávku dokončí alebo odíde ku konkurencii.`,
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
  {
    slug: 'pri-jednom-stitku-usetrime-minimalne-1-2-minuty-pripadova-studia-villy-sk',
    title: 'Pri jednom štítku ušetríme minimálne 1-2 minúty – prípadová štúdia villy.sk',
    excerpt:
      'Ako e-shop villy.sk vďaka Neoshipu zrýchlil expedíciu a pri každom jednom štítku ušetril 1-2 minúty manuálnej práce.',
    date: '2024-05-23',
    category: 'Všetky novinky',
    body: `V prípadovej štúdii eshopu villy.sk sa pozrieme na to, ako automatizácia tlače štítkov a celého expedičného procesu zmenila každodennú prevádzku. Aj pri jednom balíku vie Neoship usporiť 1-2 minúty manuálnej práce – pri stovkách balíkov denne ide o hodiny ušetreného času.\n\nŠtúdia rozoberá konkrétne čísla, použité integrácie aj kroky, ktoré tím villy.sk podnikol pri prechode na Neoship.`,
  },
  {
    slug: 'porovnanie-zakladnych-poziadaviek-a-funkcii-na-b2b-a-b2c-e-shopy-na-mieru',
    title: 'Porovnanie základných požiadaviek a funkcií na B2B a B2C e-shopy na mieru',
    excerpt:
      'Aké sú kľúčové rozdiely v požiadavkách na B2B a B2C e-shop a aké funkcie sú nevyhnutné pre každý z nich.',
    date: '2024-05-14',
    category: 'Všetky novinky',
    body: `B2B a B2C e-shopy sa líšia v procese objednávky, cenotvorbe, platobných podmienkach aj v integráciách. V tomto článku porovnávame základné požiadavky a funkcie potrebné pre oba typy e-shopov.\n\nReč príde aj na e-shopy „na mieru" – kedy sa oplatia, čo by mali obsahovať a ako sa do nich integruje expedičné riešenie ako Neoship.`,
  },
  {
    slug: '7-vzdelavacka-s-neoshipom-kolko-a-ake-sposoby-dorucenia-je-vhodne-mat-v-kosiku',
    title: '#7 Vzdelávačka s Neoshipom: Koľko a aké spôsoby doručenia je vhodné mať v košíku',
    excerpt:
      'Koľko spôsobov doručenia v košíku ponúknuť a ktoré sa naozaj oplatí mať aktívne? Praktický pohľad.',
    date: '2024-05-08',
    category: 'Vzdelávačka s Neoshipom',
    body: `Príliš veľa spôsobov doručenia v košíku vyvoláva u zákazníka rozhodovaciu paralýzu, príliš málo zase znamená opustený nákup. V siedmej časti vzdelávačky radíme, aký počet je optimálny a ktoré kombinácie sa pre slovenský a český trh osvedčujú najviac.`,
  },
  {
    slug: '6-vzdelavacka-s-neoshipom-ako-doplnkove-sluzby-u-prepravcov-zamiesaju-kartami',
    title: '#6 Vzdelávačka s Neoshipom: Ako doplnkové služby u prepravcov zamiešajú kartami',
    excerpt:
      'Doplnkové služby ako poistenie, doručenie do rúk alebo víkendové doručovanie môžu výrazne ovplyvniť cenu prepravy.',
    date: '2024-04-18',
    category: 'Vzdelávačka s Neoshipom',
    body: `Pri porovnávaní cien prepravcov sa často pozeráme iba na základnú cenu balíka. Doplnkové služby – poistenie nad rámec, doručenie do rúk, víkendové doručenie či opakovaný pokus – však dokážu zamiešať kartami a celkovú kalkuláciu výrazne zmeniť.\n\nV šiestej časti vzdelávačky vysvetľujeme, na ktoré doplnkové služby si dať pozor pri porovnávaní cenových ponúk.`,
  },
  {
    slug: 'ako-to-vyzera-v-praxi-ked-1-1-3-pripadova-studia-cukrovinky-sk',
    title: 'Ako to vyzerá v praxi keď 1 + 1 = 3 – prípadová štúdia eshopu cukrovinky.sk',
    excerpt:
      'Ako kombinácia správneho expedičného nástroja a partnerstva s Neoshipom priniesla eshopu cukrovinky.sk efekt 1 + 1 = 3.',
    date: '2024-04-15',
    category: 'Všetky novinky',
    body: `Niekedy nie je súčet jednoduchý matematický úkon. V prípade eshopu cukrovinky.sk priniesla kombinácia automatizovanej expedície, vyjednanej ceny prepravy a podpory Neoshipu efekt, kde 1 + 1 dáva 3.\n\nV prípadovej štúdii rozoberáme konkrétne kroky, ktoré tím cukrovinky.sk podnikol, a aké výsledky vidno v číslach.`,
  },
  {
    slug: 'efektivne-odosielanie-balikov-je-veda-co-setri-tisice-eur-rozhovor-pre-ecommerce-bridge',
    title: 'Efektívne odosielanie balíkov je veda, čo šetrí tisíce eur – Rozhovor pre Ecommerce Bridge',
    excerpt:
      'Rozhovor pre Ecommerce Bridge o tom, prečo je efektívne odosielanie balíkov kľúčové a koľko peňazí môže ušetriť.',
    date: '2024-03-28',
    category: 'Expedovanie a logistika',
    body: `V rozhovore pre portál Ecommerce Bridge sme rozprávali o tom, prečo efektívne odosielanie balíkov je celá veda a ako dokáže e-shopu ušetriť tisíce eur ročne.\n\nReč prišla na automatizáciu, výber prepravcu, doplnkové služby aj na to, prečo má zmysel ku každému e-shopu pristupovať individuálne.`,
  },
  {
    slug: '5-vzdelavacka-s-neoshipom-na-vahe-a-kartovych-poplatkoch-naozaj-zalezi',
    title: '#5 Vzdelávačka s Neoshipom: Na váhe a kartových poplatkoch naozaj záleží',
    excerpt:
      'Váha balíkov a kartové poplatky sú dva detaily, ktoré výrazne ovplyvňujú konečnú cenu expedície.',
    date: '2024-03-26',
    category: 'Vzdelávačka s Neoshipom',
    body: `Pri porovnávaní cien prepravcov sa často zabúda na dve dôležité veci – váhové pásma a kartové poplatky pri dobierke. V piatej časti vzdelávačky na praktickom príklade ukazujeme, ako tieto dva parametre dokážu poriadne zamiešať s výslednou cenou.`,
  },
  {
    slug: '4-vzdelavacka-s-neoshipom-nekupujte-macku-vo-vreci',
    title: '#4 Vzdelávačka s Neoshipom: Nekupujte mačku vo vreci!',
    excerpt:
      'Pred výberom expedičného riešenia si dobre overte, čo presne dostávate. Inak môžete kúpiť mačku vo vreci.',
    date: '2024-02-27',
    category: 'Vzdelávačka s Neoshipom',
    body: `Sľubovaný „najlacnejší expedičný nástroj" sa môže veľmi rýchlo zmeniť na drahšiu voľbu, ak skryté poplatky, obmedzenia alebo chýbajúce integrácie odhalíte až po podpise zmluvy.\n\nV štvrtej časti vzdelávačky radíme, na čo si dať pozor pri výbere expedičného riešenia, aby ste nekúpili mačku vo vreci.`,
  },
  {
    slug: '3-vzdelavacka-s-neoshipom-4-dovody-preco-porovnavat-iba-cenu-nestaci',
    title: '#3 Vzdelávačka s Neoshipom: 4 dôvody, prečo porovnávať iba cenu nestačí',
    excerpt:
      'Cena je dôležitá, no pri výbere prepravcu zďaleka nie je všetkým. Pozrime sa na 4 dôvody, prečo.',
    date: '2024-02-22',
    category: 'Vzdelávačka s Neoshipom',
    body: `Pri výbere prepravcu mnohí eshopári pozerajú iba na cenu za balík. V tretej časti vzdelávačky rozoberáme štyri ďalšie faktory – kvalitu doručovania, sieť výdajných miest, technologické napojenie a doplnkové služby – ktoré rovnako ovplyvňujú spokojnosť zákazníkov aj náklady e-shopu.`,
  },
  {
    slug: '2-vzdelavacka-s-neoshipom-preco-rychlo-a-lacno-moze-byt-niekedy-poriadne-drahe',
    title: '#2 Vzdelávačka s Neoshipom: Prečo rýchlo a lacno môže byť niekedy poriadne drahé?',
    excerpt:
      'Najlacnejšia ponuka prepravy môže e-shop v konečnom účte vyjsť poriadne draho. Vysvetľujeme prečo.',
    date: '2024-02-06',
    category: 'Vzdelávačka s Neoshipom',
    body: `Veta „dáme to rýchlo a lacno" sa v expedícii často skončí drahým prebúdzaním. V druhej časti vzdelávačky rozoberáme typické situácie, kedy zdanlivo najvýhodnejšia ponuka prepravcu prinesie do e-shopu skryté náklady – od reklamácií, cez stratu zákazníkov, až po administratívne komplikácie.`,
  },
  {
    slug: '1-vzdelavacka-s-neoshipom-preco-vzdelavacka',
    title: '#1 Vzdelávačka s Neoshipom: Prečo Vzdelávačka?',
    excerpt:
      'Predstavujeme novú sériu Vzdelávačka s Neoshipom – obsah o expedícii pre slovenských a českých eshopárov.',
    date: '2024-01-30',
    category: 'Vzdelávačka s Neoshipom',
    body: `V Neoshipe sme sa rozhodli pravidelne zdieľať to, čo o expedícii vieme. V úvodnom diele série Vzdelávačka s Neoshipom vysvetľujeme, prečo má vlastný vzdelávací obsah pre eshopárov zmysel a aké témy plánujeme postupne pokryť.`,
  },
  {
    slug: 'efektivita-a-automatizacia-v-expedicii-eshopu-cez-cisla',
    title: 'Efektivita a automatizácia v expedícii eshopu cez čísla',
    excerpt:
      'Koľko času a peňazí dokáže automatizácia expedície reálne ušetriť? Pozreli sme sa na konkrétne čísla.',
    date: '2023-12-12',
    category: 'Expedovanie a logistika',
    body: `Efektivita a automatizácia sú v expedícii často skloňované pojmy, no skutočný prínos sa najlepšie vyjadrí v číslach. V tomto článku rozoberáme, koľko času a peňazí dokáže e-shop usporiť prechodom z manuálnych procesov na automatizovanú expedíciu cez Neoship.`,
  },
  {
    slug: 'analyza-cenovych-ponuk-2-kurierskych-spolocnosti',
    title: 'Analýza cenových ponúk 2 kuriérskych spoločností',
    excerpt:
      'Detailná analýza dvoch konkrétnych cenových ponúk od kuriérskych spoločností a kde sú skryté rozdiely.',
    date: '2023-10-19',
    category: 'Expedovanie a logistika',
    body: `V článku analyzujeme dve konkrétne cenové ponuky kuriérskych spoločností, na pohľad veľmi podobné. Pozrieme sa však na váhové pásma, doplnkové služby, kartové poplatky a ďalšie detaily, ktoré rozhodujú o tom, ktorá ponuka je pre e-shop reálne výhodnejšia.`,
  },
  {
    slug: 'novinky-na-slovenskom-trhu-logistiky-pre-eshoparov-aj-pre-nakupujucich',
    title: 'Novinky na slovenskom trhu logistiky: Pre eshopárov aj pre nakupujúcich',
    excerpt:
      'Prehľad noviniek na slovenskom logistickom trhu, ktoré ovplyvňujú e-shopy aj koncových zákazníkov.',
    date: '2023-04-12',
    category: 'Všetky novinky',
    body: `Slovenský trh logistiky sa neustále vyvíja – nové výdajné miesta, automaty, doplnkové služby aj zmeny v cenníkoch prepravcov ovplyvňujú e-shopy aj samotných nakupujúcich.\n\nV článku prinášame prehľad najdôležitejších noviniek za posledné obdobie a vysvetľujeme, čo z nich vyplýva pre prevádzku e-shopu.`,
  },
  {
    slug: '6-vychytavok-aplikacie-neoship-ktore-vam-ulahcia-expediciu-v-eshope',
    title: '6 vychytávok aplikácie Neoship, ktoré vám uľahčia expedíciu v eshope',
    excerpt:
      '6 menej známych funkcií aplikácie Neoship, ktoré vám pri každodennej expedícii ušetria čas aj nervy.',
    date: '2023-03-19',
    category: 'Všetky novinky',
    body: `Aplikácia Neoship obsahuje množstvo funkcií, o ktorých si zákazníci po čase uvedomia, že bez nich už nevedia existovať. V článku predstavujeme 6 vychytávok – od hromadných operácií, cez automatizácie, až po reportingové prehľady – ktoré vám každodennú expedíciu výrazne uľahčia.`,
  },
  {
    slug: 'specifika-kurierskych-spolocnosti-v-neoshipe',
    title: 'Špecifiká kuriérskych spoločností v Neoshipe',
    excerpt:
      'Každý prepravca v Neoshipe má svoje špecifiká. Pozrime sa, čím sa líšia a ako ich efektívne kombinovať.',
    date: '2023-02-24',
    category: 'Expedovanie a logistika',
    body: `SPS, GLS, Packeta, DPD, Slovenská pošta aj SDS – každý prepravca v Neoshipe má svoje typické vlastnosti, doplnkové služby aj cenovú politiku. V článku rozoberáme kľúčové špecifiká a radíme, ako tieto spoločnosti efektívne kombinovať pre rôzne typy zásielok.`,
  },
  {
    slug: 'eshopy-robite-si-analyzu-prepravnych-nakladov',
    title: 'Eshopy, robíte si analýzu prepravných nákladov?',
    excerpt:
      'Pravidelná analýza prepravných nákladov vie e-shopu ušetriť tisíce eur. Ako na to a čo sledovať.',
    date: '2023-01-19',
    category: 'Všetky novinky',
    body: `Prepravné náklady patria medzi najväčšie variabilné položky v rozpočte e-shopu. Bez pravidelnej analýzy ľahko prerastú do desiatok percent obratu.\n\nV článku vysvetľujeme, čo všetko sledovať, ako často analýzu robiť a ako vám pri nej môže pomôcť bezplatný Pomocník od Neoshipu.`,
  },
  {
    slug: 'aky-bol-rok-2022-v-neoshipe',
    title: 'Aký bol rok 2022 v Neoshipe?',
    excerpt:
      'Ohliadnutie sa za rokom 2022 v Neoshipe – nové integrácie, funkcie aj rast tímu.',
    date: '2023-01-09',
    category: 'Všetky novinky',
    body: `V rekapitulácii roku 2022 sa pozeráme späť na to, čo všetko sa v Neoshipe podarilo – od nových integrácií s prepravcami a e-shop platformami, cez nové funkcie aplikácie, až po rast tímu a partnerstiev.`,
  },
  {
    slug: 'od-zaujemcu-po-zakaznika-v-neoshipe',
    title: 'Od záujemcu po zákazníka v Neoshipe',
    excerpt:
      'Ako vyzerá cesta od prvého kontaktu s Neoshipom až po aktívne odosielanie balíkov cez naše riešenie.',
    date: '2022-12-06',
    category: 'Novinky v Neoshipe',
    body: `Často dostávame otázku, ako presne prebieha proces od prvého kontaktu cez nezáväznú konzultáciu až po odosielanie prvých balíkov cez Neoship. V článku ho rozoberáme krok po kroku, vrátane podpory, ktorú dostávate na ceste.`,
  },
  {
    slug: 'sezonny-priplatok-v-kurierskych-spolocnostiach',
    title: 'Sezónny príplatok v kuriérskych spoločnostiach',
    excerpt:
      'Sezónny príplatok v predvianočnom období dokáže výrazne navýšiť cenu prepravy. Čo o ňom potrebujete vedieť.',
    date: '2022-11-13',
    category: 'Expedovanie a logistika',
    body: `V predvianočnom období vstupuje u väčšiny prepravcov do hry tzv. sezónny príplatok, ktorý reaguje na nárazové objemy zásielok. V článku rozoberáme, ako tento príplatok funguje, kedy začína a končí a ako sa naň pripraviť pri kalkulácii ceny dopravy.`,
  },
  {
    slug: 'kurierske-spolocnosti-a-napojenia-na-neoship',
    title: 'Kuriérske spoločnosti a napojenia na Neoship',
    excerpt:
      'Prehľad kuriérskych spoločností napojených na Neoship a benefity, ktoré z týchto napojení získavate.',
    date: '2022-10-06',
    category: 'Novinky v Neoshipe',
    body: `V Neoshipe máte k dispozícii viacero kuriérskych spoločností pod jednou strechou – SPS, GLS, Packeta, DPD, Slovenská pošta a SDS. V článku prinášame prehľad napojení a benefity, ktoré z používania jedného systému s viacerými prepravcami získavate.`,
  },
  {
    slug: '123kurier-v-neoshipe',
    title: '123kuriér v Neoshipe',
    excerpt:
      'Rozšírenie portfólia prepravcov v Neoshipe o spoločnosť 123kuriér – čo to znamená pre eshopárov.',
    date: '2022-06-16',
    category: 'Novinky v Neoshipe',
    body: `Portfólio prepravcov v Neoshipe sme rozšírili o spoločnosť 123kuriér. V článku predstavujeme, čo táto novinka prináša eshopárom, ako sa s 123kuriérom pracuje v systéme a aké typy zásielok sa s ním oplatí kombinovať.`,
  },
  {
    slug: 'co-je-nove-v-superfakture',
    title: 'Čo je nové v SuperFaktúre?',
    excerpt:
      'Prehľad noviniek v SuperFaktúre a ako sa tieto novinky premietajú do prepojenia so systémom Neoship.',
    date: '2022-06-08',
    category: 'Všetky novinky',
    body: `SuperFaktúra je obľúbený fakturačný nástroj slovenských eshopárov a má aj prepojenie s Neoshipom. V článku zhrňujeme najnovšie funkcie SuperFaktúry a vysvetľujeme, ako sa premietajú do spoločného workflow s expedíciou.`,
  },
  {
    slug: '13-postrehov-z-mini-konferencie-invehity-od-invelity',
    title: '13 postrehov z mini konferencie INVEHITY od Invelity',
    excerpt:
      '13 najzaujímavejších postrehov z konferencie INVEHITY od Invelity zameranej na e-commerce a logistiku.',
    date: '2022-05-26',
    category: 'Všetky novinky',
    body: `Konferencia INVEHITY od Invelity priniesla množstvo zaujímavých prednášok pre eshopárov. V článku zdieľame 13 postrehov, ktoré sa nám zdali najprínosnejšie – od trendov v e-commerce, cez logistiku, až po dáta a marketing.`,
  },
  {
    slug: 'co-ste-o-dobierkach-mozno-nevedeli',
    title: 'Čo ste o dobierkach (možno) nevedeli...',
    excerpt:
      'Dobierky majú svoje úskalia – kartové poplatky, neprevzaté zásielky aj cashflow. Pozrime sa na detaily.',
    date: '2022-01-20',
    category: 'Expedovanie a logistika',
    body: `Dobierky sú v slovenských a českých e-shopoch stále veľmi populárnym spôsobom platby. Skrývajú však viacero nuancií – kartové poplatky, neprevzaté zásielky či vplyv na cashflow.\n\nV článku rozoberáme všetko, čo by ste o dobierkach mali vedieť, aby ste si neuškodili na ziskovosti.`,
  },
  {
    slug: '2021-rok-noviniek-ale-aj-driny',
    title: '2021 – Rok noviniek, ale aj driny',
    excerpt:
      'Rekapitulácia roka 2021 v Neoshipe – nové integrácie, funkcie aj veľa práce na vylepšeniach.',
    date: '2022-01-13',
    category: 'Novinky v Neoshipe',
    body: `Rok 2021 bol v Neoshipe nabitý novinkami – pribudli nové integrácie, funkcie, rozšíril sa tím aj počet zákazníkov. V článku rekapitulujeme najdôležitejšie míľniky aj prácu, ktorá za nimi stála.`,
  },
  {
    slug: 'packeta-nova-kurierska-spolocnost-v-neoshipe',
    title: 'PACKETA – Nová kuriérska spoločnosť v Neoshipe',
    excerpt:
      'Packeta sa stáva súčasťou portfólia prepravcov v Neoshipe. Čo to znamená pre eshopárov.',
    date: '2021-11-12',
    category: 'Novinky v Neoshipe',
    body: `Do Neoshipu sme integrovali ďalšieho významného hráča na trhu – spoločnosť Packeta. V článku predstavujeme jej výhody, sieť výdajných miest aj typy zásielok, pri ktorých sa Packeta oplatí najviac.`,
  },
  {
    slug: 'ebook-krok-za-krokom-k-spravnemu-expedicnemu-rieseniu',
    title: 'Ebook – Krok za krokom k správnemu expedičnému riešeniu',
    excerpt:
      'Bezplatný ebook, ktorý vás krok za krokom prevedie výberom správneho expedičného riešenia pre váš e-shop.',
    date: '2021-10-29',
    category: 'Expedovanie a logistika',
    body: `Pripravili sme bezplatný ebook, ktorý vás krok za krokom prevedie výberom expedičného riešenia šitého na mieru vášmu e-shopu. Obsahuje praktické tipy, kontrolné zoznamy aj reálne príklady z praxe.`,
  },
  {
    slug: 's-neoshipom-denne-usetrime-2-hodiny-casu-pripadova-studia-eshopu-matteocucina-sk',
    title: 'S Neoshipom denne ušetríme 2 hodiny času – prípadová štúdia eshopu matteocucina.sk',
    excerpt:
      'Prípadová štúdia matteocucina.sk: ako s Neoshipom denne ušetria 2 hodiny pri expedícii.',
    date: '2021-04-26',
    category: 'Prípadové štúdie',
    body: `V prípadovej štúdii sa pozeráme na to, ako e-shop matteocucina.sk vďaka Neoshipu denne ušetrí 2 hodiny času pri spracovávaní balíkov. Štúdia rozoberá konkrétne kroky automatizácie aj merateľné výsledky.`,
  },
  {
    slug: 'neoship-creative-sites-partnerstvo-s-benefitmi-pre-vas-eshop',
    title: 'Neoship & CREATIVE sites – partnerstvo s benefitmi pre váš eshop',
    excerpt:
      'Partnerstvo Neoshipu so CREATIVE sites prináša e-shopom na ich platforme balík benefitov pri expedícii.',
    date: '2021-04-22',
    category: 'Expedovanie a logistika',
    body: `Spolupráca medzi Neoshipom a CREATIVE sites prináša e-shopom na platforme CREATIVE sites výhody pri expedícii – od jednoduchšej integrácie, cez zľavnené prepravné podmienky, až po prioritnú podporu.`,
  },
  {
    slug: 'na-co-nezabudnut-pri-zakladani-e-shopu',
    title: 'Na čo nezabudnúť pri zakladaní e-shopu',
    excerpt:
      'Praktický kontrolný zoznam pre začínajúcich eshopárov – na čo všetko myslieť pri spúšťaní e-shopu.',
    date: '2021-04-19',
    category: 'Všetky novinky',
    body: `Zakladanie e-shopu je zložitejšie, než sa na prvý pohľad zdá. V článku prinášame praktický kontrolný zoznam – od právnej formy, cez výber platformy, dodávateľov a prepravcov, až po marketing a zákaznícku podporu.`,
  },
  {
    slug: 'velka-jarna-akcia-neoshipu',
    title: 'Veľká jarná akcia Neoshipu',
    excerpt:
      'Jarná akcia Neoshipu prináša špeciálne podmienky pre nových aj existujúcich zákazníkov.',
    date: '2021-03-16',
    category: 'Novinky v Neoshipe',
    body: `Spustili sme veľkú jarnú akciu Neoshipu so špeciálnymi podmienkami pre nových aj existujúcich zákazníkov. V článku nájdete všetky detaily akcie a podmienky účasti.`,
  },
  {
    slug: '5-rozdielov-medzi-neoshipom-a-prepravcom',
    title: '5 rozdielov medzi Neoshipom a prepravcom',
    excerpt:
      'Neoship nie je prepravca. Vysvetľujeme 5 kľúčových rozdielov medzi expedičným systémom a kuriérskou spoločnosťou.',
    date: '2021-02-11',
    category: 'Expedovanie a logistika',
    body: `Často sa stretávame s tým, že si eshopári mýlia Neoship so samotným prepravcom. V článku vysvetľujeme 5 kľúčových rozdielov medzi expedičným systémom Neoship a kuriérskymi spoločnosťami a prečo má zmysel mať oboje.`,
  },
  {
    slug: 'rok-2020-v-neoshipe',
    title: 'Rok 2020 v Neoshipe',
    excerpt:
      'Rekapitulácia roka 2020 v Neoshipe – pandemický rok plný výziev, no aj nových integrácií a funkcií.',
    date: '2021-01-20',
    category: 'Novinky v Neoshipe',
    body: `Rok 2020 bol pre celý e-commerce trh prelomový. V Neoshipe sme reagovali nárastom integrácií, novými funkciami aj posilnením tímu. V článku rekapitulujeme najdôležitejšie momenty roka.`,
  },
  {
    slug: 'cenove-ponuky-prepravcov-ktora-je-skutocne-najvyhodnejsia',
    title: 'Cenové ponuky prepravcov. Ktorá je skutočne najvýhodnejšia?',
    excerpt:
      'Ako reálne porovnať cenové ponuky prepravcov a zistiť, ktorá je pre váš e-shop skutočne najvýhodnejšia.',
    date: '2021-01-07',
    category: 'Expedovanie a logistika',
    body: `Cenové ponuky prepravcov sa na prvý pohľad ťažko porovnávajú – líšia sa váhovými pásmami, doplnkovými službami, kartovými poplatkami aj objemovými zľavami. V článku vysvetľujeme, ako pri porovnaní postupovať a na čo si dať pozor.`,
  },
  {
    slug: 'vianocna-nadielka-darcekov-v-neoshipe',
    title: 'Vianočná nádielka darčekov v Neoshipe',
    excerpt:
      'Vianočná nádielka darčekov pre zákazníkov Neoshipu – benefity a prekvapenia pred sviatkami.',
    date: '2020-11-25',
    category: 'Iné',
    body: `Pred Vianocami sme pre našich zákazníkov pripravili nádielku darčekov a benefitov. V článku nájdete prehľad toho, čo všetko si môžete v rámci akcie užiť.`,
  },
  {
    slug: 'prepravna-spolocnost-gls-implementovana-v-neoshipe',
    title: 'Prepravná spoločnosť GLS implementovaná v Neoshipe',
    excerpt:
      'GLS sa stáva ďalším prepravcom dostupným priamo v aplikácii Neoship – kompletná integrácia.',
    date: '2020-09-17',
    category: 'Novinky v Neoshipe',
    body: `Prepravnú spoločnosť GLS sme integrovali priamo do aplikácie Neoship. V článku predstavujeme možnosti, ktoré integrácia prináša – od tlače štítkov, cez sledovanie zásielok, až po správu reklamácií.`,
  },
  {
    slug: 'kombinacia-neoshipu-a-superfaktury-skvele-duo-pre-vas-eshop',
    title: 'Kombinácia Neoshipu a SuperFaktúry – skvelé duo pre váš eshop',
    excerpt:
      'Prepojenie Neoshipu so SuperFaktúrou prináša e-shopom plynulý workflow medzi fakturáciou a expedíciou.',
    date: '2020-08-18',
    category: 'Expedovanie a logistika',
    body: `Kombinácia Neoshipu a SuperFaktúry vytvára pre e-shop plynulé prepojenie medzi vystavovaním faktúr a expedíciou balíkov. V článku rozoberáme, ako prepojenie funguje a aké úlohy vďaka nemu odpadnú.`,
  },
  {
    slug: 'chceme-byt-k-vam-blizsie',
    title: 'Chceme byť k vám bližšie...',
    excerpt:
      'Posilňujeme zákaznícku podporu a komunikáciu – chceme byť k našim klientom ešte bližšie.',
    date: '2020-07-28',
    category: 'Novinky v Neoshipe',
    body: `V Neoshipe neustále zlepšujeme zákaznícku podporu a komunikáciu. V článku predstavujeme zmeny, vďaka ktorým chceme byť k našim klientom ešte bližšie – od nových kontaktných kanálov, cez rozšírenie tímu, až po proaktívnu komunikáciu.`,
  },
  {
    slug: 'exkluzivne-letne-webinare-o-expedovani-zdarma-s-neoshipom',
    title: 'Exkluzívne letné webináre o expedovaní ZDARMA – s Neoshipom',
    excerpt:
      'Séria bezplatných letných webinárov o expedovaní – praktické tipy priamo od Neoshipu.',
    date: '2020-06-21',
    category: 'Expedovanie a logistika',
    body: `Pripravili sme sériu bezplatných letných webinárov o expedovaní. V článku nájdete prehľad tém, termínov a informácie, ako sa do webinárov prihlásiť.`,
  },
  {
    slug: 'vydajne-miesta-ako-alternativna-moznost-dorucovania-balikov',
    title: 'Výdajné miesta ako alternatívna možnosť doručovania balíkov',
    excerpt:
      'Výdajné miesta ako alternatíva k doručeniu domov – výhody pre e-shop aj koncového zákazníka.',
    date: '2020-06-21',
    category: 'Expedovanie a logistika',
    body: `Výdajné miesta sú čoraz obľúbenejšou alternatívou ku klasickému doručeniu na adresu. V článku rozoberáme ich výhody pre e-shop aj zákazníka, popularitu rôznych sietí a tipy na zapojenie výdajných miest do košíka.`,
  },
  {
    slug: 'ako-spravne-nastavit-cenu-postovneho-v-eshope',
    title: 'Ako správne nastaviť cenu poštovného v eshope?',
    excerpt:
      'Cena poštovného ovplyvňuje konverziu aj zisk. Ako ju nastaviť tak, aby zákazník nakúpil a vy ste si neuškodili.',
    date: '2020-05-22',
    category: 'Expedovanie a logistika',
    body: `Cena poštovného je jeden z najdôležitejších parametrov v košíku. Príliš vysoká odrádza zákazníkov, príliš nízka ukrojí z marže. V článku rozoberáme stratégie nastavenia poštovného – fixná sadzba, doprava zadarmo nad limit aj dynamický výpočet.`,
  },
  {
    slug: 'vyberte-si-neoship-a-ziskajte-pre-vas-eshop-nielen-prepravu-balikov',
    title: 'Vyberte si Neoship a získajte pre váš eshop nielen prepravu balíkov',
    excerpt:
      'Neoship nie je len o prepravných ponukách – získate kompletný expedičný systém s podporou.',
    date: '2020-04-06',
    category: 'Expedovanie a logistika',
    body: `Mnohí klienti k nám prichádzajú s víziou „získať lepšiu cenu prepravy". Rýchlo však zisťujú, že Neoship znamená oveľa viac – kompletný expedičný systém, integrácie, automatizácie aj individuálnu podporu.`,
  },
  {
    slug: '5-top-postrehov-z-reshopera',
    title: '5 TOP postrehov z RESHOPERA',
    excerpt:
      '5 najzaujímavejších postrehov z konferencie RESHOPER pre slovenských a českých eshopárov.',
    date: '2020-02-13',
    category: 'Všetky novinky',
    body: `Konferencia RESHOPER patrí medzi najväčšie e-commerce eventy v regióne. Z poslednej účasti prinášame 5 TOP postrehov – od trendov, cez konkrétne nástroje, až po inšpirácie pre váš e-shop.`,
  },
  {
    slug: 'od-kopirovania-dat-az-po-automatizaciu-expedicnych-procesov-pripadova-studia-eshopu-sunroot-eu',
    title:
      'Od kopírovania dát až po automatizáciu expedičných procesov – prípadová štúdia eshopu sunroot.eu',
    excerpt:
      'Prípadová štúdia sunroot.eu: od manuálneho kopírovania dát k plne automatizovanej expedícii cez Neoship.',
    date: '2019-11-14',
    category: 'Prípadové štúdie',
    body: `V prípadovej štúdii eshopu sunroot.eu sa pozeráme na to, ako sa tím dostal od manuálneho kopírovania dát medzi systémami až po plne automatizovaný expedičný workflow s Neoshipom – aj na to, koľko času im to denne ušetrí.`,
  },
  {
    slug: 'kava-s-croissantom-vo-vianocnej-logistike',
    title: 'Káva s croissantom vo vianočnej logistike',
    excerpt:
      'Krátky pohľad do zákulisia vianočnej logistiky pri rannej káve s croissantom.',
    date: '2019-10-20',
    category: 'Expedovanie a logistika',
    body: `Vianočná logistika je adrenalín. V tomto kratšom článku pri rannej káve s croissantom zdieľame zákulisie predvianočného obdobia v Neoshipe a pri prepravcoch.`,
  },
  {
    slug: 'majte-krasne-a-pokojne-vianoce-aj-vdaka-neoshipu',
    title: 'Majte krásne a pokojné Vianoce aj vďaka Neoshipu :)',
    excerpt:
      'Prajeme krásne a pokojné Vianoce – a pripravujeme balík tipov, ako sviatky zvládnuť aj v e-shope.',
    date: '2019-09-24',
    category: 'Novinky v Neoshipe',
    body: `Vianoce sú v e-shope najnáročnejším obdobím roka. V článku zdieľame, ako v Neoshipe pomáhame klientom toto obdobie zvládnuť pokojne – a prajeme všetkým krásne sviatky.`,
  },
  {
    slug: 'upterdam-prve-ecommerce-mesto-na-svete',
    title: 'UPTERDAM – Prvé ecommerce mesto na svete',
    excerpt:
      'Predstavujeme projekt UPTERDAM – prvé e-commerce mesto na svete a inšpiráciu pre celý trh.',
    date: '2019-08-27',
    category: 'Všetky novinky',
    body: `UPTERDAM je netradičný projekt – prvé „e-commerce mesto" na svete. V článku vysvetľujeme, čo si pod týmto pojmom predstaviť a čím môže byť inšpiráciou pre slovenský a český trh.`,
  },
  {
    slug: 'rozhovor-pre-ecommerce-bridge',
    title: 'Rozhovor pre Ecommerce Bridge',
    excerpt:
      'Rozhovor s Neoshipom pre portál Ecommerce Bridge o trendoch v logistike a expedícii.',
    date: '2019-06-10',
    category: 'Expedovanie a logistika',
    body: `Pre portál Ecommerce Bridge sme poskytli rozhovor o aktuálnych trendoch v logistike, expedícii a o tom, kam smerujú slovenské a české e-shopy.`,
  },
  {
    slug: 'produktova-inzercia-preco-automatizovat',
    title: 'Produktová inzercia – prečo automatizovať?',
    excerpt:
      'Produktová inzercia je dnes základ. Vysvetľujeme, prečo má zmysel ju automatizovať a ako na to.',
    date: '2019-05-23',
    category: 'Všetky novinky',
    body: `Produktová inzercia je pre väčšinu e-shopov základným zdrojom návštevnosti aj objednávok. V článku vysvetľujeme, prečo má zmysel jej správu automatizovať a aké nástroje sú na slovenskom trhu k dispozícii.`,
  },
  {
    slug: 'pricemania-neoship',
    title: 'Pricemania & NEOSHIP',
    excerpt:
      'Spolupráca Pricemania a Neoshipu – ako môžu eshopári profitovať z prepojenia oboch nástrojov.',
    date: '2019-03-14',
    category: 'Novinky v Neoshipe',
    body: `Spolupráca medzi Pricemania a Neoshipom prináša eshopárom benefity pri porovnávaní produktov aj expedícii. V článku predstavujeme detaily partnerstva.`,
  },
  {
    slug: 'ako-zivo-bolo-v-zivej-kniznici',
    title: 'Ako živo bolo v „Živej knižnici"',
    excerpt:
      'Postrehy z eventu „Živá knižnica", na ktorom Neoship zdieľal skúsenosti s eshopármi.',
    date: '2019-02-22',
    category: 'Iné',
    body: `Event „Živá knižnica" priniesol netradičný formát zdieľania know-how. V článku zdieľame postrehy z účasti za Neoship a najzaujímavejšie diskusie s eshopármi.`,
  },
  {
    slug: 'cena-expedovania-cena-za-balik',
    title: 'Cena expedovania = cena za balík?',
    excerpt:
      'Cena expedovania nie je len cena za balík – sú v nej skryté ďalšie nákladové položky. Pozrime sa, aké.',
    date: '2019-02-13',
    category: 'Expedovanie a logistika',
    body: `Cena expedovania zahŕňa oveľa viac než len samotnú cenu prepravy balíka. V článku rozoberáme všetky položky – od práce na expedícii, cez balné materiály, až po vratky a reklamácie – ktoré tvoria reálnu cenu expedovania.`,
  },
  {
    slug: 'slovak-parcel-service-nas-partner-v-oblasti-prepravy-zasielok',
    title: 'Slovak Parcel Service – náš partner v oblasti prepravy zásielok',
    excerpt:
      'Slovak Parcel Service (SPS) ako dlhoročný partner Neoshipu v oblasti prepravy zásielok.',
    date: '2018-10-17',
    category: 'Expedovanie a logistika',
    body: `Spoločnosť Slovak Parcel Service (SPS) patrí medzi našich kľúčových prepravcov. V článku predstavujeme jej výhody, sieť a typy zásielok, pri ktorých sa SPS oplatí najviac.`,
  },
  {
    slug: 'bezime-z-cloudu',
    title: '„Bežíme" z cloudu...',
    excerpt:
      'Neoship bežíme z cloudu – čo to znamená pre rýchlosť, spoľahlivosť a bezpečnosť pre našich klientov.',
    date: '2018-10-14',
    category: 'Novinky v Neoshipe',
    body: `Aplikáciu Neoship prevádzkujeme z cloudu. V článku vysvetľujeme, čo to znamená pre našich klientov – rýchlosť, dostupnosť, bezpečnosť aj jednoduchší rozvoj nových funkcií.`,
  },
  {
    slug: 'preco-europsky-paris-retail-week-pritiahol-tisicky-navstevnikov',
    title: 'Prečo európsky Paris Retail Week pritiahol tisícky návštevníkov?',
    excerpt:
      'Paris Retail Week patrí medzi najväčšie retailové eventy v Európe. Čo sa tu rieši a prečo to láka tisíce ľudí.',
    date: '2018-09-27',
    category: 'Z diania ecommerce',
    body: `Paris Retail Week patrí medzi najväčšie a najrešpektovanejšie retailové eventy v Európe. V článku zhŕňame, čo sa tu rieši, ktoré trendy boli najdiskutovanejšie a prečo si event získava tisíce návštevníkov.`,
  },
  {
    slug: 'startitup-zistoval-preco-nasich-zakaznikov-expedovanie-s-neoshipom-bavi',
    title: 'Startitup zisťoval, prečo našich zákazníkov expedovanie s Neoshipom baví',
    excerpt:
      'Portál Startitup zisťoval, prečo majú zákazníci Neoshipu radi expedovanie s naším systémom.',
    date: '2018-04-05',
    category: 'Iné',
    body: `Portál Startitup sa pozrel zblízka na to, prečo majú zákazníci Neoshipu radi expedovanie s naším systémom. V článku nájdete zhrnutie rozhovorov aj postrehy z reportáže.`,
  },
];

/**
 * Titulné obrázky prebraté z pôvodnej blogovej sekcie neoship.sk
 * (uložené v public/images/blog/).
 */
const BLOG_IMAGE: Record<string, string> = {
  'ako-znizit-pomer-vratiek': 'blog_vratky.png',
  'dobierky-cashflow-2026': 'blog_dobierka.png',
  'pickup-points-vs-domov': 'blog_vydajne.png',
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
  'pri-jednom-stitku-usetrime-minimalne-1-2-minuty-pripadova-studia-villy-sk':
    '1716448305_Pripadova-studia-villy-sk.png',
  'porovnanie-zakladnych-poziadaviek-a-funkcii-na-b2b-a-b2c-e-shopy-na-mieru':
    '1715671453_Porovnanie-B2B-vz-B2C.png',
  '7-vzdelavacka-s-neoshipom-kolko-a-ake-sposoby-dorucenia-je-vhodne-mat-v-kosiku':
    'Kolko-a-ake-sposoby-dorucenia-je-vhodne-mat-v-kosiku.png',
  '6-vzdelavacka-s-neoshipom-ako-doplnkove-sluzby-u-prepravcov-zamiesaju-kartami':
    '6-Ako-doplnkove-sluzby-u-prepravcov-zamiesaju-kartami.png',
  'ako-to-vyzera-v-praxi-ked-1-1-3-pripadova-studia-cukrovinky-sk':
    '1713251036_Pripadova-studia-cukrovinky-sk.png',
  'efektivne-odosielanie-balikov-je-veda-co-setri-tisice-eur-rozhovor-pre-ecommerce-bridge':
    '1711626016_Rozhovor-pre-Ecommerce-Bridge.png',
  '5-vzdelavacka-s-neoshipom-na-vahe-a-kartovych-poplatkoch-naozaj-zalezi':
    '5-Na-vahe-a-kartovych-poplatkoch-naozaj-zalezi-prakticky-priklad.png',
  '4-vzdelavacka-s-neoshipom-nekupujte-macku-vo-vreci': '4-Nekupujte-macku-vo-vreci.png',
  '3-vzdelavacka-s-neoshipom-4-dovody-preco-porovnavat-iba-cenu-nestaci':
    '4-dovody-preco-iba-porovnavat-cenu-nestaci.png',
  '2-vzdelavacka-s-neoshipom-preco-rychlo-a-lacno-moze-byt-niekedy-poriadne-drahe':
    '2-Preco-rychlo-a-lacno-moze-byt-niekedy-poriadne-drahe-Vzdelavacka-s-Neoshipom.png',
  '1-vzdelavacka-s-neoshipom-preco-vzdelavacka': '1-Preco-Vzdelavacka.png',
  'efektivita-a-automatizacia-v-expedicii-eshopu-cez-cisla':
    'Efektivita-a-automatizaciav-expedicii-cez-cisla.png',
  'analyza-cenovych-ponuk-2-kurierskych-spolocnosti':
    'Analyza-cenovych-ponuk-2-kurierskych-spolocnosti.png',
  'novinky-na-slovenskom-trhu-logistiky-pre-eshoparov-aj-pre-nakupujucich':
    '1681383488_Novinky-na-slovenskom-trhu-logistiky.png',
  '6-vychytavok-aplikacie-neoship-ktore-vam-ulahcia-expediciu-v-eshope':
    '1681383238_6-Vychytavok-aplikacie-Neoship.png',
  'specifika-kurierskych-spolocnosti-v-neoshipe': 'Specifika-kurierskych-spolocnosti.png',
  'eshopy-robite-si-analyzu-prepravnych-nakladov': '1681372619_Neoship-Pomocnik.png',
  'aky-bol-rok-2022-v-neoshipe': '1681371465_RECAP-2022.png',
  'od-zaujemcu-po-zakaznika-v-neoshipe': 'Od-zaujemcu-po-zakaznika-v-Neoshipe.png',
  'sezonny-priplatok-v-kurierskych-spolocnostiach': '1681475297_Sezonny-priplatok.png',
  'kurierske-spolocnosti-a-napojenia-na-neoship':
    'Kurierske-spolocnosti-a-napojenia-na-Neoship-2.png',
  '123kurier-v-neoshipe': '123kurier-v-Neoshipe.png',
  'co-je-nove-v-superfakture': '1663055218_Co-je-nove-v-SuperFakture.png',
  '13-postrehov-z-mini-konferencie-invehity-od-invelity': 'Invehity.jpg',
  'co-ste-o-dobierkach-mozno-nevedeli': 'Co-ste-o-dobierkach-mozno-nevedeli.png',
  '2021-rok-noviniek-ale-aj-driny': 'Rok-2021-v-Neoshipe.png',
  'packeta-nova-kurierska-spolocnost-v-neoshipe':
    '1663064081_Nova-kurierska-spolocnost-v-Neoshipe.png',
  'ebook-krok-za-krokom-k-spravnemu-expedicnemu-rieseniu':
    'Ebook-Krok-za-krokom-k-spravnemu-expedicnemu-rieseniu.png',
  's-neoshipom-denne-usetrime-2-hodiny-casu-pripadova-studia-eshopu-matteocucina-sk':
    'Matteo-cucina-pripadova-studia-blog.png',
  'neoship-creative-sites-partnerstvo-s-benefitmi-pre-vas-eshop':
    'Partnerstvo-Neoshipu-s-CreativeSites.png',
  'na-co-nezabudnut-pri-zakladani-e-shopu': 'zakladanie-eshopu.png',
  'velka-jarna-akcia-neoshipu': 'Jarna-akcia-Neoshipu-blog.png',
  '5-rozdielov-medzi-neoshipom-a-prepravcom':
    '1663834453_5-rozdielov-medzi-Neoshipom-a-prepravcom-blog.png',
  'rok-2020-v-neoshipe': 'Rok-2020-v-Neoshipe-blog.png',
  'cenove-ponuky-prepravcov-ktora-je-skutocne-najvyhodnejsia': 'Cenove-ponuky-prepravcov.png',
  'vianocna-nadielka-darcekov-v-neoshipe': 'Vianocna-nadielka-darcekov-s-Neoshipom-web.png',
  'prepravna-spolocnost-gls-implementovana-v-neoshipe':
    'Prepravna-spolocnost-GLS-implementovana-v-Neoshipe.png',
  'kombinacia-neoshipu-a-superfaktury-skvele-duo-pre-vas-eshop':
    'Kombinacia-Neoshipu-a-SuperFaktury-skvele-duo-pre-vas-eshop.png',
  'chceme-byt-k-vam-blizsie': 'Chceme-byt-k-vam-blizsie.png',
  'exkluzivne-letne-webinare-o-expedovani-zdarma-s-neoshipom': 'Letny-webinar-o-expedovani.png',
  'vydajne-miesta-ako-alternativna-moznost-dorucovania-balikov':
    'Vydajne-miesta-ako-alternativna-moznost-dorucovania-balikov.png',
  'ako-spravne-nastavit-cenu-postovneho-v-eshope':
    'Ako-spravne-nastavit-cenu-postovneho-v-eshope.png',
  'vyberte-si-neoship-a-ziskajte-pre-vas-eshop-nielen-prepravu-balikov':
    'Vyberte-si-Neoship-a-ziskajte-pre-vas-eshop-nielen-prepravu-balikov.png',
  '5-top-postrehov-z-reshopera': '5-TOP-postrehov-z-Reshopera.png',
  'od-kopirovania-dat-az-po-automatizaciu-expedicnych-procesov-pripadova-studia-eshopu-sunroot-eu':
    '1668501996_Od-kopirovania-dat-az-po-automatizaciu.png',
  'kava-s-croissantom-vo-vianocnej-logistike':
    '1664884855_Kava-s-croissantom-vo-vianocnej-logistike.png',
  'majte-krasne-a-pokojne-vianoce-aj-vdaka-neoshipu':
    '1664872257_Majte-krasne-a-pokojne-Vianoce.png',
  'upterdam-prve-ecommerce-mesto-na-svete': 'Upterdam.png',
  'rozhovor-pre-ecommerce-bridge': 'Rozhovor-pre-ecommerce-bridge.jpg',
  'produktova-inzercia-preco-automatizovat': 'Preco-automatizovat.png',
  'pricemania-neoship': 'Pricemania-a-Neoship.png',
  'ako-zivo-bolo-v-zivej-kniznici': 'Ako-zivo-bolo-v-zivej-kniznici.png',
  'cena-expedovania-cena-za-balik': 'Cena-expedovania-cena-za-balik.png',
  'slovak-parcel-service-nas-partner-v-oblasti-prepravy-zasielok':
    'Slovak-Parcel-Service-nas-partner-v-oblasti-prepravy-zasielok.png',
  'bezime-z-cloudu': 'Bezime-z-cloudu.png',
  'preco-europsky-paris-retail-week-pritiahol-tisicky-navstevnikov': 'PRW.png',
  'startitup-zistoval-preco-nasich-zakaznikov-expedovanie-s-neoshipom-bavi':
    'Startitup-Neoship.png',
};

import blogBodies from './blog-bodies.json';

const BODIES = blogBodies as Record<string, string>;

/**
 * Mapovanie slug -> YouTube video ID pre články, ktoré obsahujú vložené video
 * (prebraté z pôvodnej blogovej sekcie neoship.sk).
 */
const BLOG_VIDEO: Record<string, string> = {
  '11-vzdelavacka-s-neoshipom-preco-pohodlna-tlac-stitkov-je-len-cast-uspechu': 'LHHB_CRHIBA',
  '12-vzdelavacka-s-neoshipom-ako-na-cenu-dopravy-v-kosiku': 'eRUCmo69eVo',
  '8-vzdelavacka-s-neoshipom-vydajne-miesta-preco-ano-a-ktore': 'nPDCo26sAvo',
  'interview-s-luigi-s-box': 'ZnDwy2VVoug',
  '4-vzdelavacka-s-neoshipom-nekupujte-macku-vo-vreci': 'Eg7iQBkLPbI',
  '5-vzdelavacka-s-neoshipom-na-vahe-a-kartovych-poplatkoch-naozaj-zalezi': 'KWPF_DwFsyw',
  '6-vzdelavacka-s-neoshipom-ako-doplnkove-sluzby-u-prepravcov-zamiesaju-kartami': '2cvCJTIqFoM',
  'ako-to-vyzera-v-praxi-ked-1-1-3-pripadova-studia-cukrovinky-sk': 'luFKZEaMDzQ',
  'efektivne-odosielanie-balikov-je-veda-co-setri-tisice-eur-rozhovor-pre-ecommerce-bridge':
    'ASiITgkz1NI',
  'pri-jednom-stitku-usetrime-minimalne-1-2-minuty-pripadova-studia-villy-sk': 'bbT6PK8kCr4',
  '1-vzdelavacka-s-neoshipom-preco-vzdelavacka': '7ZAs4eY8zxQ',
  '2-vzdelavacka-s-neoshipom-preco-rychlo-a-lacno-moze-byt-niekedy-poriadne-drahe': 'H4qhiDNP2PM',
  '6-vychytavok-aplikacie-neoship-ktore-vam-ulahcia-expediciu-v-eshope': 'QSyCw1EVWTc',
  'analyza-cenovych-ponuk-2-kurierskych-spolocnosti': 'hNUVy_zoEUw',
  'efektivita-a-automatizacia-v-expedicii-eshopu-cez-cisla': 'ZtF7rD_Z7X8',
  '123kurier-v-neoshipe': '37MsvB0t-R4',
  'co-je-nove-v-superfakture': 'lIBKtUUBupY',
  '2021-rok-noviniek-ale-aj-driny': 'cHMaYg_61TI',
  'chceme-byt-k-vam-blizsie': 'Z8f-mwFZUKU',
  'kombinacia-neoshipu-a-superfaktury-skvele-duo-pre-vas-eshop': 'lIBKtUUBupY',
  'rok-2020-v-neoshipe': 'Z8f-mwFZUKU',
  'majte-krasne-a-pokojne-vianoce-aj-vdaka-neoshipu': 'PqdN2pSWNl4',
  'pricemania-neoship': '31-TP2-2sZ0',
  'rozhovor-pre-ecommerce-bridge': 'HHQtwdMQX_w',
};

/** Príspevky obohatené o cover image, plné telo, YouTube video a sekciu. */
export const blogPosts: BlogPost[] = blogPostsData.map((p) => {
  const file = BLOG_IMAGE[p.slug];
  const fullBody = BODIES[p.slug];
  const videoId = BLOG_VIDEO[p.slug];
  return {
    ...p,
    section: deriveBlogSection(p),
    ...(fullBody ? { body: fullBody } : {}),
    ...(file ? { image: `/images/blog/${file}` } : {}),
    ...(videoId ? { video: `https://www.youtube-nocookie.com/embed/${videoId}` } : {}),
  };
});

/** Všetky príspevky zoradené od najnovšieho po najstarší. */
export const blogPostsSorted: BlogPost[] = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
