import { faqEntries, projects } from "@/data/portfolio-knowledge";
import { searchKnowledgeBase, isAiProjectsOverviewQuery } from "@/lib/search-knowledge-base";
import type { ScoredChunk } from "@/lib/search-knowledge-base";
import { detectProjectMention, detectSubEntity } from "@/lib/project-mentions";
import { normalizeQuery } from "@/lib/query-normalize";
import { classifyQuery, OUT_OF_SCOPE_REPLY } from "@/lib/query-classify";

type ChatInput = {
  message: string;
  currentProject?: string | null;
  conversationProject?: string | null;
  conversationEntity?: string | null;
};

type ContentChunk = ScoredChunk["chunk"];

// ============================================================
// FAQ matching — phrase-cluster substring matching
// Triggers are short phrases; a match means the message contains
// the phrase as a substring. This handles approximate phrasing
// without embeddings.
// ============================================================

function matchFaq(message: string) {
  const q = message.toLowerCase();
  return faqEntries.find((entry) =>
    entry.triggers.some((trigger) => q.includes(trigger.toLowerCase()))
  );
}

// Explicit project detection — imported from shared helper
// See lib/project-mentions.ts for the single source of truth

// ============================================================
// Question intent detection — maps question type to section
// ============================================================

const INTENT_RULES: Array<{ pattern: RegExp; section: string }> = [
  { pattern: /\brole\b|\bcontribution\b|\bresponsibilit/i, section: "role" },
  { pattern: /\bproblem\b|\bchallenge\b|\bpain point/i, section: "problem" },
  { pattern: /\bapproach\b|\bprocess\b|\bmethod\b|\bhow did you/i, section: "approach" },
  { pattern: /\bhow.*(?:create|build|made|built|make)\b|\bcreate it\b|\bbuild it\b|\bmade it\b/i, section: "approach" },
  { pattern: /\bimpact\b|\bresult\b|\boutcome\b|\bmetric/i, section: "impact" },
  { pattern: /\bbackground\b|\bexperience\b|\bcareer/i, section: "background" },
  { pattern: /\bstrength\b|\bskill\b|\bgood at\b|\bspecialt/i, section: "strengths" },
  { pattern: /\beducation\b|\bschool\b|\bdegree\b|\bgraduate\b|\bgraduated\b|\bgraduation\b|\bstudied\b|\buniversity\b|\bwhat did you study\b|\bwhere.*(?:study|school|learn)/i, section: "education" },
  { pattern: /\bai workflow\b|\bai tool\b|\bhow.*use ai/i, section: "ai-workflow" },
  { pattern: /\bname\b|\bwho are you\b|\bwho is\b|\bintroduc\b|\babout you\b|\babout yourself/i, section: "profile" },
  { pattern: /\bmethodology\b|\bdesign methodology\b|\bdesign process\b|\bworkflow methodology\b/i, section: "ai-methodology" },
  { pattern: /\bbenchmark\b|\bai capability\b|\bcapability benchmark/i, section: "ai-capability-benchmark" },
  { pattern: /\bmarket landscape\b|\bai landscape/i, section: "ai-market-landscape" },
];

function detectIntent(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of INTENT_RULES) {
    if (rule.pattern.test(q)) return rule.section;
  }
  return null;
}

function rankByIntent(
  results: ScoredChunk[],
  intent: string | null
): ScoredChunk[] {
  if (!intent || results.length <= 1) return results;

  const matching: ScoredChunk[] = [];
  const rest: ScoredChunk[] = [];
  for (const item of results) {
    if (item.chunk.section === intent) {
      matching.push(item);
    } else {
      rest.push(item);
    }
  }
  return [...matching, ...rest];
}

// ============================================================
// Short follow-up detection
// ============================================================

function isShortFollowUp(query: string): boolean {
  const words = query.split(/\s+/).filter((w) => w.length > 0);
  // Allow up to 6 words for follow-ups like "how did you create it"
  return words.length <= 6;
}

// ============================================================
// Ambiguous question detection — prevents random project answers
// on generic pages with no context
// ============================================================

const PROJECT_SPECIFIC_INTENTS = new Set([
  "role",
  "problem",
  "approach",
  "impact",
]);

const EXPLICIT_ENTITY_PATTERN =
  /\bcalbright\b|\bstudent portal\b|\bstaff portal\b|\bdidi\b|\bcisco\b|\bai explorations?\b|\bai projects?\b|\bjobhatch\b|\bworld cup\b|\bdialpad\b|\bsynchronize\b|\bliquid glass\b|\bask wen\b/i;

const AMBIGUOUS_RESPONSES: Record<string, string> = {
  role: "I've had different roles across my projects. Would you like to hear about my role on Calbright Student Portal, Staff Portal, Cisco, Didi, or my AI Explorations?",
  problem:
    "I've worked on several different product problems across my portfolio. I can walk you through the problem space for Calbright Student Portal, Staff Portal, Cisco, Didi, or AI Explorations — which one are you curious about?",
  approach:
    "My approach varied by project. I can share how I approached Calbright Student Portal, Staff Portal, Cisco, Didi, or my AI Explorations — which would you like to hear about?",
  impact:
    "That depends on the project. I can share the impact for Calbright Student Portal, Staff Portal, Cisco, Didi, or AI Explorations — which one interests you?",
};

function isAmbiguousProjectQuestion(
  query: string,
  intent: string | null,
  effectiveProject: string | null | undefined
): string | null {
  if (effectiveProject) return null;
  if (!intent || !PROJECT_SPECIFIC_INTENTS.has(intent)) return null;
  if (EXPLICIT_ENTITY_PATTERN.test(query)) return null;
  return AMBIGUOUS_RESPONSES[intent] ?? null;
}

// ============================================================
// Subjective AI opinion detection — resolved early in pipeline
// ============================================================

const AI_OPINION_PATTERNS: Array<{ pattern: RegExp; response: string }> = [
  {
    pattern: /\bgpt\b|\bchatgpt\b/i,
    response:
      "I think ChatGPT is strong because it combines breadth, speed, and flexible reasoning in a way that is useful across many workflow stages — from ideation to content framing to prototyping.",
  },
  {
    pattern: /\bclaude\b/i,
    response:
      "I find Claude thoughtful and well-suited for nuanced reasoning tasks. It's particularly useful when I need careful analysis or longer-form content exploration.",
  },
  {
    pattern: /\bmidjourney\b/i,
    response:
      "I think Midjourney is excellent for visual exploration and mood direction. It helps me explore aesthetic directions quickly when framing a product concept.",
  },
  {
    pattern: /\bfirefly\b/i,
    response:
      "I use Adobe Firefly for quick visual generation that fits naturally into my existing Adobe workflow. It's practical for exploring visual concepts without switching tools.",
  },
  {
    pattern: /\bfigma ai\b/i,
    response:
      "Figma AI is useful because it lives inside my primary design tool. It helps with layout exploration and content generation without breaking my workflow.",
  },
  {
    pattern: /\bwhat.*(?:best|favorite|prefer).*(?:ai|tool)/i,
    response:
      "I don't have a single favorite — I use different AI tools for different stages. ChatGPT for ideation and reasoning, Figma AI for layout exploration, and Adobe Firefly for visual concepts. The right tool depends on the task.",
  },
];

function matchAiOpinion(query: string): string | null {
  const q = query.toLowerCase();
  const isOpinionQuestion =
    /\bwhy\b|\bthink\b|\bopinion\b|\bfavorite\b|\bbest\b|\bprefer\b|\bfeel\b|\bview\b/i.test(q);
  if (!isOpinionQuestion) return null;

  for (const entry of AI_OPINION_PATTERNS) {
    if (entry.pattern.test(q)) return entry.response;
  }
  return null;
}

// ============================================================
// Navigation hints — where content lives in the portfolio
// ============================================================

const NAV_HINTS: Record<string, string> = {
  "calbright-student-portal": "You can explore this further in Work > Calbright > Student Portal.",
  "staff-portal": "You can explore this further in Work > Calbright > Staff Portal.",
  "didi": "You can find this in Experience > Didi.",
  "cisco": "You can find this in Experience.",
  "ai-explorations": "You can find this on the AI Explorations page.",
  "ask-wen": "You're using it right now!",
};

const SECTION_NAV_HINTS: Record<string, string> = {
  "showcase-jobhatch": "You can find this in AI Explorations > JobHatch.",
  "showcase-worldcup": "You can find this in AI Explorations > World Cup Data Lab.",
  "showcase-sync": "You can find this in AI Explorations > Synchronize Orientation.",
  "showcase-dialpad": "You can find this in AI Explorations > Dialpad Modal.",
  "showcase-where-excels": "You can find this in AI Explorations > Where AI Excels Today.",
  "showcase-liquid-glass": "You can find this in AI Explorations > Project Liquid Glass.",
  "ai-market-landscape": "You can find this in AI Explorations > AI Market Landscape.",
  "ai-capability-benchmark": "You can find this in AI Explorations > AI Capability Benchmark.",
  "ai-methodology": "You can find this in AI Explorations > AI Design Methodology.",
};

const NAVIGATION_PATTERN =
  /\bwhere\b.*\bfind\b|\bwhere\b.*\blook\b|\bwhere\b.*\bsee\b|\bnavigate\b|\bshow me\b|\bfind.*\bportfolio\b|\bwhere is\b|\bwhere can i\b/i;

function getNavHint(chunk: ContentChunk): string | null {
  // Try section-level hint first (more specific)
  const sectionHint = SECTION_NAV_HINTS[chunk.section];
  if (sectionHint) return sectionHint;
  // Fall back to project-level hint
  if (chunk.projectSlug) return NAV_HINTS[chunk.projectSlug] ?? null;
  return null;
}

// ============================================================
// Confidence threshold — minimum score to consider a result
// trustworthy enough to answer from
// ============================================================

const MIN_CONFIDENCE_SCORE = 5;

// ============================================================
// Response composition — natural first-person blending
//
// RULE: Only blend results from the SAME entity/project.
// Never append content from a different entity unless the user
// explicitly asked for comparison or overview.
// ============================================================

function stripLeadingEntity(content: string): string {
  return content.replace(/^(At |On |In my |For )[^,]+,\s*/i, "");
}

function composeKnowledgeResponse(
  results: ScoredChunk[],
  query: string
): string | null {
  if (!results.length) return null;

  // Confidence check: if the top result's score is too low, bail
  if (results[0].score < MIN_CONFIDENCE_SCORE) return null;

  const first = results[0];
  const second = results[1];
  let response: string;

  // Single result
  if (!second) {
    response = first.chunk.content;
  } else if (
    first.chunk.projectSlug &&
    second.chunk.projectSlug === first.chunk.projectSlug &&
    first.chunk.section === second.chunk.section
  ) {
    // Two results from the same project AND same section — blend naturally
    const secondContent = stripLeadingEntity(second.chunk.content);
    const blended =
      secondContent.charAt(0).toUpperCase() + secondContent.slice(1);
    response = `${first.chunk.content} ${blended}`;
  } else if (
    first.chunk.projectSlug &&
    second.chunk.projectSlug === first.chunk.projectSlug
  ) {
    // Same project, different sections — blend
    const secondContent = stripLeadingEntity(second.chunk.content);
    const blended =
      secondContent.charAt(0).toUpperCase() + secondContent.slice(1);
    response = `${first.chunk.content} ${blended}`;
  } else {
    // Different sources — top match only (single-entity grounding)
    response = first.chunk.content;
  }

  // Append navigation hint for navigation queries or summary-level answers
  const isNavQuery = NAVIGATION_PATTERN.test(query);
  const isSummaryChunk = first.chunk.section === "summary" || first.chunk.section.startsWith("showcase-");
  if (isNavQuery || isSummaryChunk) {
    const hint = getNavHint(first.chunk);
    if (hint) {
      response = `${response} ${hint}`;
    }
  }

  return response;
}

// ============================================================
// AI Projects overview — concise project list answer
// ============================================================

const AI_PROJECTS_OVERVIEW_RESPONSE =
  "I have several AI-native prototype projects including JobHatch (career platform with AI-powered match scoring), World Cup Data Lab (data-driven fan experience), Synchronize Orientation (real-time student-staff coordination), Dialpad Modal (embedded staff outreach tool), Where AI Excels Today (research-driven analysis), and Project Liquid Glass (coded glassmorphism design system). You can explore all of them on the AI Explorations page.";

// ============================================================
// Methodology direct answer — for single-word "methodology" queries
// ============================================================

const METHODOLOGY_PATTERN =
  /^(?:methodology\??|design methodology\??|ai design methodology\??|ai methodology\??|your methodology\??|workflow methodology\??|design process\??)$/i;

// ============================================================
// Main entry — response pipeline
//
// Order:
// 0. Normalize query (typo correction, alias expansion)
// 1. Classify query (out-of-scope check)
// 2. Empty message
// 3. Subjective AI opinion (early, before FAQ intercepts)
// 4. FAQ phrase-cluster matching
// 5. AI Projects overview detection (broad "ai projects?" queries)
// 6. Methodology direct match (short exact queries)
// 7. Resolve effective project (mention > conversation > page)
// 8. Ambiguous project question guard
// 9. Knowledge base retrieval + intent re-ranking
// 10. Confidence-gated response composition
// 11. Project fallback
// 12. Final fallback / low-confidence redirect
// ============================================================

export function getPortfolioChatResponse({
  message,
  currentProject,
  conversationProject,
  conversationEntity,
}: ChatInput) {
  // 0. Normalize query — fix typos and expand aliases
  const normalized = normalizeQuery(message);
  const q = normalized.trim();

  // 1. Empty message
  if (!q) {
    return "Feel free to ask me about my projects, role, impact, or how I use AI in my design workflow.";
  }

  // 2. Out-of-scope classification
  const category = classifyQuery(q);
  if (category === "off_topic_personal" || category === "unsupported") {
    return OUT_OF_SCOPE_REPLY;
  }

  // 3. Subjective AI opinion — checked early so FAQ/KB don't intercept
  const aiOpinion = matchAiOpinion(q);
  if (aiOpinion) {
    return aiOpinion;
  }

  // 4. AI Projects overview — broad "ai projects?" queries
  // Checked BEFORE FAQ because FAQ triggers like "about you" can
  // false-positive on "tell me about your ai projects"
  if (isAiProjectsOverviewQuery(q)) {
    return AI_PROJECTS_OVERVIEW_RESPONSE;
  }

  // 5. FAQ phrase-cluster matching
  const faqMatch = matchFaq(q);
  if (faqMatch) {
    return faqMatch.answer;
  }

  // 6. Methodology direct match — short exact methodology queries
  if (METHODOLOGY_PATTERN.test(q)) {
    // Return the methodology content directly from KB search
    const methodologyResults = searchKnowledgeBase({
      query: "ai design methodology",
      currentProject: null,
      conversationProject: null,
      conversationEntity: null,
    });
    const methodChunk = methodologyResults.find(
      (r) => r.chunk.section === "ai-methodology"
    );
    if (methodChunk) {
      return `${methodChunk.chunk.content} You can find this in AI Explorations > AI Design Methodology.`;
    }
  }

  // 7. Resolve effective project and sub-entity context
  // Priority: explicit mention in message > conversation context > page context
  const mentionedProject = detectProjectMention(q);
  const mentionedSubEntity = detectSubEntity(q);
  const shortFollowUp = isShortFollowUp(q);

  let effectiveProject: string | null | undefined = currentProject;
  let effectiveEntity: string | null | undefined = null;

  if (mentionedProject) {
    effectiveProject = mentionedProject;
  } else if (shortFollowUp && conversationProject) {
    effectiveProject = conversationProject;
  }

  // Resolve sub-entity: explicit mention > conversation entity (for follow-ups)
  if (mentionedSubEntity) {
    effectiveEntity = mentionedSubEntity.section;
  } else if (shortFollowUp && conversationEntity) {
    effectiveEntity = conversationEntity;
  }

  // 8. Ambiguous project-specific question without any context
  const intent = detectIntent(q);
  const ambiguousReply = isAmbiguousProjectQuestion(q, intent, effectiveProject);
  if (ambiguousReply) {
    return ambiguousReply;
  }

  // 9. Knowledge base retrieval with intent-aware re-ranking
  const knowledgeResults = searchKnowledgeBase({
    query: normalized,
    currentProject: effectiveProject,
    conversationProject: conversationProject,
    conversationEntity: effectiveEntity,
  });

  const ranked = rankByIntent(knowledgeResults, intent);

  // 10. Confidence-gated response composition
  const knowledgeReply = composeKnowledgeResponse(ranked, q);
  if (knowledgeReply) {
    return knowledgeReply;
  }

  // 11. Fallback: match across all projects (but only if query has substance)
  const queryWords = q.split(/\s+/).filter((w) => w.length > 2);
  if (queryWords.length > 0) {
    const projectMatch = projects.find((project) => {
      const haystack = [
        project.title,
        project.summary,
        project.role,
        project.problem,
        project.approach,
        project.impact,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return queryWords.some((word) => haystack.includes(word));
    });

    if (projectMatch) {
      const hint = NAV_HINTS[projectMatch.slug];
      const base = `${projectMatch.summary} ${projectMatch.role}`;
      return hint ? `${base} ${hint}` : base;
    }
  }

  // 12. Final fallback — low confidence redirect
  return "I can share more about my projects, design decisions, role, impact, or how I use AI in my workflow. Try asking about Calbright, Staff Portal, Didi, or my AI explorations.";
}
