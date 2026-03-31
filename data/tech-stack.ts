export interface TechItem {
  name: string;
  category: "language" | "framework" | "tool" | "ml";
}

export const TECH_STACK: TechItem[] = [
  { name: "Python", category: "language" },
  { name: "C++", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "PyTorch", category: "ml" },
  { name: "MongoDB", category: "tool" },
  { name: "Docker", category: "tool" },
];
