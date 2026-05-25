'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'neoship-cookie-consent';

type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentCategories & { timestamp: string };

function readConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredConsent) : null;
  } catch {
    return null;
  }
}

function writeConsent(c: ConsentCategories): void {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...c, timestamp: new Date().toISOString() }),
    );
  } catch {
    /* ignore quota / private mode */
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Show only on first visit (no stored choice)
    if (!readConsent()) setVisible(true);
  }, []);

  function persist(c: ConsentCategories) {
    writeConsent(c);
    setVisible(false);
  }

  function acceptAll() {
    persist({ necessary: true, analytics: true, marketing: true });
  }

  function rejectAll() {
    persist({ necessary: true, analytics: false, marketing: false });
  }

  function saveCustom() {
    persist({ necessary: true, analytics, marketing });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-0 bottom-0 z-[80] p-4 md:p-6 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-4xl mx-auto rounded-2xl bg-white border border-line shadow-soft-lg overflow-hidden">
            {/* Hlavička */}
            <div className="relative p-6 md:p-7">
              <button
                type="button"
                onClick={rejectAll}
                aria-label="Zatvoriť a odmietnuť voliteľné cookies"
                className="absolute top-4 right-4 w-9 h-9 rounded-full text-muted hover:bg-surface hover:text-ink transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4">
                <span className="shrink-0 w-12 h-12 rounded-2xl bg-brand-orange-50 text-brand-orange flex items-center justify-center">
                  <Cookie className="w-6 h-6" />
                </span>
                <div className="flex-1 min-w-0">
                  <h2 id="cookie-banner-title" className="text-lg md:text-xl font-bold text-ink">
                    Tento web používa cookies
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
                    Cookies používame na zabezpečenie základných funkcií stránky, analýzu
                    návštevnosti a personalizáciu obsahu. Kliknutím na „Súhlasím" povolíte všetky
                    cookies, alebo si môžete vybrať len tie, ktoré vám vyhovujú. Viac informácií
                    nájdete v{' '}
                    <Link
                      href="/pravidla-ochrany-osobnych-udajov"
                      className="text-brand-orange underline hover:no-underline"
                    >
                      pravidlách ochrany osobných údajov
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Nastavenia kategórií */}
              <AnimatePresence initial={false}>
                {showSettings && (
                  <motion.div
                    key="settings"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 grid sm:grid-cols-3 gap-3">
                      <CategoryToggle
                        name="Nutné"
                        description="Potrebné pre základné fungovanie stránky. Nedajú sa vypnúť."
                        checked
                        locked
                      />
                      <CategoryToggle
                        name="Analytické"
                        description="Pomáhajú nám zlepšovať stránku meraním návštevnosti."
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      <CategoryToggle
                        name="Marketingové"
                        description="Slúžia na zobrazovanie relevantnejších reklám a obsahu."
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Akcie */}
            <div className="px-6 md:px-7 py-4 bg-surface border-t border-line flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowSettings((v) => !v)}
                className="text-sm font-bold text-muted hover:text-ink transition-colors text-left"
              >
                {showSettings ? 'Skryť nastavenia' : 'Nastavenia'}
              </button>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full px-5 py-2.5 text-sm font-bold border border-line text-ink hover:bg-white transition-colors"
                >
                  Odmietnuť
                </button>
                {showSettings && (
                  <button
                    type="button"
                    onClick={saveCustom}
                    className="rounded-full px-5 py-2.5 text-sm font-bold border border-brand-orange text-brand-orange hover:bg-brand-orange-50 transition-colors"
                  >
                    Uložiť výber
                  </button>
                )}
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full px-5 py-2.5 text-sm font-bold bg-brand-orange text-white hover:bg-brand-orange-600 transition-colors"
                >
                  Súhlasím
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategoryToggle({
  name,
  description,
  checked,
  locked = false,
  onChange,
}: {
  name: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label
      className={cn(
        'flex items-start gap-3 rounded-xl border p-4 transition-colors',
        locked
          ? 'border-line bg-surface cursor-not-allowed'
          : checked
            ? 'border-brand-orange bg-brand-orange-50 cursor-pointer'
            : 'border-line bg-white hover:border-brand-orange/40 cursor-pointer',
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 w-4 h-4 rounded border-line text-brand-orange focus:ring-brand-orange disabled:opacity-60"
      />
      <span className="min-w-0">
        <span className="block text-sm font-bold text-ink">{name}</span>
        <span className="block text-xs text-muted mt-0.5 leading-relaxed">{description}</span>
      </span>
    </label>
  );
}
