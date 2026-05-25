'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'inverse' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-600 active:bg-brand-orange-700 shadow-soft',
  inverse:
    'bg-white text-brand-orange hover:bg-brand-orange-50 active:bg-brand-orange-100 shadow-soft',
  outline:
    'bg-transparent text-ink border border-line hover:border-brand-orange hover:text-brand-orange',
  ghost: 'bg-transparent text-ink hover:bg-brand-orange-50 hover:text-brand-orange-700',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    withArrow = false,
    className,
  } = props;

  const base = cn(
    'inline-flex items-center gap-2 rounded-full font-bold tracking-tight transition-all duration-200',
    'whitespace-nowrap select-none',
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (props.href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="inline-flex">
        <Link href={props.href} className={cn(base, 'group')}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(base, 'group disabled:opacity-50 disabled:cursor-not-allowed')}
    >
      {inner}
    </motion.button>
  );
}
