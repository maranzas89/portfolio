// shape: "circle" | "diamond" | "hexagon" | "triangle" | "square"
export const COMPANY_LOGOS: Record<string, { letter: string; bg: string; accent: string; shape: string }> = {
  PNC: { letter: "P", bg: "#fff4ec", accent: "#ea580c", shape: "square" },
  Salesforce: { letter: "Sf", bg: "#ecf6ff", accent: "#0284c7", shape: "circle" },
  Stripe: { letter: "S", bg: "#f3edff", accent: "#7c3aed", shape: "diamond" },
  Figma: { letter: "F", bg: "#ffedf0", accent: "#e11d48", shape: "hexagon" },
  Spotify: { letter: "S", bg: "#edfcf2", accent: "#16a34a", shape: "triangle" },
};

export interface Job {
  title: string;
  company: string;
  industry: string;
  location: string;
  workMode: string;
  type: string;
  level: string;
  salary: string;
  experience: string;
  applicants: string;
  matchScore: number;
  posted?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  skills?: string[];
  benefits?: string[];
}

export const JOBS: Job[] = [
  {
    title: "Digital Product Designer Lead - Credit Card Experience",
    company: "PNC",
    industry: "Banking - Finance - Public Company",
    location: "Madison Avenue NY (NY019)",
    workMode: "Hybrid",
    type: "Full-time",
    level: "Senior Level",
    salary: "$65K/yr - $164K/yr",
    experience: "5+ years exp",
    applicants: "Less than 25 applicants",
    matchScore: 89,
    posted: "2 days ago",
    description: "We are seeking a talented Digital Product Designer Lead to join our Credit Card Experience team at PNC. In this role, you will lead the design of innovative digital banking products that serve millions of customers. You will work closely with product managers, engineers, and researchers to create seamless, accessible, and delightful experiences across web and mobile platforms.",
    responsibilities: [
      "Lead end-to-end design for credit card digital experiences across web and mobile",
      "Collaborate with cross-functional teams including Product, Engineering, and Research",
      "Create and maintain design systems and component libraries",
      "Mentor junior designers and provide constructive design feedback",
      "Conduct user research and usability testing to validate design decisions",
      "Present design work to senior leadership and stakeholders",
    ],
    requirements: [
      "5+ years of experience in product design or UX design",
      "Strong portfolio demonstrating complex product design work",
      "Proficiency in Figma, prototyping tools, and design systems",
      "Experience with financial services or regulated industries preferred",
      "Excellent communication and presentation skills",
      "Bachelor's degree in Design, HCI, or related field",
    ],
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Accessibility", "Mobile Design", "HTML/CSS", "Agile"],
    benefits: ["Health Insurance", "401(k) Match", "Remote Flexibility", "Learning Budget", "Paid Time Off", "Parental Leave"],
  },
  {
    title: "Senior UX Designer - Enterprise Platform",
    company: "Salesforce",
    industry: "Technology - SaaS - Public Company",
    location: "San Francisco, CA",
    workMode: "Remote",
    type: "Full-time",
    level: "Senior Level",
    salary: "$130K/yr - $185K/yr",
    experience: "6+ years exp",
    applicants: "Less than 50 applicants",
    matchScore: 82,
    posted: "5 days ago",
    description: "Salesforce is looking for a Senior UX Designer to help shape the future of our enterprise platform. You will design complex workflows and data-heavy interfaces that empower businesses worldwide. Join a world-class design team that values craft, collaboration, and customer obsession.",
    responsibilities: [
      "Design enterprise-grade features for the Salesforce platform",
      "Translate complex business requirements into intuitive user interfaces",
      "Work within and contribute to the Salesforce Lightning Design System",
      "Partner with product managers and engineers in agile teams",
      "Conduct competitive analysis and stay current with industry trends",
      "Drive design reviews and critique sessions",
    ],
    requirements: [
      "6+ years of UX/product design experience",
      "Experience designing complex enterprise or B2B applications",
      "Strong systems thinking and information architecture skills",
      "Proficiency in Figma and prototyping tools",
      "Experience with design systems at scale",
      "Ability to work in a fast-paced, cross-functional environment",
    ],
    skills: ["Figma", "Design Systems", "Enterprise UX", "Information Architecture", "Prototyping", "Data Visualization", "Accessibility"],
    benefits: ["Health & Dental", "Stock Options", "Unlimited PTO", "Wellness Stipend", "Education Reimbursement", "Volunteer Time Off"],
  },
  {
    title: "Product Designer - Growth Team",
    company: "Stripe",
    industry: "Technology - Fintech - Private Company",
    location: "Seattle, WA",
    workMode: "Hybrid",
    type: "Full-time",
    level: "Senior Level",
    salary: "$145K/yr - $195K/yr",
    experience: "5+ years exp",
    applicants: "Less than 100 applicants",
    matchScore: 76,
    posted: "1 week ago",
    description: "Stripe's Growth team is looking for a Product Designer who is passionate about creating experiences that help businesses start, run, and grow. You will own the design for key growth surfaces that drive activation, engagement, and expansion across Stripe's product suite.",
    responsibilities: [
      "Own design for growth-related surfaces including onboarding and activation",
      "Run A/B tests and analyze data to inform design decisions",
      "Collaborate with Growth PMs, engineers, and data scientists",
      "Design experiments that drive key business metrics",
      "Create scalable, systematic design solutions",
      "Contribute to Stripe's design culture and processes",
    ],
    requirements: [
      "5+ years of product design experience",
      "Experience with growth design, conversion optimization, or experimentation",
      "Data-informed design approach with comfort in analytics tools",
      "Strong visual design and interaction design skills",
      "Experience in fintech or payments is a plus",
      "Portfolio showcasing measurable design impact",
    ],
    skills: ["Figma", "A/B Testing", "Growth Design", "Analytics", "Prototyping", "Visual Design", "Interaction Design"],
    benefits: ["Health Insurance", "Equity Package", "Remote Stipend", "Learning & Development", "Commuter Benefits", "Generous PTO"],
  },
  {
    title: "Staff Product Designer - AI Features",
    company: "Figma",
    industry: "Technology - Design Tools - Private Company",
    location: "New York, NY",
    workMode: "Remote",
    type: "Full-time",
    level: "Lead",
    salary: "$160K/yr - $220K/yr",
    experience: "8+ years exp",
    applicants: "Less than 25 applicants",
    matchScore: 91,
    posted: "3 days ago",
    description: "Figma is hiring a Staff Product Designer to lead the design of AI-powered features that will transform how designers work. This is a rare opportunity to shape the future of design tools at a company that deeply values craft and design excellence. You will work at the intersection of AI and design, creating intuitive experiences that make powerful technology accessible.",
    responsibilities: [
      "Lead the design vision for AI-powered features across Figma",
      "Define interaction patterns for AI-assisted design workflows",
      "Collaborate closely with ML engineers and researchers",
      "Drive strategic design decisions at the product level",
      "Mentor designers and elevate the team's design quality",
      "Represent design in executive-level discussions",
    ],
    requirements: [
      "8+ years of product design experience, with 2+ years at staff/lead level",
      "Deep understanding of AI/ML concepts and their UX implications",
      "Track record of shipping complex, innovative products",
      "Exceptional craft in both visual and interaction design",
      "Experience with design tools or developer tools preferred",
      "Strong leadership and communication skills",
    ],
    skills: ["Figma", "AI/ML UX", "Design Leadership", "Prototyping", "Design Systems", "Strategic Thinking", "User Research"],
    benefits: ["Health & Wellness", "Equity", "Flexible PTO", "Home Office Stipend", "Professional Development", "Team Offsites"],
  },
  {
    title: "UX/UI Designer - Mobile Apps",
    company: "Spotify",
    industry: "Technology - Entertainment - Public Company",
    location: "Remote (US)",
    workMode: "Remote",
    type: "Full-time",
    level: "Mid Level",
    salary: "$110K/yr - $150K/yr",
    experience: "3+ years exp",
    applicants: "Over 200 applicants",
    matchScore: 68,
    posted: "2 weeks ago",
    description: "Spotify is looking for a UX/UI Designer to join our mobile team and help create the best music listening experience in the world. You will design features that reach hundreds of millions of users globally, working on everything from discovery to playback to social features.",
    responsibilities: [
      "Design mobile-first features for iOS and Android platforms",
      "Create high-fidelity mockups, prototypes, and interaction specifications",
      "Collaborate with product managers, engineers, and user researchers",
      "Participate in design sprints and rapid prototyping sessions",
      "Contribute to Spotify's design system (Encore)",
      "Advocate for user needs through research insights",
    ],
    requirements: [
      "3+ years of UX/UI design experience with focus on mobile",
      "Strong portfolio showcasing mobile app design work",
      "Proficiency in Figma and mobile prototyping tools",
      "Understanding of iOS and Android design guidelines",
      "Experience with consumer-facing products",
      "Passion for music and audio experiences is a plus",
    ],
    skills: ["Figma", "Mobile Design", "iOS", "Android", "Prototyping", "Design Systems", "User Research"],
    benefits: ["Health Insurance", "Stock Options", "Free Spotify Premium", "Flexible Work", "Learning Budget", "Wellness Programs"],
  },
];
