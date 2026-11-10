export type AboutLink = {
  label: string;
  href: string;
};

export type EducationItem = {
  title: string;
  school: string;
  year: string;
  location: string;
};

export const about = {
  headline: "About",
  image: {
    src: "/images/about.jpg",
    alt: "Portrait of Cyril Izuchukwu",
  },
  paragraphs: [
    {
      type: "text" as const,
      parts: [
        {
          kind: "text" as const,
          value:
            "I’m a passionate, detail-oriented developer with 3+ years building web products. I care about data structures, responsive interfaces, and clean code — and I’m just as comfortable shipping solo as collaborating with a team. Continuous learning is a habit; full-stack capable, with backend as the primary focus.",
        },
      ],
    },
    {
      type: "text" as const,
      parts: [
        {
          kind: "text" as const,
          value: "These days I teach and build backend systems at ",
        },
        {
          kind: "link" as const,
          label: "Kodex Africa",
          href: "https://kodexafrica.com/",
        },
        {
          kind: "text" as const,
          value:
            ", where I design curricula, mentor engineers, and ship Laravel and Node services. I’ve also built product frontends and platforms for commerce, learning, filings, and nonprofit work across Nigeria.",
        },
      ],
    },
    {
      type: "text" as const,
      parts: [
        {
          kind: "text" as const,
          value:
            "When I’m not in the terminal, I’m usually refining how teams write clearer APIs, stronger docs, and shippable increments. Based in ",
        },
        {
          kind: "text" as const,
          value: "Abuja, Nigeria",
        },
        {
          kind: "text" as const,
          value: ".",
        },
      ],
    },
  ],
  recentTech: [
    "Laravel",
    "PHP",
    "Node.js",
    "Express",
    "PostgreSQL",
    "React",
    "Vue",
    "TypeScript",
  ],
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
  ] satisfies EducationItem[],
} as const;
