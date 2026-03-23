import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { GlassCard, GlassBadge } from 'wens-liquid-glass-design-system';
import { MetricCard } from '@/components/common/MetricCard';
import { StatusBadge } from '@/components/common/StatusBadge';
import { PriorityBadge } from '@/components/common/PriorityBadge';
import { useStore } from '@/store/useStore';

const HOURLY_FLAT = [
  { hour: '00:00', errors: 1 },
  { hour: '01:00', errors: 1 },
  { hour: '02:00', errors: 2 },
  { hour: '03:00', errors: 1 },
  { hour: '04:00', errors: 2 },
  { hour: '05:00', errors: 1 },
  { hour: '06:00', errors: 2 },
  { hour: '07:00', errors: 2 },
  { hour: '08:00', errors: 1 },
  { hour: '09:00', errors: 2 },
  { hour: '10:00', errors: 3 },
  { hour: '11:00', errors: 2 },
  { hour: '12:00', errors: 2 },
  { hour: '13:00', errors: 1 },
  { hour: '14:00', errors: 2 },
  { hour: '15:00', errors: 3 },
  { hour: '16:00', errors: 2 },
  { hour: '17:00', errors: 1 },
  { hour: '18:00', errors: 2 },
  { hour: '19:00', errors: 1 },
  { hour: '20:00', errors: 2 },
  { hour: '21:00', errors: 1 },
  { hour: '22:00', errors: 2 },
  { hour: '23:00', errors: 1 },
];

const HOURLY_SPIKE = [
  { hour: '00:00', errors: 2 },
  { hour: '01:00', errors: 1 },
  { hour: '02:00', errors: 2 },
  { hour: '03:00', errors: 1 },
  { hour: '04:00', errors: 3 },
  { hour: '05:00', errors: 2 },
  { hour: '06:00', errors: 3 },
  { hour: '07:00', errors: 4 },
  { hour: '08:00', errors: 3 },
  { hour: '09:00', errors: 5 },
  { hour: '10:00', errors: 4 },
  { hour: '11:00', errors: 5 },
  { hour: '12:00', errors: 4 },
  { hour: '13:00', errors: 6 },
  { hour: '14:00', errors: 14 },
  { hour: '15:00', errors: 19 },
  { hour: '16:00', errors: 17 },
  { hour: '17:00', errors: 7 },
  { hour: '18:00', errors: 5 },
  { hour: '19:00', errors: 4 },
  { hour: '20:00', errors: 3 },
  { hour: '21:00', errors: 4 },
  { hour: '22:00', errors: 3 },
  { hour: '23:00', errors: 2 },
];

export function OverviewPage() {
  const navigate = useNavigate();
  const capturedErrors = useStore((s) => s.capturedErrors);

  const unresolvedErrors = useMemo(
    () => capturedErrors.filter((e) => e.status === 'unresolved'),
    [capturedErrors],
  );

  const hasUnresolved = unresolvedErrors.length > 0;

  const unhandledCount = unresolvedErrors.length;

  const affectedUsers = useMemo(
    () => unresolvedErrors.reduce((sum, e) => sum + e.usersAffected, 0),
    [unresolvedErrors],
  );

  const crashFreeValue = hasUnresolved ? '94.2%' : '100%';
  const crashFreeChange = hasUnresolved ? '↓ 0.8% from yesterday' : 'No crashes today';
  const crashFreeChangeType = hasUnresolved ? ('negative' as const) : undefined;

  const hourlyData = hasUnresolved ? HOURLY_SPIKE : HOURLY_FLAT;
  const chartLabel = hasUnresolved ? 'Spike at 14:00–16:00' : 'Normal — no spikes';

  return (
    <div className="min-h-screen text-dash-text">
      {/* Top bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex items-center gap-2 bg-dash-surface border border-[var(--lg-glass-border)] rounded-lg px-4 py-2 cursor-pointer hover:border-dash-accent transition-colors">
          <span className="w-2 h-2 rounded-full bg-dash-accent"></span>
          <span className="text-sm font-medium text-dash-text">techstyle-storefront</span>
          <svg className="w-4 h-4 text-dash-text-secondary ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <GlassBadge variant="success" size="sm">Production</GlassBadge>
        <div className="flex items-center gap-2 bg-dash-surface border border-dash-border rounded-lg px-4 py-2 cursor-pointer hover:border-dash-accent transition-colors ml-auto">
          <svg className="w-4 h-4 text-dash-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-dash-text">Last 24h</span>
          <svg className="w-4 h-4 text-dash-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Crash Free Sessions"
          value={crashFreeValue}
          change={crashFreeChange}
          changeType={crashFreeChangeType}
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />
        <MetricCard
          label="Unhandled Errors"
          value={String(unhandledCount)}
          change={hasUnresolved ? '+1 since last reset' : 'No active errors'}
          changeType={hasUnresolved ? 'negative' : undefined}
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        />
        <MetricCard
          label="Affected Users"
          value={String(affectedUsers)}
          change={hasUnresolved ? 'Active in last hour' : 'No users affected'}
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <MetricCard
          label="P75 Duration"
          value="1.2s"
          change="↑ 0.3s above baseline"
          changeType="negative"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
      </div>

      {/* Error trend chart */}
      <GlassCard className="bg-dash-surface mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-dash-text">Error Trend</h2>
            <p className="text-xs text-dash-text-secondary mt-0.5">Errors per hour over the last 24 hours</p>
          </div>
          <span className="text-xs text-dash-text-secondary bg-dash-bg border border-[var(--lg-glass-border)] rounded px-2 py-1">
            {chartLabel}
          </span>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hourlyData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="errorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--lg-brand-primary)" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="var(--lg-brand-primary)" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4a" vertical={false} />
              <XAxis
                dataKey="hour"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval={3}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2a2a4a',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '12px',
                }}
                itemStyle={{ color: 'var(--lg-brand-primary)' }}
                cursor={{ stroke: 'var(--lg-brand-primary)', strokeWidth: 1, strokeDasharray: '4 2' }}
              />
              <Area
                type="monotone"
                dataKey="errors"
                stroke="var(--lg-brand-primary)"
                strokeWidth={2}
                fill="url(#errorGradient)"
                dot={false}
                activeDot={{ r: 4, fill: 'var(--lg-brand-primary)', stroke: '#1a1a2e', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Recent Issues table */}
      <GlassCard padding="none" className="bg-dash-surface overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--lg-glass-border)]">
          <h2 className="text-base font-semibold text-dash-text">Recent Issues</h2>
          <span className="text-xs text-dash-text-secondary">{capturedErrors.length} issues</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--lg-glass-border)]">
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
              {capturedErrors.map((err) => {
                const isUnresolved = err.status === 'unresolved';
                return (
                  <tr
                    key={err.id}
                    onClick={() => navigate(`/dashboard/issues/${err.id}`)}
                    className={`border-b border-[var(--lg-glass-border)] cursor-pointer hover:bg-dash-surface-hover transition-colors ${
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
      </GlassCard>
    </div>
  );
}
