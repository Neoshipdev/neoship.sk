'use client';

import { Button } from './Button';
import { useModals } from '@/components/modals/ModalsProvider';

type Variant = 'primary' | 'inverse' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

/**
 * "Chcem vyskúšať" CTA – opens the contact modal, identical to the header button.
 * Use inside server components that need the modal trigger.
 */
export function TryButton({
  children = 'Chcem vyskúšať',
  variant = 'primary',
  size = 'md',
  withArrow = true,
  className,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}) {
  const { open } = useModals();
  return (
    <Button
      variant={variant}
      size={size}
      withArrow={withArrow}
      className={className}
      onClick={() => open('contact')}
    >
      {children}
    </Button>
  );
}
