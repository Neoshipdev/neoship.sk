import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { buildMetadata } from '@/lib/seo';
import { vopArticles, vopSignature, vopEffectiveFrom } from '@/lib/vop';

export const metadata: Metadata = buildMetadata({
  title: 'Všeobecné obchodné podmienky NEOSHIP s.r.o.',
  description:
    'Všeobecné obchodné podmienky spoločnosti NEOSHIP s.r.o. upravujúce právne vzťahy pri obstaraní prepravy zásielok cez expedičný systém Neoship. Platné a účinné od 14.5.2026.',
  path: '/vseobecne-obchodne-podmienky',
});

/** Úroveň odsadenia podľa číslovania (1.2.1, písmená a)–f) → odsadené). */
function indentLevel(text: string): 0 | 1 {
  if (/^\d+\.\d+\.\d+/.test(text)) return 1;
  if (/^[a-f]\)/.test(text)) return 1;
  return 0;
}

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Domov', href: '/' },
          { label: 'Všeobecné obchodné podmienky', href: '/vseobecne-obchodne-podmienky' },
        ]}
      />

      <PageHero
        eyebrow="Právne dokumenty"
        title="Všeobecné obchodné podmienky NEOSHIP s.r.o."
        subtitle={`Tieto všeobecné obchodné podmienky sú platné a účinné od ${vopEffectiveFrom}.`}
      />

      <article className="py-12 md:py-16 bg-white">
        <Container className="max-w-3xl">
          {vopArticles.map((article) => (
            <section key={article.heading} className="mb-10">
              <h2 className="text-xl md:text-2xl font-black text-ink mb-4">{article.heading}</h2>
              <div className="space-y-3">
                {article.items.map((item) => (
                  <p
                    key={item}
                    className={
                      indentLevel(item) === 1
                        ? 'pl-6 text-[15px] leading-relaxed text-muted'
                        : 'text-[15px] leading-relaxed text-ink/90'
                    }
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-12 pt-8 border-t border-line">
            {vopSignature.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? 'text-[15px] font-bold text-ink mb-2'
                    : 'text-[15px] text-ink/90'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
