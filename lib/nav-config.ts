export const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/ai-explorations", label: "AI PROJECTS" },
  { href: "/experience", label: "Experience" },
  { href: "/kind-words", label: "Kind Words" },
] as const;

export const WORK_SUB_LINKS = [
  { href: "/work/calbright/student-portal", label: "Student Portal Redesign" },
  { href: "/work/calbright/staff-portal", label: "Staff Portal 0→1" },
  { href: "/work/didi", label: "DiDi EagleEye" },
] as const;

/** Pre-filled mailto link for "Let's connect" CTAs. Opens default email app with recipient, subject, and body. */
export const MAILTO_LETS_CONNECT =
  "mailto:williamliu_1989@hotmail.com?subject=Let%27s%20connect&body=Hi%20Wen,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest,%0A";
