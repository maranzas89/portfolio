import { contentChunks } from "@/data/portfolio-knowledge";

type SearchInput = {
  query: string;
  currentProject?: string | null;
  conversationProject?: string | null;
};

type ContentChunk = (typeof contentChunks)[number];

type ScoredChunk = {
  chunk: ContentChunk;
  score: number;
};

// ============================================================
// Entity boosts — section-targeted scoring
//
// When `section` is set:
//   - For target=null (global): only boost global chunks with that section
//   - For target!=null (project): give EXTRA boost to chunks with that section
//     within the project (all project chunks still get the base project boost)
// ============================================================

const EXPLICIT_ENTITY_BOOSTS: Array<{
  pattern: RegExp;
  target: string | null;
  section?: string;
}> = [
  // --- Main projects ---
  { pattern: /\bcalbright\b|\bstudent portal\b/i, target: "calbright-student-portal" },
  { pattern: /\bstaff portal\b/i, target: "staff-portal" },
  { pattern: /\bdidi\b/i, target: "didi" },
  { pattern: /\bcisco\b/i, target: "cisco" },
  { pattern: /\bai explorations?\b|\bai projects?\b/i, target: "ai-explorations" },
  { pattern: /\bask wen\b|\bthis assistant\b|\bthis chatbot\b|\bknowledge retrieval\b/i, target: "ask-wen" },

  // --- AI subsection targeting (section-specific within ai-explorations) ---
  { pattern: /\bjobhatch\b|\bjob hatch\b/i, target: "ai-explorations", section: "showcase-jobhatch" },
  { pattern: /\bworld cup\b|\bdata lab\b/i, target: "ai-explorations", section: "showcase-worldcup" },
  { pattern: /\bsynchronize\b|\borientation\b/i, target: "ai-explorations", section: "showcase-sync" },
  { pattern: /\bdialpad\b/i, target: "ai-explorations", section: "showcase-dialpad" },
  { pattern: /\bwhere ai excels\b/i, target: "ai-explorations", section: "showcase-where-excels" },
  { pattern: /\bai market\b|\bai landscape\b/i, target: "ai-explorations", section: "ai-market-landscape" },
  { pattern: /\bcapability benchmark\b|\bai benchmark\b/i, target: "ai-explorations", section: "ai-capability-benchmark" },
  { pattern: /\bai methodology\b|\bdesign methodology\b/i, target: "ai-explorations", section: "ai-methodology" },
  { pattern: /\bai research\b|\bresearch modal\b/i, target: "ai-explorations", section: "ai-research" },
  { pattern: /\bproject showcase\b/i, target: "ai-explorations", section: "showcase-overview" },

  // --- Global section-targeted (only the matching global section gets boosted) ---
  { pattern: /\bname\b|\bwho are you\b|\bwen liu\b/i, target: null, section: "profile" },
  { pattern: /\bschool\b|\beducation\b|\bgraduate\b|\bgraduated\b|\bgraduation\b|\bstudied\b|\buniversity\b|\bdegree\b|\bwhat did you study\b|\bwhere.*(?:study|school|learn)/i, target: null, section: "education" },
  { pattern: /\bbackground\b|\bexperience\b/i, target: null, section: "background" },
  { pattern: /\bstrength\b|\bskill/i, target: null, section: "strengths" },
  { pattern: /\bai workflow\b|\bhow.*use ai/i, target: null, section: "ai-workflow" },
];

// Stopwords prevent common short words from inflating unrelated chunk scores
const STOPWORDS = new Set([
  "the", "is", "at", "in", "on", "to", "of", "an", "or", "do", "go",
  "it", "my", "me", "we", "no", "so", "up", "if", "be", "he", "by",
  "as", "was", "are", "you", "your", "did", "can", "has", "had", "for",
  "not", "but", "all", "her", "she", "his", "our", "its", "how",
  "what", "when", "who", "why", "where", "this", "that", "with",
  "from", "about", "would", "could", "should", "have", "been", "more",
  "most", "very", "just", "also", "than", "then", "some", "here",
  "there", "which", "tell", "show", "does", "and",
]);

function tokenize(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/i)
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function scoreChunk(
  chunk: ContentChunk,
  tokens: string[],
  query: string,
  currentProject?: string | null,
  conversationProject?: string | null
) {
  let score = 0;

  const title = chunk.title.toLowerCase();
  const content = chunk.content.toLowerCase();
  const section = chunk.section.toLowerCase();
  const keywords = chunk.keywords.map((k) => k.toLowerCase());

  for (const token of tokens) {
    if (title.includes(token)) score += 4;
    if (section.includes(token)) score += 3;
    if (keywords.some((k) => k.includes(token))) score += 3;
    if (content.includes(token)) score += 2;
  }

  // Page-level boost (stronger)
  if (currentProject && chunk.projectSlug === currentProject) {
    score += 4;
  }

  // Conversation context boost (lighter, stacks with page boost if same project)
  if (conversationProject && chunk.projectSlug === conversationProject) {
    score += 3;
  }

  for (const rule of EXPLICIT_ENTITY_BOOSTS) {
    if (rule.pattern.test(query)) {
      if (rule.target !== null && chunk.projectSlug === rule.target) {
        // Base project boost
        score += 10;
        // Extra section-specific boost within the project
        if (rule.section && chunk.section === rule.section) {
          score += 6;
        }
      }
      if (rule.target === null && chunk.projectSlug === null) {
        // Section-targeted global boost
        if (rule.section) {
          if (chunk.section === rule.section) {
            score += 12;
          }
        } else {
          score += 8;
        }
      }
    }
  }

  return score;
}

export function searchKnowledgeBase({
  query,
  currentProject,
  conversationProject,
}: SearchInput): ContentChunk[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const tokens = tokenize(normalizedQuery);

  const scored: ScoredChunk[] = contentChunks
    .map((chunk) => ({
      chunk,
      score: scoreChunk(chunk, tokens, normalizedQuery, currentProject, conversationProject),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const uniqueById = new Map<string, ContentChunk>();
  for (const item of scored) {
    if (!uniqueById.has(item.chunk.id)) {
      uniqueById.set(item.chunk.id, item.chunk);
    }
  }

  return Array.from(uniqueById.values()).slice(0, 3);
}
