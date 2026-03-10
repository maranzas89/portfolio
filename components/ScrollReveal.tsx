"use client";

import React, { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  reduceMotion = false,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  reduceMotion?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduceMotion);
  const { x, y } = directionOffsets[direction];

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay, reduceMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : `translate(${x}px, ${y}px)`,
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ScrollRevealStagger({
  children,
  direction = "up",
  staggerDelay = 50,
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { x, y } = directionOffsets[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translate(0, 0)" : `translate(${x}px, ${y}px)`,
            transition: `opacity 0.5s ease-out ${i * staggerDelay}ms, transform 0.5s ease-out ${i * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
