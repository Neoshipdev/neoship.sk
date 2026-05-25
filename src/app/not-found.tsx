import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-32 bg-white">
      <Container className="text-center max-w-2xl">
        <p className="text-[120px] md:text-[180px] leading-none font-black text-brand-orange/20">
          404
        </p>
        <h1 className="heading-2 text-ink -mt-4">Stránka sa nenašla</h1>
        <p className="mt-4 body-lg">
          Hľadaná stránka zrejme zmenila adresu alebo už neexistuje. Skúste sa vrátiť späť alebo
          navštívte našu domovskú stránku.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" withArrow>
            Späť na domovskú stránku
          </Button>
          <Link
            href="/kontakt"
            className="text-sm font-bold text-brand-orange hover:text-brand-orange-700"
          >
            Kontaktovať nás →
          </Link>
        </div>
      </Container>
    </section>
  );
}
