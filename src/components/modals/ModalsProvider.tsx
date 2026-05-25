'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ContactModal } from './ContactModal';
import { EbookModal } from './EbookModal';
import { HelperModal } from './HelperModal';

type ModalKind = 'contact' | 'ebook' | 'helper' | null;

type ModalsContextValue = {
  open: (kind: Exclude<ModalKind, null>) => void;
  close: () => void;
};

const ModalsContext = createContext<ModalsContextValue | null>(null);

export function useModals() {
  const ctx = useContext(ModalsContext);
  if (!ctx) throw new Error('useModals must be used inside <ModalsProvider>');
  return ctx;
}

export function ModalsProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ModalKind>(null);

  const close = useCallback(() => setActive(null), []);
  const open = useCallback((kind: Exclude<ModalKind, null>) => setActive(kind), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalsContext.Provider value={value}>
      {children}
      <ContactModal open={active === 'contact'} onClose={close} />
      <EbookModal open={active === 'ebook'} onClose={close} />
      <HelperModal open={active === 'helper'} onClose={close} />
    </ModalsContext.Provider>
  );
}
