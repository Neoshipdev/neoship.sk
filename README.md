# Neoship — marketingová stránka

Moderný redesign marketingovej stránky pre **Neoship** — slovenskú logistickú
a expedičnú platformu, ktorá prepája e-shopy s kuriérskymi spoločnosťami
(SPS, GLS, Packeta, DPD).

Postavené na **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion** a **lucide-react**.

---

## 🚀 Spustenie

```bash
npm install
npm run dev      # vývojový server na http://localhost:3000
npm run build    # produkčný build
npm run start    # spustenie produkčného buildu
npm run lint     # ESLint
```

Projekt je pripravený na deploy na **Vercel** — stačí pripojiť repozitár.

---

## 🗂️ Štruktúra projektu

```
src/
├── app/                      # routy (App Router)
│   ├── layout.tsx            # root layout – font, Header, Footer, modaly, JSON-LD
│   ├── page.tsx              # domovská stránka (skladá sekcie)
│   ├── globals.css           # globálne štýly + utility triedy
│   ├── sitemap.ts            # automaticky generovaný sitemap.xml
│   ├── robots.ts             # robots.txt
│   ├── icon.svg              # favicon
│   ├── not-found.tsx         # 404 stránka
│   ├── sluzby/               # 3 hlavné služby + 5 funkcionalitných podstránok
│   ├── blog/                 # blog list + [slug] detail
│   └── ...                   # navody, faq, o-nas, kariera, kontakt, cennik, ...
├── components/
│   ├── layout/               # Header, MegaMenu, MobileMenu, Footer, Breadcrumbs, Logo
│   ├── ui/                   # Button, Modal, Accordion, Tabs, Card, Pill, CountUp, SectionHeader
│   ├── sections/             # sekcie domovskej a podporných stránok
│   ├── feature-page/         # šablónové komponenty pre funkcionalitné podstránky
│   ├── mockup/               # dashboard mockup v hero sekcii
│   └── modals/               # ContactModal, EbookModal, HelperModal + provider
└── lib/
    ├── cn.ts                 # helper na spájanie tried (clsx + tailwind-merge)
    ├── data.ts               # navigácia, služby, porovnanie plánov, referencie, footer
    ├── feature-pages.ts      # OBSAH 5 funkcionalitných podstránok (structured data)
    ├── blog.ts               # blog príspevky
    └── seo.ts                # metadata helpery + JSON-LD generátory
```

---

## ✏️ Kde meniť obsah (copy)

| Čo chcete zmeniť                              | Súbor                                  |
|-----------------------------------------------|----------------------------------------|
| Navigácia, mega-menu, footer                  | `src/lib/data.ts`                      |
| Služby v tabovom layoute, porovnanie plánov   | `src/lib/data.ts`                      |
| Referencie / testimonials                     | `src/lib/data.ts`                      |
| Obsah 5 funkcionalitných podstránok           | `src/lib/feature-pages.ts`             |
| Blog príspevky                                | `src/lib/blog.ts`                      |
| Texty hlavných služieb, FAQ, O nás, atď.      | príslušný `src/app/.../page.tsx`       |
| Kontaktné údaje (e-mail, telefón, IČO)        | `Footer.tsx`, `app/kontakt/page.tsx`   |

---

## 🎨 Kde meniť dizajn

| Čo chcete zmeniť               | Kde                                              |
|--------------------------------|--------------------------------------------------|
| Brand farby                    | `tailwind.config.ts` → `theme.extend.colors.brand` |
| Hero gradient                  | `tailwind.config.ts` → `backgroundImage.hero-gradient` |
| Font (Noto Sans, váhy)         | `src/app/layout.tsx` → `Noto_Sans({...})`        |
| Globálne utility triedy        | `src/app/globals.css` (`.container-x`, `.heading-1`, `.eyebrow`, …) |
| Tiene, radiusy, animácie       | `tailwind.config.ts`                             |
| Logo                           | `src/components/layout/Logo.tsx` (viď nižšie)    |

### Brandová paleta

```
brand-orange  #E94E1B    brand-purple     #3D1F47
brand-orange-50/100/600/700           brand-purple-50/100/700/900
ink #0F1115 · muted #6B7280 · line #E5E7EB · surface #FAFAFA
```

### Loga

Komponent `Logo` aktuálne renderuje **inline SVG wordmark**, takže stránka
funguje aj bez externých súborov. Po vložení brandových PNG do
`public/logos/` (`logo-neoship-oranzove.png`, `logo-neoship-biele.png`,
`logo-neoship-bielo-oranzova.png`) upravte `Logo.tsx` tak, aby používal
`next/image`.

---

## ➕ Ako pridať novú funkcionalitnú podstránku

1. **Pridajte obsah** do `src/lib/feature-pages.ts` — nový objekt typu
   `FeaturePage` a zaregistrujte ho v exporte `featurePages`.
2. **Vytvorte routu** `src/app/sluzby/<slug>/page.tsx` (skopírujte ktorýkoľvek
   existujúci, napr. `statistiky/page.tsx`, a zmeňte slug).
3. **Pridajte do navigácie** v `src/lib/data.ts` → `functionalityLinks`.
4. **Pridajte do footera** v `src/lib/data.ts` → `footerColumns` (stĺpec
   „Funkcionality").
5. **Pridajte na domovskú stránku** do `homeFunctionalityCards`
   (`src/lib/data.ts`), ak chcete kartu v sekcii FunctionalitiesGrid.
6. Sitemap (`src/app/sitemap.ts`) sa aktualizuje **automaticky** —
   nová podstránka sa pridá vďaka `featurePageSlugs`.

Šablónový komponent `FeaturePageTemplate` vyrenderuje celú podstránku
(breadcrumbs, hero, sekcie, benefity, persony, kroky, FAQ s JSON-LD,
cross-linky, CTA) z jedného dátového objektu.

---

## 🔍 SEO

- Metadata cez Next.js Metadata API na každej stránke (`buildMetadata` v `lib/seo.ts`)
- `sitemap.xml` a `robots.txt` generované automaticky
- JSON-LD schémy: `Organization` (globálne), `Service` (hlavné služby),
  `BreadcrumbList` (podstránky), `FAQPage` (funkcionalitné podstránky a FAQ)
- Funkcionalitné podstránky majú v sitemape `priority 0.8` a `changefreq monthly`

---

## ♿ Prístupnosť

- `lang="sk"`, semantické HTML tagy
- Modaly: `role="dialog"`, focus trap, ESC zatvorenie, scroll lock
- Focus-visible ring, touch targety ≥ 44 px
- Rešpektovanie `prefers-reduced-motion`

---

## 📋 Mapa routov (20)

```
/                                       /navody
/sluzby/kurierske-sluzby                 /faq
/sluzby/hromadna-tvorba-balikov          /blog  ·  /blog/[slug]
/sluzby/expedicny-system-neoship         /o-nas
/sluzby/prepojenia-a-tvorba-balikov      /kariera
/sluzby/prehlad-o-balikoch               /referencie
/sluzby/prehlad-o-financiach             /kontakt
/sluzby/parovanie-dobierok               /cennik
/sluzby/statistiky                       /stante-sa-partnerom
                                         /pravidla-ochrany-osobnych-udajov
```

---

## 📝 Poznámky k formulárom

Modaly (`ContactModal`, `EbookModal`, `HelperModal`) majú aktuálne
**front-end demo odoslanie** (zobrazia potvrdzovaciu obrazovku). Pre produkciu
napojte odosielanie na backend / e-mail službu a nahraďte demo captcha
(`FormPrimitives.tsx → Captcha`) reálnym riešením (Cloudflare Turnstile / hCaptcha).
