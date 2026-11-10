export type EducationItem = {
  title: string;
  school: string;
  year: string;
  location: string;
};

export const about = {
  headline: "About Me",
  image: {
    src: "/images/about.jpg",
    alt: "Portrait of Cyril Izuchukwu",
  },
  paragraphs: [
    "I’m a passionate, detail-oriented developer with 3+ years building web products. I care about data structures, responsive interfaces, and clean code — and I’m just as comfortable shipping solo as collaborating with a team.",
    "Fast-forward to today, and I’ve had the privilege of teaching and building backend systems at Kodex Africa, shipping product frontends, and delivering platforms for commerce, learning, filings, and nonprofit work across Nigeria. Full-stack capable — backend is the primary focus.",
    "Here are a few technologies I’ve been working with recently:",
  ],
  recentTech: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Vue",
    "Node.js(Express/Nest)",
    "PHP(Laravel)",
    "Inertiajs",
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
