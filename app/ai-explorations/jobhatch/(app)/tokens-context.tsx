"use client";

import React, { createContext, useContext } from "react";
import { useTokens } from "../use-tokens";

type TokensContextType = {
  tokens: number;
  setTokens: (updater: number | ((prev: number) => number)) => void;
};

const TokensContext = createContext<TokensContextType>({ tokens: 0, setTokens: () => {} });

export function TokensProvider({ children }: { children: React.ReactNode }) {
  const [tokens, setTokens] = useTokens();
  return <TokensContext.Provider value={{ tokens, setTokens }}>{children}</TokensContext.Provider>;
}

export function useTokensContext() {
  return useContext(TokensContext);
}
