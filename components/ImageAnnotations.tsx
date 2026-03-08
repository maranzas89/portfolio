"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

export type DraggableAnnotation = {
  id: string;
  title: string;
  body: string;
  x: number;
  y: number;
};

export type ImageAnnotationsProps = {
  imageSrc: string;
  alt: string;
  annotations: DraggableAnnotation[];
  storageKey: string;
  editable?: boolean;
  isModal?: boolean;
  caption?: string;
  onClick?: () => void;
  className?: string;
  containerClass?: string;
};

const DRAG_THRESHOLD = 5;

function loadPositions(storageKey: string, defaults: DraggableAnnotation[]): Record<string, { x: number; y: number }> {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored) as Record<string, { x: number; y: number }>;
      return parsed;
    }
  } catch {
    // ignore
  }
  return {};
}

function savePositions(storageKey: string, positions: Record<string, { x: number; y: number }>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(positions));
  } catch {
    // ignore
  }
}

export default function ImageAnnotations({
  imageSrc,
  alt,
  annotations: defaultAnnotations,
  storageKey,
  editable = true,
  isModal = false,
  caption,
  onClick,
  className = "",
  containerClass = "",
}: ImageAnnotationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = loadPositions(storageKey, defaultAnnotations);
    const merged: Record<string, { x: number; y: number }> = {};
    defaultAnnotations.forEach((a) => {
      merged[a.id] = stored[a.id] ?? { x: a.x, y: a.y };
    });
    setPositions(merged);
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once when mounted, annotations are stable
  }, [mounted]);

  const handlePositionChange = useCallback(
    (id: string, x: number, y: number) => {
      const clampedX = Math.max(2, Math.min(98, x));
      const clampedY = Math.max(2, Math.min(98, y));
      setPositions((prev) => {
        const next = { ...prev, [id]: { x: clampedX, y: clampedY } };
        savePositions(storageKey, next);
        return next;
      });
    },
    [storageKey]
  );

  const isClickable = Boolean(onClick) && !isModal;
  const baseContainerCls = containerClass || (isModal ? "min-h-[90vh] w-full max-w-[95vw]" : "aspect-[4/3] min-h-[280px] md:min-h-[360px]");

  if (!mounted || !hydrated) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-white border border-gray-200 ${baseContainerCls} ${className}`}
        suppressHydrationWarning
      >
        <img src={imageSrc} alt={alt} className="w-full h-full object-contain object-center" suppressHydrationWarning />
      </div>
    );
  }

  return (
    <div className={className} suppressHydrationWarning>
      <div
        ref={containerRef}
        onClick={isClickable ? onClick : undefined}
        className={`group relative overflow-hidden ${isModal ? "rounded-none border-0 bg-transparent" : "rounded-2xl bg-white border border-gray-200"} ${
          isClickable ? "cursor-pointer hover:border-gray-300 transition-colors duration-200" : ""
        } ${baseContainerCls}`}
      >
        <div className={`relative w-full ${isModal ? "h-auto min-h-0" : "h-full"}`}>
          <img
            src={imageSrc}
            alt={alt}
            className={`object-contain object-center select-none pointer-events-none ${
              isModal ? "w-full h-auto max-h-[88vh]" : "w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            }`}
            draggable={false}
          />
          {defaultAnnotations.map((a, index) => (
            <DraggableAnnotationMarker
              key={a.id}
              annotation={a}
              index={index + 1}
              position={positions[a.id] ?? { x: a.x, y: a.y }}
              isExpanded={expandedId === a.id}
              onToggle={() => setExpandedId((p) => (p === a.id ? null : a.id))}
              onPositionChange={(x, y) => handlePositionChange(a.id, x, y)}
              editable={editable}
              onClick={(e) => e.stopPropagation()}
            />
          ))}
        </div>
      </div>
      {caption && (
        <p className={`text-sm text-muted font-medium ${isModal ? "mt-2" : "mt-3"}`}>{caption}</p>
      )}
    </div>
  );
}

function DraggableAnnotationMarker({
  annotation,
  index,
  position,
  isExpanded,
  onToggle,
  onPositionChange,
  editable,
  onClick,
}: {
  annotation: DraggableAnnotation;
  index: number;
  position: { x: number; y: number };
  isExpanded: boolean;
  onToggle: () => void;
  onPositionChange: (x: number, y: number) => void;
  editable: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const didDragRef = useRef(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!editable) return;
      e.preventDefault();
      const rect = markerRef.current?.closest(".relative")?.getBoundingClientRect();
      if (!rect) return;
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      dragStartRef.current = { x: position.x, y: position.y, startX: e.clientX, startY: e.clientY };
      didDragRef.current = false;
      markerRef.current?.setPointerCapture?.(e.pointerId);
    },
    [editable, position]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStartRef.current || !editable) return;
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
    [editable, isDragging, onPositionChange]
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

  const cardAlign = position.x > 60 ? "items-end" : "items-start";

  return (
    <div
      ref={markerRef}
      onClick={onClick}
      className="absolute z-10 flex flex-col items-center"
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
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/90 bg-black/60 text-[10px] font-semibold text-white shadow-lg backdrop-blur-sm transition-all ${
          editable ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
        } ${isDragging ? "scale-110 ring-2 ring-white/50" : "hover:bg-black/80 hover:scale-105"}`}
        aria-label={annotation.title}
        aria-expanded={isExpanded}
      >
        {index}
      </button>
      <div className={`mt-1.5 flex flex-col ${cardAlign}`}>
        <div
          className={`rounded-xl border border-white/20 bg-white/95 px-2.5 py-1.5 shadow-lg backdrop-blur-md transition-all ${
            isExpanded ? "min-w-[200px] max-w-[260px]" : "max-w-[140px]"
          }`}
        >
          <p className="text-xs font-semibold text-gray-900 leading-tight">{annotation.title}</p>
          {isExpanded && (
            <p className="mt-1.5 text-[11px] text-gray-600 leading-relaxed">{annotation.body}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ImageAnnotationsModal({
  open,
  onClose,
  imageSrc,
  alt,
  caption,
  annotations,
  storageKey,
}: {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
  caption?: string;
  annotations: DraggableAnnotation[];
  storageKey: string;
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
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col w-full">
          <div className="w-full max-h-[88vh] flex items-center justify-center">
            <ImageAnnotations
              imageSrc={imageSrc}
              alt={alt}
              annotations={annotations}
              storageKey={storageKey}
              editable
              isModal
              caption=""
              className="!mt-0 w-full"
              containerClass="w-full h-auto max-h-[88vh] min-h-0"
            />
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
