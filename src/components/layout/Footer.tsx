import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <Container className="flex flex-col items-center gap-6">
        <ul className="flex items-center gap-6 lg:hidden">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-slate transition hover:text-green"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs text-slate">
          Designed & Built by {site.name}
        </p>
      </Container>
    </footer>
  );
}
