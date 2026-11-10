import Image from "next/image";
import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

export function Projects() {
  return (
    <Section id={SECTION_IDS.projects} aria-label="Projects">
      <Heading>{projects.headline}</Heading>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-slate">
        {projects.intro}
      </p>

      <ul className="space-y-14 md:space-y-16">
        {projects.items.map((project) => (
          <li key={project.id}>
            <article className="group grid gap-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded border border-lightest-navy/60 bg-light-navy shadow-[0_10px_30px_-15px_var(--navy-shadow)] transition hover:border-green/40"
                aria-label={`Open ${project.title}`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute inset-0 bg-navy/20 mix-blend-multiply transition group-hover:bg-transparent" />
              </a>

              <div>
                <p className="mb-1 font-mono text-xs text-green">
                  Featured · {project.role}
                </p>
                <h3 className="font-display text-xl font-semibold text-lightest-slate transition group-hover:text-green sm:text-2xl">
                  <TextLink href={project.liveUrl} external>
                    {project.title}
                  </TextLink>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                  {project.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="transition hover:text-green">{tech}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <TextLink
                    href={project.liveUrl}
                    external
                    className="font-mono text-xs text-green hover:text-white"
                  >
                    Live site ↗
                  </TextLink>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
