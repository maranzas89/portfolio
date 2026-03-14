import { contentChunks } from "@/data/portfolio-knowledge";

type SearchInput = {
  query: string;
  currentProject?: string | null;
};

type ContentChunk = (typeof contentChunks)[number];

type ScoredChunk = {
  chunk: ContentChunk;
  score: number;
};

const EXPLICIT_ENTITY_BOOSTS: Array<{
  pattern: RegExp;
  target: string | null;
  section?: string;
}> = [
  { pattern: /\bcalbright\b|\bstudent portal\b/i, target: "calbright-student-portal" },
  { pattern: /\bstaff portal\b|\bstaff\b/i, target: "staff-portal" },
  { pattern: /\bdidi\b/i, target: "didi" },
  { pattern: /\bai explorations\b|\bai projects\b/i, target: "ai-explorations" },
  { pattern: /\bname\b|\bwho are you\b|\bwen liu\b/i, target: null, section: "profile" },
  { pattern: /\bschool\b|\beducation\b|\bgraduat|\bstudied\b|\bwhat did you study\b|\bwhere.*(?:study|school|learn)/i, target: null, section: "education" },
  { pattern: /\bbackground\b|\bexperience\b/i, target: null, section: "background" },
  { pattern: /\bstrength\b|\bskill/i, target: null, section: "strengths" },
  { pattern: /\bai workflow\b|\bhow.*use ai/i, target: null, section: "ai-workflow" },
];

function tokenize(text: string) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/i)
    .filter((token) => token.length > 2);
}

function scoreChunk(
  chunk: ContentChunk,
  tokens: string[],
  query: string,
  currentProject?: string | null
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

  if (currentProject && chunk.projectSlug === currentProject) {
    score += 4;
  }

  for (const rule of EXPLICIT_ENTITY_BOOSTS) {
    if (rule.pattern.test(query)) {
      if (rule.target !== null && chunk.projectSlug === rule.target) {
        score += 10;
      }
      if (rule.target === null && chunk.projectSlug === null) {
        // Section-targeted: only boost the matching section
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
}: SearchInput): ContentChunk[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const tokens = tokenize(normalizedQuery);

  const scored: ScoredChunk[] = contentChunks
    .map((chunk) => ({
      chunk,
      score: scoreChunk(chunk, tokens, normalizedQuery, currentProject),
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
