import { cn } from '@/lib/cn';

export function Card({
  className,
  children,
  hoverable = false,
}: {
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white border border-line shadow-soft p-6 md:p-8',
        hoverable && 'transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  );
}
