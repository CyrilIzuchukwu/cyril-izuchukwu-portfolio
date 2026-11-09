import { about } from "@/content/about";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Chip } from "@/components/ui/Chip";

export function About() {
  return (
    <Section id={SECTION_IDS.about} containerClassName="max-w-3xl">
      <Heading index="01.">{about.headline}</Heading>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-slate md:text-lg">
        <p>{about.summary}</p>
      </div>

      <div className="mt-10 space-y-6">
        {about.skills.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-green">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <Chip>{skill}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-green">
          Education
        </h3>
        <ul className="space-y-4">
          {about.education.map((item) => (
            <li key={`${item.school}-${item.year}`} className="text-sm md:text-base">
              <p className="font-medium text-lightest-slate">
                {item.title}
                <span className="text-slate"> · {item.school}</span>
              </p>
              <p className="font-mono text-xs text-slate">
                {item.year} · {item.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
