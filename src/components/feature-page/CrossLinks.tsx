import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { FeaturePage } from '@/lib/feature-pages';

export function CrossLinks({ items }: { items: FeaturePage['crossLinks'] }) {
  return (
    <div className="rounded-2xl bg-brand-purple-50/60 border border-brand-purple-100 p-6 md:p-8">
      <p className="eyebrow">Pozrite si aj</p>
      <ul className="mt-5 grid md:grid-cols-3 gap-4">
        {items.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group block h-full rounded-xl bg-white p-5 border border-line hover:border-brand-orange transition-colors"
            >
              <p className="font-bold text-ink group-hover:text-brand-orange-700 transition-colors">
                {link.label}
              </p>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{link.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-orange">
                Prejsť <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
