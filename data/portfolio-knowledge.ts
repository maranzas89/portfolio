export const portfolioProfile = {
  name: "Wen Liu",
  title: "Senior Product Designer",
  summary:
    "I design product experiences across education, enterprise, and AI-enabled workflows.",
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
    role: "Led end-to-end product design and workflow direction.",
    problem:
      "Students could access information, but the experience did not clearly guide them toward the right next action.",
    approach:
      "I restructured the experience around clearer guidance, prioritization, and lower cognitive load.",
    impact:
      "Created a stronger foundation for onboarding, improved clarity, and made the student experience easier to navigate.",
    tools: ["Figma", "Prototyping", "AI-assisted ideation"],
    tags: ["calbright", "student portal", "onboarding", "education"],
    url: "/work/calbright-student-portal",
  },
  {
    slug: "staff-portal",
    title: "Staff Portal",
    summary:
      "An operational portal concept designed to help staff access the right student context and actions more efficiently.",
    role: "Led product design direction and workflow framing.",
    problem:
      "Staff workflows were fragmented and important context was difficult to access quickly.",
    approach:
      "I explored a clearer dashboard structure, more focused information hierarchy, and stronger workflow support.",
    impact:
      "Improved operational clarity and established a stronger direction for staff workflow efficiency.",
    tools: ["Figma", "Systems thinking", "Workflow design"],
    tags: ["staff portal", "operations", "dashboard", "calbright"],
    url: "/work/staff-portal",
  },
  {
    slug: "didi",
    title: "Didi Enterprise Platform",
    summary:
      "A complex enterprise design effort focused on workflow clarity, operational efficiency, and product scalability.",
    role: "Contributed to product design across enterprise workflows and system-level thinking.",
    problem:
      "Complex product logic and operational demands made it difficult for users to move efficiently through key tasks.",
    approach:
      "I simplified flows, clarified system behavior, and supported a more scalable product experience.",
    impact:
      "Helped strengthen usability, reduce friction, and support more effective enterprise operations.",
    tools: ["Figma", "Enterprise UX", "Interaction design"],
    tags: ["didi", "enterprise", "workflow", "platform"],
    url: "/work/didi",
  },
  {
    slug: "ai-explorations",
    title: "AI Explorations",
    summary:
      "A collection of AI-assisted design and prototyping explorations focused on product thinking, workflow acceleration, and interface experimentation.",
    role: "Led concept framing, prototyping, and AI workflow experimentation.",
    problem:
      "Traditional design workflows can be slow when exploring many product directions quickly.",
    approach:
      "I used AI to accelerate ideation, interaction exploration, content framing, and prototype generation.",
    impact:
      "Expanded exploration speed, supported faster concept testing, and created new ways to communicate product ideas.",
    tools: ["ChatGPT", "Figma AI", "Adobe Firefly", "Prototype tools"],
    tags: ["ai", "exploration", "workflow", "prototyping"],
    url: "/ai-projects",
  },
];

export const faqEntries = [
  {
    id: "role-overview",
    triggers: ["role", "responsibility", "what did you do", "contribution"],
    answer:
      "I work across product strategy, workflow design, interface direction, and prototype thinking. My role often includes framing problems, shaping UX direction, and aligning design decisions with meaningful outcomes.",
    relatedProjectSlug: null,
  },
  {
    id: "ai-workflow",
    triggers: ["ai", "workflow", "tools", "how do you use ai"],
    answer:
      "I use AI to accelerate ideation, explore interface directions, support content framing, and prototype product concepts more quickly.",
    relatedProjectSlug: "ai-explorations",
  },
  {
    id: "impact",
    triggers: ["impact", "result", "outcome", "metrics"],
    answer:
      "My work focuses on improving clarity, reducing friction, and building stronger product foundations. Depending on the project, impact can show up through usability improvements, workflow efficiency, better onboarding guidance, or stronger operational support.",
    relatedProjectSlug: null,
  },
  {
    id: "start-here",
    triggers: ["which project", "where should i start", "start with", "best project"],
    answer:
      "A strong place to start is Calbright Student Portal if you want to see end-to-end product thinking, or AI Explorations if you want to see how I apply AI in design workflows.",
    relatedProjectSlug: null,
  },
];