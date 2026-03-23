import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { transactions } from '@/data/performance';
import { GlassCard } from 'wens-liquid-glass-design-system';
import { useStore } from '@/store/useStore';

export function PerformancePage() {
  const capturedErrors = useStore((s) => s.capturedErrors);
  const hasUnresolvedErrors = capturedErrors.some((e) => e.status === 'unresolved');

  const displayTransactions = transactions.map((t) => {
    if (t.route === '/checkout' && !hasUnresolvedErrors) {
      return { ...t, errorRate: 0.3, p50: 88, p75: 135, p95: 280 };
    }
    return t;
  });

  const chartData = displayTransactions.map((t) => ({
    route: t.route.length > 14 ? t.route.slice(0, 13) + '…' : t.route,
    P50: t.p50,
    P75: t.p75,
    P95: t.p95,
  }));

  const avgP50 = Math.round(displayTransactions.reduce((s, t) => s + t.p50, 0) / displayTransactions.length);
  const avgP75 = Math.round(displayTransactions.reduce((s, t) => s + t.p75, 0) / displayTransactions.length);
  const totalThroughput = displayTransactions.reduce((s, t) => s + t.throughput, 0);
  const maxErrorRate = Math.max(...displayTransactions.map((t) => t.errorRate));

  return (
    <div className="min-h-screen bg-dash-bg text-dash-text p-6">
      <div className="mb-8">
        <h1 className="text-lg font-semibold text-dash-text">Performance</h1>
        <p className="text-sm text-dash-text-secondary mt-0.5">Transaction latency and throughput by route</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Avg P50', value: `${avgP50}ms`, highlight: false },
          { label: 'Avg P75', value: `${avgP75}ms`, highlight: false },
          { label: 'Total Throughput', value: `${totalThroughput} rpm`, highlight: false },
          { label: 'Highest Error Rate', value: `${maxErrorRate}%`, highlight: hasUnresolvedErrors },
        ].map(({ label, value, highlight }) => (
          <GlassCard
            key={label}
            padding="sm"
            className={`bg-dash-surface border p-4 ${highlight ? 'border-[var(--lg-status-error-border)]' : ''}`}
          >
            <p className="text-xs text-dash-text-secondary mb-1">{label}</p>
            <p className={`text-xl font-semibold ${highlight ? 'text-red-400' : 'text-dash-text'}`}>{value}</p>
          </GlassCard>
        ))}
      </div>

      {/* Bar chart */}
      <GlassCard className="bg-dash-surface p-6 mb-8">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-dash-text">Latency by Route</h2>
          <p className="text-xs text-dash-text-secondary mt-0.5">P50 / P75 / P95 response times in milliseconds</p>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4a" vertical={false} />
              <XAxis
                dataKey="route"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                unit="ms"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2a2a4a',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                  fontSize: '12px',
                }}
                cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                formatter={((value: number, name: string) => [`${value}ms`, name]) as any}
              />
              <Legend
                wrapperStyle={{ fontSize: '12px', color: '#94a3b8', paddingTop: '12px' }}
              />
              <Bar dataKey="P50" fill="#3b82f6" radius={[3, 3, 0, 0]} maxBarSize={18} />
              <Bar dataKey="P75" fill="#818cf8" radius={[3, 3, 0, 0]} maxBarSize={18} />
              <Bar dataKey="P95" fill="#a78bfa" radius={[3, 3, 0, 0]} maxBarSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Transaction table */}
      <GlassCard padding="none" className="bg-dash-surface overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--lg-glass-border)]">
          <h2 className="text-base font-semibold text-dash-text">Transactions</h2>
          <span className="text-xs text-dash-text-secondary">{displayTransactions.length} routes</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--lg-glass-border)]">
                {['Route', 'Description', 'P50', 'P75', 'P95', 'Throughput', 'Error Rate'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-6 py-3 text-xs font-medium text-dash-text-secondary uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayTransactions.map((t) => {
                const isCheckoutError = t.route === '/checkout' && hasUnresolvedErrors;
                const highError = t.errorRate > 5;
                const medError = t.errorRate > 1;
                return (
                  <tr
                    key={t.route}
                    className={`border-b border-[var(--lg-glass-border)] last:border-0 transition-colors ${
                      isCheckoutError
                        ? 'bg-red-500/5 hover:bg-red-500/8'
                        : 'hover:bg-dash-surface-hover'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={`font-mono text-xs ${
                          isCheckoutError ? 'text-red-300 font-semibold' : 'text-dash-text'
                        }`}
                      >
                        {t.route}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-dash-text-secondary text-xs max-w-xs">
                      {t.description}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-mono text-sm ${isCheckoutError ? 'text-yellow-400' : 'text-dash-text'}`}>
                        {t.p50}ms
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-mono text-sm ${isCheckoutError ? 'text-orange-400' : 'text-dash-text'}`}>
                        {t.p75}ms
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-mono text-sm ${isCheckoutError ? 'text-red-400' : 'text-dash-text'}`}>
                        {t.p95}ms
                      </span>
                    </td>
                    <td className="px-6 py-4 text-dash-text font-mono text-sm">
                      {t.throughput} rpm
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 font-mono text-sm font-semibold ${
                          highError
                            ? 'text-red-400'
                            : medError
                            ? 'text-yellow-400'
                            : 'text-emerald-400'
                        }`}
                      >
                        {highError && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {t.errorRate}%
                      </span>
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
