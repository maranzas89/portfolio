// ============================================================
// Shared project/entity mention detection
//
// Single source of truth used by:
// - lib/portfolio-chat.ts (server-side intent detection)
// - components/portfolio-chat/AskWenPanel.tsx (client-side context tracking)
// ============================================================

export const PROJECT_MENTION_RULES: Array<{ pattern: RegExp; slug: string }> = [
  { pattern: /\bcalbright\b|\bstudent portal\b/i, slug: "calbright-student-portal" },
  { pattern: /\bstaff portal\b/i, slug: "staff-portal" },
  { pattern: /\bdidi\b/i, slug: "didi" },
  { pattern: /\bcisco\b/i, slug: "cisco" },
  { pattern: /\bai explorations?\b|\bai projects?\b|\bjobhatch\b|\bjob hatch\b|\bworld cup\b|\bdata lab\b|\bdialpad\b|\bsynchronize\b|\bwhere ai excels\b/i, slug: "ai-explorations" },
  { pattern: /\bask wen\b|\bthis assistant\b|\bthis chatbot\b|\bknowledge retrieval\b/i, slug: "ask-wen" },
];

export function detectProjectMention(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of PROJECT_MENTION_RULES) {
    if (rule.pattern.test(q)) return rule.slug;
  }
  return null;
}
