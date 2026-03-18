// ============================================================
// Query normalization — typo tolerance + alias expansion
//
// Runs BEFORE retrieval to correct misspellings and normalize
// entity names into their canonical forms.
// ============================================================

// --- Alias map: variant → canonical form ---
// Entries are lowercase. Order doesn't matter.
const ALIAS_MAP: Record<string, string> = {
  // Methodology typos / variants
  methloogy: "methodology",
  methodolgy: "methodology",
  methodoloy: "methodology",
  methology: "methodology",
  methodlogy: "methodology",
  methdology: "methodology",
  metholodgy: "methodology",
  metodology: "methodology",

  // Project name variants
  "job hatch": "jobhatch",
  "cal bright": "calbright",
  "cal-bright": "calbright",
  liquidglass: "liquid glass",
  "liquid-glass": "liquid glass",
  "student-portal": "student portal",
  "staff-portal": "staff portal",
  "ask-wen": "ask wen",
  "world-cup": "world cup",
  "data-lab": "data lab",
  "worldcup": "world cup",
  "datalab": "data lab",
  "dialpad-modal": "dialpad",
  synchronise: "synchronize",
  synchronise_orientation: "synchronize orientation",
};

// --- Levenshtein distance (for fuzzy matching) ---
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Known canonical words that we try to fuzzy-match against
const FUZZY_TARGETS = [
  "methodology",
  "calbright",
  "jobhatch",
  "synchronize",
  "dialpad",
  "orientation",
  "portfolio",
  "prototyping",
  "glassmorphism",
];

/**
 * Normalize a query string:
 * 1. Exact alias replacement (multi-word and single-word)
 * 2. Fuzzy single-word correction for known terms
 */
export function normalizeQuery(raw: string): string {
  let q = raw.toLowerCase().trim();

  // Phase 1: multi-word alias replacement (longest first)
  const multiWordAliases = Object.entries(ALIAS_MAP)
    .filter(([key]) => key.includes(" ") || key.includes("-"))
    .sort(([a], [b]) => b.length - a.length);

  for (const [variant, canonical] of multiWordAliases) {
    if (q.includes(variant)) {
      q = q.replace(new RegExp(escapeRegex(variant), "g"), canonical);
    }
  }

  // Phase 2: single-word alias + fuzzy correction
  const words = q.split(/\s+/);
  const corrected = words.map((word) => {
    // Exact alias match
    if (ALIAS_MAP[word]) return ALIAS_MAP[word];

    // Fuzzy match: only for words of 5+ chars, max distance 2
    if (word.length >= 5) {
      let bestMatch: string | null = null;
      let bestDist = Infinity;
      for (const target of FUZZY_TARGETS) {
        const dist = levenshtein(word, target);
        // Allow distance up to 2 for long words, 1 for shorter
        const maxDist = word.length >= 8 ? 2 : 1;
        if (dist <= maxDist && dist < bestDist) {
          bestDist = dist;
          bestMatch = target;
        }
      }
      if (bestMatch) return bestMatch;
    }

    return word;
  });

  return corrected.join(" ");
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
