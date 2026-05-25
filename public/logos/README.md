# Loga Neoship

Sem vložte brandové loga vo formáte PNG:

| Súbor                              | Použitie                                      |
|------------------------------------|-----------------------------------------------|
| `logo-neoship-oranzove.png`        | header na svetlom pozadí (default)             |
| `logo-neoship-biele.png`           | header pri hero (fialová), footer              |
| `logo-neoship-bielo-oranzova.png`  | mixed variant (alternatívne použitie)          |

## Poznámka

Komponent `src/components/layout/Logo.tsx` aktuálne renderuje **inline SVG
wordmark**, takže stránka funguje aj bez týchto súborov.

Po vložení PNG logiek prepíšte komponent `Logo` tak, aby používal
`next/image` namiesto inline SVG (príklad je v histórii git / v README projektu).
