import React from 'react';
import { GlassCard } from 'wens-liquid-glass-design-system';

export type MetricCardProps = {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon?: React.ReactNode;
};

export function MetricCard({ label, value, change, changeType, icon }: MetricCardProps) {
  return (
    <GlassCard padding="md" className="bg-dash-surface">
      <div className="flex items-center justify-between mb-3">
        <span className="text-dash-text-secondary text-sm">{label}</span>
        {icon && (
          <span className="text-dash-text-secondary">{icon}</span>
        )}
      </div>
      <div className="text-2xl font-semibold text-dash-text">{value}</div>
      {change && (
        <div
          className={`flex items-center gap-1 mt-2 text-sm font-medium ${
            changeType === 'positive'
              ? 'text-[var(--lg-status-success)]'
              : changeType === 'negative'
                ? 'text-[var(--lg-status-error)]'
                : 'text-dash-text-secondary'
          }`}
        >
          {changeType === 'positive' && (
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          )}
          {changeType === 'negative' && (
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
          <span>{change}</span>
        </div>
      )}
    </GlassCard>
  );
}
