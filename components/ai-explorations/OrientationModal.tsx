"use client";

import React, { useEffect, useRef } from "react";

export default function OrientationModal({
  open,
  title,
  subtitle,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => dialogRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lastActiveRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 cursor-pointer bg-black/30" aria-label="Close modal" onClick={onClose} />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--cal-border)] bg-[var(--cal-surface)] shadow-xl outline-none"
        >
          <div className="border-b border-[var(--cal-border)] bg-[var(--cal-surface-2)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-wide text-[var(--cal-muted)] uppercase">
                  Orientation Step
                </div>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-[var(--cal-navy)]">{title}</h2>
                {subtitle ? <p className="mt-1 text-sm text-[var(--cal-muted)]">{subtitle}</p> : null}
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-lg border border-[var(--cal-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--cal-text)]
                transition hover:bg-[var(--cal-surface-2)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cal-orange)] focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>

          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
