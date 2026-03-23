import { useState } from 'react';

type ResolvePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onResolved: () => void;
};

// ─── Step indicator ────────────────────────────────────────────────────────────

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs text-white/50 font-mono">
        Step {current + 1} of {total}
      </span>
      <div className="flex items-center gap-1.5 flex-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i < current
                ? 'bg-[var(--status-success)]'
                : i === current
                ? 'bg-[var(--brand-primary)]'
                : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Continue button ───────────────────────────────────────────────────────────

function ContinueButton({
  label,
  onClick,
  variant = 'primary',
}: {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'success';
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full mt-6 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] ${
        variant === 'success'
          ? 'bg-[var(--status-success)] text-black'
          : 'bg-[var(--brand-primary)]'
      }`}
    >
      {label}
    </button>
  );
}

// ─── Code block shared styles ──────────────────────────────────────────────────

const CODE_LINE_NUM = 'text-white/40 select-none mr-4 inline-block w-6 text-right';
const CODE_KEYWORD = 'text-purple-400';
const CODE_VAR = 'text-white/90';
const CODE_OP = 'text-white/60';
const CODE_NULL = 'text-emerald-400';
const CODE_COMMENT = 'text-white/40 italic';
const CODE_NUM = 'text-orange-300';
const CODE_FN = 'text-yellow-300';

// ─── Step 1 — Identify the Bug ─────────────────────────────────────────────────

function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-1">Identify the Bug</h3>
      <p className="text-xs text-white/50 mb-4">Pinpoint the root cause in the code</p>

      <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
        <div className="flex items-center justify-between bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="font-mono text-xs text-white/50">checkout.tsx</span>
          <span className="text-xs text-[var(--status-error)]">error at line 84</span>
        </div>
        <div className="bg-[#0a0a16] p-4 font-mono text-xs leading-7 overflow-x-auto">
          <div>
            <span className={CODE_LINE_NUM}>81</span>
            <span className={CODE_KEYWORD}>const </span>
            <span className={CODE_VAR}>discountAmount </span>
            <span className={CODE_OP}>= coupon ? coupon.discount : </span>
            <span className={CODE_NULL}>null</span>
            <span className={CODE_OP}>;</span>
          </div>
          <div>
            <span className={CODE_LINE_NUM}>82</span>
            <span className={CODE_COMMENT}>{'// Apply discount to cart total'}</span>
          </div>
          <div>
            <span className={CODE_LINE_NUM}>83</span>
            <span className={CODE_KEYWORD}>const </span>
            <span className={CODE_VAR}>finalTotal </span>
            <span className={CODE_OP}>= total - total * discountAmount;</span>
          </div>
          {/* Error line */}
          <div className="bg-red-900/30 border-l-2 border-[var(--status-error)] -mx-4 px-4">
            <span className={CODE_LINE_NUM}>84</span>
            <span className={CODE_KEYWORD}>return </span>
            <span className={CODE_VAR}>finalTotal</span>
            <span className={CODE_OP}>.</span>
            <span className={CODE_FN}>toFixed</span>
            <span className={CODE_OP}>(</span>
            <span className={CODE_NUM}>2</span>
            <span className={CODE_OP}>);</span>
            <span className="ml-3 text-[var(--status-error)] text-[11px]">
              {'// ← TypeError: null.toFixed'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/60 leading-relaxed">
        The error occurs at line 84.{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-white/80">discountAmount</code> is{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-[var(--status-error)]">null</code>{' '}
        when coupon code{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-white/80">SUMMER25</code> is
        applied, because the coupon data has{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-white/80">discount: null</code>.
      </p>

      <ContinueButton label="Confirm Root Cause →" onClick={onNext} />
    </div>
  );
}

// ─── Step 2 — Apply the Fix ────────────────────────────────────────────────────

function Step2({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-1">Apply the Fix</h3>
      <p className="text-xs text-white/50 mb-4">Replace the unsafe code with a null-safe version</p>

      <div className="rounded-lg overflow-hidden border border-white/10 mb-4">
        <div className="flex items-center justify-between bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="font-mono text-xs text-white/50">checkout.tsx</span>
          <span className="text-xs text-[var(--status-success)]">fix applied</span>
        </div>
        <div className="bg-[#0a0a16] p-4 font-mono text-xs leading-7 overflow-x-auto">
          <div>
            <span className={CODE_LINE_NUM}>81</span>
            <span className={CODE_KEYWORD}>const </span>
            <span className={CODE_VAR}>discountAmount </span>
            <span className={CODE_OP}>= coupon</span>
            <span className="text-[var(--status-success)]">?.</span>
            <span className={CODE_VAR}>discount </span>
            <span className="text-[var(--status-success)]">?? </span>
            <span className={CODE_NUM}>0</span>
            <span className={CODE_OP}>;</span>
          </div>
          <div>
            <span className={CODE_LINE_NUM}>82</span>
            <span className={CODE_COMMENT}>{'// Apply discount to cart total (safe fallback)'}</span>
          </div>
          <div>
            <span className={CODE_LINE_NUM}>83</span>
            <span className={CODE_KEYWORD}>const </span>
            <span className={CODE_VAR}>finalTotal </span>
            <span className={CODE_OP}>= total - total * (discountAmount / </span>
            <span className={CODE_NUM}>100</span>
            <span className={CODE_OP}>);</span>
          </div>
          {/* Safe line */}
          <div className="bg-green-900/20 border-l-2 border-[var(--status-success)] -mx-4 px-4">
            <span className={CODE_LINE_NUM}>84</span>
            <span className={CODE_KEYWORD}>return </span>
            <span className={CODE_VAR}>finalTotal</span>
            <span className={CODE_OP}>.</span>
            <span className={CODE_FN}>toFixed</span>
            <span className={CODE_OP}>(</span>
            <span className={CODE_NUM}>2</span>
            <span className={CODE_OP}>);</span>
            <span className="ml-3 text-[var(--status-success)] text-[11px]">{'// ✓ Safe'}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/60 leading-relaxed">
        Add a nullish coalescing fallback (
        <code className="bg-white/10 px-1 rounded font-mono text-[var(--status-success)]">?? 0</code>
        ) to handle cases where{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-white/80">discount</code> is null.
        This prevents the TypeError without changing the coupon validation logic.
      </p>

      <ContinueButton label="Apply Fix →" onClick={onNext} />
    </div>
  );
}

// ─── Step 3 — Verify the Fix ───────────────────────────────────────────────────

const TEST_CASES = [
  { code: 'SAVE10', result: '10% discount applied correctly' },
  { code: 'SUMMER25', result: 'fallback to 0%, no crash' },
  { code: 'No coupon', result: 'full price checkout' },
  { code: 'Invalid code', result: 'error message shown' },
];

function Step3({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white mb-1">Verify the Fix</h3>
      <p className="text-xs text-white/50 mb-4">Run the test suite to confirm the fix is solid</p>

      <div className="rounded-lg border border-white/10 overflow-hidden mb-4">
        <div className="bg-white/5 px-4 py-2 border-b border-white/10">
          <span className="font-mono text-xs text-white/50">Test Results</span>
        </div>
        <div className="bg-[#0a0a16] divide-y divide-white/5">
          {TEST_CASES.map(({ code, result }) => (
            <div key={code} className="flex items-start gap-3 px-4 py-3">
              <span className="text-[var(--status-success)] text-sm flex-shrink-0 mt-px">✅</span>
              <div className="min-w-0">
                <code className="font-mono text-xs text-white/80">{code}</code>
                <span className="text-xs text-white/40 mx-1.5">→</span>
                <span className="text-xs text-white/60">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-white/60 leading-relaxed">
        All test cases pass. The fix handles{' '}
        <code className="bg-white/10 px-1 rounded font-mono text-white/80">null</code> discount
        gracefully without breaking existing coupon logic.
      </p>

      <ContinueButton label="Mark as Resolved →" onClick={onNext} variant="success" />
    </div>
  );
}

// ─── Step 4 — Resolved + Recommendations ──────────────────────────────────────

const RECOMMENDATIONS = [
  'Add input validation at the API layer — validate coupon discount values before storing',
  'Add TypeScript strict null checks to the checkout module',
  'Set up an alert rule for null reference errors in payment flows',
  'Consider adding E2E test coverage for coupon edge cases',
];

function Step4({ onDone }: { onDone: () => void }) {
  return (
    <div>
      {/* Success header */}
      <div className="flex flex-col items-center text-center mb-6 pt-2">
        <div className="w-14 h-14 rounded-full bg-[var(--status-success)]/15 border border-[var(--status-success)]/30 flex items-center justify-center mb-3">
          <svg
            className="w-7 h-7 text-[var(--status-success)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Issue Resolved</h3>
        <p className="text-xs text-white/50 mt-1">
          The TypeError has been fixed and verified.
        </p>
      </div>

      {/* Recommendations */}
      <div className="rounded-lg border border-white/10 overflow-hidden mb-6">
        <div className="bg-white/5 px-4 py-2.5 border-b border-white/10">
          <span className="text-xs font-semibold text-white/70">Recommendations</span>
        </div>
        <ul className="bg-[#0a0a16] divide-y divide-white/5">
          {RECOMMENDATIONS.map((rec, i) => (
            <li key={i} className="flex items-start gap-3 px-4 py-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] text-[10px] font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-xs text-white/60 leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onDone}
        className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-[var(--status-success)] text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
      >
        Done
      </button>
    </div>
  );
}

// ─── Main panel ────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 4;

export function ResolvePanel({ isOpen, onClose, onResolved }: ResolvePanelProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const advance = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));

  const handleClose = () => {
    onClose();
    // Reset step after panel finishes sliding out
    setTimeout(() => setCurrentStep(0), 300);
  };

  const handleDone = () => {
    onResolved();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[480px] max-w-full bg-[#0d0d1a] border-l border-[var(--glass-border)] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Resolve Issue"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--glass-border)] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-[var(--brand-primary)]/20 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-[var(--brand-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-sm font-semibold text-white">Resolve Issue</h2>
          </div>
          <button
            onClick={handleClose}
            className="w-7 h-7 rounded-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close panel"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <StepIndicator current={currentStep} total={TOTAL_STEPS} />

          {/* Step content with slide-fade animation */}
          <div key={currentStep} className="animate-step-in">
            {currentStep === 0 && <Step1 onNext={advance} />}
            {currentStep === 1 && <Step2 onNext={advance} />}
            {currentStep === 2 && <Step3 onNext={advance} />}
            {currentStep === 3 && <Step4 onDone={handleDone} />}
          </div>
        </div>
      </div>

      {/* Inline keyframes for step transition — avoids needing Tailwind config changes */}
      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-step-in {
          animation: stepIn 0.22s ease-out forwards;
        }
      `}</style>
    </>
  );
}
