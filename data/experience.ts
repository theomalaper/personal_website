export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string[];
  techStack?: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Optiver",
    role: "Software Engineer",
    startDate: "Feb 2023",
    endDate: "Mar 2025",
    location: "Sydney",
    description: [
      "Designed machine learning algorithms and data pipelines to trade in India, generating ~20M AUD/year",
      "Maintained multithreaded, low-latency applications publishing ~500k financial valuations per second",
      "Developed a high-frequency basket trading architecture used across Asian markets",
    ],
    techStack: ["Python", "C++", "ML", "Distributed Systems", "Low Latency"],
  },
  {
    company: "River Capital",
    role: "Financial Analyst Intern",
    startDate: "Jul 2022",
    endDate: "Oct 2022",
    description: [
      "Performed ad hoc analysis, company research and financial instrument valuation",
      "Assisted with building financial forecasts, data models and completing due diligence",
    ],
  },
  {
    company: "CSL Limited",
    role: "Software Engineer Intern",
    startDate: "Feb 2022",
    endDate: "Jun 2022",
    description: [
      "Implemented an application to model the costs of bioprocesses and scientific experiments",
      "Collaborated with end-users to identify key requirements and enhance the usability of CSL's software",
    ],
    techStack: ["Python", "Django", "React"],
  },
  {
    company: "Phoebe Solutions",
    role: "Software Engineer Intern",
    startDate: "Oct 2021",
    endDate: "Jun 2022",
    description: [
      "Designed and implemented a testing framework for their optimisation engine",
      "Managed multiple code environments focused on enhancing financial revenue management in hospitals",
    ],
    techStack: ["Python", "C", "Java", "SQL"],
  },
];
