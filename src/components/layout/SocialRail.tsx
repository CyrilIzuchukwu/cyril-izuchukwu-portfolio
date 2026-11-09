import { site } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

export function SocialRail() {
  return (
    <>
      <div className="fixed bottom-0 left-10 z-40 hidden w-10 flex-col items-center gap-6 lg:flex">
        <ul className="flex flex-col items-center gap-5">
          {site.socials.map((social) => (
            <li key={social.label}>
              <TextLink
                href={social.href}
                external={social.external}
                className="font-mono text-[11px] uppercase tracking-widest text-slate [writing-mode:vertical-rl] hover:-translate-y-0.5 hover:text-green"
              >
                {social.label}
              </TextLink>
            </li>
          ))}
        </ul>
        <span className="mt-2 h-24 w-px bg-slate" aria-hidden />
      </div>

      <div className="fixed bottom-0 right-10 z-40 hidden w-10 flex-col items-center gap-6 lg:flex">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-[11px] tracking-widest text-slate transition hover:-translate-y-0.5 hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green [writing-mode:vertical-rl]"
        >
          {site.email}
        </a>
        <span className="mt-2 h-24 w-px bg-slate" aria-hidden />
      </div>
    </>
  );
}
