import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pravidlá ochrany osobných údajov | Neoship',
  description:
    'Ako spoločnosť NEOSHIP s. r. o. spracúva a chráni osobné údaje návštevníkov, obchodných partnerov, uchádzačov o zamestnanie a zamestnancov v súlade s GDPR.',
  path: '/pravidla-ochrany-osobnych-udajov',
});

const documents = [
  'Informácie pre návštevníkov web stránky a sociálnych sietí Neoship',
  'Informácie pre obchodných partnerov a ich zamestnancov',
  'Informácie pre uchádzačov o zamestnanie',
  'Informácie pre zamestnancov a bývalých zamestnancov',
];

const glossary = [
  {
    term: 'Osobné údaje',
    text: 'Akékoľvek informácie týkajúce sa identifikovanej alebo identifikovateľnej fyzickej osoby (napr. meno, e-mail, telefónne číslo, lokalizačné údaje či online identifikátor).',
  },
  {
    term: 'Spracúvanie osobných údajov',
    text: 'Akákoľvek operácia s osobnými údajmi – ich získavanie, zaznamenávanie, uchovávanie, používanie, prenos, vymazanie a podobne.',
  },
  {
    term: 'Prevádzkovateľ',
    text: 'Subjekt, ktorý určuje účel a prostriedky spracúvania osobných údajov. V týchto pravidlách je prevádzkovateľom spoločnosť NEOSHIP s. r. o.',
  },
  {
    term: 'Sprostredkovateľ',
    text: 'Subjekt, ktorý spracúva osobné údaje v mene prevádzkovateľa na základe zmluvy (napr. poskytovateľ IT služieb či kuriérska spoločnosť).',
  },
  {
    term: 'Príjemca',
    text: 'Subjekt, ktorému sa osobné údaje poskytujú, bez ohľadu na to, či je treťou stranou.',
  },
  {
    term: 'Tretia strana',
    text: 'Subjekt iný než dotknutá osoba, prevádzkovateľ, sprostredkovateľ a osoby poverené spracúvaním údajov.',
  },
  {
    term: 'Súhlas',
    text: 'Slobodne daný, konkrétny, informovaný a jednoznačný prejav vôle dotknutej osoby so spracúvaním jej osobných údajov.',
  },
  {
    term: 'Porušenie ochrany osobných údajov',
    text: 'Porušenie bezpečnosti, ktoré vedie k neoprávnenému prístupu, strate, zničeniu alebo zmene osobných údajov.',
  },
];

const principles = [
  'Zákonnosť, spravodlivosť a transparentnosť spracúvania',
  'Obmedzenie účelu – údaje sa spracúvajú len na vopred určené účely',
  'Minimalizácia údajov – spracúva sa len nevyhnutný rozsah údajov',
  'Správnosť – údaje sú aktuálne a v prípade potreby opravené',
  'Minimalizácia uchovávania – údaje sa uchovávajú len nevyhnutný čas',
  'Integrita a dôvernosť – primeraná technická a organizačná ochrana',
  'Zodpovednosť prevádzkovateľa za dodržiavanie zásad',
];

const legalBases = [
  'Súhlas dotknutej osoby so spracúvaním na jeden alebo viac konkrétnych účelov.',
  'Plnenie zmluvy, ktorej zmluvnou stranou je dotknutá osoba, alebo vykonanie opatrení pred uzatvorením zmluvy.',
  'Splnenie zákonnej povinnosti prevádzkovateľa.',
  'Oprávnené záujmy prevádzkovateľa alebo tretej strany.',
];

const rights = [
  'Právo na prístup k osobným údajom',
  'Právo na opravu nesprávnych údajov',
  'Právo na vymazanie (právo „na zabudnutie“)',
  'Právo na obmedzenie spracúvania',
  'Právo na prenosnosť údajov',
  'Právo namietať proti spracúvaniu',
  'Právo podať sťažnosť dozornému orgánu (Úrad na ochranu osobných údajov SR)',
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
        title="Pravidlá ochrany osobných údajov"
        subtitle="Ochrana vašich osobných údajov je pre nás dôležitá. Pri ich spracúvaní postupujeme v súlade s nariadením GDPR a platnými právnymi predpismi Slovenskej republiky."
      />

      <article className="py-12 md:py-16 bg-white">
        <Container className="max-w-3xl">
          <p className="body-lg">
            Tieto pravidlá vysvetľujú, ako spoločnosť NEOSHIP s. r. o. spracúva osobné údaje
            jednotlivých kategórií dotknutých osôb. Podrobné informácie nájdete v nasledujúcich
            dokumentoch:
          </p>
          <ul className="mt-5 space-y-2">
            {documents.map((doc) => (
              <li
                key={doc}
                className="flex items-start gap-3 rounded-xl bg-surface border border-line px-5 py-3.5 text-ink"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-ink mt-12">Kto sme?</h2>
          <p className="body-lg mt-4">
            Prevádzkovateľom osobných údajov je spoločnosť:
          </p>
          <address className="not-italic mt-4 rounded-2xl bg-surface border border-line p-6 text-ink">
            <strong>NEOSHIP s. r. o.</strong>
            <br />
            Miletičova 23
            <br />
            821 09 Bratislava – mestská časť Ružinov
            <br />
            IČO: 50 286 820
            <br />
            Spoločnosť zapísaná v Obchodnom registri Mestského súdu Bratislava III.
          </address>

          <h2 className="text-2xl font-black text-ink mt-12">Slovník pojmov</h2>
          <p className="body-lg mt-4">
            Pre lepšie porozumenie týmto pravidlám uvádzame vysvetlenie základných pojmov:
          </p>
          <dl className="mt-5 space-y-4">
            {glossary.map((g) => (
              <div key={g.term} className="rounded-xl border border-line p-5">
                <dt className="font-bold text-ink">{g.term}</dt>
                <dd className="mt-1 text-muted leading-relaxed">{g.text}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-black text-ink mt-12">Zásady ochrany osobných údajov</h2>
          <p className="body-lg mt-4">
            Pri spracúvaní osobných údajov dodržiavame tieto zásady vyplývajúce z nariadenia GDPR:
          </p>
          <ul className="body-lg mt-4 list-disc pl-6 space-y-2">
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-ink mt-12">Právne základy spracúvania</h2>
          <p className="body-lg mt-4">
            Osobné údaje spracúvame výlučne na základe niektorého z právnych základov podľa článku 6
            nariadenia GDPR:
          </p>
          <ul className="body-lg mt-4 list-disc pl-6 space-y-2">
            {legalBases.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-ink mt-12">Vaše práva</h2>
          <p className="body-lg mt-4">
            Ako dotknutá osoba máte vo vzťahu k spracúvaniu svojich osobných údajov tieto práva:
          </p>
          <ul className="body-lg mt-4 list-disc pl-6 space-y-2">
            {rights.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-ink mt-12">Kontakt</h2>
          <p className="body-lg mt-4">
            V prípade akýchkoľvek otázok týkajúcich sa spracúvania osobných údajov alebo uplatnenia
            svojich práv nás môžete kontaktovať na e-mailovej adrese{' '}
            <a href="mailto:info@neoship.sk" className="text-brand-orange underline hover:no-underline">
              info@neoship.sk
            </a>
            .
          </p>
          <p className="body-lg mt-4">
            Na vašu žiadosť odpovieme bez zbytočného odkladu, najneskôr do 30 dní od jej doručenia.
            Túto lehotu je v odôvodnených prípadoch možné predĺžiť o ďalších 60 dní, o čom vás budeme
            informovať.
          </p>
        </Container>
      </article>
    </>
  );
}
