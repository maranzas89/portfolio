export const portfolioProfile = {
  name: "Wen Liu",
  title: "Senior Product Designer",
  summary:
    "I design product experiences across education, enterprise, and AI-enabled workflows.",
  background:
    "I have experience spanning edtech, enterprise platforms, and AI-assisted design. I focus on turning complex systems into clear, guided user experiences.",
  education:
    "I studied Multimedia & Art at California State University, East Bay, where I built a foundation in interaction design, systems thinking, and user experience strategy.",
  strengths: [
    "End-to-end product design",
    "Design systems",
    "AI workflow exploration",
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
];

export const faqEntries = [
  {
    id: "role-overview",
    triggers: ["what is your role", "what was your role", "what did you do", "your responsibility", "your contribution", "tell me about your role"],
    answer:
      "I work across product strategy, workflow design, interface direction, and prototype thinking. My role often includes framing problems, shaping UX direction, and aligning design decisions with meaningful outcomes.",
    relatedProjectSlug: null,
  },
  {
    id: "ai-workflow",
    triggers: ["how do you use ai", "ai workflow", "your ai process", "what ai tools do you use", "how does ai fit into your work"],
    answer:
      "I use AI to accelerate ideation, explore interface directions, support content framing, and prototype product concepts more quickly.",
    relatedProjectSlug: "ai-explorations",
  },
  {
    id: "impact",
    triggers: ["what was the impact", "what were the results", "what outcome", "measurable impact", "how did it perform"],
    answer:
      "My work focuses on improving clarity, reducing friction, and building stronger product foundations. Depending on the project, impact can show up through usability improvements, workflow efficiency, better onboarding guidance, or stronger operational support.",
    relatedProjectSlug: null,
  },
  {
    id: "start-here",
    triggers: ["which project", "where should i start", "start with", "best project", "what should i look at first"],
    answer:
      "A strong place to start is Calbright Student Portal if you want to see end-to-end product thinking, or AI Explorations if you want to see how I apply AI in design workflows.",
    relatedProjectSlug: null,
  },
];

// --- Content Chunks for knowledge base retrieval ---

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
      "My name is Wen Liu. I'm a Senior Product Designer focused on product experiences across education, enterprise, and AI-enabled workflows. I turn complex systems into clear, guided user experiences.",
    keywords: ["wen liu", "designer", "product designer", "senior", "who", "about", "name", "portfolio"],
  },
  {
    id: "global-background",
    projectSlug: null,
    section: "background",
    title: "Background",
    content:
      "I have experience spanning edtech, enterprise platforms, and AI-assisted design. My career includes work at Calbright College, Didi, and independent AI explorations. I bring a systems-thinking approach to product design, bridging strategy and execution.",
    keywords: ["background", "experience", "career", "history", "edtech", "enterprise", "journey"],
  },
  {
    id: "global-education",
    projectSlug: null,
    section: "education",
    title: "Education",
    content:
      "I studied Multimedia & Art at California State University, East Bay. That's where I built my foundation in interaction design, systems thinking, and user experience strategy.",
    keywords: ["education", "school", "degree", "study", "university", "academic", "cal state", "east bay", "multimedia"],
  },
  {
    id: "global-role-overview",
    projectSlug: null,
    section: "role",
    title: "Role",
    content:
      "As a Senior Product Designer, I work across product strategy, workflow design, interface direction, and prototype thinking. My role includes framing problems, shaping UX direction, and aligning design decisions with meaningful outcomes.",
    keywords: ["role", "responsibility", "what do you do", "contribution", "day to day", "product strategy"],
  },
  {
    id: "global-strengths",
    projectSlug: null,
    section: "strengths",
    title: "Strengths",
    content:
      "My core strengths include end-to-end product design, design systems, AI workflow exploration, and cross-functional collaboration. I excel at simplifying complex workflows into clear, actionable experiences.",
    keywords: ["strengths", "skills", "good at", "specialties", "capabilities", "design systems", "collaboration"],
  },
  {
    id: "global-ai-workflow",
    projectSlug: null,
    section: "ai-workflow",
    title: "AI Workflow",
    content:
      "I integrate AI into my design workflow for ideation, rapid prototyping, interaction exploration, content framing, and system thinking. I view AI as a tool to accelerate creative exploration rather than replace design judgment.",
    keywords: ["ai", "artificial intelligence", "workflow", "tools", "chatgpt", "figma ai", "prototyping", "how do you use ai"],
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
      "On Calbright Student Portal, I redesigned the portal experience to improve onboarding clarity and next-step guidance, helping students navigate their educational journey with clearer structure and reduced cognitive load.",
    keywords: ["calbright", "student portal", "overview", "summary", "onboarding", "education", "portal"],
  },
  {
    id: "calbright-student-role",
    projectSlug: "calbright-student-portal",
    section: "role",
    title: "Calbright Student Portal — Role",
    content:
      "On Calbright Student Portal, I led end-to-end product design and workflow direction, owning the experience from research through delivery.",
    keywords: ["calbright", "student", "role", "lead", "ownership", "product design"],
  },
  {
    id: "calbright-student-problem",
    projectSlug: "calbright-student-portal",
    section: "problem",
    title: "Calbright Student Portal — Problem",
    content:
      "On Calbright Student Portal, the core challenge was that students could access information but the experience didn't clearly guide them toward the right next action. The onboarding flow lacked prioritization and created unnecessary cognitive load.",
    keywords: ["calbright", "student", "problem", "challenge", "pain point", "onboarding", "cognitive load", "confusion"],
  },
  {
    id: "calbright-student-approach",
    projectSlug: "calbright-student-portal",
    section: "approach",
    title: "Calbright Student Portal — Approach",
    content:
      "On Calbright Student Portal, I restructured the experience around clearer guidance, better prioritization, and lower cognitive load. My design focused on surfacing the right next step at each stage of the student journey.",
    keywords: ["calbright", "student", "approach", "method", "process", "redesign", "information architecture", "prioritization"],
  },
  {
    id: "calbright-student-impact",
    projectSlug: "calbright-student-portal",
    section: "impact",
    title: "Calbright Student Portal — Impact",
    content:
      "On Calbright Student Portal, I created a stronger foundation for onboarding, improved clarity across the portal, and made the student experience significantly easier to navigate.",
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
      "On Staff Portal, I designed an operational portal concept to help Calbright staff access the right student context and actions more efficiently, reducing fragmentation in daily workflows.",
    keywords: ["staff portal", "calbright", "overview", "summary", "operations", "dashboard"],
  },
  {
    id: "staff-portal-role",
    projectSlug: "staff-portal",
    section: "role",
    title: "Staff Portal — Role",
    content:
      "On Staff Portal, I led product design direction and workflow framing, shaping how staff interact with student data and operational tools.",
    keywords: ["staff", "role", "lead", "design direction", "workflow framing"],
  },
  {
    id: "staff-portal-problem",
    projectSlug: "staff-portal",
    section: "problem",
    title: "Staff Portal — Problem",
    content:
      "On Staff Portal, the core challenge was that staff workflows were fragmented across multiple tools and interfaces. Important student context was difficult to access quickly, slowing down decision-making and support.",
    keywords: ["staff", "problem", "challenge", "fragmented", "context switching", "inefficiency", "pain point"],
  },
  {
    id: "staff-portal-approach",
    projectSlug: "staff-portal",
    section: "approach",
    title: "Staff Portal — Approach",
    content:
      "On Staff Portal, I explored a clearer dashboard structure, more focused information hierarchy, and stronger workflow support to help staff find and act on student information faster.",
    keywords: ["staff", "approach", "method", "dashboard", "information hierarchy", "workflow", "process"],
  },
  {
    id: "staff-portal-impact",
    projectSlug: "staff-portal",
    section: "impact",
    title: "Staff Portal — Impact",
    content:
      "On Staff Portal, I improved operational clarity and established a stronger direction for staff workflow efficiency, enabling faster access to student context and streamlined daily operations.",
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
      "At Didi, I focused on workflow clarity, operational efficiency, and product scalability for a large-scale enterprise mobility platform.",
    keywords: ["didi", "enterprise", "overview", "summary", "platform", "mobility", "ride-hailing"],
  },
  {
    id: "didi-role",
    projectSlug: "didi",
    section: "role",
    title: "Didi — Role",
    content:
      "At Didi, I contributed to product design across enterprise workflows and system-level thinking, helping shape complex operational tools at scale.",
    keywords: ["didi", "role", "contribution", "enterprise", "system design"],
  },
  {
    id: "didi-problem",
    projectSlug: "didi",
    section: "problem",
    title: "Didi — Problem",
    content:
      "At Didi, the core challenge was that complex product logic and operational demands made it difficult for users to move efficiently through key tasks. The platform needed clearer structure to support high-volume enterprise operations.",
    keywords: ["didi", "problem", "challenge", "complexity", "enterprise", "efficiency", "pain point"],
  },
  {
    id: "didi-approach",
    projectSlug: "didi",
    section: "approach",
    title: "Didi — Approach",
    content:
      "At Didi, I simplified flows, clarified system behavior, and supported a more scalable product experience. My work involved interaction design and enterprise UX patterns.",
    keywords: ["didi", "approach", "method", "simplification", "interaction design", "scalability", "enterprise ux"],
  },
  {
    id: "didi-impact",
    projectSlug: "didi",
    section: "impact",
    title: "Didi — Impact",
    content:
      "At Didi, I helped strengthen usability, reduce friction, and support more effective enterprise operations across the platform.",
    keywords: ["didi", "impact", "result", "outcome", "usability", "friction", "operations"],
  },

  // ============================
  // AI Explorations
  // ============================
  {
    id: "ai-explorations-summary",
    projectSlug: "ai-explorations",
    section: "summary",
    title: "AI Explorations",
    content:
      "In my AI Explorations, I explore AI-assisted design and prototyping focused on product thinking, workflow acceleration, and interface experimentation. This includes projects like Dialpad Modal and Synchronize Orientation.",
    keywords: ["ai explorations", "overview", "summary", "ai design", "prototyping", "experiments"],
  },
  {
    id: "ai-explorations-role",
    projectSlug: "ai-explorations",
    section: "role",
    title: "AI Explorations — Role",
    content:
      "In my AI Explorations, I lead concept framing, prototyping, and AI workflow experimentation, exploring how AI tools can enhance the design process.",
    keywords: ["ai", "role", "concept", "prototyping", "experimentation", "lead"],
  },
  {
    id: "ai-explorations-problem",
    projectSlug: "ai-explorations",
    section: "problem",
    title: "AI Explorations — Problem",
    content:
      "Traditional design workflows can be slow when exploring many product directions quickly. I saw a gap between ideation speed and the time required to produce meaningful prototypes.",
    keywords: ["ai", "problem", "challenge", "slow", "traditional", "ideation", "speed"],
  },
  {
    id: "ai-explorations-approach",
    projectSlug: "ai-explorations",
    section: "approach",
    title: "AI Explorations — Approach",
    content:
      "I use AI tools like ChatGPT, Figma AI, and Adobe Firefly to accelerate ideation, interaction exploration, content framing, and prototype generation across multiple experimental projects.",
    keywords: ["ai", "approach", "method", "chatgpt", "figma ai", "adobe firefly", "tools", "process"],
  },
  {
    id: "ai-explorations-impact",
    projectSlug: "ai-explorations",
    section: "impact",
    title: "AI Explorations — Impact",
    content:
      "Through my AI Explorations, I've expanded my exploration speed, supported faster concept testing, and created new ways to communicate product ideas through AI-assisted design workflows.",
    keywords: ["ai", "impact", "result", "outcome", "speed", "concept testing", "communication"],
  },
];
