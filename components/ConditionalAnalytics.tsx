"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import type { BeforeSendEvent } from "@vercel/analytics";

export default function ConditionalAnalytics() {
  const [excluded, setExcluded] = useState<boolean | null>(null);

  useEffect(() => {
    const isExcluded = document.cookie.includes("exclude_analytics=true");
    setExcluded(isExcluded);

    // --- DEBUG: remove after verification ---
    console.log(
      `[Vercel Analytics] cookie check → exclude_analytics=${isExcluded ? "true (BLOCKED)" : "not found (ALLOWED)"}`
    );
    // --- END DEBUG ---
  }, []);

  // Wait for client-side cookie check before deciding
  if (excluded === null) return null;

  if (excluded) {
    // --- DEBUG: remove after verification ---
    console.log(
      "[Vercel Analytics] BLOCKED — <Analytics /> component not rendered (cookie: exclude_analytics=true)"
    );
    // --- END DEBUG ---
    return null;
  }

  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        // --- DEBUG: remove after verification ---
        console.log("[Vercel Analytics beforeSend]", {
          type: event.type,
          url: event.url,
          excluded: false,
          result: "ALLOWED",
        });
        // --- END DEBUG ---
        return event;
      }}
    />
  );
}
