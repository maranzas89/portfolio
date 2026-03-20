"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function ConditionalAnalytics() {
  const [excluded, setExcluded] = useState(true);

  useEffect(() => {
    setExcluded(document.cookie.includes("exclude_analytics=true"));
  }, []);

  if (excluded) return null;
  return <Analytics />;
}
