"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { detectProjectMention, detectSubEntity } from "@/lib/project-mentions";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const PRESET_CHIPS = [
  "What was your role?",
  "Tell me about Calbright",
  "How do you use AI in your workflow?",
  "What is this assistant?",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi — I'm a retrieval-based assistant that can help you navigate my portfolio. Ask about my projects, design decisions, impact, or AI workflow.",
};

// --- Storage keys ---

const STORAGE_KEY = "ask-wen-messages";
const CHIPS_STORAGE_KEY = "ask-wen-used-chips";
const CONV_PROJECT_KEY = "ask-wen-conv-project";
const CONV_ENTITY_KEY = "ask-wen-conv-entity";
const INPUT_DRAFT_KEY = "ask-wen-input-draft";

// Project mention detection — imported from lib/project-mentions.ts

// --- Storage helpers ---

function loadFromSession<T>(key: string, fallback: T): T {
  try {
    const stored = sessionStorage.getItem(key);
    if (stored !== null) {
      const parsed = JSON.parse(stored);
      return parsed as T;
    }
  } catch {
    // Ignore parse errors
  }
  return fallback;
}

function saveToSession(key: string, value: unknown) {
  try {
    if (value === null || value === undefined) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  } catch {
    // Ignore storage errors
  }
}

function loadMessages(): Message[] {
  const stored = loadFromSession<Message[] | null>(STORAGE_KEY, null);
  return Array.isArray(stored) && stored.length > 0 ? stored : [INITIAL_MESSAGE];
}

function loadUsedChips(): Set<string> {
  const stored = loadFromSession<string[] | null>(CHIPS_STORAGE_KEY, null);
  return Array.isArray(stored) ? new Set(stored) : new Set();
}

function loadConversationProject(): string | null {
  try {
    return sessionStorage.getItem(CONV_PROJECT_KEY);
  } catch {
    return null;
  }
}

function saveConversationProject(slug: string | null) {
  try {
    if (slug) {
      sessionStorage.setItem(CONV_PROJECT_KEY, slug);
    } else {
      sessionStorage.removeItem(CONV_PROJECT_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}

function loadInputDraft(): string {
  try {
    return sessionStorage.getItem(INPUT_DRAFT_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveInputDraft(draft: string) {
  try {
    if (draft) {
      sessionStorage.setItem(INPUT_DRAFT_KEY, draft);
    } else {
      sessionStorage.removeItem(INPUT_DRAFT_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}

// --- Component ---

type AskWenPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  currentProject?: string;
};

export default function AskWenPanel({
  isOpen,
  onClose,
  currentProject,
}: AskWenPanelProps) {
  // All useState hooks grouped together
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [conversationProject, setConversationProject] = useState<string | null>(null);
  const [conversationEntity, setConversationEntity] = useState<string | null>(null);
  const [usedChips, setUsedChips] = useState<Set<string>>(new Set());

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hydrate all persisted state from sessionStorage on mount
  useEffect(() => {
    setMessages(loadMessages());
    setUsedChips(loadUsedChips());
    setConversationProject(loadConversationProject());
    setConversationEntity(loadFromSession<string | null>(CONV_ENTITY_KEY, null));
    setInput(loadInputDraft());
    setHydrated(true);
  }, []);

  // Persist messages
  useEffect(() => {
    if (hydrated) saveToSession(STORAGE_KEY, messages);
  }, [messages, hydrated]);

  // Persist conversation project and entity
  useEffect(() => {
    if (hydrated) saveConversationProject(conversationProject);
  }, [conversationProject, hydrated]);

  useEffect(() => {
    if (hydrated) saveToSession(CONV_ENTITY_KEY, conversationEntity);
  }, [conversationEntity, hydrated]);

  // Persist used chips
  useEffect(() => {
    if (hydrated) saveToSession(CHIPS_STORAGE_KEY, [...usedChips]);
  }, [usedChips, hydrated]);

  // Persist input draft
  useEffect(() => {
    if (hydrated) saveInputDraft(input);
  }, [input, hydrated]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const originalStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      touchAction: body.style.touchAction,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.touchAction = "none";
    return () => {
      body.style.overflow = originalStyles.overflow;
      body.style.position = originalStyles.position;
      body.style.top = originalStyles.top;
      body.style.width = originalStyles.width;
      body.style.touchAction = originalStyles.touchAction;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      // Detect project and sub-entity mentions
      const mentioned = detectProjectMention(trimmed);
      const subEntity = detectSubEntity(trimmed);
      if (mentioned) {
        setConversationProject(mentioned);
      }
      if (subEntity) {
        setConversationEntity(subEntity.section);
      }

      const userMsg: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            currentProject,
            conversationProject: mentioned ?? conversationProject,
            conversationEntity: subEntity?.section ?? conversationEntity,
          }),
        });
        const data = await res.json();
        const replyText = data.reply ?? "Sorry, something went wrong.";
        const assistantMsg: Message = {
          role: "assistant",
          content: replyText,
        };
        setMessages((prev) => [...prev, assistantMsg]);

        // Also detect project mentions in assistant reply to update context
        if (!mentioned) {
          const replyMention = detectProjectMention(replyText);
          if (replyMention) {
            setConversationProject(replyMention);
          }
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, currentProject, conversationProject, conversationEntity]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  const remainingChips = PRESET_CHIPS.filter((c) => !usedChips.has(c));
  const chipsVisible = remainingChips.length > 0;

  return (
    <>
      {/* Backdrop — hidden on mobile since panel is full-screen */}
      <div
        className={`fixed inset-0 z-[70] hidden sm:block bg-black/20 backdrop-blur-[3px] transition-opacity duration-400 ease-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — full-screen on mobile, right slide-over on sm+ */}
      <div
        role="dialog"
        aria-label="Ask Wen chat panel"
        className={`fixed inset-0 h-[100dvh] sm:inset-auto sm:top-0 sm:right-0 sm:h-full sm:w-[450px] z-[80] flex flex-col overflow-hidden sm:border-l border-white/[0.08] bg-[rgba(10,14,24,0.92)] sm:bg-[rgba(10,14,24,0.82)] backdrop-blur-2xl sm:shadow-[0_0_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "translate-y-0 sm:translate-y-0 sm:translate-x-0 opacity-100"
            : "translate-y-full sm:translate-y-0 sm:translate-x-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 sm:px-7 pt-6 sm:pt-8 pb-5 sm:pb-6 border-b border-white/[0.05]">
          <div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-5 w-5 text-blue-400" strokeWidth={2.5} />
              <h2 className="text-xl font-black text-white tracking-[-0.01em]">
                Ask Wen
              </h2>
            </div>
            <p className="mt-2 text-sm text-white/60 font-semibold leading-relaxed tracking-wide">
              Retrieval-based assistant for navigating my portfolio.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
            aria-label="Close panel"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden px-5 sm:px-7 py-5 sm:py-6 space-y-4 sm:space-y-5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[82%] rounded-2xl px-4 sm:px-4.5 py-2.5 sm:py-3 text-[13px] sm:text-[13.5px] leading-[1.65] overflow-hidden break-words font-semibold ${
                  msg.role === "user"
                    ? "bg-blue-600/80 text-white shadow-sm"
                    : "bg-white/[0.07] text-white/85 ring-1 ring-white/[0.04]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/[0.07] ring-1 ring-white/[0.04] rounded-2xl px-5 py-3.5">
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/25 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/25 animate-pulse [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/25 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset chips */}
        {chipsVisible && (
          <div className="px-5 sm:px-7 pb-3 sm:pb-4 flex flex-col gap-3 sm:gap-4 items-start">
            {remainingChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => { setUsedChips((prev) => new Set([...prev, chip])); sendMessage(chip); }}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] text-white/60 font-semibold tracking-wide transition-all duration-200 cursor-pointer hover:border-white/[0.14] hover:text-white/80 hover:bg-white/[0.06]"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="px-5 sm:px-7 pt-3 sm:pt-4 border-t border-white/[0.05]"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))" }}
        >
          <div className="flex items-center gap-3 min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 sm:px-4 py-2.5 sm:py-3 focus-within:border-white/[0.15] focus-within:bg-white/[0.06] transition-all duration-200">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work..."
              className="flex-1 min-w-0 w-full bg-transparent text-[16px] sm:text-[13.5px] text-white/90 font-semibold placeholder:text-white/30 placeholder:font-medium outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2 rounded-lg text-white/25 transition-all duration-200 hover:text-blue-400/80 hover:bg-white/[0.05] disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
