import { cn } from '@/lib/cn';

export function Pill({
  children,
  className,
  variant = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'orange' | 'purple' | 'white';
}) {
  const variants = {
    default: 'bg-surface text-ink border border-line',
    orange: 'bg-brand-orange-50 text-brand-orange-700 border border-brand-orange-100',
    purple: 'bg-brand-purple-50 text-brand-purple-700 border border-brand-purple-100',
    white: 'bg-white text-ink shadow-soft',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
