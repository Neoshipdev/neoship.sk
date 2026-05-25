'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Field, TextArea, Checkbox, Captcha } from './FormPrimitives';
import { CheckCircle2 } from 'lucide-react';

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={submitted ? 'Ďakujeme za záujem!' : 'Chcem vyskúšať Neoship'}
      description={
        submitted
          ? 'Ozveme sa vám do 24 hodín na e-mail alebo telefón.'
          : 'Vyplňte krátky formulár a my sa vám ozveme do 24 hodín.'
      }
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center py-6">
          <CheckCircle2 className="w-14 h-14 text-brand-orange mb-3" />
          <p className="text-muted">Vašu žiadosť sme prijali. Tešíme sa na spoluprácu.</p>
          <Button className="mt-6" onClick={handleClose}>
            Zatvoriť
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Meno a priezvisko" name="name" required autoComplete="name" />
          <Field label="E-mail" name="email" type="email" required autoComplete="email" />
          <Field label="Telefón" name="phone" type="tel" autoComplete="tel" />
          <TextArea
            label="Správa"
            name="message"
            placeholder="Krátko nám napíšte, o čo máte záujem."
          />
          <Captcha />
          <Checkbox name="gdpr" required>
            Súhlasím so spracovaním osobných údajov podľa{' '}
            <a
              href="/pravidla-ochrany-osobnych-udajov"
              className="text-brand-orange underline hover:no-underline"
            >
              pravidiel ochrany osobných údajov
            </a>
            .
          </Checkbox>
          <Button type="submit" withArrow className="w-full justify-center">
            Odoslať
          </Button>
        </form>
      )}
    </Modal>
  );
}
