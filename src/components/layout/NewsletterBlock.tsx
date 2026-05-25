'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/cn';

export function NewsletterBlock({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={cn('rounded-2xl bg-white/5 border border-white/10 p-6 lg:p-8', className)}>
      <p className="eyebrow text-brand-orange-100">Newsletter</p>
      <h3 className="mt-2 text-xl lg:text-2xl font-bold text-white">
        Tipy na expedíciu raz mesačne.
      </h3>
      <p className="mt-2 text-sm text-white/70">
        Žiadny spam. Iba praktické rady, novinky a prípadové štúdie.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="mt-5 flex flex-col sm:flex-row gap-2"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="vas@email.sk"
          autoComplete="email"
          className="flex-1 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/50 px-5 py-3 text-sm focus:bg-white/20 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange hover:bg-brand-orange-600 transition-colors text-white px-5 py-3 text-sm font-bold"
        >
          {submitted ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> Hotovo
            </>
          ) : (
            <>
              Odoberať <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
