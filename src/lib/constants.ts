export const SECTION_IDS = {
  about: "about",
  experience: "experience",
  projects: "projects",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
