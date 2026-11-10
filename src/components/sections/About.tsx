import Image from "next/image";
import { about } from "@/content/about";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

export function About() {
  return (
    <Section id={SECTION_IDS.about} containerClassName="max-w-[900px]">
      <Heading index="01.">{about.headline}</Heading>

      <div className="mt-10 grid items-start gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-[17px] leading-[1.6] text-slate md:text-lg">
          <p>{about.paragraphs[0]}</p>
          <p>
            Fast-forward to today, and I’ve had the privilege of teaching and
            building backend systems at{" "}
            <TextLink
              href="https://kodexafrica.com/"
              external
              className="inline font-normal text-green hover:underline"
            >
              Kodex Africa
            </TextLink>
            , shipping product frontends, and delivering platforms for commerce,
            learning, filings, and nonprofit work across Nigeria. Full-stack
            capable — backend is the primary focus.
          </p>
          <p>{about.paragraphs[2]}</p>

          <ul className="mt-5 grid max-w-md grid-cols-2 gap-x-2 gap-y-2 font-mono text-sm text-slate">
            {about.recentTech.map((tech) => (
              <li
                key={tech}
                className="relative pl-5 before:absolute before:left-0 before:text-green before:content-['▹']"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-green">
              Education
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              {about.education.map((item) => (
                <li key={`${item.school}-${item.year}`}>
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
        </div>

        <div className="relative mx-auto w-[70%] max-w-[300px] md:mx-0 md:w-full md:max-w-none">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded border-2 border-green transition duration-300 group-hover:translate-x-[18px] group-hover:translate-y-[18px]"
            />
            <div className="relative overflow-hidden rounded bg-green shadow-[0_10px_30px_-15px_var(--navy-shadow)]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={500}
                height={500}
                priority
                className="relative z-[1] aspect-square w-full object-cover mix-blend-multiply grayscale contrast-110 transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 z-[2] bg-navy/30 mix-blend-screen transition group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
