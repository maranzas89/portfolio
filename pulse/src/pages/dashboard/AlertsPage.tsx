import { useState, useMemo } from 'react';
import { alertRules, type AlertRule } from '@/data/alerts';
import { GlassCard, GlassBadge } from 'wens-liquid-glass-design-system';
import { useStore } from '@/store/useStore';

type ActionEntry = { time: string; msg: string };

const actionHistory: Record<string, ActionEntry[]> = {
  'ALERT-001': [
    { time: '2 hours ago', msg: 'Alert triggered — error_rate exceeded 5% on /checkout' },
    { time: '1h 58m ago', msg: 'Notification sent to Slack #engineering' },
    { time: '1h 45m ago', msg: 'Acknowledged by @dev-oncall' },
  ],
  'ALERT-002': [
    { time: '1 day ago', msg: 'Alert triggered — P75 latency reached 480ms on /checkout' },
    { time: '23h 58m ago', msg: 'Notification sent to Slack #engineering' },
    { time: '22 hours ago', msg: 'Alert resolved — latency returned below threshold' },
  ],
  'ALERT-003': [
    { time: '5 days ago', msg: 'Alert rule created' },
    { time: '2 days ago', msg: 'Notification sent to Slack #alerts — ERR-001 created' },
    { time: '2 days ago', msg: 'Acknowledged by @dev-oncall' },
  ],
};

const statusConfig: Record<
  AlertRule['status'],
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  firing: {
    label: 'Firing',
    color: 'text-[var(--lg-status-error)]',
    bg: 'bg-[var(--lg-status-error-light)]',
    border: 'border-[var(--lg-status-error-border)]',
    dot: 'bg-[var(--lg-status-error)]',
  },
  resolved: {
    label: 'Resolved',
    color: 'text-[var(--lg-status-success)]',
    bg: 'bg-[var(--lg-status-success-light)]',
    border: 'border-[var(--lg-status-success-border)]',
    dot: 'bg-[var(--lg-status-success)]',
  },
  ok: {
    label: 'OK',
    color: 'text-dash-text-secondary',
    bg: 'bg-dash-bg',
    border: 'border-[var(--lg-glass-border)]',
    dot: 'bg-dash-text-secondary',
  },
};

function AlertCard({ rule }: { rule: AlertRule }) {
  const [expanded, setExpanded] = useState(rule.status === 'firing');
  const sc = statusConfig[rule.status];
  const isFiring = rule.status === 'firing';
  const isResolved = rule.status === 'resolved';
  const history = actionHistory[rule.id] ?? [];

  return (
    <GlassCard
      className={`bg-dash-surface border overflow-hidden transition-all ${
        isFiring
          ? 'border-[var(--lg-status-error-border)] shadow-[0_0_20px_rgba(239,68,68,0.12)]'
          : ''
      }`}
    >
      {/* Card header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Status dot — pulsing for firing */}
            <span className="relative flex-shrink-0 flex items-center justify-center w-5 h-5">
              {isFiring && (
                <span className="absolute inline-flex w-full h-full rounded-full bg-red-500 opacity-50 animate-ping" />
              )}
              <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${sc.dot}`} />
            </span>
            <h3 className="font-semibold text-sm text-dash-text truncate">{rule.name}</h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <GlassBadge
              variant={isFiring ? 'danger' : isResolved ? 'success' : 'default'}
              className={`${sc.color} ${sc.bg} ${sc.border}`}
            >
              {sc.label}
            </GlassBadge>
            <button
              onClick={() => setExpanded((e) => !e)}
              className="text-dash-text-secondary hover:text-dash-text transition-colors p-0.5"
            >
              <svg
                className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs ml-8">
          <div className="flex items-center gap-1.5 text-dash-text-secondary">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="font-mono">{rule.condition}</span>
          </div>
          <div className="flex items-center gap-1.5 text-dash-text-secondary">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>{rule.channel}</span>
          </div>
          {rule.triggeredAt && (
            <div className="flex items-center gap-1.5 text-dash-text-secondary">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Triggered {rule.triggeredAt}</span>
            </div>
          )}
          {rule.resolvedAt && (
            <div className="flex items-center gap-1.5 text-emerald-400">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Resolved {rule.resolvedAt}</span>
            </div>
          )}
        </div>
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-dash-border">
          {/* Condition detail */}
          <div className="px-5 py-4 border-b border-[var(--lg-glass-border)]">
            <p className="text-xs font-medium text-dash-text-secondary uppercase tracking-wider mb-2">
              Condition
            </p>
            <p className="text-sm text-dash-text">{rule.threshold}</p>
            {rule.windowMinutes > 0 && (
              <p className="text-xs text-dash-text-secondary mt-1">
                Evaluation window: {rule.windowMinutes} minutes · Environment:{' '}
                <span className="capitalize">{rule.environment}</span>
              </p>
            )}
          </div>

          {/* Action history */}
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-dash-text-secondary uppercase tracking-wider mb-3">
              Action History
            </p>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--lg-glass-border)]" />
              <div className="space-y-3">
                {history.map((entry, i) => (
                  <div key={i} className="flex gap-3 relative">
                    <span
                      className={`flex-shrink-0 w-3.5 h-3.5 rounded-full border-2 z-10 mt-1 ${
                        i === 0 && isFiring
                          ? 'bg-red-500 border-red-500'
                          : i === history.length - 1 && isResolved
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'bg-dash-bg border-[var(--lg-glass-border)]'
                      }`}
                    />
                    <div>
                      <p className="text-xs text-dash-text">{entry.msg}</p>
                      <p className="text-xs text-dash-text-secondary mt-0.5">{entry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

export function AlertsPage() {
  const capturedErrors = useStore((s) => s.capturedErrors);

  const hasUnresolved = useMemo(
    () => capturedErrors.some((e) => e.status === 'unresolved'),
    [capturedErrors],
  );

  // Derive reactive rules: ALERT-001 fires only when there are unresolved errors
  const reactiveRules = useMemo<AlertRule[]>(
    () =>
      alertRules.map((rule) => {
        if (rule.id === 'ALERT-001') {
          return hasUnresolved
            ? { ...rule, status: 'firing' as const, triggeredAt: 'just now', resolvedAt: null }
            : { ...rule, status: 'ok' as const, triggeredAt: null, resolvedAt: null };
        }
        return rule;
      }),
    [hasUnresolved],
  );

  const firingCount = reactiveRules.filter((r) => r.status === 'firing').length;

  const sortedRules = [...reactiveRules].sort((a, b) => {
    const order: Record<AlertRule['status'], number> = { firing: 0, resolved: 1, ok: 2 };
    return order[a.status] - order[b.status];
  });

  return (
    <div className="min-h-screen bg-dash-bg text-dash-text p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-lg font-semibold text-dash-text">Alert Rules</h1>
          <p className="text-sm text-dash-text-secondary mt-0.5">
            {alertRules.length} rules configured · Production
          </p>
        </div>
        {firingCount > 0 && (
          <div className="flex items-center gap-2 bg-red-500/15 border border-[var(--lg-status-error-border)] rounded-xl px-4 py-2.5">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-red-500 opacity-50 animate-ping" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm text-red-400 font-medium">
              {firingCount} alert{firingCount > 1 ? 's' : ''} firing
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {sortedRules.map((rule) => (
          <AlertCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  );
}
