export const BLOCKED_REPLY =
  "I'm here to help with portfolio-related questions about Wen Liu's work, projects, and background. I'm not able to respond to that, but I'd be happy to help with something related to the portfolio.";

const BLOCKED_PATTERNS: RegExp[] = [
  // Profanity / abusive insults
  /\b(fuck|f\*ck|shit|bitch|asshole|motherfucker|dickhead|bastard)\b/i,
  /\b(stfu|idiot|moron|dumbass|piece of shit)\b/i,

  // Sexual / explicit / 18+
  /\b(sex|sexual|sexy|nude|naked|porn|porno|xxx|erotic|fetish|blowjob|handjob|boobs|tits|penis|vagina)\b/i,
  /\b(18\+|nsfw|onlyfans)\b/i,

  // Hate / slurs
  /\b(nigger|faggot|retard|chink|spic|kike)\b/i,
  /\b(i hate (women|men|gay people|asians|blacks|whites|immigrants))\b/i,

  // Violence / threats
  /\b(kill|murder|shoot|stab|bomb|terrorist|threaten)\b/i,
  /\b(how do i hurt|how do i kill|how do i attack)\b/i,

  // Illegal / dangerous requests
  /\b(hack|ddos|phishing|malware|ransomware|steal password|make a bomb|buy cocaine|fake id)\b/i,
  /\b(how to commit fraud|how to scam|how to break into)\b/i,

  // Harassment / sexualized prompts
  /\b(send nudes|show me your body|are you hot|are you sexy)\b/i,
];

const ALLOWED_PORTFOLIO_CONTEXT_HINTS: RegExp[] = [
  /\b(project|portfolio|case study|work|experience|role|impact|workflow|design)\b/i,
  /\b(calbright|didi|staff portal|ai explorations|wen liu)\b/i,
];

export function isBlockedMessage(message: string): boolean {
  const text = message.trim();
  if (!text) return false;
  return BLOCKED_PATTERNS.some((pattern) => pattern.test(text));
}

export function isPossiblyOutOfScope(message: string): boolean {
  const text = message.trim().toLowerCase();
  if (!text) return false;

  const obviouslyOutOfScopePatterns: RegExp[] = [
    /\b(weather|lottery|crypto signal|sports bet|horoscope)\b/i,
    /\b(write malware|hack account|crack password)\b/i,
    /\b(best pornstar|adult video|porn site)\b/i,
  ];

  const hasPortfolioHint = ALLOWED_PORTFOLIO_CONTEXT_HINTS.some((pattern) =>
    pattern.test(text)
  );

  if (hasPortfolioHint) return false;

  return obviouslyOutOfScopePatterns.some((pattern) => pattern.test(text));
}
