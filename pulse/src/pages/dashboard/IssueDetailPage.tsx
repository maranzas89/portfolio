import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import { StatusBadge } from '@/components/common/StatusBadge';
import { PriorityBadge } from '@/components/common/PriorityBadge';
import { GlassCard, GlassButton } from 'wens-liquid-glass-design-system';
import { ResolvePanel } from '@/components/dashboard/ResolvePanel';

const categoryIcon = (category: string) => {
  switch (category) {
    case 'navigation':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      );
    case 'ui.click':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
        </svg>
      );
    case 'ui.input':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    case 'http':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
  }
};

export function IssueDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [resolveOpen, setResolveOpen] = useState(false);

  const handleResolved = () => {
    useStore.getState().clearCart();
    useStore.getState().resetErrors();
    navigate('/dashboard');
  };
  const capturedErrors = useStore((s) => s.capturedErrors);
  const issue = capturedErrors.find((e) => e.id === id);

  if (!issue) {
    return (
      <div className="min-h-screen bg-dash-bg flex items-center justify-center">
        <div className="text-center">
          <p className="text-dash-text-secondary text-lg">Issue not found: {id}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="mt-4 text-dash-accent underline text-sm"
          >
            Back to Overview
          </button>
        </div>
      </div>
    );
  }

  const isERR001 = issue.id === 'ERR-001';

  return (
    <div className="min-h-screen bg-dash-bg text-dash-text p-6">
      {/* Back navigation */}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-1.5 text-sm text-dash-text-secondary hover:text-dash-text mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Issues
      </button>

      {/* Header */}
      <GlassCard className="bg-dash-surface p-6 mb-6">
        <div className="flex flex-wrap items-start gap-3 mb-4">
          <StatusBadge status={issue.status} />
          <PriorityBadge priority={issue.priority} />
          <span className="text-xs text-dash-text-secondary bg-dash-bg border border-[var(--lg-glass-border)] rounded px-2 py-0.5 font-mono">
            {issue.id}
          </span>
        </div>

        <h1 className="text-xl font-mono font-semibold text-dash-text leading-snug mb-3">
          {issue.title}
        </h1>

        <p className="text-sm text-dash-text-secondary mb-5">
          <span className="font-mono text-dash-accent">{issue.culprit}</span>
        </p>

        <div className="flex flex-wrap gap-6 text-sm">
          <div>
            <span className="text-dash-text-secondary">First seen</span>
            <span className="ml-2 text-dash-text">{issue.firstSeen}</span>
          </div>
          <div>
            <span className="text-dash-text-secondary">Last seen</span>
            <span className="ml-2 text-dash-text">{issue.lastSeen}</span>
          </div>
          <div>
            <span className="text-dash-text-secondary">Events</span>
            <span className="ml-2 text-dash-text font-semibold">{issue.count}</span>
          </div>
          <div>
            <span className="text-dash-text-secondary">Affected users</span>
            <span className="ml-2 text-dash-text font-semibold">{issue.usersAffected}</span>
          </div>
        </div>
      </GlassCard>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <GlassButton variant="success" onClick={() => setResolveOpen(true)}>
          Resolve
        </GlassButton>
        <GlassButton variant="ghost">
          Ignore
        </GlassButton>
        <GlassButton variant="ghost">
          Assign
        </GlassButton>
        <GlassButton variant="danger">
          Mark Regression
        </GlassButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Stack Trace */}
          <GlassCard className="bg-[#0d0d1a] p-6">
            <h2 className="text-sm font-semibold text-dash-text mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Stack Trace
            </h2>

            {/* Code snippet for ERR-001 */}
            {isERR001 && (
              <div className="mb-5 rounded-lg overflow-hidden border border-[var(--lg-glass-border)]">
                <div className="flex items-center justify-between bg-dash-surface px-4 py-2 border-b border-[var(--lg-glass-border)]">
                  <span className="font-mono text-xs text-dash-text-secondary">checkout.tsx</span>
                  <span className="text-xs text-red-400">error at line 84</span>
                </div>
                <div className="bg-[#0a0a16] p-4 font-mono text-xs leading-7 overflow-x-auto">
                  <div>
                    <span className="text-white/70 select-none mr-5 inline-block w-6 text-right">81</span>
                    <span className="text-purple-400">const </span>
                    <span className="text-dash-text">discountAmount </span>
                    <span className="text-dash-text-secondary">= coupon</span>
                    <span className="text-dash-text-secondary"> ? coupon.discount : </span>
                    <span className="text-emerald-400">null</span>
                    <span className="text-dash-text-secondary">;</span>
                  </div>
                  <div>
                    <span className="text-white/70 select-none mr-5 inline-block w-6 text-right">82</span>
                    <span className="text-white/60">{'// Apply discount to cart total'}</span>
                  </div>
                  <div>
                    <span className="text-white/70 select-none mr-5 inline-block w-6 text-right">83</span>
                    <span className="text-purple-400">const </span>
                    <span className="text-dash-text">finalTotal </span>
                    <span className="text-dash-text-secondary">= total - total * discountAmount;</span>
                  </div>
                  <div className="bg-red-900/30 border-l-2 border-red-500 -mx-4 px-4">
                    <span className="text-white/70 select-none mr-5 inline-block w-6 text-right">84</span>
                    <span className="text-purple-400">return </span>
                    <span className="text-dash-text">finalTotal</span>
                    <span className="text-dash-text-secondary">.</span>
                    <span className="text-yellow-300">toFixed</span>
                    <span className="text-dash-text-secondary">(</span>
                    <span className="text-orange-300">2</span>
                    <span className="text-dash-text-secondary">);</span>
                    <span className="ml-4 text-red-400 text-xs">{'// ← TypeError: null.toFixed'}</span>
                  </div>
                  <div>
                    <span className="text-white/70 select-none mr-5 inline-block w-6 text-right">85</span>
                    <span className="text-purple-400">{'}'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Stack frames */}
            <div className="space-y-1">
              {issue.stackTrace.map((frame, i) => (
                <div
                  key={i}
                  className={`font-mono text-xs px-3 py-1.5 rounded ${
                    i === 0
                      ? 'bg-red-900/20 text-red-300 border border-red-900/40'
                      : 'text-dash-text-secondary hover:bg-dash-surface transition-colors'
                  }`}
                >
                  {frame}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Breadcrumbs */}
          <GlassCard className="bg-dash-surface p-6">
            <h2 className="text-sm font-semibold text-dash-text mb-5 flex items-center gap-2">
              <svg className="w-4 h-4 text-dash-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Breadcrumbs
            </h2>
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-[var(--lg-glass-border)]" />
              <div className="space-y-4">
                {issue.breadcrumbs.map((crumb, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center z-10 border ${
                        crumb.level === 'error'
                          ? 'bg-red-900/30 border-[var(--lg-status-error-border)] text-[var(--lg-status-error)]'
                          : 'bg-dash-bg border-[var(--lg-glass-border)] text-dash-text-secondary'
                      }`}
                    >
                      {categoryIcon(crumb.category)}
                    </div>
                    <div className="flex-1 min-w-0 py-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-xs text-dash-text-secondary">{crumb.timestamp}</span>
                        <span className="text-xs text-dash-text-secondary capitalize">{crumb.category.replace('ui.', '')}</span>
                      </div>
                      <p className={`text-sm ${crumb.level === 'error' ? 'text-[var(--lg-status-error)] font-mono' : 'text-dash-text'}`}>
                        {crumb.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          {/* Tags */}
          <GlassCard padding="sm" className="bg-dash-surface p-5">
            <h2 className="text-sm font-semibold text-dash-text mb-4">Tags</h2>
            <div className="space-y-2">
              {Object.entries(issue.tags).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between bg-dash-bg border border-[var(--lg-glass-border)] rounded-lg px-3 py-2">
                  <span className="text-xs text-dash-text-secondary font-mono">{key}</span>
                  <span className="text-xs text-dash-text font-medium truncate max-w-[140px] text-right ml-2">{value}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* View Replay CTA */}
          <Link to="/dashboard/replays/session-001" className="block w-full">
            <GlassButton variant="primary" size="lg" className="flex items-center justify-center gap-2 w-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Session Replay
            </GlassButton>
          </Link>
        </div>
      </div>

      <ResolvePanel
        isOpen={resolveOpen}
        onClose={() => setResolveOpen(false)}
        onResolved={handleResolved}
      />
    </div>
  );
}
