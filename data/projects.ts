export type ProjectStatus = "Active" | "Sold" | "Archived" | "In Progress";

export interface Project {
  name: string;
  status: ProjectStatus;
  description: string;
  url?: string;
  repoUrl?: string;
  techStack: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Motu",
    status: "Active",
    description:
      "AI travel platform with LLM-based itinerary planner trained on destination-specific data, natural language trip planning, and third-party booking integrations.",
    repoUrl: "https://github.com/theomalaper",
    techStack: ["React", "FastAPI", "Python", "MongoDB", "LLM", "RAG"],
    featured: true,
  },
  {
    name: "Biomedical AI",
    status: "Active",
    description:
      "Exploring clinical AI applications through independent research and projects.",
    repoUrl: "https://github.com/theomalaper",
    techStack: ["Python", "ML"],
    featured: true,
  },
];
