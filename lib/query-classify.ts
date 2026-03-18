// ============================================================
// Query classification — determines if a query is in scope
// before any retrieval happens.
//
// Categories:
// - portfolio_relevant: proceed with retrieval
// - off_topic_personal: politely redirect
// - unsupported: politely redirect
// ============================================================

export type QueryCategory =
  | "portfolio_relevant"
  | "off_topic_personal"
  | "unsupported";

// Portfolio-relevant signals: if ANY of these match, the query is in-scope
const PORTFOLIO_SIGNALS: RegExp[] = [
  // Project names
  /\bcalbright\b|\bstudent portal\b|\bstaff portal\b|\bdidi\b|\bcisco\b/i,
  /\bai explorations?\b|\bai projects?\b|\bjobhatch\b|\bjob hatch\b/i,
  /\bworld cup\b|\bdata lab\b|\bdialpad\b|\bsynchronize\b|\bliquid glass\b/i,
  /\bask wen\b|\bthis assistant\b|\bthis chatbot\b/i,

  // Design / portfolio concepts
  /\bdesign\b|\bportfolio\b|\bproject\b|\bcase study\b|\bwork\b/i,
  /\bux\b|\bui\b|\bproduct\b|\bprototyp\b|\bwireframe\b/i,
  /\bmethodology\b|\bapproach\b|\bprocess\b|\bworkflow\b/i,
  /\brole\b|\bimpact\b|\bresult\b|\boutcome\b|\bcontribution\b/i,
  /\bexperience\b|\bbackground\b|\beducation\b|\bskill\b|\bstrength\b/i,
  /\bai\b.*\b(tool|workflow|native|assisted|design)\b/i,
  /\b(tool|workflow|native|assisted|design)\b.*\bai\b/i,
  /\bwen\b|\bwen liu\b/i,
  /\bresume\b|\bhire\b|\brecruit\b/i,

  // Common portfolio questions
  /\bwho are you\b|\babout you\b|\bintroduce\b/i,
  /\bfavorite\b|\bbest\b.*project\b/i,
  /\bhow did you\b|\bwhat did you\b|\bwhy did you\b/i,
  /\btell me about\b/i,
  /\bwhat is\b.*\b(your|the)\b/i,
];

// Off-topic personal questions
const OFF_TOPIC_PERSONAL: RegExp[] = [
  /\bgirl\s*friend\b|\bboy\s*friend\b|\bmarried\b|\bsingle\b|\bdating\b/i,
  /\bhow old\b|\bage\b|\bbirthday\b/i,
  /\bwhere do you live\b|\baddress\b|\bphone number\b/i,
  /\bfavorite (food|movie|color|music|song|band|game|sport|team)\b/i,
  /\bhobby\b|\bhobbies\b/i,
  /\bpet\b|\bdog\b|\bcat\b/i,
  /\bsalary\b|\bhow much.*(?:make|earn|paid)\b/i,
  /\bpolitical\b|\bpolitics\b|\bvote\b|\belection\b/i,
  /\breligion\b|\breligious\b|\bbelieve in god\b/i,
  /\bzodiac\b|\bhoroscope\b|\bstar sign\b/i,
];

// Unsupported / clearly out-of-domain
const UNSUPPORTED: RegExp[] = [
  /\bweather\b|\btemperature\b/i,
  /\blottery\b|\bcrypto\b|\bbitcoin\b|\bstock\b.*\btip\b/i,
  /\bsports?\s*bet\b|\bgambling\b/i,
  /\brecipe\b|\bcook\b|\bfood\s+recipe\b/i,
  /\btranslate\b.*\b(to|into)\b/i,
  /\bwrite\s+(me\s+)?(a\s+)?(poem|song|story|essay|joke)\b/i,
  /\bplay\s+(a\s+)?game\b|\btell\s+(me\s+)?(a\s+)?joke\b/i,
  /\bmath\s+(problem|equation|homework)\b/i,
  /\bcode\s+(this|that|for me)\b|\bwrite\s+(code|program|script)\b/i,
  /\bhelp\s+me\s+(with\s+)?(my\s+)?(homework|assignment|exam)\b/i,
];

export const OUT_OF_SCOPE_REPLY =
  "I'm here to help you navigate Wen's portfolio. Feel free to ask about projects, design decisions, impact, AI workflow, or methodology.";

// Strong portfolio signals — entity names and design-specific concepts
// that should always override off-topic classification
const STRONG_PORTFOLIO_SIGNALS: RegExp[] = [
  // Project names — always in scope
  /\bcalbright\b|\bstudent portal\b|\bstaff portal\b|\bdidi\b|\bcisco\b/i,
  /\bai explorations?\b|\bai projects?\b|\bjobhatch\b|\bjob hatch\b/i,
  /\bworld cup\b|\bdata lab\b|\bdialpad\b|\bsynchronize\b|\bliquid glass\b/i,
  /\bask wen\b|\bthis assistant\b|\bthis chatbot\b/i,
  /\bwen liu\b/i,

  // Design-specific terms
  /\bux\b|\bui\b|\bprototyp\b|\bwireframe\b/i,
  /\bmethodology\b|\bdesign system\b|\bcase study\b/i,
  /\bportfolio\b/i,
];

export function classifyQuery(normalizedQuery: string): QueryCategory {
  const q = normalizedQuery.toLowerCase().trim();

  // Check strong portfolio entity mentions first — these always win
  const hasStrongSignal = STRONG_PORTFOLIO_SIGNALS.some((p) => p.test(q));

  // Check off-topic and unsupported — but only if no strong portfolio signal
  if (!hasStrongSignal) {
    if (OFF_TOPIC_PERSONAL.some((p) => p.test(q))) {
      return "off_topic_personal";
    }
    if (UNSUPPORTED.some((p) => p.test(q))) {
      return "unsupported";
    }
  }

  // Check broader portfolio signals
  if (PORTFOLIO_SIGNALS.some((p) => p.test(q))) {
    return "portfolio_relevant";
  }

  // Re-check off-topic/unsupported for queries that didn't match any signal
  if (OFF_TOPIC_PERSONAL.some((p) => p.test(q))) {
    return "off_topic_personal";
  }
  if (UNSUPPORTED.some((p) => p.test(q))) {
    return "unsupported";
  }

  // Default: allow through to retrieval (might match something)
  return "portfolio_relevant";
}
