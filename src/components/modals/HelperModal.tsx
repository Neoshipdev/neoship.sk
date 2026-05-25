'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Field, Checkbox, Captcha } from './FormPrimitives';
import { LifeBuoy } from 'lucide-react';

export function HelperModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
      title={submitted ? 'Pomocník je na ceste!' : 'Stiahnite si Pomocníka Neoship'}
      description={
        submitted
          ? 'PDF nájdete v e-maile do pár minút.'
          : 'Krok za krokom vás prevedieme nastavením expedície.'
      }
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center py-6">
          <LifeBuoy className="w-14 h-14 text-brand-orange mb-3" />
          <p className="text-muted">V prípade otázok nás neváhajte kontaktovať.</p>
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
            Súhlasím so spracovaním osobných údajov za účelom zaslania Pomocníka.
          </Checkbox>
          <Button type="submit" withArrow className="w-full justify-center">
            Stiahnuť Pomocníka
          </Button>
        </form>
      )}
    </Modal>
  );
}
