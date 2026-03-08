"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const DRAG_THRESHOLD = 5;

function loadPositions(storageKey: string, annotations: { id: number; x: number; y: number }[]): Record<number, { x: number; y: number }> {
  if (!storageKey || typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(`${storageKey}-positions`);
    if (stored) {
      const parsed = JSON.parse(stored) as Record<string, { x: number; y: number }>;
      const result: Record<number, { x: number; y: number }> = {};
      annotations.forEach((a) => {
        const key = String(a.id);
        if (parsed[key]) result[a.id] = parsed[key];
      });
      return result;
    }
  } catch {
    // ignore
  }
  return {};
}

function savePositions(storageKey: string, positions: Record<number, { x: number; y: number }>) {
  if (!storageKey || typeof window === "undefined") return;
  try {
    const toStore: Record<string, { x: number; y: number }> = {};
    Object.entries(positions).forEach(([k, v]) => {
      toStore[k] = v;
    });
    localStorage.setItem(`${storageKey}-positions`, JSON.stringify(toStore));
  } catch {
    // ignore
  }
}

export type Annotation = {
  id: number;
  title: string;
  explanation: string;
  x: number;
  y: number;
  side: "left" | "right" | "top" | "bottom";
};

export type AnnotatedImageProps = {
  src: string;
  alt: string;
  caption?: string;
  annotations?: Annotation[];
  storageKey?: string;
  variant?: "neutral" | string;
  thumbnailContainerClass?: string;
  objectFit?: "contain" | "cover";
  onClick?: () => void;
  inModal?: boolean;
  className?: string;
};

function AnnotatedImageInner({
  src,
  alt,
  caption,
  annotations = [],
  storageKey,
  variant = "neutral",
  thumbnailContainerClass,
  objectFit = "contain",
  onClick,
  inModal = false,
  className = "",
}: AnnotatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>({});

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as { expandedId?: number };
        if (parsed.expandedId != null && annotations.some((a) => a.id === parsed.expandedId)) {
          setExpandedId(parsed.expandedId);
        }
      }
    } catch {
      // ignore
    }
  }, [storageKey, annotations]);

  useEffect(() => {
    if (typeof window === "undefined" || annotations.length === 0) return;
    const stored = loadPositions(storageKey ?? "", annotations);
    const merged: Record<number, { x: number; y: number }> = {};
    annotations.forEach((a) => {
      merged[a.id] = stored[a.id] ?? { x: a.x, y: a.y };
    });
    setPositions(merged);
  }, [storageKey, annotations.length]);

  const handlePositionChange = useCallback(
    (id: number, x: number, y: number) => {
      const clampedX = Math.max(2, Math.min(98, x));
      const clampedY = Math.max(2, Math.min(98, y));
      setPositions((prev) => {
        const next = { ...prev, [id]: { x: clampedX, y: clampedY } };
        if (storageKey) savePositions(storageKey, next);
        return next;
      });
    },
    [storageKey]
  );

  const handleExpand = useCallback(
    (id: number) => {
      setExpandedId((prev) => {
        const next = prev === id ? null : id;
        if (storageKey && typeof window !== "undefined") {
          try {
            localStorage.setItem(storageKey, JSON.stringify({ expandedId: next }));
          } catch {
            // ignore
          }
        }
        return next;
      });
    },
    [storageKey]
  );

  const isClickable = Boolean(onClick) && !inModal;
  const containerCls = thumbnailContainerClass ?? (inModal ? "" : "aspect-[4/3] min-h-[160px] md:min-h-[280px]");
  return (
    <div className={className}>
      <div
        ref={containerRef}
        onClick={isClickable ? onClick : undefined}
        className={`relative overflow-hidden rounded-2xl bg-white border border-gray-200 ${
          isClickable ? "cursor-pointer hover:scale-[1.01] transition-transform duration-200" : ""
        } ${containerCls}`}
      >
        <div
          className="relative w-full h-full"
          onClick={isClickable ? (e) => { e.stopPropagation(); onClick?.(); } : undefined}
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : undefined}
          onKeyDown={isClickable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick?.(); } } : undefined}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-center select-none ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
            draggable={false}
          />
          {annotations.map((a) => (
            <AnnotationMarker
              key={a.id}
              annotation={a}
              position={positions[a.id] ?? { x: a.x, y: a.y }}
              isExpanded={expandedId === a.id}
              onToggle={() => handleExpand(a.id)}
              onExpand={() => setExpandedId(a.id)}
              onPositionChange={(x, y) => handlePositionChange(a.id, x, y)}
              onClick={(e) => e.stopPropagation()}
            />
          ))}
        </div>
      </div>
      {caption && !inModal && (
        <p className="text-sm text-muted font-medium mt-3">{caption}</p>
      )}
      {caption && inModal && (
        <p className="text-sm text-muted font-medium mt-2">{caption}</p>
      )}
    </div>
  );
}

function AnnotationMarker({
  annotation,
  position,
  isExpanded,
  onToggle,
  onExpand,
  onPositionChange,
  onClick,
}: {
  annotation: Annotation;
  position: { x: number; y: number };
  isExpanded: boolean;
  onToggle: () => void;
  onExpand: () => void;
  onPositionChange: (x: number, y: number) => void;
  onClick: (e: React.MouseEvent) => void;
}) {
  const markerRef = useRef<HTMLDivElement>(null);
  const { id, title, explanation, side } = annotation;
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const didDragRef = useRef(false);

  const tooltipPos =
    side === "left"
      ? "right-full mr-2 top-1/2 -translate-y-1/2"
      : side === "right"
        ? "left-full ml-2 top-1/2 -translate-y-1/2"
        : side === "top"
          ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
          : "top-full mt-2 left-1/2 -translate-x-1/2";

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.stopPropagation();
      e.preventDefault();
      dragStartRef.current = { x: position.x, y: position.y, startX: e.clientX, startY: e.clientY };
      didDragRef.current = false;
      markerRef.current?.setPointerCapture?.(e.pointerId);
    },
    [position]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStartRef.current) return;
      const { x, y, startX, startY } = dragStartRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const pastThreshold = Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD;
      if (pastThreshold) {
        didDragRef.current = true;
        if (!isDragging) setIsDragging(true);
        const rect = markerRef.current?.closest(".relative")?.getBoundingClientRect();
        if (!rect) return;
        const deltaXPct = (dx / rect.width) * 100;
        const deltaYPct = (dy / rect.height) * 100;
        onPositionChange(x + deltaXPct, y + deltaYPct);
        dragStartRef.current = { x: x + deltaXPct, y: y + deltaYPct, startX: e.clientX, startY: e.clientY };
      }
    },
    [isDragging, onPositionChange]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      markerRef.current?.releasePointerCapture?.(e.pointerId);
      const wasDragging = didDragRef.current;
      setIsDragging(false);
      dragStartRef.current = null;
      if (!wasDragging) onToggle();
    },
    [onToggle]
  );

  return (
    <div
      ref={markerRef}
      onClick={onClick}
      className="absolute z-10 cursor-grab active:cursor-grabbing"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <button
        type="button"
        className={`flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 bg-white text-xs font-bold text-red-600 shadow-sm transition-colors ${
          isDragging ? "ring-2 ring-red-200 scale-110" : "hover:bg-red-50"
        }`}
        aria-label={title}
        aria-expanded={isExpanded}
      >
        {id}
      </button>
      <div
        className={`absolute z-20 w-56 rounded-lg border border-line bg-white p-3 text-left text-xs font-medium text-muted shadow-lg ${tooltipPos}`}
      >
        <p className="font-semibold text-text mb-1">{title}</p>
        <p className="text-muted">{explanation}</p>
      </div>
    </div>
  );
}

export default function AnnotatedImage(props: AnnotatedImageProps) {
  return <AnnotatedImageInner {...props} />;
}

export function AnnotatedImageModal({
  open,
  onClose,
  src,
  alt,
  caption,
  annotations = [],
  storageKey,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
  annotations?: Annotation[];
  storageKey?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2"
    >
      <div className="relative w-[98vw] max-w-[1800px] max-h-[96vh] flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-white/80 text-4xl leading-none z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[96vh] flex flex-col w-full flex-1 min-h-0">
          <div className="w-full flex-1 min-h-0 overflow-y-auto bg-white max-h-[92vh]">
            <div className="flex justify-center items-center min-h-[92vh]">
              <AnnotatedImage
                src={src}
                alt={alt}
                caption=""
                annotations={annotations}
                storageKey={storageKey}
                inModal
                className="!mt-0 w-full"
                thumbnailContainerClass="min-h-[90vh] w-full max-w-[95vw]"
              />
            </div>
          </div>
          {caption && (
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line shrink-0">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
