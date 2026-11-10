import Image from "next/image";
import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <Section id={SECTION_IDS.projects} containerClassName="max-w-[1000px]">
      <Heading index="03.">{projects.headline}</Heading>

      <ul className="mt-12 space-y-[70px] md:space-y-[100px]">
        {projects.items.map((project, index) => {
          const odd = index % 2 === 0;

          return (
            <li
              key={project.id}
              className="group relative grid grid-cols-12 items-center gap-2.5"
            >
              {/* Image */}
              <div
                className={cn(
                  "relative z-[1] col-span-12 row-start-1 h-full opacity-25 shadow-[0_10px_30px_-15px_var(--navy-shadow)] md:col-span-7 md:opacity-100",
                  odd ? "md:col-start-1" : "md:col-start-6",
                )}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="relative block h-full w-full overflow-hidden rounded bg-green align-middle"
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1280}
                    height={800}
                    className="aspect-[16/10] h-full w-full object-cover object-top mix-blend-multiply grayscale contrast-100 brightness-90 transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <span className="pointer-events-none absolute inset-0 z-[3] bg-navy/40 mix-blend-screen transition group-hover:bg-transparent" />
                </a>
              </div>

              {/* Content */}
              <div
                className={cn(
                  "relative z-[5] col-span-12 row-start-1 flex h-full flex-col justify-center p-6 md:col-span-7 md:h-auto md:bg-transparent md:p-0",
                  odd
                    ? "md:col-start-6 md:items-end md:text-right"
                    : "md:col-start-1 md:items-start md:text-left",
                )}
              >
                <p className="mb-2 font-mono text-xs text-green">
                  Featured Project
                </p>
                <h3 className="mb-5 font-display text-2xl font-semibold text-lightest-slate transition hover:text-green md:mb-5">
                  <TextLink href={project.liveUrl} external>
                    {project.title}
                  </TextLink>
                </h3>

                <div className="relative z-[2] rounded bg-light-navy p-6 text-[15px] leading-relaxed text-light-slate shadow-[0_10px_30px_-15px_var(--navy-shadow)] md:text-base">
                  <p className="mb-2 font-mono text-[11px] text-green md:hidden">
                    {project.role}
                  </p>
                  {project.blurb}
                </div>

                <ul
                  className={cn(
                    "relative z-[2] mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-light-slate",
                    odd ? "md:justify-end" : "md:justify-start",
                  )}
                >
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div
                  className={cn(
                    "mt-4 flex items-center gap-4 text-lightest-slate",
                    odd ? "md:justify-end" : "md:justify-start",
                  )}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="inline-flex p-2 transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[22px] w-[22px]"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
