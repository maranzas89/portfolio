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
  { pattern: /\bai explorations?\b|\bai projects?\b|\bjobhatch\b|\bjob hatch\b|\bworld cup\b|\bdata lab\b|\bdialpad\b|\bsynchronize\b|\bwhere ai excels\b|\bliquid glass\b/i, slug: "ai-explorations" },
  { pattern: /\bask wen\b|\bthis assistant\b|\bthis chatbot\b|\bknowledge retrieval\b/i, slug: "ask-wen" },
];

export function detectProjectMention(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of PROJECT_MENTION_RULES) {
    if (rule.pattern.test(q)) return rule.slug;
  }
  return null;
}

// ============================================================
// Sub-entity detection — section-level within AI Explorations
//
// Returns a section name for more specific context tracking.
// Used to resolve follow-up questions like "how did you create it"
// back to a specific AI sub-project rather than the whole page.
// ============================================================

export const SUB_ENTITY_RULES: Array<{
  pattern: RegExp;
  project: string;
  section: string;
}> = [
  { pattern: /\bjobhatch\b|\bjob hatch\b/i, project: "ai-explorations", section: "showcase-jobhatch" },
  { pattern: /\bworld cup\b|\bdata lab\b/i, project: "ai-explorations", section: "showcase-worldcup" },
  { pattern: /\bsynchronize\b|\borientation\b/i, project: "ai-explorations", section: "showcase-sync" },
  { pattern: /\bdialpad\b/i, project: "ai-explorations", section: "showcase-dialpad" },
  { pattern: /\bwhere ai excels\b/i, project: "ai-explorations", section: "showcase-where-excels" },
  { pattern: /\bliquid glass\b|\bglass design system\b|\bdesign system project\b/i, project: "ai-explorations", section: "showcase-liquid-glass" },
];

export function detectSubEntity(
  query: string
): { project: string; section: string } | null {
  const q = query.toLowerCase();
  for (const rule of SUB_ENTITY_RULES) {
    if (rule.pattern.test(q)) return { project: rule.project, section: rule.section };
  }
  return null;
}
