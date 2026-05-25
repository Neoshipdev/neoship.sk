import { Accordion } from '@/components/ui/Accordion';
import { faqJsonLd } from '@/lib/seo';
import type { FeatureFaq } from '@/lib/feature-pages';

export function FAQAccordion({ items, headline = 'Časté otázky' }: { items: FeatureFaq[]; headline?: string }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <h2 className="text-2xl md:text-3xl font-black text-ink">{headline}</h2>
      <div className="mt-6">
        <Accordion items={items} />
      </div>
    </div>
  );
}
