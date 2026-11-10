import Image from "next/image";
import { about } from "@/content/about";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

export function About() {
  return (
    <Section id={SECTION_IDS.about} aria-label="About me">
      <Heading>{about.headline}</Heading>

      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(10rem,13rem)] md:gap-12">
        <div className="space-y-4 text-base leading-relaxed text-slate">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.parts.map((part, partIndex) =>
                part.kind === "link" ? (
                  <TextLink
                    key={`${index}-${partIndex}`}
                    href={part.href}
                    external
                    className="font-medium text-lightest-slate hover:text-green"
                  >
                    {part.label}
                  </TextLink>
                ) : (
                  <span key={`${index}-${partIndex}`}>{part.value}</span>
                ),
              )}
            </p>
          ))}

          <p className="pt-2 text-sm text-slate">
            A few technologies I’ve been working with recently:
          </p>
          <ul className="grid max-w-md grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs text-slate">
            {about.recentTech.map((tech) => (
              <li key={tech} className="relative pl-4 before:absolute before:left-0 before:text-green before:content-['▹']">
                {tech}
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-green">
              Education
            </p>
            <ul className="space-y-3 text-sm">
              {about.education.map((item) => (
                <li key={`${item.school}-${item.year}`}>
                  <p className="font-medium text-lightest-slate">
                    {item.title}
                    <span className="text-slate"> · {item.school}</span>
                  </p>
                  <p className="font-mono text-[11px] text-slate">
                    {item.year} · {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[14rem] md:mx-0 md:max-w-none">
          <div className="group relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded border border-green transition group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="relative overflow-hidden rounded bg-green">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={480}
                height={640}
                className="aspect-[3/4] w-full object-cover mix-blend-multiply grayscale contrast-110 transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-navy/25 mix-blend-screen transition group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
