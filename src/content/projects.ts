export type Project = {
  id: string;
  title: string;
  role: string;
  blurb: string;
  stack: string[];
  liveUrl: string;
};

export const projects = {
  headline: "Projects",
  intro:
    "A selection of products I’ve shipped — backend-heavy systems, team-led platforms, and polished frontends.",
  items: [
    {
      id: "yovo",
      title: "Yovo",
      role: "Backend",
      blurb:
        "Backend for getyovo.app — APIs and server-side logic powering the live product experience.",
      stack: ["Laravel", "PHP", "APIs", "MySQL"],
      liveUrl: "https://www.getyovo.app/",
    },
    {
      id: "kodex-learn",
      title: "Kodex Africa Learn",
      role: "Team Lead / Backend",
      blurb:
        "Learning platform for Kodex Africa. Led backend delivery for auth, courses, and the student experience.",
      stack: ["Laravel", "PHP", "Vue", "MySQL"],
      liveUrl: "https://learn.kodexafrica.com/login",
    },
    {
      id: "business-desk",
      title: "Business Desk",
      role: "Frontend",
      blurb:
        "Frontend for businessdesk.ng — responsive interfaces for a Nigerian business platform.",
      stack: ["JavaScript", "Tailwind", "HTML/CSS", "Vue"],
      liveUrl: "https://businessdesk.ng/",
    },
    {
      id: "ago-cares",
      title: "AGO Cares Foundation",
      role: "Fullstack",
      blurb:
        "Fullstack site for AGO Cares Foundation — public presence and supporting web flows for the nonprofit.",
      stack: ["Laravel", "JavaScript", "MySQL", "HTML/CSS"],
      liveUrl: "https://agocaresfoundation.org/",
    },
  ] satisfies Project[],
} as const;
