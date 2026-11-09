export type SkillGroup = {
  label: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  school: string;
  year: string;
  location: string;
};

export const about = {
  headline: "About",
  summary:
    "Passionate, detail-oriented developer with 3+ years building web products. Strong on data structures, responsive apps, and clean code. Comfortable remote or in teams, with continuous learning as a habit. Full-stack capable — backend is the primary focus.",
  skills: [
    {
      label: "Frontend",
      items: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "Vue",
        "React",
        "Inertia.js",
      ],
    },
    {
      label: "Backend",
      items: ["PHP", "Laravel", "Node.js", "Express.js", "Nest.js"],
    },
    {
      label: "Data",
      items: ["SQL", "MySQL", "MongoDB"],
    },
    {
      label: "Ops",
      items: ["Git/GitHub", "AWS", "CI/CD"],
    },
    {
      label: "Practices",
      items: [
        "Agile",
        "Microservices",
        "Technical documentation",
        "Design thinking",
      ],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      title: "Full-Stack Web Development",
      school: "Kodex Africa",
      year: "2022",
      location: "Anambra, Nigeria",
    },
    {
      title: "B.Sc. Computer Science",
      school: "Joseph Sarwuan Tarka University, Makurdi",
      year: "2021",
      location: "Benue, Nigeria",
    },
    {
      title: "WASSCE",
      school: "Federal Government College, Ugwolawo",
      year: "2016",
      location: "Kogi, Nigeria",
    },
  ] satisfies EducationItem[],
} as const;
