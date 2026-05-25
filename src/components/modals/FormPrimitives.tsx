'use client';

import { cn } from '@/lib/cn';
import { forwardRef } from 'react';

export const Field = forwardRef<
  HTMLInputElement,
  {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    autoComplete?: string;
  }
>(function Field({ label, name, type = 'text', required, placeholder, autoComplete }, ref) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-brand-orange">*</span>}
      </span>
      <input
        ref={ref}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={cn(
          'w-full rounded-xl border border-line bg-white px-4 py-3 text-base',
          'placeholder:text-muted/70 focus:border-brand-orange focus:outline-none',
          'transition-colors',
        )}
      />
    </label>
  );
});

export function TextArea({
  label,
  name,
  rows = 4,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-brand-orange">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-xl border border-line bg-white px-4 py-3 text-base',
          'placeholder:text-muted/70 focus:border-brand-orange focus:outline-none transition-colors',
        )}
      />
    </label>
  );
}

export function Checkbox({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer text-sm text-muted">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 w-4 h-4 rounded border-line text-brand-orange focus:ring-brand-orange"
      />
      <span>{children}</span>
    </label>
  );
}

export function Captcha() {
  // Visual placeholder. Wire real captcha (Turnstile/hCaptcha) in production.
  return (
    <div className="rounded-xl border border-dashed border-line bg-surface px-4 py-3 text-sm text-muted">
      ✓ Overenie, že nie ste robot (demo – integrujte Turnstile alebo hCaptcha)
    </div>
  );
}
