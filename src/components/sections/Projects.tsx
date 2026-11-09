"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Chip } from "@/components/ui/Chip";
import { TextLink } from "@/components/ui/TextLink";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id={SECTION_IDS.projects}>
      <div className="max-w-3xl">
        <Heading index="03.">{projects.headline}</Heading>
        <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
          {projects.intro}
        </p>
      </div>

      <ul className="mt-12 space-y-16 md:space-y-20">
        {projects.items.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <motion.li
              key={project.id}
              className="group relative grid items-center gap-6 md:grid-cols-12"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div
                className={`relative z-10 md:col-span-7 ${
                  reversed ? "md:col-start-6 md:text-right" : "md:col-start-1"
                }`}
              >
                <p className="mb-2 font-mono text-xs text-green">
                  Featured · {project.role}
                </p>
                <h3 className="font-display text-2xl font-semibold text-lightest-slate transition group-hover:text-green">
                  <TextLink href={project.liveUrl} external>
                    {project.title}
                  </TextLink>
                </h3>
                <div
                  className={`mt-5 rounded bg-light-navy p-5 text-sm leading-relaxed text-light-slate shadow-lg md:p-6 ${
                    reversed ? "md:ml-0" : ""
                  }`}
                >
                  {project.blurb}
                </div>
                <ul
                  className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate ${
                    reversed ? "md:justify-end" : ""
                  }`}
                >
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`mt-4 flex gap-2 ${
                    reversed ? "md:justify-end" : ""
                  }`}
                >
                  <Chip>
                    <TextLink
                      href={project.liveUrl}
                      external
                      className="text-green hover:text-white"
                    >
                      Live site ↗
                    </TextLink>
                  </Chip>
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className={`pointer-events-none absolute inset-y-4 hidden rounded md:pointer-events-auto md:block md:col-span-7 ${
                  reversed
                    ? "md:col-start-1 md:right-auto"
                    : "md:col-start-6"
                } bg-gradient-to-br from-lightest-navy/80 via-light-navy to-navy ring-1 ring-green/10 transition group-hover:ring-green/30`}
              >
                <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold tracking-tight text-green/20 transition group-hover:text-green/35">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
