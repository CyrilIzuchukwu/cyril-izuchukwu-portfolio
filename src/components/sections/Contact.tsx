import { site } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section
      id={SECTION_IDS.contact}
      containerClassName="max-w-xl text-center"
      className="pb-24"
    >
      <p className="font-mono text-sm text-green">04. What’s next?</p>
      <h2 className="mt-4 font-display text-4xl font-semibold text-lightest-slate md:text-5xl">
        Get in touch
      </h2>
      <p className="mt-6 text-base leading-relaxed text-slate md:text-lg">
        Open to backend-leaning fullstack roles, collaborations, and product
        builds. Drop a line — I’ll get back as soon as I can.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href={`mailto:${site.email}`}>Say hello</Button>
        <Button href={site.resumePath} variant="ghost" external>
          Download resume
        </Button>
      </div>
      <p className="mt-8 font-mono text-xs text-slate">{site.email}</p>
    </Section>
  );
}
