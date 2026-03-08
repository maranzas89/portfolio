"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

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
  onClick,
  inModal = false,
  className = "",
}: AnnotatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
            className="w-full h-full object-contain object-center select-none"
            draggable={false}
          />
          {annotations.map((a) => (
            <AnnotationMarker
              key={a.id}
              annotation={a}
              isExpanded={expandedId === a.id}
              onToggle={() => handleExpand(a.id)}
              onExpand={() => setExpandedId(a.id)}
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
  isExpanded,
  onToggle,
  onExpand,
  onClick,
}: {
  annotation: Annotation;
  isExpanded: boolean;
  onToggle: () => void;
  onExpand: () => void;
  onClick: (e: React.MouseEvent) => void;
}) {
  const { id, title, explanation, x, y, side } = annotation;
  const tooltipPos =
    side === "left"
      ? "right-full mr-2 top-1/2 -translate-y-1/2"
      : side === "right"
        ? "left-full ml-2 top-1/2 -translate-y-1/2"
        : side === "top"
          ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
          : "top-full mt-2 left-1/2 -translate-x-1/2";

  return (
    <div
      onClick={onClick}
      className="absolute z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        onMouseEnter={onExpand}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-xs font-bold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
        aria-label={title}
        aria-expanded={isExpanded}
      >
        {id}
      </button>
      {isExpanded && (
        <div
          className={`absolute z-20 w-56 rounded-lg border border-line bg-white p-3 text-left text-xs font-medium text-muted shadow-lg ${tooltipPos}`}
        >
          <p className="font-semibold text-text mb-1">{title}</p>
          <p className="text-muted">{explanation}</p>
        </div>
      )}
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
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
  annotations?: Annotation[];
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
