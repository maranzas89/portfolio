"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "jobhatch-tokens";
const SPENT_KEY = "jobhatch-tokens-spent";
const DEFAULT_TOKENS = 0;

export function useTokens() {
  const [tokens, setTokensState] = useState(DEFAULT_TOKENS);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setTokensState(Number(stored));
  }, []);

  const setTokens = useCallback((updater: number | ((prev: number) => number)) => {
    setTokensState((prev) => {
      const raw = typeof updater === "function" ? updater(prev) : updater;
      const next = Math.max(0, raw);
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const spendTokens = useCallback((amount: number) => {
    setTokensState((prev) => {
      const next = Math.max(0, prev - amount);
      localStorage.setItem(STORAGE_KEY, String(next));
      const prevSpent = Number(localStorage.getItem(SPENT_KEY) || "0");
      localStorage.setItem(SPENT_KEY, String(prevSpent + amount));
      return next;
    });
  }, []);

  return [tokens, setTokens, spendTokens] as const;
}
