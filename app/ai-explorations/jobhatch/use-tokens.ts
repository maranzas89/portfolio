"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "jobhatch-tokens";
const DEFAULT_TOKENS = 0;

export function useTokens() {
  const [tokens, setTokensState] = useState(DEFAULT_TOKENS);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setTokensState(Number(stored));
  }, []);

  const setTokens = (updater: number | ((prev: number) => number)) => {
    setTokensState((prev) => {
      const raw = typeof updater === "function" ? updater(prev) : updater;
      const next = Math.max(0, raw);
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return [tokens, setTokens] as const;
}
