import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-16 pb-4 pt-8 text-sm text-slate lg:mt-24">
      <p>
        Designed & built by{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-light-slate transition hover:text-green"
        >
          {site.name}
        </a>
        , inspired by Brittany Chiang.
      </p>
    </footer>
  );
}
