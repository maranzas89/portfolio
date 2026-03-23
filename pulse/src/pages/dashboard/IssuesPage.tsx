import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import { StatusBadge } from '@/components/common/StatusBadge';
import { PriorityBadge } from '@/components/common/PriorityBadge';
import type { ErrorEvent } from '@/data/errors';
import { GlassCard } from 'wens-liquid-glass-design-system';

type StatusFilter = 'all' | 'unresolved' | 'resolved' | 'ignored';
type SortKey = 'lastSeen' | 'firstSeen' | 'events' | 'users';

const STATUS_TABS: { label: string; value: StatusFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Unresolved', value: 'unresolved' },
  { label: 'Resolved', value: 'resolved' },
  { label: 'Ignored', value: 'ignored' },
];

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: 'Last Seen', value: 'lastSeen' },
  { label: 'First Seen', value: 'firstSeen' },
  { label: 'Events', value: 'events' },
  { label: 'Users', value: 'users' },
];

// Convert "12 minutes ago", "2 hours ago", "3 days ago" etc. to a rough numeric value for sorting
function timeAgoToMinutes(t: string): number {
  const match = t.match(/^(\d+)\s+(minute|hour|day|week|month)/);
  if (!match) return 0; // "just now" → 0
  const n = parseInt(match[1], 10);
  const unit = match[2];
  if (unit === 'minute') return n;
  if (unit === 'hour') return n * 60;
  if (unit === 'day') return n * 1440;
  if (unit === 'week') return n * 10080;
  if (unit === 'month') return n * 43200;
  return 0;
}

function sortIssues(issues: ErrorEvent[], sortKey: SortKey): ErrorEvent[] {
  if (sortKey === 'lastSeen' || sortKey === 'firstSeen') {
    // Sort by most recent first (smallest "minutes ago" value = most recent)
    return [...issues].sort((a, b) => {
      const field = sortKey === 'lastSeen' ? 'lastSeen' : 'firstSeen';
      return timeAgoToMinutes(a[field]) - timeAgoToMinutes(b[field]);
    });
  }
  return [...issues].sort((a, b) => {
    if (sortKey === 'events') return b.count - a.count;
    if (sortKey === 'users') return b.usersAffected - a.usersAffected;
    return 0;
  });
}

export function IssuesPage() {
  const navigate = useNavigate();
  const capturedErrors = useStore((s) => s.capturedErrors);

  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    const base =
      statusFilter === 'all'
        ? capturedErrors
        : capturedErrors.filter((e) => e.status === statusFilter);
    return sortKey ? sortIssues(base, sortKey) : base;
  }, [capturedErrors, statusFilter, sortKey]);

  const activeSortLabel =
    (sortKey && SORT_OPTIONS.find((o) => o.value === sortKey)?.label) ?? 'Default';

  return (
    <div className="text-dash-text">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dash-text">Issues</h1>
          <p className="text-sm text-dash-text-secondary mt-0.5">
            {capturedErrors.length} total · {capturedErrors.filter(e => e.status === 'unresolved').length} unresolved
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Status tabs */}
        <div className="flex items-center gap-1 bg-dash-surface border border-[var(--glass-border)] rounded-lg p-1">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setStatusFilter(tab.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                statusFilter === tab.value
                  ? tab.value === 'unresolved'
                    ? 'bg-red-500/20 text-red-400'
                    : tab.value === 'resolved'
                      ? 'bg-green-500/20 text-green-400'
                      : tab.value === 'ignored'
                        ? 'bg-white/10 text-white/60'
                        : 'bg-white/15 text-white'
                  : 'text-dash-text-secondary hover:text-dash-text hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="relative ml-auto">
          <div
            className="flex items-center gap-2 bg-dash-surface border border-[var(--glass-border)] rounded-lg px-3 py-2 cursor-pointer hover:border-dash-accent transition-colors text-sm text-dash-text select-none"
            onClick={() => setSortOpen((o) => !o)}
          >
            <svg className="w-4 h-4 text-dash-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <span>{activeSortLabel}</span>
            <svg className="w-4 h-4 text-dash-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {sortOpen && (
            <div className="absolute right-0 top-full mt-1 z-20 bg-dash-surface border border-[var(--glass-border)] rounded-lg shadow-xl overflow-hidden min-w-[140px]">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-dash-bg ${
                    sortKey === opt.value
                      ? 'text-dash-text font-medium bg-dash-bg'
                      : 'text-dash-text-secondary'
                  }`}
                  onClick={() => {
                    setSortKey(opt.value);
                    setSortOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Issues table — same format as Dashboard Recent Issues */}
      <GlassCard padding="none" className="bg-dash-surface overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--glass-border)]">
          <h2 className="text-base font-semibold text-dash-text">
            {statusFilter === 'all' ? 'All Issues' : `${STATUS_TABS.find(t => t.value === statusFilter)?.label} Issues`}
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-dash-text-secondary">
            No issues match the current filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--glass-border)]">
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Error</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Events</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Users</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Last Seen</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider">Priority</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((err) => {
                  const isUnresolved = err.status === 'unresolved';
                  return (
                    <tr
                      key={err.id}
                      onClick={() => navigate(`/dashboard/issues/${err.id}`)}
                      className={`border-b border-[var(--glass-border)] cursor-pointer hover:bg-dash-surface-hover transition-colors ${
                        isUnresolved ? 'bg-red-500/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          {isUnresolved && (
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></span>
                          )}
                          <div>
                            <p className={`font-mono text-xs leading-relaxed truncate max-w-xs ${isUnresolved ? 'text-dash-text font-medium' : 'text-dash-text-secondary'}`}>
                              {err.title}
                            </p>
                            <p className="text-xs text-dash-text-secondary mt-0.5">{err.culprit}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-xs text-dash-text-secondary">
                          {err.title.split(':')[0]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-dash-text font-medium">{err.count}</td>
                      <td className="px-6 py-4 text-dash-text">{err.usersAffected}</td>
                      <td className="px-6 py-4 text-dash-text-secondary">{err.lastSeen}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={err.status} />
                      </td>
                      <td className="px-6 py-4">
                        <PriorityBadge priority={err.priority} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
