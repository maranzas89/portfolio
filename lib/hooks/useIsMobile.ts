"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Returns true when viewport width < MOBILE_BREAKPOINT.
 * Defaults to true (assume mobile) so mobile Safari never runs heavy animations
 * on first paint, avoiding scroll jank, jump-to-top, and crashes.
 * Stays true until mounted to avoid hydration mismatch (server has no window).
 */
export function useIsMobile() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  return mounted ? isMobile : true;
}
