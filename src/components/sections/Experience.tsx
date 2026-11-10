import { experience } from "@/content/experience";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

export function Experience() {
  return (
    <Section id={SECTION_IDS.experience} aria-label="Experience">
      <Heading>{experience.headline}</Heading>

      <ol className="group/list space-y-4">
        {experience.items.map((item) => (
          <li key={item.id}>
            <article className="group relative grid gap-2 rounded-md px-0 py-4 transition hover:bg-light-navy/40 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-6 sm:px-4 lg:px-5">
              <p className="pt-1 font-mono text-xs uppercase tracking-wide text-slate">
                {item.range}
              </p>

              <div>
                <h3 className="font-medium leading-snug text-lightest-slate">
                  <span>{item.title}</span>
                  <span className="text-slate"> · </span>
                  {item.companyUrl ? (
                    <TextLink
                      href={item.companyUrl}
                      external
                      className="inline-flex items-center gap-1 text-lightest-slate group-hover:text-green"
                    >
                      {item.company}
                      <span aria-hidden className="text-xs">
                        ↗
                      </span>
                    </TextLink>
                  ) : (
                    <span className="text-lightest-slate">{item.company}</span>
                  )}
                </h3>
                <p className="mt-1 text-xs text-slate">{item.location}</p>

                <ul className="mt-3 space-y-2">
                  {item.bullets.slice(0, 3).map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-relaxed text-slate"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                  {item.tech.map((tech) => (
                    <li key={tech}>
                      <span className="transition group-hover:text-green">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
