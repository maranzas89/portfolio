"use client";

import React, { createContext, useContext } from "react";
import { useTokens } from "../use-tokens";

type TokensContextType = {
  tokens: number;
  setTokens: (updater: number | ((prev: number) => number)) => void;
  spendTokens: (amount: number) => void;
};

const TokensContext = createContext<TokensContextType>({ tokens: 0, setTokens: () => {}, spendTokens: () => {} });

export function TokensProvider({ children }: { children: React.ReactNode }) {
  const [tokens, setTokens, spendTokens] = useTokens();
  return <TokensContext.Provider value={{ tokens, setTokens, spendTokens }}>{children}</TokensContext.Provider>;
}

export function useTokensContext() {
  return useContext(TokensContext);
}
