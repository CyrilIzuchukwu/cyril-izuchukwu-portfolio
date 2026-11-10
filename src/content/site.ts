import { SECTION_IDS } from "@/lib/constants";

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  name: "Cyril Izuchukwu",
  legalName: "Ugwuodo Cyril",
  role: "Full-Stack Developer",
  location: "Abuja, Nigeria",
  email: "alexcyril34@gmail.com",
  phone: "08083976834",
  resumePath: "/resume.pdf",
  pitch:
    "I build reliable web products end-to-end, with deepest strength in backend systems, APIs, and shipping with teams.",
  nav: [
    { label: "About", href: `#${SECTION_IDS.about}` },
    { label: "Experience", href: `#${SECTION_IDS.experience}` },
    { label: "Projects", href: `#${SECTION_IDS.projects}` },
  ] satisfies NavItem[],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/CyrilIzuchukwu",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/cyril-ugwuodo-3877001aa",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:alexcyril34@gmail.com",
    },
  ] satisfies SocialLink[],
} as const;
