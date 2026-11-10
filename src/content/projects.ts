export type Project = {
  id: string;
  title: string;
  role: string;
  blurb: string;
  stack: string[];
  liveUrl: string;
  image: {
    src: string;
    alt: string;
  };
};

export const projects = {
  headline: "Some Things I’ve Built",
  intro: "",
  items: [
    {
      id: "getyovo",
      title: "Getyovo",
      role: "Backend",
      blurb:
        "Backend for Getyovo, a local commerce platform that lets people order pharmacy, grocery, and restaurant items from nearby vendors for doorstep delivery.",
      stack: ["Node.js", "Express", "APIs", "PostgreSQL"],
      liveUrl: "https://www.getyovo.app/",
      image: {
        src: "/images/projects/getyovo.png",
        alt: "Getyovo marketing site and app mockups",
      },
    },
    {
      id: "kodex-learn",
      title: "Kodex Africa Learn",
      role: "Team Lead / Backend",
      blurb:
        "Learning platform for Kodex Africa. Led backend delivery for auth, courses, and the student experience.",
      stack: ["Laravel", "PHP", "Vue", "MySQL"],
      liveUrl: "https://learn.kodexafrica.com/login",
      image: {
        src: "/images/projects/kodex-learn.png",
        alt: "Kodex Africa Learn login experience",
      },
    },
    {
      id: "business-desk",
      title: "Business Desk",
      role: "Frontend",
      blurb:
        "Frontend for BusinessDesk, a Nigerian platform for online CAC registration and other government filings (business names, companies, NGOs, TIN) without office visits.",
      stack: ["JavaScript", "Tailwind", "HTML/CSS", "Vue"],
      liveUrl: "https://businessdesk.ng/",
      image: {
        src: "/images/projects/business-desk.png",
        alt: "BusinessDesk homepage for CAC registration",
      },
    },
    {
      id: "ago-cares",
      title: "AGO Cares Foundation",
      role: "Fullstack",
      blurb:
        "Fullstack for AGO Cares Foundation, an NGO site supporting people with disabilities, persons with albinism, and vulnerable children through healthcare, education, and advocacy.",
      stack: ["Laravel", "JavaScript", "MySQL", "HTML/CSS"],
      liveUrl: "https://agocaresfoundation.org/",
      image: {
        src: "/images/projects/ago-cares.png",
        alt: "AGO Cares Foundation homepage",
      },
    },
  ] satisfies Project[],
} as const;
