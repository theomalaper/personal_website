export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  notes?: string[];
}

export const EDUCATION: Education[] = [
  {
    institution: "University of Melbourne",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2019",
    endDate: "2022",
    location: "Melbourne, Australia",
  },
];
