import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { replaySteps } from '@/data/replay';
import { GlassCard, GlassButton } from 'wens-liquid-glass-design-system';
import { useStore } from '@/store/useStore';
import { ResolvePanel } from '@/components/dashboard/ResolvePanel';

const stepIcon = (type: string) => {
  switch (type) {
    case 'navigation':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      );
    case 'click':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
        </svg>
      );
    case 'input':
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

const INFO_CONSOLE_LOGS = [
  { time: '10:31:44', level: 'info', msg: '[Router] Navigated to /products' },
  { time: '10:32:04', level: 'info', msg: '[Router] Navigated to /cart' },
  { time: '10:32:19', level: 'info', msg: '[API] POST /api/coupon/validate → 200 OK {"valid":true,"discount":0.25}' },
  { time: '10:32:20', level: 'info', msg: '[Router] Navigated to /checkout' },
];

const ERROR_CONSOLE_LOG = { time: '10:32:35', level: 'error', msg: "Uncaught TypeError: Cannot read properties of null (reading 'toFixed')\n    at applyDiscount (checkout.tsx:84:32)\n    at handlePlaceOrder (checkout.tsx:121:5)" };

const errorStepIndex = replaySteps.findIndex((s) => s.type === 'error');

export function ReplayPage() {
  const capturedErrors = useStore((s) => s.capturedErrors);
  const hasUnresolvedErrors = capturedErrors.some((e) => e.status === 'unresolved');
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [consoleOpen, setConsoleOpen] = useState(true);
  const [resolveOpen, setResolveOpen] = useState(false);

  const handleResolved = () => {
    useStore.getState().clearCart();
    useStore.getState().resetErrors();
    navigate('/dashboard');
  };
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= replaySteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1200 / speed);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed]);

  useEffect(() => {
    if (timelineRef.current) {
      const active = timelineRef.current.querySelector('[data-active="true"]');
      if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [currentStep]);

  const isAtError = currentStep === errorStepIndex;
  const step = replaySteps[currentStep];

  const urlForStep = () => {
    const desc = step.description.toLowerCase();
    if (desc.includes('/checkout')) return '/checkout';
    if (desc.includes('/cart')) return '/cart';
    if (desc.includes('/products')) return '/products';
    return '/';
  };

  if (!hasUnresolvedErrors) {
    return (
      <div className="min-h-screen bg-dash-bg text-dash-text p-6">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-dash-text">Session Replay</h1>
          <p className="text-sm text-dash-text-secondary mt-0.5">No active error sessions</p>
        </div>
        <GlassCard className="bg-dash-surface flex flex-col items-center justify-center py-24 text-center">
          <svg className="w-12 h-12 text-dash-text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-dash-text font-medium mb-1">No replay data available</p>
          <p className="text-sm text-dash-text-secondary max-w-xs">
            Session replays are captured when errors occur. Trigger an error to see a replay here.
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dash-bg text-dash-text p-6">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-dash-text">Session Replay</h1>
        <p className="text-sm text-dash-text-secondary mt-0.5">session-001 — Checkout bug reproduction</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main player column */}
        <div className="xl:col-span-3 space-y-4">
          {/* Browser frame */}
          <GlassCard
            padding="none"
            className={`bg-dash-surface overflow-hidden border-2 transition-all duration-300 ${
              isAtError
                ? 'border-[var(--lg-status-error-border)] shadow-[0_0_24px_rgba(239,68,68,0.25)]'
                : 'border-[var(--lg-glass-border)]'
            }`}
          >
            {/* Browser chrome */}
            <div className="bg-[#12122a] px-4 py-3 border-b border-[var(--lg-glass-border)] flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 bg-dash-bg border border-[var(--lg-glass-border)] rounded-md px-3 py-1 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-dash-text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
                <span className="font-mono text-xs text-dash-text-secondary truncate">
                  https://techstyle-storefront.vercel.app{urlForStep()}
                </span>
              </div>
              {isAtError && (
                <span className="flex-shrink-0 text-xs bg-red-500/20 text-red-400 border border-[var(--lg-status-error-border)] rounded px-2 py-0.5 font-medium">
                  Error
                </span>
              )}
            </div>

            {/* Content area */}
            <div className={`p-8 min-h-64 ${isAtError ? 'bg-red-950/10' : ''}`}>
              {isAtError && (
                <div className="mb-4 bg-red-500/15 border border-[var(--lg-status-error-border)] rounded-lg px-4 py-3 text-red-300 text-sm font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
              <p className="text-dash-text-secondary text-sm leading-relaxed">{step.screenshotDescription}</p>
            </div>
          </GlassCard>

          {/* Playback controls */}
          <GlassCard className="bg-dash-surface px-5 py-4">
            <div className="flex items-center gap-3 mb-3">
              <GlassButton
                variant="primary"
                size="sm"
                onClick={() => setIsPlaying((p) => !p)}
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </GlassButton>

              {/* Progress bar segments */}
              <div className="flex-1 flex items-center gap-0.5 h-6">
                {replaySteps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentStep(i); setIsPlaying(false); }}
                    title={s.description}
                    className={`relative h-3 rounded-sm flex-1 transition-all ${
                      i === errorStepIndex
                        ? 'bg-red-500/40 hover:bg-red-500/70'
                        : i <= currentStep
                        ? 'bg-dash-accent hover:bg-indigo-400'
                        : 'bg-dash-border hover:bg-dash-text-secondary/40'
                    }`}
                  >
                    {i === currentStep && (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-white rounded-full shadow-sm pointer-events-none" />
                    )}
                    {i === errorStepIndex && i !== currentStep && (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-5 bg-[var(--lg-status-error)] rounded-full pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>

              <span className="text-xs text-dash-text-secondary font-mono flex-shrink-0 w-10 text-right">
                {currentStep + 1}/{replaySteps.length}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-dash-text-secondary">Speed</span>
                {[1, 2, 4].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`text-xs px-2.5 py-1 rounded font-medium transition-colors ${
                      speed === s
                        ? 'bg-[var(--lg-brand-primary)] text-white'
                        : 'text-dash-text-secondary hover:bg-dash-surface-hover'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <GlassButton
                  variant="danger"
                  size="sm"
                  onClick={() => { setCurrentStep(errorStepIndex); setIsPlaying(false); }}
                  className="flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Skip to Error
                </GlassButton>
                <GlassButton
                  variant="success"
                  size="sm"
                  onClick={() => setResolveOpen(true)}
                  className="flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Resolve Issue
                </GlassButton>
              </div>
            </div>
          </GlassCard>

          {/* Event timeline */}
          <div className="bg-dash-surface border border-[var(--lg-glass-border)] rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-[var(--lg-glass-border)]">
              <h3 className="text-sm font-semibold text-dash-text">Event Timeline</h3>
            </div>
            <div ref={timelineRef} className="max-h-56 overflow-y-auto">
              {replaySteps.map((s, i) => (
                <button
                  key={i}
                  data-active={i === currentStep}
                  onClick={() => { setCurrentStep(i); setIsPlaying(false); }}
                  className={`w-full flex items-start gap-3 px-5 py-3 text-left border-b border-[var(--lg-glass-border)] last:border-0 transition-colors ${
                    i === currentStep
                      ? 'bg-dash-accent/10 border-l-2 border-l-[var(--lg-brand-primary)]'
                      : s.type === 'error'
                      ? 'bg-red-500/5 hover:bg-red-500/10'
                      : 'hover:bg-dash-surface-hover'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                      s.type === 'error'
                        ? 'bg-red-500/20 text-red-400'
                        : i === currentStep
                        ? 'bg-dash-accent/20 text-dash-accent'
                        : 'bg-dash-bg text-dash-text-secondary'
                    }`}
                  >
                    {stepIcon(s.type)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-xs text-dash-text-secondary">{s.timestamp}</span>
                    <p className={`text-xs mt-0.5 ${s.type === 'error' ? 'text-red-300 font-medium' : 'text-dash-text'}`}>
                      {s.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Console panel */}
          <GlassCard className="bg-dash-surface overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-3 border-b border-[var(--lg-glass-border)] hover:bg-dash-surface-hover transition-colors"
              onClick={() => setConsoleOpen((o) => !o)}
            >
              <span className="text-sm font-semibold text-dash-text flex items-center gap-2">
                <svg className="w-4 h-4 text-dash-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                </svg>
                Console
              </span>
              <svg
                className={`w-4 h-4 text-dash-text-secondary transition-transform ${consoleOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {consoleOpen && (
              <div className="bg-[#0d0d1a] p-4 font-mono text-xs space-y-2 max-h-48 overflow-y-auto">
                {[...INFO_CONSOLE_LOGS, ERROR_CONSOLE_LOG].map((log, i) => (
                  <div key={i} className={`flex gap-3 ${log.level === 'error' ? 'text-red-400' : 'text-dash-text-secondary'}`}>
                    <span className="text-white/70 flex-shrink-0">{log.time}</span>
                    <span className={`flex-shrink-0 uppercase ${log.level === 'error' ? 'text-red-500' : 'text-blue-400'}`}>
                      [{log.level}]
                    </span>
                    <pre className="whitespace-pre-wrap break-all font-mono">{log.msg}</pre>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </div>

        {/* User info sidebar */}
        <div className="xl:col-span-1">
          <GlassCard padding="sm" className="bg-dash-surface p-5 sticky top-6">

            <h3 className="text-sm font-semibold text-dash-text mb-4">Session Info</h3>
            <div className="space-y-4">
              {[
                { label: 'Browser', value: 'Chrome 120.0' },
                { label: 'Resolution', value: '1920×1080' },
                { label: 'OS', value: 'macOS 14.2' },
                { label: 'Session Duration', value: '4m 32s' },
                { label: 'Region', value: 'San Francisco, CA' },
                { label: 'Session ID', value: 'session-001' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-dash-text-secondary mb-0.5">{label}</p>
                  <p className="text-sm text-dash-text font-medium font-mono">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--lg-glass-border)]">
              <p className="text-xs text-dash-text-secondary mb-2">Current step</p>
              <p className="text-sm text-dash-text font-medium">{step.timestamp}</p>
              <p className="text-xs text-dash-text-secondary mt-1 leading-relaxed">{step.description}</p>
            </div>

            {isAtError && (
              <div className="mt-4 bg-red-500/15 border border-[var(--lg-status-error-border)] rounded-lg p-3">
                <p className="text-xs text-red-400 font-semibold">Error detected at this step</p>
                <p className="text-xs text-red-300/80 mt-1">TypeError in checkout.tsx:84</p>
              </div>
            )}
          </GlassCard>
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
