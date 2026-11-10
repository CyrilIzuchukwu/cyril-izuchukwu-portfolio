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
  role: "I build reliable products for the web.",
  location: "Abuja, Nigeria",
  email: "alexcyril34@gmail.com",
  phone: "08083976834",
  resumePath: "/resume.pdf",
  pitch:
    "I’m a full-stack developer specializing in backend systems, APIs, and shipping with teams. Currently focused on building reliable web products and teaching engineers in Nigeria.",
  nav: [
    { label: "About", href: `#${SECTION_IDS.about}` },
    { label: "Experience", href: `#${SECTION_IDS.experience}` },
    { label: "Work", href: `#${SECTION_IDS.projects}` },
    { label: "Contact", href: `#${SECTION_IDS.contact}` },
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
