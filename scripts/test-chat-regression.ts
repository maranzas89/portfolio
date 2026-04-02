/**
 * Regression tests for Ask Wen assistant routing and responses.
 *
 * Run with: npx tsx scripts/test-chat-regression.ts
 *
 * Each test case asserts that the response either:
 * - contains expected substrings (mustInclude)
 * - does NOT contain forbidden substrings (mustNotInclude)
 * - matches a category (e.g., out-of-scope redirect)
 */

import { getPortfolioChatResponse } from "@/lib/portfolio-chat";
import { normalizeQuery } from "@/lib/query-normalize";
import { classifyQuery } from "@/lib/query-classify";

type TestCase = {
  name: string;
  message: string;
  currentProject?: string | null;
  conversationProject?: string | null;
  conversationEntity?: string | null;
  mustInclude?: string[];
  mustNotInclude?: string[];
  category?: "portfolio_relevant" | "off_topic_personal" | "unsupported";
};

const tests: TestCase[] = [
  // --- Methodology routing ---
  {
    name: "Typo: 'what is your design methloogy' → methodology answer, not Liquid Glass",
    message: "what is your design methloogy",
    mustInclude: ["methodology", "five stages"],
    mustNotInclude: ["Liquid Glass", "glassmorphism"],
  },
  {
    name: "Exact: 'Methodology' → methodology answer only",
    message: "Methodology",
    mustInclude: ["methodology"],
    mustNotInclude: ["Liquid Glass", "glassmorphism"],
  },
  {
    name: "Full: 'what is your design methodology' → methodology answer",
    message: "what is your design methodology",
    mustInclude: ["methodology"],
    mustNotInclude: ["Liquid Glass"],
  },
  {
    name: "'AI design methodology' → methodology answer",
    message: "AI design methodology",
    mustInclude: ["methodology"],
    mustNotInclude: ["Liquid Glass"],
  },

  // --- Out-of-scope handling ---
  {
    name: "Personal: 'do you have girl friend?' → redirect, not project content",
    message: "do you have girl friend?",
    mustInclude: ["portfolio"],
    mustNotInclude: ["Liquid Glass", "JobHatch", "Calbright", "design system"],
    category: "off_topic_personal",
  },
  {
    name: "Unsupported: 'what is the weather today' → redirect",
    message: "what is the weather today",
    mustInclude: ["portfolio"],
    mustNotInclude: ["Liquid Glass", "Where AI Excels"],
    category: "unsupported",
  },

  // --- AI Projects overview ---
  {
    name: "Broad: 'AI projects?' → concise overview list",
    message: "AI projects?",
    mustInclude: ["JobHatch", "World Cup Data Lab", "Synchronize", "Liquid Glass"],
    mustNotInclude: [],
  },
  {
    name: "Broad: 'tell me about your ai projects' → overview list",
    message: "tell me about your ai projects",
    mustInclude: ["JobHatch", "World Cup"],
  },

  // --- Liquid Glass: should work when explicitly asked ---
  {
    name: "Explicit: 'what is liquid glass' → Liquid Glass answer",
    message: "what is liquid glass",
    mustInclude: ["Liquid Glass"],
  },
  {
    name: "Explicit: 'tell me about project liquid glass' → Liquid Glass answer",
    message: "tell me about project liquid glass",
    mustInclude: ["Liquid Glass", "glassmorphism"],
  },

  // --- Other project routing ---
  {
    name: "'tell me about calbright' → Calbright answer",
    message: "tell me about calbright",
    mustInclude: ["Calbright"],
    mustNotInclude: ["Liquid Glass"],
  },
  {
    name: "'staff portal' → Staff Portal answer",
    message: "staff portal",
    mustInclude: ["Staff Portal"],
    mustNotInclude: ["Liquid Glass"],
  },

  // --- Typo correction ---
  {
    name: "Typo normalization: 'methloogy' → 'methodology'",
    message: "methloogy",
    mustInclude: ["methodology"],
    mustNotInclude: ["Liquid Glass"],
  },
  {
    name: "Typo normalization: 'cal bright' → calbright",
    message: "tell me about cal bright",
    mustInclude: ["Calbright"],
  },

  // --- Single-entity grounding ---
  {
    name: "Single-word 'cisco' → Cisco only, no Liquid Glass appended",
    message: "cisco",
    mustInclude: ["Cisco"],
    mustNotInclude: ["Liquid Glass"],
  },
];

// ============================================================
// Test runner
// ============================================================

let passed = 0;
let failed = 0;

for (const tc of tests) {
  const normalized = normalizeQuery(tc.message);
  const reply = getPortfolioChatResponse({
    message: tc.message,
    currentProject: tc.currentProject ?? null,
    conversationProject: tc.conversationProject ?? null,
    conversationEntity: tc.conversationEntity ?? null,
  });

  const errors: string[] = [];

  // Check classification if specified
  if (tc.category) {
    const cat = classifyQuery(normalized);
    if (cat !== tc.category) {
      errors.push(`  classification: expected "${tc.category}", got "${cat}"`);
    }
  }

  // Check mustInclude
  for (const term of tc.mustInclude ?? []) {
    if (!reply.toLowerCase().includes(term.toLowerCase())) {
      errors.push(`  missing expected term: "${term}"`);
    }
  }

  // Check mustNotInclude
  for (const term of tc.mustNotInclude ?? []) {
    if (reply.toLowerCase().includes(term.toLowerCase())) {
      errors.push(`  contains forbidden term: "${term}"`);
    }
  }

  if (errors.length === 0) {
    console.log(`  PASS  ${tc.name}`);
    passed++;
  } else {
    console.log(`  FAIL  ${tc.name}`);
    for (const err of errors) console.log(err);
    console.log(`  Response: "${reply.slice(0, 120)}..."`);
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed out of ${tests.length} tests`);

if (failed > 0) {
  process.exit(1);
}
