import { cn } from '@/lib/cn';

export function Container({
  className,
  children,
  as: Component = 'div',
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  return <Component className={cn('container-x', className)}>{children}</Component>;
}
