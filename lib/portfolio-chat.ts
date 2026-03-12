import { faqEntries, projects } from "@/data/portfolio-knowledge";

type ChatInput = {
  message: string;
  currentProject?: string | null;
};

function includesAnyTrigger(message: string, triggers: string[]) {
  return triggers.some((trigger) => message.includes(trigger.toLowerCase()));
}

export function getPortfolioChatResponse({
  message,
  currentProject,
}: ChatInput) {
  const q = message.toLowerCase().trim();

  if (!q) {
    return "Please ask a question about my portfolio, projects, role, impact, or AI workflow.";
  }

  // 1. FAQ first
  const faqMatch = faqEntries.find((entry) =>
    includesAnyTrigger(q, entry.triggers)
  );

  if (faqMatch) {
    return faqMatch.answer;
  }

  // 2. Prioritize current project context if provided
  if (currentProject) {
    const activeProject = projects.find((project) => project.slug === currentProject);

    if (activeProject) {
      const activeHaystack = [
        activeProject.title,
        activeProject.summary,
        activeProject.role,
        activeProject.problem,
        activeProject.approach,
        activeProject.impact,
        ...activeProject.tags,
      ]
        .join(" ")
        .toLowerCase();

      if (q.split(/\s+/).some((word) => word.length > 2 && activeHaystack.includes(word))) {
        return `${activeProject.title}: ${activeProject.summary} My role: ${activeProject.role} Impact: ${activeProject.impact}`;
      }
    }
  }

  // 3. Match across all projects
  const projectMatch = projects.find((project) => {
    const haystack = [
      project.title,
      project.summary,
      project.role,
      project.problem,
      project.approach,
      project.impact,
      ...project.tags,
    ]
      .join(" ")
      .toLowerCase();

    return q.split(/\s+/).some((word) => word.length > 2 && haystack.includes(word));
  });

  if (projectMatch) {
    return `${projectMatch.title}: ${projectMatch.summary} My role: ${projectMatch.role} Impact: ${projectMatch.impact}`;
  }

  // 4. Fallback
  return "I can help explain my portfolio, project decisions, role, impact, and AI workflow. Try asking about Calbright, Staff Portal, Didi, or my AI projects.";
}