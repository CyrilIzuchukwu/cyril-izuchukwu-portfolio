import { site } from "@/content/site";
import { Container } from "./Container";
import { TextLink } from "@/components/ui/TextLink";

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <Container className="flex flex-col items-center gap-6">
        <ul className="flex items-center gap-6 md:hidden">
          {site.socials.map((social) => (
            <li key={social.label}>
              <TextLink
                href={social.href}
                external={social.external}
                className="font-mono text-xs text-slate hover:text-green"
              >
                {social.label}
              </TextLink>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs text-slate">
          Designed & built by {site.name}
        </p>
      </Container>
    </footer>
  );
}
