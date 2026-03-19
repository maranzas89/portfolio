export const portfolioProfile = {
  name: "Wen Liu",
  title: "Senior Product Designer",
  summary:
    "I design product experiences across complex systems, enterprise workflows, and education platforms.",
  background:
    "I have experience spanning enterprise SaaS, edtech, and cybersecurity platforms. I focus on turning complex systems into clear, guided user experiences.",
  education:
    "I studied Multimedia & Art at California State University, East Bay, where I built a foundation in interaction design, systems thinking, and user experience strategy.",
  strengths: [
    "End-to-end product design",
    "Systems thinking & workflow design",
    "Design systems",
    "Cross-functional collaboration",
  ],
  aiWorkflow: [
    "Using AI for ideation",
    "Speeding up prototyping",
    "Exploring interaction concepts",
    "Supporting content framing and system thinking",
  ],
};

export const projects = [
  {
    slug: "calbright-student-portal",
    title: "Calbright Student Portal",
    summary:
      "A portal redesign focused on onboarding clarity and next-step guidance.",
    role: "I led end-to-end product design and workflow direction.",
    problem:
      "Students could access information, but the experience did not clearly guide them toward the right next action.",
    approach:
      "I restructured the experience around clearer guidance, prioritization, and lower cognitive load.",
    impact:
      "I created a stronger foundation for onboarding, improved clarity, and made the student experience easier to navigate.",
    tools: ["Figma", "Prototyping", "AI-assisted ideation"],
    tags: ["calbright", "student portal", "onboarding", "education"],
    url: "/work/calbright/student-portal",
  },
  {
    slug: "staff-portal",
    title: "Staff Portal",
    summary:
      "An operational portal concept I designed to help staff access the right student context and actions more efficiently.",
    role: "I led product design direction and workflow framing.",
    problem:
      "Staff workflows were fragmented and important context was difficult to access quickly.",
    approach:
      "I explored a clearer dashboard structure, more focused information hierarchy, and stronger workflow support.",
    impact:
      "I improved operational clarity and established a stronger direction for staff workflow efficiency.",
    tools: ["Figma", "Systems thinking", "Workflow design"],
    tags: ["staff portal", "operations", "dashboard", "calbright"],
    url: "/work/calbright/staff-portal",
  },
  {
    slug: "didi",
    title: "Didi Enterprise Platform",
    summary:
      "A complex enterprise design effort focused on workflow clarity, operational efficiency, and product scalability.",
    role: "I contributed to product design across enterprise workflows and system-level thinking.",
    problem:
      "Complex product logic and operational demands made it difficult for users to move efficiently through key tasks.",
    approach:
      "I simplified flows, clarified system behavior, and supported a more scalable product experience.",
    impact:
      "I helped strengthen usability, reduce friction, and support more effective enterprise operations.",
    tools: ["Figma", "Enterprise UX", "Interaction design"],
    tags: ["didi", "enterprise", "workflow", "platform"],
    url: "/work/didi",
  },
  {
    slug: "cisco",
    title: "Cisco",
    summary:
      "An enterprise network intelligence platform where I led UX for telemetry dashboards, anomaly detection, and a scalable design system.",
    role: "I served as Senior UI/UX Designer, leading UX for complex telemetry dashboards and model-driven alert systems.",
    problem:
      "Enterprise network operations required real-time visibility into telemetry data and anomaly detection, but existing interfaces made it difficult to act on insights quickly.",
    approach:
      "I designed telemetry dashboards and model-driven alert systems, and built a scalable enterprise design system that accelerated feature deployment by 30%.",
    impact:
      "I improved operational efficiency by 25%, reduced task time by 20%, and contributed to over $15M in revenue impact.",
    tools: ["Figma", "Enterprise UX", "Design Systems"],
    tags: ["cisco", "enterprise", "telemetry", "design system", "anomaly detection"],
    url: "/experience",
  },
  {
    slug: "ai-explorations",
    title: "AI Explorations",
    summary:
      "A collection of AI-assisted design and prototyping explorations I led, focused on product thinking, workflow acceleration, and interface experimentation.",
    role: "I led concept framing, prototyping, and AI workflow experimentation.",
    problem:
      "Traditional design workflows can be slow when exploring many product directions quickly.",
    approach:
      "I used AI to accelerate ideation, interaction exploration, content framing, and prototype generation.",
    impact:
      "I expanded exploration speed, supported faster concept testing, and created new ways to communicate product ideas.",
    tools: ["ChatGPT", "Figma AI", "Adobe Firefly", "Prototype tools"],
    tags: ["ai", "exploration", "workflow", "prototyping"],
    url: "/ai-explorations",
  },
  {
    slug: "ask-wen",
    title: "Portfolio Guide",
    summary:
      "A portfolio guide I designed and built to help visitors explore project content through natural questions instead of static browsing.",
    role: "I designed the conversation flow, retrieval architecture, knowledge structure, and interaction model, then built a working prototype with page-aware context and session persistence.",
    problem:
      "Portfolio visitors often scan without finding the most relevant content. Traditional navigation requires too much guesswork, and static pages don't adapt to what someone is actually looking for.",
    approach:
      "I designed a retrieval-oriented conversation experience with intent detection, entity-aware scoring, page-level context boosting, and conversation memory — then prototyped it as a fully functional assistant embedded across the site.",
    impact:
      "Created a testable product direction that turns static portfolio content into a guided, navigable knowledge retrieval experience with source-grounded answers and conversation continuity.",
    tools: ["Next.js", "TypeScript", "AI-assisted prototyping", "sessionStorage"],
    tags: ["ask wen", "knowledge retrieval", "chatbot", "ai assistant", "portfolio"],
    url: "",
  },
];

// ============================================================
// FAQ entries — open-ended interview-style question buckets
// Each entry uses phrase-cluster triggers for approximate matching
// ============================================================

export const faqEntries = [
  // 0. About me — personal introduction / who is Wen
  {
    id: "about-me",
    triggers: [
      "tell me about you", "tell me about yourself", "about yourself",
      "who is wen", "who are you", "introduce yourself",
      "tell me who you are", "about wen", "about you",
      "what do you do", "describe yourself", "your background",
      "give me an overview", "overview of you", "quick intro",
      "what should i know about you", "know about you",
    ],
    answer:
      "Wen is a Senior Product Designer with 10+ years across enterprise SaaS, education, and cybersecurity. His work focuses on complex systems, workflow design, and turning ambiguity into clear product direction. He's worked at Calbright College, Didi, and Cisco.",
    relatedProjectSlug: null,
  },
  // 0b. Favorite / preferred AI project
  {
    id: "favorite-ai-project",
    triggers: [
      "ai project you like", "favorite ai project", "preferred ai project",
      "which ai project", "ai project you prefer", "ai project you enjoy",
      "which project do you like", "project do you like most",
      "which one is your favorite", "which exploration do you like",
      "what is your favorite project", "project you like the most",
    ],
    answer:
      "JobHatch — a career platform concept combining resume analysis, match scoring, and gamified progress. It connects a real user problem (opaque job search) with a structured product direction. See it in Explorations > JobHatch.",
    relatedProjectSlug: "ai-explorations",
  },
  // A. Best / strongest / signature project
  {
    id: "best-project",
    triggers: [
      "best project", "strongest project", "most proud of", "proudest project",
      "signature project", "strongest case study", "best case study",
      "best represents you", "favorite project", "project are you most proud",
      "project best represents", "most impressive project",
    ],
    answer:
      "Calbright Student Portal. It brings together product thinking, workflow design, and information clarity around a meaningful user problem — helping students understand what to do next. See Work > Student Portal Redesign.",
    relatedProjectSlug: "calbright-student-portal",
  },
  // B. Project that represents design thinking
  {
    id: "design-thinking-example",
    triggers: [
      "how you think as a designer", "represents how you think",
      "design thinking example", "how you approach design problems",
      "your design philosophy", "how do you think about design",
      "clearest example of your thinking",
    ],
    answer:
      "Calbright Student Portal. It shows design as both a systems problem and a user guidance problem — not just screens, but helping people understand what to do next and reducing friction at every step.",
    relatedProjectSlug: "calbright-student-portal",
  },
  // C. Problems I enjoy solving
  {
    id: "problems-enjoy",
    triggers: [
      "problems do you enjoy", "problems interest you", "problems do you like",
      "product challenges", "problems you gravitate", "type of problems",
      "kind of problems", "what draws you", "what excites you about design",
      "what kind of design work",
    ],
    answer:
      "Problems where complexity needs to become clarity — onboarding, workflow design, decision support, and systems that need better structure. Taking something fragmented and making it guided and usable.",
    relatedProjectSlug: null,
  },
  // D. My design approach
  {
    id: "design-approach",
    triggers: [
      "design approach", "design process", "design methodology",
      "how do you approach", "your methodology", "your process",
      "how do you design", "describe your approach",
      "how do you work through a design problem",
      "methodology", "ai design methodology", "ai methodology",
      "workflow methodology",
    ],
    answer:
      "Five stages: Discover (research & observation), Define (problem framing), Ideate (divergent exploration), Design (hi-fi prototypes & systems), Test (analytics & cross-functional feedback). Modern tools including AI accelerate where they add real leverage. See Explorations > Design Methodology.",
    relatedProjectSlug: "ai-explorations",
  },
  // E. What makes your work different
  {
    id: "what-makes-different",
    triggers: [
      "makes your work different", "sets you apart", "unique about your work",
      "differentiates you", "what makes you different", "stand out",
      "what is special about", "how are you different",
    ],
    answer:
      "Wen focuses beyond interface polish — on workflow logic, product clarity, and how people move through complex systems. The work is intuitive at the surface and structurally sound underneath.",
    relatedProjectSlug: null,
  },
  // F1. AI at Calbright (context-specific — matched before generic AI workflow)
  {
    id: "ai-at-calbright",
    triggers: [
      "ai at calbright", "ai in calbright", "ai calbright college",
      "ai play at calbright", "ai show up in your calbright",
      "ai in your calbright work", "used ai at calbright",
    ],
    answer:
      "At Calbright, Wen uses AI to speed up exploration and early prototyping — ideation, content framing, and workflow exploration — especially for complex portal experiences. It supports the process but doesn't define the work.",
    relatedProjectSlug: "calbright-student-portal",
  },
  // F2. AI at Didi
  {
    id: "ai-at-didi",
    triggers: [
      "ai at didi", "ai in didi", "ai play in your didi",
      "ai connect to your didi", "ai in your didi work",
      "ai show up in your didi", "used ai at didi",
    ],
    answer:
      "At Didi, the work centered on complex workflows, operational clarity, and enterprise-scale product thinking. That experience deeply shaped how Wen approaches systems, scale, and reducing complexity in product design.",
    relatedProjectSlug: "didi",
  },
  // F3. AI at Cisco
  {
    id: "ai-at-cisco",
    triggers: [
      "ai at cisco", "ai in cisco", "ai play in your cisco",
      "ai show up in your cisco", "ai in your cisco work",
      "used ai at cisco", "ai connect to your cisco",
    ],
    answer:
      "At Cisco, Wen led UX for the Network Assurance Engine — telemetry dashboards and model-driven alert systems for anomaly detection. The design system he built accelerated feature deployment by 30% and contributed to $15M+ in revenue impact.",
    relatedProjectSlug: null,
  },
  // F4. AI in my career
  {
    id: "ai-in-career",
    triggers: [
      "ai in your career", "ai help in your career",
      "ai changed your work", "ai professionally",
      "ai in your job", "ai shaped your career",
      "ai impact on your career",
    ],
    answer:
      "AI accelerates ideation, prototyping, and concept testing. Wen uses it to explore more broadly and move faster — but design judgment, systems thinking, and cross-functional execution drive the final decisions.",
    relatedProjectSlug: null,
  },
  // F5. AI in my life
  {
    id: "ai-in-life",
    triggers: [
      "ai in your life", "ai personally", "ai in daily life",
      "ai outside work", "ai in your everyday",
      "ai help you in daily", "ai day to day life",
    ],
    answer:
      "Wen uses AI as a practical everyday tool — for thinking, organizing, learning, and exploring ideas. It's a faster way to work through questions and structure information.",
    relatedProjectSlug: null,
  },
  // F. How I use AI (generic — matched after context-specific AI entries above)
  {
    id: "ai-workflow",
    triggers: [
      "how do you use ai", "ai workflow", "your ai process",
      "what ai tools do you use", "how does ai fit into your work",
      "how does ai fit into your process", "how do you work with ai",
      "how are you ai-native", "ai in your design",
    ],
    answer:
      "AI accelerates ideation, interaction exploration, and prototyping. The core of Wen's work is product judgment, systems thinking, and cross-functional execution — AI supports the process, it doesn't define it.",
    relatedProjectSlug: "ai-explorations",
  },
  // G. Which project to start with
  {
    id: "start-here",
    triggers: [
      "where should i start", "which project should i look at",
      "what should i start with", "best introduces your work",
      "what should i look at first", "which project first",
      "where do i begin", "should i start with", "best project to start",
    ],
    answer:
      "Start with Calbright Student Portal for end-to-end product thinking. Or the Explorations page for prototyping and concept work.",
    relatedProjectSlug: null,
  },
  // H. What I learned from enterprise work
  {
    id: "enterprise-lessons",
    triggers: [
      "learned from enterprise", "enterprise experience",
      "enterprise work teach", "learned from didi",
      "enterprise lessons", "takeaway from enterprise",
      "what did enterprise teach",
    ],
    answer:
      "Enterprise work taught Wen that usability goes beyond screens — it's about how complex systems support real workflows under pressure. That deepened his ability to think through edge cases, hierarchy, and system behavior at scale.",
    relatedProjectSlug: "didi",
  },
  // I. AI-native thinking
  {
    id: "ai-native",
    triggers: [
      "ai-native", "ai native thinking", "most ai-native",
      "best shows ai", "ai-native project", "ai native project",
      "most ai project", "what does ai-native mean",
    ],
    answer:
      "The Explorations page. It shows modern tools used as part of real concept development, prototyping, and design exploration — practical and iterative, not a novelty showcase.",
    relatedProjectSlug: "ai-explorations",
  },
  // J. Strongest role
  {
    id: "strongest-role",
    triggers: [
      "strongest role", "role fits you best", "add the most value",
      "strongest at professionally", "best role for you",
      "what role suits you", "what kind of role",
      "where do you add value", "ideal role",
    ],
    answer:
      "Roles connecting product thinking, workflow design, and interface direction — helping teams frame problems clearly and build solutions that are both intuitive and structurally sound.",
    relatedProjectSlug: null,
  },
  // K. General role overview
  {
    id: "role-overview",
    triggers: [
      "what is your role", "what was your role", "what did you do",
      "your responsibility", "your contribution", "tell me about your role",
    ],
    answer:
      "Product strategy, workflow design, interface direction, and prototyping. Wen frames problems, shapes UX direction, and aligns design decisions with measurable outcomes.",
    relatedProjectSlug: null,
  },
  // L. General impact
  {
    id: "impact-general",
    triggers: [
      "what was the impact", "what were the results",
      "what outcome", "measurable impact", "how did it perform",
      "show impact metrics",
    ],
    answer:
      "Impact shows up as usability improvements, workflow efficiency gains, better onboarding, and stronger operational support. Key metrics: +75% trial conversion (Didi), 4.6/5 satisfaction (Calbright), $15M+ revenue impact (Cisco).",
    relatedProjectSlug: null,
  },
  // M. What is this assistant / Ask Wen
  {
    id: "what-is-ask-wen",
    triggers: [
      "what is this assistant", "what is ask wen", "how does this work",
      "what is this chatbot", "tell me about this assistant",
      "how was this built", "what powers this", "is this ai",
      "what is this chat", "how does ask wen work",
    ],
    answer:
      "A portfolio guide Wen designed and built. Ask natural questions and get grounded answers from project content — with context awareness and session persistence. It's a working prototype, not a generic chatbot.",
    relatedProjectSlug: "ask-wen",
  },
  // N. Compare two AI projects
  {
    id: "compare-ai-projects",
    triggers: [
      "compare jobhatch and world cup",
      "compare world cup and jobhatch",
      "jobhatch vs world cup",
      "world cup vs jobhatch",
      "difference between jobhatch and world cup",
      "compare these projects",
      "how are they different",
    ],
    answer:
      "JobHatch solves a real user problem — resume analysis, match scoring, and gamified progress for job seekers. World Cup Data Lab is more exploratory — turning tournament data into an interactive, insight-driven experience. JobHatch is product-oriented; World Cup is about making complex data engaging. Both are in Explorations.",
    relatedProjectSlug: "ai-explorations",
  },
];

// ============================================================
// Content Chunks for knowledge base retrieval
// ============================================================

export interface ContentChunk {
  id: string;
  projectSlug: string | null;
  section: string;
  title: string;
  content: string;
  keywords: string[];
}

export const contentChunks: ContentChunk[] = [
  // ============================
  // Global chunks (no project)
  // ============================
  {
    id: "global-profile",
    projectSlug: null,
    section: "profile",
    title: "Profile",
    content:
      "Senior Product Designer focused on complex systems, enterprise workflows, and education platforms. 10+ years turning ambiguity into clear product direction.",
    keywords: ["wen liu", "designer", "product designer", "senior", "who", "about", "name", "portfolio"],
  },
  {
    id: "global-background",
    projectSlug: null,
    section: "background",
    title: "Background",
    content:
      "Experience across enterprise SaaS, edtech, and cybersecurity. Worked at Calbright College, Didi, and Cisco. Systems-thinking approach bridging strategy and execution.",
    keywords: ["background", "experience", "career", "history", "edtech", "enterprise", "journey"],
  },
  {
    id: "global-education",
    projectSlug: null,
    section: "education",
    title: "Education",
    content:
      "B.A. Multimedia & Art, California State University, East Bay. Foundation in interaction design, systems thinking, and UX strategy.",
    keywords: ["education", "school", "degree", "study", "university", "academic", "cal state", "east bay", "multimedia", "studied"],
  },
  {
    id: "global-role-overview",
    projectSlug: null,
    section: "role",
    title: "Role",
    content:
      "Product strategy, workflow design, interface direction, and prototyping. Frames problems, shapes UX direction, aligns design decisions with measurable outcomes.",
    keywords: ["role", "responsibility", "what do you do", "contribution", "day to day", "product strategy"],
  },
  {
    id: "global-strengths",
    projectSlug: null,
    section: "strengths",
    title: "Strengths",
    content:
      "End-to-end product design, systems thinking, workflow architecture, design systems, and cross-functional collaboration. Simplifies complex workflows into clear, actionable experiences.",
    keywords: ["strengths", "skills", "good at", "specialties", "capabilities", "design systems", "collaboration"],
  },
  {
    id: "global-ai-workflow",
    projectSlug: null,
    section: "ai-workflow",
    title: "AI Workflow",
    content:
      "Uses AI to accelerate ideation, prototyping, and interaction exploration. AI supports the process — product judgment, systems thinking, and cross-functional execution drive the work.",
    keywords: ["ai workflow", "artificial intelligence", "tools", "chatgpt", "figma ai", "prototyping", "how do you use ai"],
  },

  // ============================
  // Calbright Student Portal
  // ============================
  {
    id: "calbright-student-summary",
    projectSlug: "calbright-student-portal",
    section: "summary",
    title: "Calbright Student Portal",
    content:
      "Redesigned the student portal to improve onboarding clarity and next-step guidance. Clearer structure, reduced cognitive load, and better navigation across the educational journey.",
    keywords: ["calbright", "student portal", "overview", "summary", "onboarding", "education", "portal"],
  },
  {
    id: "calbright-student-role",
    projectSlug: "calbright-student-portal",
    section: "role",
    title: "Calbright Student Portal — Role",
    content:
      "Led end-to-end product design and workflow direction — from research through delivery.",
    keywords: ["calbright", "student", "role", "lead", "ownership", "product design"],
  },
  {
    id: "calbright-student-problem",
    projectSlug: "calbright-student-portal",
    section: "problem",
    title: "Calbright Student Portal — Problem",
    content:
      "Students could access information but weren't guided toward the right next action. Onboarding lacked prioritization and created unnecessary cognitive load.",
    keywords: ["calbright", "student", "problem", "challenge", "pain point", "onboarding", "cognitive load", "confusion"],
  },
  {
    id: "calbright-student-approach",
    projectSlug: "calbright-student-portal",
    section: "approach",
    title: "Calbright Student Portal — Approach",
    content:
      "Restructured the experience around clearer guidance, better prioritization, and lower cognitive load. Focused on surfacing the right next step at each stage.",
    keywords: ["calbright", "student", "approach", "method", "process", "redesign", "information architecture", "prioritization"],
  },
  {
    id: "calbright-student-impact",
    projectSlug: "calbright-student-portal",
    section: "impact",
    title: "Calbright Student Portal — Impact",
    content:
      "Stronger onboarding foundation, improved clarity across the portal, 4.6/5 Hotjar satisfaction, 67% engagement rate. See Work > Student Portal Redesign.",
    keywords: ["calbright", "student", "impact", "result", "outcome", "improvement", "onboarding", "clarity"],
  },

  // ============================
  // Staff Portal
  // ============================
  {
    id: "staff-portal-summary",
    projectSlug: "staff-portal",
    section: "summary",
    title: "Staff Portal",
    content:
      "0→1 operational portal for Calbright staff. Reduced workflow fragmentation and improved access to student context and actions.",
    keywords: ["staff portal", "calbright", "overview", "summary", "operations", "dashboard"],
  },
  {
    id: "staff-portal-role",
    projectSlug: "staff-portal",
    section: "role",
    title: "Staff Portal — Role",
    content:
      "Led product design direction and workflow framing. Shaped how staff interact with student data and operational tools.",
    keywords: ["staff", "role", "lead", "design direction", "workflow framing"],
  },
  {
    id: "staff-portal-problem",
    projectSlug: "staff-portal",
    section: "problem",
    title: "Staff Portal — Problem",
    content:
      "Staff workflows were fragmented across multiple tools. Important student context was hard to access quickly, slowing decision-making.",
    keywords: ["staff", "problem", "challenge", "fragmented", "context switching", "inefficiency", "pain point"],
  },
  {
    id: "staff-portal-approach",
    projectSlug: "staff-portal",
    section: "approach",
    title: "Staff Portal — Approach",
    content:
      "Designed a clearer dashboard structure, focused information hierarchy, and stronger workflow support. Helped staff find and act on student information faster.",
    keywords: ["staff", "approach", "method", "dashboard", "information hierarchy", "workflow", "process"],
  },
  {
    id: "staff-portal-impact",
    projectSlug: "staff-portal",
    section: "impact",
    title: "Staff Portal — Impact",
    content:
      "35% faster time-to-action for staff. Improved operational clarity and streamlined daily workflows. See Work > Staff Portal 0→1.",
    keywords: ["staff", "impact", "result", "outcome", "efficiency", "operational clarity"],
  },

  // ============================
  // Didi Enterprise Platform
  // ============================
  {
    id: "didi-summary",
    projectSlug: "didi",
    section: "summary",
    title: "Didi",
    content:
      "At Didi, Wen designed enterprise operational tools for fleet management, driver operations, and business workflows at massive scale. This was the internal platform powering operations, not the consumer app.",
    keywords: ["didi", "enterprise", "overview", "summary", "platform", "mobility", "ride-hailing", "fleet", "operations"],
  },
  {
    id: "didi-role",
    projectSlug: "didi",
    section: "role",
    title: "Didi — Role",
    content:
      "At Didi, Wen designed operational dashboards, driver management workflows, and system-level product thinking. He collaborated with PMs, engineers, and operations teams to translate complex business logic into usable interfaces.",
    keywords: ["didi", "role", "contribution", "enterprise", "system design", "product designer", "dashboards", "driver management"],
  },
  {
    id: "didi-problem",
    projectSlug: "didi",
    section: "problem",
    title: "Didi — Problem",
    content:
      "Operational complexity at scale. Enterprise teams managed thousands of drivers and responded to real-time issues — but tools were fragmented, key tasks required too many steps, and context switching slowed everything down.",
    keywords: ["didi", "problem", "challenge", "complexity", "enterprise", "efficiency", "pain point", "fleet", "scale"],
  },
  {
    id: "didi-approach",
    projectSlug: "didi",
    section: "approach",
    title: "Didi — Approach",
    content:
      "Simplified multi-step operational flows, clarified system behavior through better hierarchy and status design, and reduced context switching. Designed patterns that handle edge cases at enterprise scale.",
    keywords: ["didi", "approach", "method", "simplification", "interaction design", "scalability", "enterprise ux", "hierarchy"],
  },
  {
    id: "didi-impact",
    projectSlug: "didi",
    section: "impact",
    title: "Didi — Impact",
    content:
      "Strengthened usability across enterprise tools, reduced operational friction for fleet management teams, and established scalable design patterns. Deepened experience with complex systems and high-stakes operational environments.",
    keywords: ["didi", "impact", "result", "outcome", "usability", "friction", "operations", "fleet", "patterns"],
  },

  // ============================
  // Cisco
  // ============================
  {
    id: "cisco-summary",
    projectSlug: "cisco",
    section: "summary",
    title: "Cisco",
    content:
      "Enterprise network intelligence platform (Network Assurance Engine). Led UX for telemetry dashboards and anomaly detection. Built a design system that accelerated deployment by 30%.",
    keywords: ["cisco", "enterprise", "network", "telemetry", "dashboard", "anomaly detection", "design system", "assurance engine"],
  },
  {
    id: "cisco-role",
    projectSlug: "cisco",
    section: "role",
    title: "Cisco — Role",
    content:
      "Senior UI/UX Designer. Led UX for telemetry dashboards and model-driven alert systems. Built scalable enterprise design system. Featured in Cisco Live keynote.",
    keywords: ["cisco", "role", "senior designer", "telemetry", "design system", "cisco live"],
  },
  {
    id: "cisco-impact",
    projectSlug: "cisco",
    section: "impact",
    title: "Cisco — Impact",
    content:
      "+25% operational efficiency, -20% task time, $15M+ revenue impact. Design system accelerated feature deployment by 30%. See About Me for details.",
    keywords: ["cisco", "impact", "result", "efficiency", "revenue", "design system", "deployment"],
  },

  // ============================
  // AI Explorations — Page-level
  // ============================
  {
    id: "ai-explorations-summary",
    projectSlug: "ai-explorations",
    section: "summary",
    title: "Explorations",
    content:
      "Selected prototypes and experiments across workflow design, interface concepts, and early-stage implementation. Includes design methodology and prototype showcase. See Explorations page.",
    keywords: ["ai explorations", "overview", "summary", "ai design", "prototyping", "experiments", "ai projects"],
  },
  {
    id: "ai-explorations-role",
    projectSlug: "ai-explorations",
    section: "role",
    title: "Explorations — Role",
    content:
      "Concept framing, prototyping, and workflow experimentation. Each project tests a hypothesis about product direction or design approach.",
    keywords: ["ai explorations", "role", "concept", "prototyping", "experimentation", "lead"],
  },
  {
    id: "ai-explorations-problem",
    projectSlug: "ai-explorations",
    section: "problem",
    title: "Explorations — Problem",
    content:
      "Traditional design workflows can be slow when exploring many directions. These experiments test whether modern tools can close the gap between ideation and meaningful prototypes.",
    keywords: ["ai explorations", "problem", "challenge", "slow", "traditional", "ideation", "speed"],
  },
  {
    id: "ai-explorations-approach",
    projectSlug: "ai-explorations",
    section: "approach",
    title: "Explorations — Approach",
    content:
      "Uses modern tools (Figma, ChatGPT, code prototyping) to accelerate ideation and prototype generation. Each project tests a different hypothesis about product direction.",
    keywords: ["ai explorations", "approach", "method", "chatgpt", "figma ai", "adobe firefly", "tools", "process"],
  },
  {
    id: "ai-explorations-impact",
    projectSlug: "ai-explorations",
    section: "impact",
    title: "Explorations — Impact",
    content:
      "Faster concept testing, broader exploration, and new ways to communicate product ideas. See Explorations page for full showcase.",
    keywords: ["ai explorations", "impact", "result", "outcome", "speed", "concept testing", "communication"],
  },

  // ============================
  // AI Explorations — Market Landscape / Capability Benchmark
  // ============================
  {
    id: "ai-market-landscape",
    projectSlug: "ai-explorations",
    section: "ai-market-landscape",
    title: "Market Landscape",
    content:
      "Structured comparison of current tools across reasoning, creative work, and workflow support. Evaluated through public benchmarks and real workflow reliability.",
    keywords: ["ai market landscape", "benchmark", "comparison", "gpt", "gemini", "claude", "tools", "evaluation", "ai capability"],
  },
  {
    id: "ai-capability-benchmark",
    projectSlug: "ai-explorations",
    section: "ai-capability-benchmark",
    title: "Capability Benchmark",
    content:
      "Compares tools by how well they support real workflow needs — reasoning, prototyping, validation, and execution. Focused on practical reliability, not just benchmark scores.",
    keywords: ["ai capability benchmark", "benchmark", "compare", "ai tools", "reasoning", "engineering", "evaluation", "hle"],
  },

  // ============================
  // Explorations — Methodology
  // ============================
  {
    id: "ai-methodology",
    projectSlug: "ai-explorations",
    section: "ai-methodology",
    title: "Design Methodology",
    content:
      "Five stages: Discover (research), Define (problem framing), Ideate (divergent exploration), Design (hi-fi prototypes & systems), Test (analytics & feedback). Modern tools accelerate where they add real leverage.",
    keywords: ["ai methodology", "methodology", "design process", "discover", "define", "ideate", "prototype", "test", "iterate", "ai design"],
  },
  {
    id: "ai-research-modal",
    projectSlug: "ai-explorations",
    section: "ai-research",
    title: "Research Practice",
    content:
      "30+ research loops across tools and workflows, testing where modern tools genuinely support product design tasks vs. where they just generate output.",
    keywords: ["ai research", "research modal", "research loops", "synthesis", "design thinking", "exploration"],
  },
  {
    id: "ai-native-meaning",
    projectSlug: "ai-explorations",
    section: "ai-native",
    title: "Modern Tooling Approach",
    content:
      "Using modern tools as a natural part of the workflow — for research, prototyping, content framing, and validation — not as a novelty layer or afterthought.",
    keywords: ["ai-native", "ai native", "meaning", "definition", "what does ai-native mean", "workflow"],
  },

  // ============================
  // AI Project Showcase — JobHatch
  // ============================
  {
    id: "ai-jobhatch-summary",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch",
    content:
      "Career platform prototype. Combines resume analysis, match scoring, and gamified progress to make job search clearer and more actionable. See Explorations > JobHatch.",
    keywords: ["jobhatch", "job hatch", "career", "resume", "job search", "ai project", "match scoring", "gamified"],
  },
  {
    id: "ai-jobhatch-problem",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Problem",
    content:
      "Job search tools give too many listings with too little guidance. Users can't understand their fit or improve over time.",
    keywords: ["jobhatch", "problem", "job search", "overwhelming", "guidance", "design question"],
  },
  {
    id: "ai-jobhatch-approach",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Approach",
    content:
      "Resume analysis, match-based tracking, and a token system where completed actions unlock resume upgrades and personalized support. Structured around helping users understand fit and improve.",
    keywords: ["jobhatch", "approach", "resume analysis", "match tracking", "token", "gamification"],
  },
  {
    id: "ai-jobhatch-why",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Why It Matters",
    content:
      "Shows how to transform an opaque process into something structured and motivating — user empowerment through feedback, progress tracking, and clarity.",
    keywords: ["jobhatch", "why", "matters", "empowerment", "motivation", "ai value"],
  },
  {
    id: "ai-jobhatch-process",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — How It Was Built",
    content:
      "Started with a real user frustration, framed the design question, brainstormed the concept, prototyped in Figma, and iterated on interaction patterns for the token system.",
    keywords: ["jobhatch", "process", "how", "create", "build", "made", "prototype", "figma", "chatgpt"],
  },

  // ============================
  // AI Project Showcase — Where AI Excels Today
  // ============================
  {
    id: "ai-where-excels-summary",
    projectSlug: "ai-explorations",
    section: "showcase-where-excels",
    title: "Where AI Excels Today",
    content:
      "Research system evaluating where current tools are strongest across creative work, workflow support, and execution. Focused on practical reliability, not hype.",
    keywords: ["where ai excels", "ai excels", "research", "ai comparison", "ai strengths", "creative", "workflow"],
  },
  {
    id: "ai-where-excels-approach",
    projectSlug: "ai-explorations",
    section: "showcase-where-excels",
    title: "Where AI Excels Today — Approach",
    content:
      "Evaluated through public performance data and real workflow reliability. Focused on practical use cases, not just impressive benchmarks.",
    keywords: ["where ai excels", "approach", "evaluation", "practical", "benchmark", "workflow reliability"],
  },
  {
    id: "ai-where-excels-why",
    projectSlug: "ai-explorations",
    section: "showcase-where-excels",
    title: "Where AI Excels Today — Why It Matters",
    content:
      "Translates hype into practical clarity — which tools perform well at which stages of real work.",
    keywords: ["where ai excels", "why", "matters", "practical", "clarity", "tool selection"],
  },

  // ============================
  // AI Project Showcase — World Cup Data Lab
  // ============================
  {
    id: "ai-worldcup-summary",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab",
    content:
      "Interactive prototype turning tournament data into an insight-driven fan experience. Team comparisons, win probabilities, and bilingual support (EN/CN).",
    keywords: ["world cup", "data lab", "sports", "matchup", "interactive", "tournament", "fan experience", "data"],
  },
  {
    id: "ai-worldcup-approach",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — Approach",
    content:
      "Structured data + comparison logic to help users navigate complexity and discover insights faster. Includes team matchups, probabilities, and bilingual support.",
    keywords: ["world cup", "approach", "data visualization", "comparison", "bilingual", "probability"],
  },
  {
    id: "ai-worldcup-why",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — Why It Matters",
    content:
      "Shows ability to build interactive, data-rich prototypes that make complex information engaging and explorable.",
    keywords: ["world cup", "why", "matters", "data", "interactive", "prototype"],
  },
  {
    id: "ai-worldcup-process",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — How It Was Built",
    content:
      "Combined structured tournament data with comparison logic. Designed interactive interface for matchups, win probabilities, and team strengths. Bilingual support in English and Chinese.",
    keywords: ["world cup", "process", "how", "create", "build", "made", "data", "bilingual", "prototype"],
  },

  // ============================
  // AI Project Showcase — Synchronize Orientation
  // ============================
  {
    id: "ai-sync-orientation-summary",
    projectSlug: "ai-explorations",
    section: "showcase-sync",
    title: "Synchronize Orientation",
    content:
      "Prototype for real-time student-staff sync. Students complete orientation steps while staff monitors progress — shared visibility across both portals.",
    keywords: ["synchronize", "orientation", "student staff sync", "checklist", "onboarding", "calbright", "real time"],
  },
  {
    id: "ai-sync-orientation-problem",
    projectSlug: "ai-explorations",
    section: "showcase-sync",
    title: "Synchronize Orientation — Problem",
    content:
      "How can student orientation progress be visible to staff in real time, without manual check-ins? Traditional tracking creates information gaps that slow support.",
    keywords: ["synchronize", "orientation", "problem", "visibility", "tracking", "information gap"],
  },
  {
    id: "ai-sync-orientation-approach",
    projectSlug: "ai-explorations",
    section: "showcase-sync",
    title: "Synchronize Orientation — Approach",
    content:
      "Designed orientation flows around student needs — enrollment steps, checklist progress, and key to-dos — with real-time staff visibility into completion states.",
    keywords: ["synchronize", "orientation", "approach", "enrollment", "progress tracking", "staff visibility"],
  },

  // ============================
  // AI Project Showcase — Dialpad Modal
  // ============================
  {
    id: "ai-dialpad-summary",
    projectSlug: "ai-explorations",
    section: "showcase-dialpad",
    title: "Dialpad Modal",
    content:
      "Staff-facing dialpad for calling students directly from the portal. Streamlines outreach, follow-ups, and support without leaving the workflow.",
    keywords: ["dialpad", "modal", "calling", "staff", "outreach", "voicemail", "call summary", "ai summary"],
  },
  {
    id: "ai-dialpad-problem",
    projectSlug: "ai-explorations",
    section: "showcase-dialpad",
    title: "Dialpad Modal — Problem",
    content:
      "Staff had to switch between portal and separate communication tools, losing context during outreach.",
    keywords: ["dialpad", "problem", "task switching", "context loss", "outreach", "communication"],
  },
  {
    id: "ai-dialpad-approach",
    projectSlug: "ai-explorations",
    section: "showcase-dialpad",
    title: "Dialpad Modal — Approach",
    content:
      "Embedded outreach actions within the staff portal. Direct calling, recent contacts, contextual student info, call summaries, and suggested next actions.",
    keywords: ["dialpad", "approach", "task switching", "embedded", "call recording", "next actions"],
  },

  // ============================
  // AI Project Showcase — Project Liquid Glass
  // ============================
  {
    id: "ai-liquid-glass-summary",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass",
    content:
      "Coded design system with reusable glassmorphism UI components. Bridges visual exploration with implementation-ready foundations — built in code, not just Figma.",
    keywords: ["liquid glass", "project liquid glass", "design system", "glassmorphism", "coded prototype", "ui components", "design infrastructure", "reusable", "glass"],
  },
  {
    id: "ai-liquid-glass-problem",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — Problem",
    content:
      "Most glassmorphism work stays in design tools as one-off visuals. Can glass-style UI be built as a real component system with variants, tokens, and production-ready patterns?",
    keywords: ["liquid glass", "problem", "design system", "glassmorphism", "implementation", "reusable", "visual exploration"],
  },
  {
    id: "ai-liquid-glass-process",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — How It Was Built",
    content:
      "Defined visual language (blur, transparency, surfaces), then coded each component as reusable units with variants and design tokens. Prototyped in code, iterated on real browser rendering.",
    keywords: ["liquid glass", "process", "how", "create", "build", "made", "system thinking", "component architecture", "coded", "tokens", "variants"],
  },
  {
    id: "ai-liquid-glass-why",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — Why It Matters",
    content:
      "Demonstrates scalable system thinking — design decisions translated into reusable, maintainable code. Design infrastructure, not one-off visuals.",
    keywords: ["liquid glass", "why", "matters", "system thinking", "design infrastructure", "implementation", "scalable", "reusable"],
  },

  // ============================
  // AI Project Showcase — General
  // ============================
  {
    id: "ai-showcase-overview",
    projectSlug: "ai-explorations",
    section: "showcase-overview",
    title: "Prototype Showcase",
    content:
      "Six prototypes: JobHatch (career platform), Where AI Excels (research), World Cup Data Lab (data experience), Synchronize Orientation (student-staff sync), Dialpad Modal (outreach tool), Project Liquid Glass (design system). See Explorations page.",
    keywords: ["ai project showcase", "showcase", "prototypes", "projects", "jobhatch", "world cup", "synchronize", "dialpad", "where ai excels", "liquid glass"],
  },
  {
    id: "ai-best-prototyping",
    projectSlug: "ai-explorations",
    section: "showcase-overview",
    title: "Best Prototyping Example",
    content:
      "JobHatch for full product concept prototyping. Synchronize Orientation for real-time state sync between two user types.",
    keywords: ["prototyping", "best prototype", "ai prototyping", "rapid", "concept development"],
  },

  // ============================
  // Ask Wen — AI Knowledge Retrieval Assistant
  // ============================
  {
    id: "ask-wen-summary",
    projectSlug: "ask-wen",
    section: "summary",
    title: "Portfolio Guide",
    content:
      "Portfolio guide designed and built by Wen. Helps visitors explore projects through natural questions with context awareness and session persistence.",
    keywords: ["ask wen", "assistant", "chatbot", "knowledge retrieval", "portfolio", "conversational"],
  },
  {
    id: "ask-wen-problem",
    projectSlug: "ask-wen",
    section: "problem",
    title: "Portfolio Guide — Problem",
    content:
      "Portfolio visitors scan without finding relevant content. Static navigation requires guesswork and doesn't adapt to what someone is looking for.",
    keywords: ["ask wen", "problem", "navigation", "discoverability", "scanning", "static content"],
  },
  {
    id: "ask-wen-approach",
    projectSlug: "ask-wen",
    section: "approach",
    title: "Portfolio Guide — Approach",
    content:
      "Retrieval-oriented conversation with intent detection, entity-aware scoring, context boosting, and conversation memory. Answers grounded in real portfolio content.",
    keywords: ["ask wen", "approach", "retrieval", "intent detection", "scoring", "context", "architecture"],
  },
  {
    id: "ask-wen-role",
    projectSlug: "ask-wen",
    section: "role",
    title: "Portfolio Guide — Role",
    content:
      "Full design and prototype ownership: conversation flow, retrieval UX, knowledge architecture, interaction modeling, and implementation.",
    keywords: ["ask wen", "role", "design", "prototyping", "information architecture", "implementation"],
  },
  {
    id: "ask-wen-product-behavior",
    projectSlug: "ask-wen",
    section: "product-behavior",
    title: "Portfolio Guide — Product Behavior",
    content:
      "Retrieves section-level content, not full pages. Intent detection, entity boosts, page-level context, and conversation memory. Asks for clarification when uncertain.",
    keywords: ["ask wen", "product behavior", "retrieval", "section level", "intent", "disambiguation", "trust"],
  },
  {
    id: "ask-wen-impact",
    projectSlug: "ask-wen",
    section: "impact",
    title: "Portfolio Guide — Impact",
    content:
      "Turns static portfolio content into a guided, navigable experience. Working prototype with real retrieval logic and implementation-aware interaction design.",
    keywords: ["ask wen", "impact", "product direction", "knowledge access", "testable", "retrieval"],
  },
];
