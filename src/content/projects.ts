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
      id: "getyovo",
      title: "Getyovo",
      role: "Backend",
      blurb:
        "Backend for Getyovo, a local commerce platform that lets people order pharmacy, grocery, and restaurant items from nearby vendors for doorstep delivery.",
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
        "Frontend for BusinessDesk, a Nigerian platform for online CAC registration and other government filings (business names, companies, NGOs, TIN) without office visits.",
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
