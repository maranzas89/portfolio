"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGalleryModal({
  open,
  onClose,
  images,
  initialIndex = 0,
  captionTemplate = "Iteration {index}",
}: {
  open: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  captionTemplate?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  if (!open || images.length === 0) return null;

  const caption = captionTemplate.replace("{index}", String(currentIndex + 1));

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
        <div className="relative flex items-center justify-center w-full flex-1 min-h-0">
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-blue-600 shadow-lg flex items-center justify-center text-gray-800 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col w-full flex-1 min-h-0 max-w-[95vw]">
            <div className="w-full flex-1 min-h-0 overflow-hidden bg-white flex justify-center items-center max-h-[88vh]">
              <img
                src={images[currentIndex]}
                alt={caption}
                className="w-full h-auto max-h-[88vh] object-contain"
              />
            </div>
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line shrink-0">
              {caption}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 hover:bg-blue-600 shadow-lg flex items-center justify-center text-gray-800 hover:text-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
