"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type ResumePdfPreviewProps = {
  src: string;
  className?: string;
};

export default function ResumePdfPreview({ src, className = "" }: ResumePdfPreviewProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(600);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setWidth(w);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col items-center bg-slate-100/50 py-8 ${className}`}>
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex items-center justify-center min-h-[500px] text-slate-500">
            Loading…
          </div>
        }
        error={
          <div className="flex items-center justify-center min-h-[500px] text-slate-500">
            Failed to load PDF
          </div>
        }
      >
        {numPages &&
          Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="mb-4 last:mb-0 shadow-lg bg-white">
              <Page
                pageNumber={index + 1}
                width={Math.min(width, 612)}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </div>
          ))}
      </Document>
    </div>
  );
}
