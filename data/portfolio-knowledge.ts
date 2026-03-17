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
    title: "Ask Wen — AI Knowledge Retrieval Assistant",
    summary:
      "A retrieval-based conversational assistant I designed and prototyped to help users navigate my portfolio through natural questions instead of static browsing.",
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
      "I'm Wen Liu, a Senior Product Designer focused on turning complex systems into clear, guided experiences. My work spans education (Calbright College), enterprise platforms (Didi, Cisco), and AI-assisted design exploration. I'm especially drawn to problems involving workflow clarity, onboarding, and decision support. I also actively explore how AI tools can enhance the design process — from ideation to prototyping.",
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
      "If I had to pick one, I'd say JobHatch. It's the project where I felt the strongest connection between AI capability and a genuine user problem — the frustration of job searching without clear feedback. I liked how the concept brought together resume analysis, match scoring, and a gamified improvement loop. It felt like a real product direction, not just a demo. You can find it in AI Explorations > JobHatch.",
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
      "A strong example is Calbright Student Portal. I focused on redesigning the experience to make onboarding clearer and help students understand the right next step more easily. What makes it one of my strongest projects is that it brings together product thinking, workflow design, clarity of information, and a meaningful user problem.",
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
      "Calbright Student Portal is probably the clearest example. It shows how I approach design as both a systems problem and a user guidance problem. I was focused not just on screens, but on helping people understand what to do next, reducing friction, and creating a stronger product foundation.",
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
      "I'm especially drawn to problems where complexity needs to be translated into clarity. That often means onboarding, workflow design, decision support, or systems that need better structure. I enjoy taking something fragmented or cognitively heavy and turning it into an experience that feels more guided, usable, and intentional.",
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
    ],
    answer:
      "My design approach is grounded in clarity, structure, and decision support. I usually start by understanding where users get stuck, what context they need, and what actions matter most. From there, I focus on simplifying the workflow, improving hierarchy, and making the next step feel obvious.",
    relatedProjectSlug: null,
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
      "I think one differentiator in my work is that I'm not only focused on interface polish — I pay close attention to workflow logic, product clarity, and how people move through complex systems. I care about designing experiences that feel intuitive, but also hold up at the systems level.",
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
      "At Calbright, I think about AI as a way to improve clarity, speed up exploration, and support better decision-making in the design process. I use it to help with ideation, content framing, workflow exploration, and early prototyping, especially when I'm working through complex service or portal experiences.",
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
      "At Didi, my work was centered more on complex workflows, operational clarity, and enterprise-scale product thinking. AI wasn't the headline of the work itself, but the way I think today about AI absolutely connects back to that experience — especially around systems, scale, and how intelligent tools can reduce complexity and support better decisions.",
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
      "At Cisco, I worked on AI-driven Network Assurance Engine — an enterprise network intelligence platform. I led UX for telemetry dashboards and model-driven alert systems supporting anomaly detection. That experience deeply shaped how I think about AI in product design: not as a feature layer, but as a way to support clarity, prioritization, and decision-making at enterprise scale.",
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
      "I use AI in my career as a multiplier for thinking and exploration. It helps me move faster in ideation, compare directions, frame content, prototype concepts, and test possibilities earlier. I still rely on design judgment for the final decisions, but AI helps me explore more broadly and work more efficiently.",
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
      "In my life, I use AI as a practical everyday tool for thinking, organizing, learning, and exploring ideas. Sometimes that means helping structure information more clearly, sometimes it means brainstorming, and sometimes it's just a faster way to work through questions or possibilities in daily life.",
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
      "I use AI to accelerate ideation, explore interaction directions, support content framing, and prototype concepts more quickly. I see it as a creative and strategic amplifier — something that helps me move faster and explore more broadly, while still relying on design judgment to shape the final outcome.",
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
      "I'd usually suggest starting with Calbright Student Portal if you want to see my end-to-end product thinking. If you're more interested in how I apply AI in practice, then AI Explorations is a strong place to start.",
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
      "My enterprise work taught me how important structure, scalability, and operational clarity are. In products like Didi, the challenge is not only usability at the screen level, but also how complex systems support real workflows under pressure. That experience made me much stronger at thinking through edge cases, hierarchy, and system behavior.",
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
      "AI Explorations is the clearest example. It shows how I use AI not just as a novelty, but as part of a real workflow for concept development, prototyping, and design exploration. It reflects how I think about AI as something practical, iterative, and deeply connected to product work.",
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
      "I'm strongest in roles where I can connect product thinking, workflow design, and interface direction. That usually means helping teams frame the problem clearly, design a more effective user experience, and build a solution that feels both intuitive and structurally sound.",
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
      "I work across product strategy, workflow design, interface direction, and prototype thinking. My role often includes framing problems, shaping UX direction, and aligning design decisions with meaningful outcomes.",
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
      "My work focuses on improving clarity, reducing friction, and building stronger product foundations. Depending on the project, impact can show up through usability improvements, workflow efficiency, better onboarding guidance, or stronger operational support.",
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
      "This is Ask Wen — a retrieval-based knowledge assistant I designed and prototyped for this portfolio. Instead of browsing static pages, you can ask natural questions and get grounded answers drawn from my project content. I designed the conversation flow, retrieval logic, knowledge structure, and interaction model, then built it as a working prototype with page-aware context, intent detection, and session persistence.",
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
      "JobHatch and World Cup Data Lab explore AI from different angles. JobHatch is a career platform focused on helping users improve through AI-driven resume analysis, match scoring, and gamified progress — it's about empowerment and actionable feedback. World Cup Data Lab is a data-rich interactive prototype that uses AI to turn tournament data into insight-driven fan experiences — team comparisons, win probabilities, and bilingual support. JobHatch is more product-oriented (solving a real user problem), while World Cup Data Lab is more exploratory (showing how AI can make complex data engaging). You can find both in AI Explorations.",
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
    keywords: ["education", "school", "degree", "study", "university", "academic", "cal state", "east bay", "multimedia", "studied"],
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
      "At Didi (the world's largest ride-hailing platform), I worked on the enterprise side — designing complex operational tools that supported fleet management, driver operations, and business workflows at massive scale. This wasn't the consumer app; it was the internal platform that powered how Didi operated behind the scenes.",
    keywords: ["didi", "enterprise", "overview", "summary", "platform", "mobility", "ride-hailing", "fleet", "operations"],
  },
  {
    id: "didi-role",
    projectSlug: "didi",
    section: "role",
    title: "Didi — Role",
    content:
      "At Didi, I was a product designer working on enterprise-facing tools. I contributed to the design of operational dashboards, driver management workflows, and system-level product thinking. My role involved collaborating with PMs, engineers, and operations teams to translate complex business logic into usable interfaces.",
    keywords: ["didi", "role", "contribution", "enterprise", "system design", "product designer", "dashboards", "driver management"],
  },
  {
    id: "didi-problem",
    projectSlug: "didi",
    section: "problem",
    title: "Didi — Problem",
    content:
      "At Didi, the core challenge was operational complexity at scale. Enterprise teams needed to manage thousands of drivers, monitor fleet performance, and respond to real-time operational issues — but the tools were fragmented and hard to navigate. Key tasks required too many steps and too much context switching.",
    keywords: ["didi", "problem", "challenge", "complexity", "enterprise", "efficiency", "pain point", "fleet", "scale"],
  },
  {
    id: "didi-approach",
    projectSlug: "didi",
    section: "approach",
    title: "Didi — Approach",
    content:
      "At Didi, I simplified multi-step operational flows, clarified system behavior through better visual hierarchy and status design, and supported a more scalable product architecture. I focused on reducing context switching, surfacing the right information at the right time, and designing patterns that could handle edge cases at enterprise scale.",
    keywords: ["didi", "approach", "method", "simplification", "interaction design", "scalability", "enterprise ux", "hierarchy"],
  },
  {
    id: "didi-impact",
    projectSlug: "didi",
    section: "impact",
    title: "Didi — Impact",
    content:
      "At Didi, I helped strengthen usability across enterprise tools, reduce operational friction for teams managing large fleets, and establish design patterns that supported more effective enterprise operations. The work deepened my experience with complex systems, real-time data, and designing for high-stakes operational environments.",
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
      "At Cisco, I worked as a Senior UI/UX Designer on AI-driven Network Assurance Engine, an enterprise network intelligence platform. I led UX for telemetry dashboards and model-driven alert systems supporting anomaly detection, and built a scalable enterprise design system that accelerated feature deployment by 30%.",
    keywords: ["cisco", "enterprise", "network", "telemetry", "dashboard", "anomaly detection", "design system", "assurance engine"],
  },
  {
    id: "cisco-role",
    projectSlug: "cisco",
    section: "role",
    title: "Cisco — Role",
    content:
      "At Cisco, I served as a Senior UI/UX Designer leading UX for complex telemetry dashboards and model-driven alert systems. I also built a scalable enterprise design system and contributed to initiatives featured in an executive keynote at Cisco Live.",
    keywords: ["cisco", "role", "senior designer", "telemetry", "design system", "cisco live"],
  },
  {
    id: "cisco-impact",
    projectSlug: "cisco",
    section: "impact",
    title: "Cisco — Impact",
    content:
      "At Cisco, I improved operational efficiency by 25%, reduced task time by 20%, and contributed to over $15M in revenue impact. The design system I built accelerated feature deployment by 30% across the platform.",
    keywords: ["cisco", "impact", "result", "efficiency", "revenue", "design system", "deployment"],
  },

  // ============================
  // AI Explorations — Page-level
  // ============================
  {
    id: "ai-explorations-summary",
    projectSlug: "ai-explorations",
    section: "summary",
    title: "AI Explorations",
    content:
      "In my AI Explorations, I explore AI-assisted design and prototyping focused on product thinking, workflow acceleration, and interface experimentation. The page includes an AI market landscape analysis, my design methodology, and a showcase of five AI-native prototype projects.",
    keywords: ["ai explorations", "overview", "summary", "ai design", "prototyping", "experiments", "ai projects"],
  },
  {
    id: "ai-explorations-role",
    projectSlug: "ai-explorations",
    section: "role",
    title: "AI Explorations — Role",
    content:
      "In my AI Explorations, I lead concept framing, prototyping, and AI workflow experimentation, exploring how AI tools can enhance the design process across research, ideation, and execution.",
    keywords: ["ai explorations", "role", "concept", "prototyping", "experimentation", "lead"],
  },
  {
    id: "ai-explorations-problem",
    projectSlug: "ai-explorations",
    section: "problem",
    title: "AI Explorations — Problem",
    content:
      "Traditional design workflows can be slow when exploring many product directions quickly. I saw a gap between ideation speed and the time required to produce meaningful prototypes, and I wanted to test whether AI could close that gap practically.",
    keywords: ["ai explorations", "problem", "challenge", "slow", "traditional", "ideation", "speed"],
  },
  {
    id: "ai-explorations-approach",
    projectSlug: "ai-explorations",
    section: "approach",
    title: "AI Explorations — Approach",
    content:
      "I use AI tools like ChatGPT, Figma AI, and Adobe Firefly to accelerate ideation, interaction exploration, content framing, and prototype generation. Each project tests a different hypothesis about where AI creates real leverage in the design process.",
    keywords: ["ai explorations", "approach", "method", "chatgpt", "figma ai", "adobe firefly", "tools", "process"],
  },
  {
    id: "ai-explorations-impact",
    projectSlug: "ai-explorations",
    section: "impact",
    title: "AI Explorations — Impact",
    content:
      "Through my AI Explorations, I've expanded my exploration speed, supported faster concept testing, and created new ways to communicate product ideas through AI-assisted design workflows.",
    keywords: ["ai explorations", "impact", "result", "outcome", "speed", "concept testing", "communication"],
  },

  // ============================
  // AI Explorations — Market Landscape / Capability Benchmark
  // ============================
  {
    id: "ai-market-landscape",
    projectSlug: "ai-explorations",
    section: "ai-market-landscape",
    title: "AI Market Landscape",
    content:
      "I maintain a structured AI market landscape that compares current tools across reasoning, engineering, creative work, and workflow support. It covers products like GPT-5.4 Pro, Gemini 3.1 Pro, Claude 4.6, and validation tools like Maze and Hotjar. I evaluate tools through two layers: public performance data and real workflow reliability.",
    keywords: ["ai market landscape", "benchmark", "comparison", "gpt", "gemini", "claude", "tools", "evaluation", "ai capability"],
  },
  {
    id: "ai-capability-benchmark",
    projectSlug: "ai-explorations",
    section: "ai-capability-benchmark",
    title: "AI Capability Benchmark",
    content:
      "I define AI Capability Benchmark as a structured way to compare AI tools based on how well they support real workflow needs — reasoning, prototyping, content framing, validation, and live behavior insight. I benchmark across HLE with tools, web research, abstract reasoning, and real software engineering to understand where each tool is strongest.",
    keywords: ["ai capability benchmark", "benchmark", "compare", "ai tools", "reasoning", "engineering", "evaluation", "hle"],
  },

  // ============================
  // AI Explorations — Methodology
  // ============================
  {
    id: "ai-methodology",
    projectSlug: "ai-explorations",
    section: "ai-methodology",
    title: "AI Design Methodology",
    content:
      "My AI design methodology follows five stages: Discover & Empathize using AI-driven analytics and sentiment analysis, Define & Focus using AI summarization and dynamic personas, Ideate & Validate using generative AI for divergent thinking, Design & Prototype using AI UI generators and smart design systems, and Test & Iterate using AI-generated heatmaps and automated feedback analysis. It's less about treating AI as a novelty and more about understanding where it creates real leverage in a product workflow.",
    keywords: ["ai methodology", "methodology", "design process", "discover", "define", "ideate", "prototype", "test", "iterate", "ai design"],
  },
  {
    id: "ai-research-modal",
    projectSlug: "ai-explorations",
    section: "ai-research",
    title: "AI Research",
    content:
      "The AI research aspect of my work reflects how I use AI to explore, synthesize, and frame design thinking more efficiently. I run 30+ research loops across tools and workflows, testing how AI supports real product design tasks rather than just generating output.",
    keywords: ["ai research", "research modal", "research loops", "synthesis", "design thinking", "exploration"],
  },
  {
    id: "ai-native-meaning",
    projectSlug: "ai-explorations",
    section: "ai-native",
    title: "AI-Native Meaning",
    content:
      "When I say AI-native, I mean building with AI as a first-class part of the workflow from the start — not as an afterthought. It means using AI for research, prototyping, content framing, and validation as natural steps in the design process, rather than treating it as a separate novelty layer.",
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
      "JobHatch is an AI-powered career platform I prototyped that combines resume analysis, match scoring, and gamified progress to help users apply for jobs with more clarity and improve over time. It uses AI to parse resumes, surface improvement opportunities, and help users better position their background against specific roles.",
    keywords: ["jobhatch", "job hatch", "career", "resume", "job search", "ai project", "match scoring", "gamified"],
  },
  {
    id: "ai-jobhatch-problem",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Problem",
    content:
      "The design question behind JobHatch was: how can AI make the job search feel less overwhelming and more actionable? Traditional job search tools give users too many listings with too little guidance, so I wanted to explore a system that helps users understand their fit and improve over time.",
    keywords: ["jobhatch", "problem", "job search", "overwhelming", "guidance", "design question"],
  },
  {
    id: "ai-jobhatch-approach",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Approach",
    content:
      "For JobHatch, I explored how AI could make the job search feel more structured and actionable. The concept includes AI resume analysis, match-based tracking so users can evaluate job fit more clearly, and a token-driven optimization system where completed actions earn tokens that unlock added value like resume upgrades and AI-assisted CV creation.",
    keywords: ["jobhatch", "approach", "resume analysis", "match tracking", "token", "gamification"],
  },
  {
    id: "ai-jobhatch-why",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — Why It Matters",
    content:
      "JobHatch matters because it demonstrates how AI can transform a frustrating, opaque process into something more structured and motivating. It shows my approach to using AI not just for automation, but for genuine user empowerment through feedback, progress, and clarity.",
    keywords: ["jobhatch", "why", "matters", "empowerment", "motivation", "ai value"],
  },
  {
    id: "ai-jobhatch-process",
    projectSlug: "ai-explorations",
    section: "showcase-jobhatch",
    title: "JobHatch — How I Created It",
    content:
      "I created JobHatch by starting with a real user frustration: job search platforms give too many listings with too little guidance. I framed the design question first, then used ChatGPT to help brainstorm the concept — resume analysis, match scoring, and a gamification layer. I prototyped the UI in Figma, explored interaction patterns for the token system, and iterated on how AI feedback could feel motivating rather than judgmental. The whole process used AI as a creative partner from ideation through prototyping.",
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
      "Where AI Excels Today is a research system I built exploring where current AI tools are strongest across creative exploration, workflow support, and execution. It compares tools across ideation, reasoning, visual generation, and workflow support, and shows how different tools fit different stages of real product design work.",
    keywords: ["where ai excels", "ai excels", "research", "ai comparison", "ai strengths", "creative", "workflow"],
  },
  {
    id: "ai-where-excels-approach",
    projectSlug: "ai-explorations",
    section: "showcase-where-excels",
    title: "Where AI Excels Today — Approach",
    content:
      "For Where AI Excels Today, I evaluated AI tools through public performance data and workflow reliability. I focused on practical use cases — showing where AI genuinely helps in everyday product design, creative exploration, and rapid prototyping, not just where benchmarks look impressive.",
    keywords: ["where ai excels", "approach", "evaluation", "practical", "benchmark", "workflow reliability"],
  },
  {
    id: "ai-where-excels-why",
    projectSlug: "ai-explorations",
    section: "showcase-where-excels",
    title: "Where AI Excels Today — Why It Matters",
    content:
      "This project matters because it translates AI hype into practical clarity. Instead of listing every AI tool, it helps designers and product thinkers understand which tools actually perform well at which stages of real work — from research to creative execution.",
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
      "World Cup Data Lab is an interactive prototype I built exploring how AI and live match data can turn tournament signals into a more dynamic, insight-driven fan experience. It uses structured team data and comparison logic to surface strengths, patterns, and storylines across matchups.",
    keywords: ["world cup", "data lab", "sports", "matchup", "interactive", "tournament", "fan experience", "data"],
  },
  {
    id: "ai-worldcup-approach",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — Approach",
    content:
      "For World Cup Data Lab, I explored how AI can make sports data more engaging by helping users navigate complexity and discover insights faster. The prototype includes team comparisons, win probability calculations, and bilingual support in English and Chinese.",
    keywords: ["world cup", "approach", "data visualization", "comparison", "bilingual", "probability"],
  },
  {
    id: "ai-worldcup-why",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — Why It Matters",
    content:
      "This project demonstrates how AI and data can make complex information more engaging and accessible. It shows my ability to build interactive, data-rich prototypes that go beyond static design and explore real product behavior.",
    keywords: ["world cup", "why", "matters", "data", "interactive", "prototype"],
  },
  {
    id: "ai-worldcup-process",
    projectSlug: "ai-explorations",
    section: "showcase-worldcup",
    title: "World Cup Data Lab — How I Created It",
    content:
      "I created World Cup Data Lab by combining structured tournament data with AI-assisted comparison logic. I started with team stats and match data, then designed an interactive interface for exploring matchups, win probabilities, and team strengths. I prototyped the bilingual support (English and Chinese) and used AI to help generate insight narratives from raw data. The focus was on making complex sports data feel explorable rather than overwhelming.",
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
      "Synchronize Orientation is a Calbright-style orientation checklist I prototyped demonstrating student-staff state sync. Students complete orientation steps while staff monitors progress in real time. I used AI to prototype shared visibility across the student and staff portals, enabling file and status continuity between both sides.",
    keywords: ["synchronize", "orientation", "student staff sync", "checklist", "onboarding", "calbright", "real time"],
  },
  {
    id: "ai-sync-orientation-problem",
    projectSlug: "ai-explorations",
    section: "showcase-sync",
    title: "Synchronize Orientation — Problem",
    content:
      "The design question was: how can student orientation progress be visible to staff in real time, without manual check-ins? Traditional tracking often creates information gaps between student actions and staff awareness, slowing down support.",
    keywords: ["synchronize", "orientation", "problem", "visibility", "tracking", "information gap"],
  },
  {
    id: "ai-sync-orientation-approach",
    projectSlug: "ai-explorations",
    section: "showcase-sync",
    title: "Synchronize Orientation — Approach",
    content:
      "For Synchronize Orientation, I designed orientation flows around student needs — enrollment steps, checklist progress, and key to-dos — while giving staff clearer, more real-time visibility into student completion states. It explores a more connected alternative to traditional progress tracking.",
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
      "Dialpad Modal is a staff-facing dialpad I prototyped for calling students directly from the portal — streamlining outreach, case follow-ups, and student support without leaving the workflow. It includes recent contacts, call history, voicemail transcripts, and AI-generated call summaries.",
    keywords: ["dialpad", "modal", "calling", "staff", "outreach", "voicemail", "call summary", "ai summary"],
  },
  {
    id: "ai-dialpad-problem",
    projectSlug: "ai-explorations",
    section: "showcase-dialpad",
    title: "Dialpad Modal — Problem",
    content:
      "The design question was: how can staff reach students without leaving the portal? Traditional workflows required switching between the portal and separate communication tools, creating friction and losing context during outreach.",
    keywords: ["dialpad", "problem", "task switching", "context loss", "outreach", "communication"],
  },
  {
    id: "ai-dialpad-approach",
    projectSlug: "ai-explorations",
    section: "showcase-dialpad",
    title: "Dialpad Modal — Approach",
    content:
      "For Dialpad Modal, I focused on reducing task-switching by keeping outreach actions embedded within the staff portal experience. The prototype supports direct calling, quick access to recent contacts and contextual student info, AI-generated call summaries, and suggested next actions after each interaction.",
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
      "Project Liquid Glass is a coded design system I built exploring reusable glassmorphism UI components for modern web and mobile applications. Instead of staying in Figma or static mockups, I moved into code to create real, reusable components with glassmorphism effects — blur, transparency, layered surfaces, and interactive states. It's a design infrastructure project that bridges visual exploration with implementation-ready foundations.",
    keywords: ["liquid glass", "project liquid glass", "design system", "glassmorphism", "coded prototype", "ui components", "design infrastructure", "reusable", "glass"],
  },
  {
    id: "ai-liquid-glass-problem",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — Problem",
    content:
      "The design question behind Project Liquid Glass was: how do you move beyond tool-only visual exploration into reusable, implementation-aware UI foundations? Most glassmorphism work stays in design tools as one-off visuals. I wanted to test whether glass-style UI could be built as a real component system — with variants, tokens, and interaction patterns that work in production.",
    keywords: ["liquid glass", "problem", "design system", "glassmorphism", "implementation", "reusable", "visual exploration"],
  },
  {
    id: "ai-liquid-glass-process",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — How I Built It",
    content:
      "I built Project Liquid Glass using system thinking and component architecture. I started by defining the visual language — blur layers, transparency levels, border treatments, and surface hierarchies. Then I coded each component as a reusable unit with variants, design tokens, and consistent interaction patterns. The process involved prototyping in code rather than static tools, iterating on real browser rendering, and building a foundation that could scale across different UI contexts. AI assisted with exploring interaction patterns and generating component variations quickly.",
    keywords: ["liquid glass", "process", "how", "create", "build", "made", "system thinking", "component architecture", "coded", "tokens", "variants"],
  },
  {
    id: "ai-liquid-glass-why",
    projectSlug: "ai-explorations",
    section: "showcase-liquid-glass",
    title: "Project Liquid Glass — Why It Matters",
    content:
      "Project Liquid Glass matters because it demonstrates scalable system thinking and bridges visual design with implementation. It shows that I don't just design screens — I think about how design decisions translate into reusable, maintainable code. It reflects my approach to design infrastructure: building foundations that support consistency, flexibility, and real production use rather than one-off visuals.",
    keywords: ["liquid glass", "why", "matters", "system thinking", "design infrastructure", "implementation", "scalable", "reusable"],
  },

  // ============================
  // AI Project Showcase — General
  // ============================
  {
    id: "ai-showcase-overview",
    projectSlug: "ai-explorations",
    section: "showcase-overview",
    title: "AI Project Showcase",
    content:
      "My AI Project Showcase includes six prototypes built to evaluate product behavior, de-risk early ideas, and explore practical applications of AI: JobHatch (career platform), Where AI Excels Today (research system), World Cup Data Lab (data-driven fan experience), Synchronize Orientation (student-staff sync), Dialpad Modal (staff outreach tool), and Project Liquid Glass (coded glassmorphism design system).",
    keywords: ["ai project showcase", "showcase", "prototypes", "projects", "jobhatch", "world cup", "synchronize", "dialpad", "where ai excels", "liquid glass"],
  },
  {
    id: "ai-best-prototyping",
    projectSlug: "ai-explorations",
    section: "showcase-overview",
    title: "Best Prototyping Example",
    content:
      "For prototyping approach, JobHatch and Synchronize Orientation are strong examples. JobHatch shows how I prototype a full product concept with AI-powered features, while Synchronize Orientation shows how I explore real-time state sync between two user types using rapid AI-assisted development.",
    keywords: ["prototyping", "best prototype", "ai prototyping", "rapid", "concept development"],
  },

  // ============================
  // Ask Wen — AI Knowledge Retrieval Assistant
  // ============================
  {
    id: "ask-wen-summary",
    projectSlug: "ask-wen",
    section: "summary",
    title: "Ask Wen",
    content:
      "Ask Wen is a retrieval-based conversational assistant I designed and prototyped for my portfolio. It helps visitors navigate project content through natural questions instead of static browsing, with page-aware context, intent detection, conversation memory, and source-grounded answers.",
    keywords: ["ask wen", "assistant", "chatbot", "knowledge retrieval", "portfolio", "conversational"],
  },
  {
    id: "ask-wen-problem",
    projectSlug: "ask-wen",
    section: "problem",
    title: "Ask Wen — Problem",
    content:
      "Portfolio visitors often scan pages without finding the most relevant content. Traditional navigation requires too much guesswork, and static pages don't adapt to what someone is actually looking for. I wanted to explore whether retrieval-based conversation could make portfolio content more discoverable and navigable.",
    keywords: ["ask wen", "problem", "navigation", "discoverability", "scanning", "static content"],
  },
  {
    id: "ask-wen-approach",
    projectSlug: "ask-wen",
    section: "approach",
    title: "Ask Wen — Approach",
    content:
      "I designed a retrieval-oriented conversation experience with lightweight intent detection, entity-aware scoring, page-level context boosting, and conversation memory. Content is structured into retrieval-friendly chunks with section targeting, keyword matching, and explicit entity boosts. The system handles ambiguous questions gracefully, supports follow-up context, and grounds answers in real portfolio content rather than generating unchecked responses.",
    keywords: ["ask wen", "approach", "retrieval", "intent detection", "scoring", "context", "architecture"],
  },
  {
    id: "ask-wen-role",
    projectSlug: "ask-wen",
    section: "role",
    title: "Ask Wen — Role",
    content:
      "I owned the full design and prototype: conversation flow design, retrieval-oriented UX, information architecture for the knowledge structure, source visibility and trust cues, interaction modeling, and implementation. This was AI-assisted prototyping end to end — from structuring the content model to building the working assistant.",
    keywords: ["ask wen", "role", "design", "prototyping", "information architecture", "implementation"],
  },
  {
    id: "ask-wen-product-behavior",
    projectSlug: "ask-wen",
    section: "product-behavior",
    title: "Ask Wen — Product Behavior",
    content:
      "The assistant retrieves section-level content from a structured knowledge base, not full pages. It uses intent detection to match question types to the right content section, entity boosts to prioritize explicitly mentioned projects, page-level context as a soft relevance signal, and conversation memory so follow-up questions inherit topic context. When the system can't confidently match a project, it asks the user to clarify rather than guessing.",
    keywords: ["ask wen", "product behavior", "retrieval", "section level", "intent", "disambiguation", "trust"],
  },
  {
    id: "ask-wen-impact",
    projectSlug: "ask-wen",
    section: "impact",
    title: "Ask Wen — Impact",
    content:
      "This exploration shows how AI-assisted retrieval can transform static knowledge systems into more guided, navigable, and testable support experiences. It demonstrates a product direction — not just an interface — for conversational knowledge access with real retrieval logic, grounded answers, and implementation-aware interaction design.",
    keywords: ["ask wen", "impact", "product direction", "knowledge access", "testable", "retrieval"],
  },
];
