import type { Metadata } from 'next';
import { FileText, Download } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Informácie o spracúvaní osobných údajov | Neoship',
  description:
    'Ako spoločnosť NEOSHIP s. r. o. spracúva a chráni osobné údaje návštevníkov, obchodných partnerov, uchádzačov o zamestnanie a zamestnancov v súlade s GDPR.',
  path: '/pravidla-ochrany-osobnych-udajov',
});

const glossary: { term: string; text: string }[] = [
  {
    term: 'Čo sú to osobné údaje?',
    text: 'Osobné údaje sú akékoľvek informácie týkajúce sa identifikovanej alebo identifikovateľnej fyzickej osoby (ďalej len „dotknutá osoba"). Identifikovateľná fyzická osoba je osoba, ktorú možno identifikovať priamo alebo nepriamo, najmä odkazom na identifikátor, ako je meno, identifikačné číslo, lokalizačné údaje, online identifikátor, alebo odkazom na jeden či viaceré prvky, ktoré sú špecifické pre fyzickú, fyziologickú, genetickú, mentálnu, ekonomickú, kultúrnu alebo sociálnu identitu tejto fyzickej osoby.',
  },
  {
    term: 'Čo je to spracúvanie osobných údajov?',
    text: 'Spracúvanie je operácia alebo súbor operácií s osobnými údajmi alebo súbormi osobných údajov. Napríklad získavanie, zaznamenávanie, usporadúvanie, štruktúrovanie, uchovávanie, prepracúvanie alebo zmena, vyhľadávanie, prehliadanie, využívanie, poskytovanie prenosom, šírením alebo poskytovanie iným spôsobom, preskupovanie alebo kombinovanie, obmedzenie, vymazanie alebo likvidácia, bez ohľadu na to, či sa vykonávajú automatizovanými alebo neautomatizovanými prostriedkami.',
  },
  {
    term: 'Kto je prevádzkovateľ?',
    text: 'Prevádzkovateľ je fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt, ktorý sám alebo spoločne s inými určí účely a prostriedky spracúvania osobných údajov. V prípade, že sa účely a prostriedky tohto spracúvania stanovujú v práve Únie alebo v práve členského štátu, možno prevádzkovateľa alebo konkrétne kritériá na jeho určenie určiť v práve Únie alebo v práve členského štátu.',
  },
  {
    term: 'Kto je sprostredkovateľ?',
    text: 'Sprostredkovateľ je fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt, ktorý spracúva osobné údaje v mene prevádzkovateľa.',
  },
  {
    term: 'Kto je príjemca osobných údajov?',
    text: 'Príjemca je fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt, ktorému sa osobné údaje poskytujú bez ohľadu na to, či je treťou stranou. Orgány verejnej moci, ktoré môžu prijať osobné údaje v rámci konkrétneho zisťovania v súlade s právom Únie alebo právom členského štátu, sa však nepovažujú za príjemcov. Spracúvanie uvedených údajov uvedenými orgánmi verejnej moci sa uskutočňuje v súlade s uplatniteľnými pravidlami ochrany údajov v závislosti od účelov spracúvania.',
  },
  {
    term: 'Kto je stretia strana?',
    text: 'Tretia strana je fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt než dotknutá osoba, prevádzkovateľ, sprostredkovateľ a osoby, ktoré sú na základe priameho poverenia prevádzkovateľa alebo sprostredkovateľa poverené spracúvaním osobných údajov.',
  },
  {
    term: 'Čo je súhlas so spracúvaním osobných údajov?',
    text: 'Súhlas dotknutej osoby je akýkoľvek slobodne daný, konkrétny, informovaný a jednoznačný prejav vôle dotknutej osoby, ktorým formou vyhlásenia alebo jednoznačného potvrdzujúceho úkonu vyjadruje súhlas so spracúvaním osobných údajov, ktoré sa jej týka.',
  },
  {
    term: 'Čo je porušenie ochrany osobných údajov?',
    text: 'Porušenie ochrany osobných údajov je porušenie bezpečnosti, ktoré vedie k náhodnému alebo nezákonnému zničeniu, strate, zmene, neoprávnenému poskytnutiu osobných údajov, ktoré sa prenášajú, uchovávajú alebo inak spracúvajú, alebo neoprávnený prístup k nim.',
  },
];

const principles: { title: string; text: string }[] = [
  {
    title: 'Zákonnosť, spravodlivosť a transparentnosť',
    text: 'Osobné údaje spracúvame zákonným spôsobom, spravodlivo a transparentne vo vzťahu k dotknutým osobe, tak aby nedošlo k porušeniu ich práv.',
  },
  {
    title: 'Obmedzenie účelu',
    text: 'Osobné údaje získavané na konkrétne určené, výslovne uvedené a legitímne účely ďalej nespracúvame spôsobom, ktorý nie je zlučiteľný s týmito pôvodnými účelmi. Pričom prípadné ďalšie spracúvanie na účely archivácie vo verejnom záujme, na účely vedeckého alebo historického výskumu či štatistické účely sa v súlade s Článok 89 ods. 1 GDRP nepovažuje za nezlučiteľné s pôvodnými účelmi.',
  },
  {
    title: 'Minimalizácia údajov',
    text: 'Získavame a spracúvame iba osobné údaje ktoré sú primerané, relevantné a obmedzené na rozsah, ktorý je nevyhnutný vzhľadom na účely, na ktoré ich spracúvame.',
  },
  {
    title: 'Správnosť',
    text: 'Spracúvame iba správne a podľa potreby aktualizované osobné údaje. Pre naplnenie tejto zásady prijímame všetky potrebné opatrenia, aby sme zabezpečili, že sa osobné údaje, ktoré sú nesprávne z hľadiska účelov, na ktoré sa spracúvajú, bezodkladne vymažeme alebo opravíme.',
  },
  {
    title: 'Minimalizácia uchovávania',
    text: 'Osobné údaje uchovávané vo forme, ktorá umožňuje identifikáciu dotknutých osôb najviac dovtedy, kým je to potrebné na účely, na ktoré sa osobné údaje spracúvajú. Pričom osobné údaje môžeme uchovávať aj dlhšie, pokiaľ sa budú spracúvať výlučne na účely archivácie vo verejnom záujme, na účely vedeckého alebo historického výskumu či na štatistické účely v súlade s Článok 89 ods. 1 za predpokladu prijatia primeraných technických a organizačných opatrení vyžadovaných týmto všeobecným nariadenia o ochrane osobných údajov (GDPR) na ochranu práv a slobôd dotknutých osôb.',
  },
  {
    title: 'Integrita a dôvernosť',
    text: 'Osobné údaje spracúvame spôsobom, ktorý zaručuje primeranú bezpečnosť osobných údajov, vrátane ochrany pred neoprávneným alebo nezákonným spracúvaním a náhodnou stratou, zničením alebo poškodením, a to prostredníctvom primeraných technických alebo organizačných opatrení v a to najmä v oblasti informačnej a kybernetickej bezpečnosti.',
  },
  {
    title: 'Zodpovednosť',
    text: 'Ako prevádzkovateľ si uvedomujeme, že sme zodpovedný za dodržiavanie zásad spracúvania osobných údajov, za súlad spracúvania osobných údajov so zásadami spracúvania osobných údajov podľa Všeobecného nariadenia o ochrana osobných údajov (GDPR) a že sme povinný tento súlad na požiadanie príslušného dozorného orgánu preukázať.',
  },
];

const legalBases: string[] = [
  'Čl. 6 ods. 1 písm. a) dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov aspoň na jeden konkrétny účel.',
  'Čl. 6 ods. 1 písm. b) spracúvanie osobných údajov je nevyhnutné na plnenie zmluvy, ktorej zmluvnou stranou je dotknutá osoba, alebo na vykonanie opatrenia pred uzatvorením zmluvy na základe žiadosti dotknutej osoby.',
  'Čl. 6 ods. 1 písm. c) spracúvanie osobných údajov je nevyhnutné podľa osobitného predpisu alebo medzinárodnej zmluvy, ktorou je Slovenská republika viazaná.',
  'Čl. 6 ods. 1 písm. f) spracúvanie osobných údajov je nevyhnutné na účel oprávnených záujmov prevádzkovateľa alebo tretej strany okrem prípadov, keď nad týmito záujmami prevažujú záujmy alebo práva dotknutej osoby vyžadujúce si ochranu osobných údajov, najmä ak je dotknutou osobou dieťa.',
];

const purposeDocuments: { label: string; href: string }[] = [
  {
    label: 'Informácie o účeloch spracúvania pre návštevníkov web stránky a fanúšikov na sociálnych sieťach',
    href: '/images/Informacie-pre-navstevnikov-web-stranky-Neoship.pdf',
  },
  {
    label: 'Informácie o účeloch spracúvania pre obchodných partnerov a ich zamestnancov',
    href: '/images/Informacie-pre-obchodnych-partnerov-a-ich-zamestnancov.pdf',
  },
  {
    label: 'Informácie o účeloch spracúvania pre uchádzačov o zamestnanie',
    href: '/images/Informacie-pre-uchadzacov-o-zamestnanie.pdf',
  },
  {
    label: 'Informácie o účeloch spracúvania pre zamestnancov',
    href: '/images/Informacie-pre-zamestnancov-a-byvalych-zamestnancov.pdf',
  },
];

const rights: { title: string; text: string }[] = [
  {
    title: 'Právo na prístup k osobným údajom',
    text: 'Máte právo na prístupu k svojim osobným údajom, ako aj právo vedieť na aký účel sú spracúvané, kto sú príjemcovia vašich osobných údajov, aká je doba spracúvania.',
  },
  {
    title: 'Právo na opravu',
    text: 'Máte právo na opravu, pokiaľ sú vaše osobné údaje nesprávne, alebo sa zmenili, kontaktuje nás, opravíme ich. So zreteľom na účely spracúvania máte právo na doplnenie neúplných osobných údajov, a to aj prostredníctvom poskytnutia doplnkového vyhlásenia.',
  },
  {
    title: 'Právo na vymazanie (zabudnutie)',
    text: 'Máte právo na výmaz osobných údajov, pokiaľ sú nesprávne, alebo spracúvané nezákonne. Bez zbytočného odkladu vymažeme vaše osobné údaje, ak je splnený niektorý z týchto dôvodov: osobné údaje už nie sú potrebné na účely, na ktoré sa získavali alebo inak spracúvali, alebo ak odvoláte súhlas, na základe ktorého sa spracúvanie vykonáva a ak neexistuje iný právny základ pre pracúvanie, alebo ako sa vaše osobné údaje sa spracúvali nezákonne, alebo vaše osobné údaje musia byť vymazané, aby sa splnila zákonná povinnosť.',
  },
  {
    title: 'Právo na obmedzenie spracúvania',
    text: 'Máte právo na obmedzenie spracúvania, pokiaľ si želáte budeme vaše osobné údaje pokiaľ pôjde o jeden z týchto prípadov: ako dotknutá osoba napadnete správnosť osobných údajov, a to počas obdobia umožňujúceho overiť nám správnosť osobných údajov, alebo ak spracúvanie je protizákonné a namietate proti vymazaniu osobných údajov a žiadate namiesto toho obmedzenie ich použitia, alebo už nepotrebujeme vaše osobné údaje na účely spracúvania, ale potrebujete ich vy ako dotknutá osoba na preukázanie, uplatňovanie alebo obhajovanie právnych nárokov, alebo ako yva ko dotknutá osoba namietate voči spracúvaniu, a to až do overenia, či oprávnené dôvody na našej strane prevažujú nad oprávnenými dôvodmi vás ako dotknutej osoby.',
  },
  {
    title: 'Právo na prenosnosť údajov',
    text: 'Máte právo na prenosnosť údajov, ak si želáte preniesť ich k inému prevádzkovateľovi, poskytneme vám ich v zodpovedajúcom štruktúrovanom, bežne používanom a strojovo čitateľnom formáte, ak sa spracúvanie zakladá na súhlase alebo na zmluve a ak sa spracúvanie vykonáva automatizovanými prostriedkami.',
  },
  {
    title: 'Právo namietať',
    text: 'Máte právo kedykoľvek namietať spracúvanie vašich osobných údajov z dôvodov týkajúcich sa konkrétnej situácie ktoré je vykonávané pre účely uvedené na základe oprávneného záujmu, ktoré sledujeme ako prevádzkovateľ. Nebudeme ďalej spracúvať vaše osobné údaje, pokiaľ sa nepreukážu nevyhnutné oprávnené dôvody na spracúvanie, ktoré prevažujú nad vašimi záujmami, právami a slobodami, alebo dôvody na preukazovanie, uplatňovanie alebo obhajovanie právnych nárokov.',
  },
  {
    title: 'Právo podať sťažnosť',
    text: 'Ak sa domnievate, že spracúvanie osobných údajov je v rozpore s platnými predpismi máte právo podať sťažnosť dozornému orgánu, ktorým je Úrad pre ochranu osobných údajov Slovenskej republiky, so sídlom Hraničná 12, 820 07 Bratislava 27, Slovenská republika, IČO: 36 064 220, tel. č.: +421 2 3231 3220, https://dataprotection.gov.sk/uoou/',
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Pravidlá ochrany osobných údajov', href: '/pravidla-ochrany-osobnych-udajov' },
        ]}
      />

      <PageHero
        eyebrow="GDPR"
        title="Informácie o spracúvaní osobných údajov"
        subtitle="V súvislosti so spracúvaním osobných údajov, Vám v zmysle Nariadenia Európskeho parlamentu a Rady EÚ 2016/679 (GDPR) z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a voľnom pohybe takýchto údajov (ďalej len GDPR), poskytujeme nasledujúce informácie."
      />

      <article className="py-12 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-black text-ink">Kto sme?</h2>
          <p className="body-lg mt-4">
            Prevádzkovateľom, ktorý určil účely a prostriedky spracúvania vašich osobných údajov je
            spoločnosť:
          </p>
          <address className="not-italic mt-4 rounded-2xl bg-surface border border-line p-6 text-ink leading-relaxed">
            <strong>Názov:</strong> NEOSHIP s. r. o.
            <br />
            <strong>Sídlo:</strong> Miletičova 23, Bratislava – mestská časť Ružinov 821 09
            <br />
            <strong>IČO:</strong> 50 286 820
            <br />
            <strong>Zápis:</strong> Obchodný register Mestského súdu Bratislava III, odd. Sro,
            vložka č. 193803/B
          </address>

          <h2 className="text-2xl font-black text-ink mt-12">Slovník pojmov</h2>
          <p className="body-lg mt-4">
            Pre lepšie pochopenie informácií obsiahnutých v tomto dokumente uvádzame vysvetlenie pre
            nasledovné pojmy.
          </p>
          <dl className="mt-5 space-y-4">
            {glossary.map((g) => (
              <div key={g.term} className="rounded-xl border border-line p-5">
                <dt className="font-bold text-ink">{g.term}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{g.text}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-black text-ink mt-12">Zásady ochrany osobných údajov</h2>
          <p className="body-lg mt-4">
            Pri spracúvaní vašich osobných údajov v súlade s požiadavkami Všeobecného nariadenia o
            ochrane osobných údajov dodržiavame nasledovné zásady:
          </p>
          <div className="mt-5 space-y-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-line p-5">
                <h3 className="font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-ink mt-12">
            Právne základy spracúvania osobných údajov
          </h2>
          <p className="body-lg mt-4">
            Vaše osobné údaje spracúvame iba na základe nasledovných právnych základov podľa
            Všeobecného nariadenia o ochrane osobných údajov (GDPR):
          </p>
          <ul className="body-lg mt-4 list-disc pl-6 space-y-2">
            {legalBases.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="body-lg mt-4">
            Ak vaše osobné údaje spracúvame na základe vášho súhlasu máte právo kedykoľvek tento
            súhlas odvolať. Napríklad zaslaním žiadosti na adresu{' '}
            <a
              href="mailto:info@neoship.sk"
              className="text-brand-orange underline hover:no-underline"
            >
              info@neoship.sk
            </a>
            .
          </p>

          <h2 className="text-2xl font-black text-ink mt-12">Účely spracúvania osobných údajov</h2>
          <p className="body-lg mt-4">
            Podľa toho ku ktorej kategórii dotknutých osôb patríte, spracúvame vaše osobné údaje na
            nasledovné účely:
          </p>
          <ul className="mt-5 space-y-2">
            {purposeDocuments.map((doc) => (
              <li key={doc.href}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-surface border border-line px-5 py-3.5 text-ink hover:border-brand-orange hover:bg-white transition-colors"
                >
                  <FileText className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="flex-1 group-hover:text-brand-orange transition-colors">
                    {doc.label}
                  </span>
                  <Download className="w-4 h-4 text-muted shrink-0 group-hover:text-brand-orange transition-colors" />
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-ink mt-12">
            Vaše práva súvisiace s ochranou osobných údajov
          </h2>
          <p className="body-lg mt-4">
            Všeobecné nariadenia o ochrane osobných údajov (GDPR) vám ako dotknutým osobám dáva práva
            ktorých výkon sa ako prevádzkovateľa snažíme maximálne uľahčiť. Pri spracúvaní vašich
            osobných údajov sme pripravení vykonávať Vaše práva.
          </p>
          <div className="mt-5 space-y-4">
            {rights.map((r) => (
              <div key={r.title} className="rounded-xl border border-line p-5">
                <h3 className="font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-ink mt-12">
            Kde a ako môžete svoje práva uplatniť
          </h2>
          <p className="body-lg mt-4">
            Vaše práva môžete uplatniť písomne na adrese: Neoship, s.r.o., Miletičova 23, 821 09
            Bratislava – mestská časť Ružinov, email:{' '}
            <a
              href="mailto:info@neoship.sk"
              className="text-brand-orange underline hover:no-underline"
            >
              info@neoship.sk
            </a>
            .
          </p>
          <p className="body-lg mt-4">
            Na vašu žiadosť odpovieme bezplatne v lehote do 30 dní. V prípade zložitosti, alebo
            veľkého počtu žiadostí sme oprávnený túto lehotu predĺžiť o ďalších 60 dní. Pokiaľ k tomu
            dôjde budeme Vás o tom, aj o dôvodoch informovať.
          </p>
          <p className="body-lg mt-4">
            Ak bude ale vaša žiadosť zjavne neodôvodnená, alebo opakovaná, sme oprávnený účtovať si
            primeraný administratívny poplatok na pokrytie nákladov spojených s poskytnutím tejto
            služby.
          </p>

          <h2 className="text-2xl font-black text-ink mt-12">Úpravy a zmeny</h2>
          <p className="body-lg mt-4">
            Pretože ochrana osobných údajov pre nás nie je jednorazovou záležitosťou. Vyhradzujeme
            si právo informácie uvedené v tomto dokumente kedykoľvek ich upraviť a zmeniť. Túto
            zmenu Vám vopred oznámime prostredníctvom tejto stránky, alebo prostredníctvom emailu.
          </p>

          <h2 className="text-2xl font-black text-ink mt-12">Doplňujúce informácie</h2>
          <p className="body-lg mt-4">
            V prípade otázok, ktoré sa týkajú ochrany osobných údajov sa na nás môžete obrátiť.
            Môžete sa informovať, či je poskytovanie osobných údajov zákonnou alebo zmluvnou
            požiadavkou, alebo požiadavkou, ktorá je potrebná na uzavretie zmluvy, taktiež, či ste
            povinný poskytnúť nám osobné údaje. Môžete sa tiež informovať na možné následky
            neposkytnutia vašich osobných údajov.
          </p>
        </Container>
      </article>
    </>
  );
}
