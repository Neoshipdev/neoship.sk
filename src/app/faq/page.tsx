import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { Accordion } from '@/components/ui/Accordion';
import { buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Časté otázky | Neoship',
  description:
    'Odpovede na najčastejšie otázky o cenách, prepravcoch, integráciách, dobierkach, vratkách a fungovaní expedičného systému Neoship.',
  path: '/faq',
});

const groups = [
  {
    title: 'Služby Neoship',
    items: [
      {
        question: 'NEOSHIP s.r.o. je prepravná spoločnosť?',
        answer:
          'Spoločnosť NEOSHIP s.r.o. nie je prepravná spoločnosť, ale spoločnosť obchodno-vývojárska, ktorá vyvinula a prevádzkuje online expedičný systém Neoship. Každý náš zákazník, ktorý Neoship využíva, má v rámci expedičného riešenia obstaranú aj prepravu zásielok prostredníctvom našich partnerských kuriérskych spoločností - SPS, GLS, Packeta, Slovenská pošta, SDS.',
      },
      {
        question:
          'Ak chcem posielať balíky nestačí mi osloviť iba niektorú z kuriérskych spoločností?',
        answer:
          'Stačí to v prípade, ak premýšľate len v rovine vyzdvihnutia a doručenia zásielky. Dokonca už každá z prepravných spoločností disponuje vlastným systémom, kde je možné nahrať dáta z objednávok, na základe ktorých sa vygenerujú prepravné štítky. To je ale primárna logistická požiadavka. Každý eshop vie, že za celým procesom od prijatia objednávky až po jej doručenie zákazníkovi sa skrýva omnoho viac. A to VIAC kuriérske spoločnosti neriešia.',
      },
      {
        question:
          'Prečo by si mal eshop ako expedičného partnera vybrať práve Neoship namiesto priamej spolupráce s prepravcom?',
        answer: `Kvôli komplexnosti, jednoduchosti, rýchlosti a pohodlnosti:

- V Neoshipe máme pripravených množstvo hotových riešení a napojení, vďaka ktorým je zároveň vyriešená aj automatizovaná tlač štítkov.
- Všetko vyriešime jednou zmluvou a faktúrou s nami bezohľadu na počet využívaných prepravcov.
- V Neoshipe je k dispozícii sledovanie, farebne odlíšené balíky podľa stavov doručovania (doručené, nedoručené, v preprave), vratky.
- Prepravná kalkulačka veľmi rýchlo vypočíta cenu akéhokoľvek balíka.
- Pri každom balíku zobrazujeme výslednú aj detailnú cenu balíka so všetkými príplatkami.
- V Neoshipe je možnosť dobierky sortovať podľa potreby cez rôzne filtre (VS, suma na účte, platba cash, platba kartou, mena,...). Následne si ich eshop môže vyexportovať v sepa xml súbore, vďaka ktorému v účtovnom systéme párujú dobierky s faktúrami hromadne.
- Požiadavky na prepravcu sú zadávané priamo pri balíku. Takéto balíky tiež ostávajú špeciálne označené, aby si ich eshop aj po čase ľahko mohol dohľadať.
- Eshop má po ruke rôzne štatistiky balíkov a zobrazený ich vývoj.
- Eshop si môže navrhnúť email s vlastným obsahom, farbami, s interaktívnymi odkazmi a s priamym sledovaním balíka.
- V neposlednom rade sa náš klient môže tešiť na skvelú zákaznícku starostlivosť celého tímu Neoship, ktorý rýchlo a ochotne rieši požiadavky cez chat, email alebo telefonicky.`,
      },
    ],
  },
  {
    title: 'Preprava balíkov',
    items: [
      {
        question: 'Robíte aj jednorazovú prepravu balíkov?',
        answer:
          'Nie. Prepravu balíkov obstarávame iba pre zazmluvnených klientov - prevažne pre eshopy, ktoré expedujú na pravidelnej báze. Každý, kto chce využívať naše služby musí mať s nami uzatvorenú servisnú zmluvu.',
      },
      {
        question: 'S akými kuriérskymi spoločnosťami aktuálne spolupracujte?',
        answer: 'SPS, GLS, Slovenská pošta, Packeta a SDS.',
      },
      {
        question: 'Musím s každým prepravcom uzátvarať zmluvu zvlášť?',
        answer:
          'Nie. Eshop uzavrie zmluvu iba s nami a v rámci zmluvy mu zabezpečíme prepravu balíkov prostredníctvom kuriérskej spoločnosti (1 alebo viacerých), ktorú si vyberie.',
      },
      {
        question: 'Je v rámci Neoship služieb k dispozícii aj nejaký paletový prepravca?',
        answer:
          'Áno, v rámci služieb Neoship je k dispozícii preprava prostredníctvom spoločnosti SDS.',
      },
    ],
  },
];

const flatItems = groups.flatMap((g) => g.items);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(flatItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Domov', href: '/' }, { label: 'FAQ', href: '/faq' }]} />

      <PageHero
        eyebrow="Časté otázky"
        title="Všetko, čo potrebujete vedieť"
        subtitle="Nenašli ste odpoveď? Napíšte nám – odpovedáme zvyčajne do hodiny."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-4xl">
          <div className="space-y-14">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="text-2xl font-black text-ink mb-4">{g.title}</h2>
                <Accordion items={g.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner headline="Máte ďalšiu otázku?" subtitle="Sme tu pre vás telefonicky aj e-mailom." />
    </>
  );
}
