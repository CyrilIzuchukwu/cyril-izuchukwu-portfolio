export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  range: string;
  bullets: string[];
  tech: string[];
};

export const experience = {
  headline: "Experience",
  items: [
    {
      id: "kodex",
      title: "PHP (Laravel) Backend Instructor/Engineer",
      company: "Kodex Africa",
      companyUrl: "https://kodexafrica.com/",
      location: "Anambra, Nigeria",
      range: "2023 — 2026",
      bullets: [
        "Built and delivered a backend curriculum that drove +25% enrollment and +15% course completion.",
        "Ran 100+ lectures and workshops with 90% satisfaction and +20% assessment performance.",
        "Raised code quality practices that cut bugs by 40% and sped development by 30%.",
        "Upgraded Laravel projects to v13, reducing vulnerabilities by 60% and lifting performance by 25%.",
        "Shipped 7+ apps with Agile, improving delivery time by 30% and team satisfaction.",
      ],
      tech: ["Laravel", "PHP", "MySQL", "Vue", "Agile"],
    },
    {
      id: "swizel",
      title: "Frontend Developer",
      company: "Swizel.co",
      location: "Abuja, Nigeria",
      range: "2023 — 2025",
      bullets: [
        "Streamlined plans with PM/IM, cutting about 4 days of communication overhead.",
        "Delivered cross-browser experiences that reduced complaints by 75%.",
        "Turned 50+ mockups into live UI, cutting response time by 30%.",
        "Optimized performance for 100K+ users, reducing load times by 40%.",
      ],
      tech: ["JavaScript", "HTML/CSS", "Responsive UI"],
    },
    {
      id: "mksk",
      title: "Junior Backend Developer PHP (Laravel)",
      company: "MKSK Consulting Ltd",
      location: "United Kingdom",
      range: "2023 — 2024",
      bullets: [
        "Supported a site redesign that improved UX and grew daily traffic by 45%.",
        "Joined weekly reviews with seniors and resolved 15+ issues per month.",
        "Applied best practices that improved efficiency by 25% while learning two new technologies.",
      ],
      tech: ["Laravel", "PHP", "MySQL"],
    },
    {
      id: "esowp",
      title: "Frontend Developer",
      company: "Premium ESOWP Limited",
      location: "Anambra, Nigeria",
      range: "2023",
      bullets: [
        "Partnered with QA on 20+ pages and products, resolving issues within 48 hours.",
        "Led cross-browser testing across 5 browsers, improving satisfaction by 30%.",
        "Built 50+ responsive landing pages with HTML, CSS, and JavaScript.",
        "Debugged and delivered clean deployments across development teams.",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ] satisfies ExperienceItem[],
} as const;
