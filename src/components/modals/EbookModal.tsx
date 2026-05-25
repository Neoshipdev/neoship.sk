'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Field, Checkbox, Captcha } from './FormPrimitives';
import { Download } from 'lucide-react';

export function EbookModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      title={submitted ? 'Pripravujeme váš e-book' : 'Stiahnite si bezplatný e-book'}
      description={
        submitted
          ? 'PDF nájdete v e-maile do pár minút.'
          : 'Praktický návod, ako optimalizovať expedíciu vášho e-shopu.'
      }
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center py-6">
          <Download className="w-14 h-14 text-brand-orange mb-3" />
          <p className="text-muted">Ak e-mail neprišiel, skontrolujte priečinok spam.</p>
          <Button className="mt-6" onClick={handleClose}>
            Zatvoriť
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Meno a priezvisko" name="name" required autoComplete="name" />
          <Field label="E-mail" name="email" type="email" required autoComplete="email" />
          <Field label="Názov e-shopu" name="shop" required />
          <Captcha />
          <Checkbox name="gdpr" required>
            Súhlasím so spracovaním osobných údajov za účelom zaslania e-booku.
          </Checkbox>
          <Button type="submit" withArrow className="w-full justify-center">
            Stiahnuť e-book
          </Button>
        </form>
      )}
    </Modal>
  );
}
