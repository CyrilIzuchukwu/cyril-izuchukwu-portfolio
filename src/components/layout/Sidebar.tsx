"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { SECTION_IDS, type SectionId } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";

const sectionOrder = [
  SECTION_IDS.about,
  SECTION_IDS.experience,
  SECTION_IDS.projects,
] as const;

export function Sidebar() {
  const [active, setActive] = useState<SectionId>(SECTION_IDS.about);

  useEffect(() => {
    const elements = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0, 0.1, 0.25],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
            <a
              href="/"
              className="transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
            >
              {site.name}
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
            {site.role}
          </h2>
          <p className="mt-4 max-w-xs text-base leading-normal text-slate">
            {site.pitch}
          </p>
        </div>

        <nav className="mt-10 hidden lg:block" aria-label="Section">
          <ul className="w-max">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "") as SectionId;
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 py-3 text-xs font-bold uppercase tracking-widest transition",
                      isActive
                        ? "text-lightest-slate"
                        : "text-slate hover:text-lightest-slate",
                    )}
                  >
                    <span
                      className={cn(
                        "h-px transition-all",
                        isActive
                          ? "w-16 bg-lightest-slate"
                          : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate",
                      )}
                      aria-hidden
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 lg:hidden">
          <Button href={site.resumePath} external>
            Resume
          </Button>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 lg:mt-0">
        <SocialIcons />
        <Button
          href={site.resumePath}
          external
          className="hidden px-4 py-2 text-xs lg:inline-flex"
        >
          Resume
        </Button>
      </div>
    </header>
  );
}
