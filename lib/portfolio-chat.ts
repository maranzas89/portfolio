import { faqEntries, projects } from "@/data/portfolio-knowledge";
import { searchKnowledgeBase } from "@/lib/search-knowledge-base";

type ChatInput = {
  message: string;
  currentProject?: string | null;
  conversationProject?: string | null;
};

type ContentChunk = ReturnType<typeof searchKnowledgeBase>[number];

function includesAnyTrigger(message: string, triggers: string[]) {
  return triggers.some((trigger) => message.includes(trigger.toLowerCase()));
}

// --- Explicit project detection ---

const PROJECT_MENTION_RULES: Array<{ pattern: RegExp; slug: string }> = [
  { pattern: /\bcalbright\b|\bstudent portal\b/i, slug: "calbright-student-portal" },
  { pattern: /\bstaff portal\b|\bstaff\b/i, slug: "staff-portal" },
  { pattern: /\bdidi\b/i, slug: "didi" },
  { pattern: /\bai exploration|\bai project/i, slug: "ai-explorations" },
];

export function detectProjectMention(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of PROJECT_MENTION_RULES) {
    if (rule.pattern.test(q)) return rule.slug;
  }
  return null;
}

// --- Question intent detection ---

const INTENT_RULES: Array<{ pattern: RegExp; section: string }> = [
  { pattern: /\brole\b|\bcontribution\b|\bresponsibilit/i, section: "role" },
  { pattern: /\bproblem\b|\bchallenge\b|\bpain point/i, section: "problem" },
  { pattern: /\bapproach\b|\bprocess\b|\bmethod\b|\bhow did you/i, section: "approach" },
  { pattern: /\bimpact\b|\bresult\b|\boutcome\b|\bmetric/i, section: "impact" },
  { pattern: /\bbackground\b|\bexperience\b|\bcareer/i, section: "background" },
  { pattern: /\bstrength\b|\bskill\b|\bgood at\b|\bspecialt/i, section: "strengths" },
  { pattern: /\beducation\b|\bschool\b|\bdegree\b|\bgraduat|\bstudied\b|\bwhat did you study\b|\bwhere.*(?:study|school|learn)/i, section: "education" },
  { pattern: /\bai workflow\b|\bai tool\b|\bhow.*use ai/i, section: "ai-workflow" },
  { pattern: /\bname\b|\bwho are you\b|\bwho is\b|\bintroduc/i, section: "profile" },
];

function detectIntent(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of INTENT_RULES) {
    if (rule.pattern.test(q)) return rule.section;
  }
  return null;
}

function rankByIntent(
  results: ContentChunk[],
  intent: string | null
): ContentChunk[] {
  if (!intent || results.length <= 1) return results;

  const matching: ContentChunk[] = [];
  const rest: ContentChunk[] = [];
  for (const chunk of results) {
    if (chunk.section === intent) {
      matching.push(chunk);
    } else {
      rest.push(chunk);
    }
  }
  return [...matching, ...rest];
}

// --- Short follow-up detection ---

function isShortFollowUp(query: string): boolean {
  const words = query.split(/\s+/).filter((w) => w.length > 0);
  return words.length <= 4;
}

// --- Ambiguous question detection ---

const PROJECT_SPECIFIC_INTENTS = new Set([
  "role",
  "problem",
  "approach",
  "impact",
]);

const EXPLICIT_ENTITY_PATTERN =
  /\bcalbright\b|\bstudent portal\b|\bstaff portal\b|\bstaff\b|\bdidi\b|\bai exploration|\bai project/i;

const AMBIGUOUS_RESPONSES: Record<string, string> = {
  role: "I've had different roles across my projects. Would you like to hear about my role on Calbright Student Portal, Staff Portal, Didi, or my AI Explorations?",
  problem:
    "I've worked on several different product problems across my portfolio. I can walk you through the problem space for Calbright Student Portal, Staff Portal, Didi, or AI Explorations — which one are you curious about?",
  approach:
    "My approach varied by project. I can share how I approached Calbright Student Portal, Staff Portal, Didi, or my AI Explorations — which would you like to hear about?",
  impact:
    "That depends on the project. I can share the impact for Calbright Student Portal, Staff Portal, Didi, or AI Explorations — which one interests you?",
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

// --- Subjective AI opinion detection ---

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

// --- Response composition ---

function stripLeadingEntity(content: string): string {
  return content.replace(/^(At |On |In my )[^,]+,\s*/i, "");
}

function composeKnowledgeResponse(results: ContentChunk[]) {
  if (!results.length) return null;

  const [first, second] = results;

  // Single result
  if (!second) {
    return first.content;
  }

  // Two results from the same project — blend naturally
  if (first.projectSlug && second.projectSlug === first.projectSlug) {
    const secondContent = stripLeadingEntity(second.content);
    const blended =
      secondContent.charAt(0).toUpperCase() + secondContent.slice(1);
    return `${first.content} ${blended}`;
  }

  // Different sources — top match only
  return first.content;
}

// --- Main entry ---

export function getPortfolioChatResponse({
  message,
  currentProject,
  conversationProject,
}: ChatInput) {
  const q = message.toLowerCase().trim();

  // 1. Empty message
  if (!q) {
    return "Feel free to ask me about my projects, role, impact, or how I use AI in my design workflow.";
  }

  // 2. Subjective AI opinion — checked early so FAQ/KB don't intercept
  const aiOpinion = matchAiOpinion(q);
  if (aiOpinion) {
    return aiOpinion;
  }

  // 3. FAQ
  const faqMatch = faqEntries.find((entry) =>
    includesAnyTrigger(q, entry.triggers)
  );

  if (faqMatch) {
    return faqMatch.answer;
  }

  // 4. Resolve effective project context
  // Priority: explicit mention in message > conversation context > page context
  const mentionedProject = detectProjectMention(q);
  const shortFollowUp = isShortFollowUp(q);

  let effectiveProject: string | null | undefined = currentProject;

  if (mentionedProject) {
    // User explicitly mentioned a project — use it
    effectiveProject = mentionedProject;
  } else if (shortFollowUp && conversationProject) {
    // Short follow-up with no explicit mention — inherit conversation context
    effectiveProject = conversationProject;
  }

  // 5. Ambiguous project-specific question without any context
  const intent = detectIntent(q);
  const ambiguousReply = isAmbiguousProjectQuestion(q, intent, effectiveProject);
  if (ambiguousReply) {
    return ambiguousReply;
  }

  // 6. Knowledge base retrieval with intent-aware re-ranking
  const knowledgeResults = searchKnowledgeBase({
    query: message,
    currentProject: effectiveProject,
  });

  const ranked = rankByIntent(knowledgeResults, intent);

  const knowledgeReply = composeKnowledgeResponse(ranked);
  if (knowledgeReply) {
    return knowledgeReply;
  }

  // 7. Fallback: match across all projects
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

    return q
      .split(/\s+/)
      .some((word) => word.length > 2 && haystack.includes(word));
  });

  if (projectMatch) {
    return `${projectMatch.summary} ${projectMatch.role}`;
  }

  // 8. Final fallback
  return "I can share more about my projects, design decisions, role, impact, or how I use AI in my workflow. Try asking about Calbright, Staff Portal, Didi, or my AI explorations.";
}
