import { site } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section
      id={SECTION_IDS.contact}
      containerClassName="max-w-[600px] text-center"
      className="pb-24"
    >
      <p className="font-mono text-base text-green">04. What’s Next?</p>
      <h2 className="mt-5 font-display text-[clamp(40px,5vw,60px)] font-semibold text-lightest-slate">
        Get In Touch
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate">
        Open to backend-leaning fullstack roles, collaborations, and product
        builds. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <div className="mt-12">
        <Button href={`mailto:${site.email}`} className="px-7 py-5 text-sm">
          Say Hello
        </Button>
      </div>
    </Section>
  );
}
