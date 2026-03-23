import React from 'react';

type BadgeVariant = 'danger' | 'success' | 'warning' | 'info' | 'neutral';

export type BadgeProps = {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  danger: 'bg-[var(--lg-status-error-light)] text-[var(--lg-status-error)]',
  success: 'bg-[var(--lg-status-success-light)] text-[var(--lg-status-success)]',
  warning: 'bg-[var(--lg-status-warning-light)] text-[var(--lg-status-warning)]',
  info: 'bg-[var(--lg-status-info-light)] text-[var(--lg-status-info)]',
  neutral: 'bg-white/10 text-white/60',
};

export function Badge({ children, variant, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--lg-radius-full)] px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
