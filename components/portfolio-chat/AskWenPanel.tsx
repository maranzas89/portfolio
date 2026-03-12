"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Sparkles } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const PRESET_CHIPS = [
  "What was your role?",
  "Tell me about Calbright",
  "Show impact metrics",
  "How do you use AI in your workflow?",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi — I can help explain my projects, design decisions, impact, and AI workflow.",
};

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
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

      const userMsg: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed, currentProject }),
        });
        const data = await res.json();
        const assistantMsg: Message = {
          role: "assistant",
          content: data.reply ?? "Sorry, something went wrong.",
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } catch {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, currentProject]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const chipsVisible = messages.length === 1;

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
              <Sparkles className="h-[14px] w-[14px] text-blue-400/70" />
              <h2 className="text-[15px] font-semibold text-white/95 tracking-[-0.01em]">
                Ask Wen
              </h2>
            </div>
            <p className="mt-2 text-[12px] text-white/35 leading-relaxed tracking-wide">
              AI chat for my projects, decisions, impact, and workflow.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.05] transition-all duration-200"
            aria-label="Close panel"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden px-5 sm:px-7 py-5 sm:py-6 space-y-4 sm:space-y-5">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[82%] rounded-2xl px-4 sm:px-4.5 py-2.5 sm:py-3 text-[13px] sm:text-[13.5px] leading-[1.65] overflow-hidden break-words ${
                  msg.role === "user"
                    ? "bg-blue-600/80 text-white/95 shadow-sm"
                    : "bg-white/[0.07] text-white/75 ring-1 ring-white/[0.04]"
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
          <div className="px-5 sm:px-7 pb-3 sm:pb-4 flex flex-wrap gap-2 sm:gap-2.5">
            {PRESET_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => sendMessage(chip)}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] text-white/50 tracking-wide transition-all duration-200 hover:border-white/[0.14] hover:text-white/70 hover:bg-white/[0.06]"
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
              className="flex-1 min-w-0 w-full bg-transparent text-[16px] sm:text-[13.5px] text-white/85 placeholder:text-white/20 outline-none"
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
