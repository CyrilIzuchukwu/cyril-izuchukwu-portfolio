"use client";

import { useState } from "react";
import { experience } from "@/content/experience";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export function Experience() {
  const [activeId, setActiveId] = useState(experience.items[0].id);
  const active =
    experience.items.find((item) => item.id === activeId) ?? experience.items[0];

  return (
    <Section id={SECTION_IDS.experience} containerClassName="max-w-3xl">
      <Heading index="02.">{experience.headline}</Heading>

      <div className="mt-10 flex flex-col gap-6 md:flex-row">
        <div
          role="tablist"
          aria-label="Job tabs"
          className="flex overflow-x-auto border-b border-lightest-navy md:w-44 md:shrink-0 md:flex-col md:overflow-visible md:border-b-0 md:border-l"
        >
          {experience.items.map((item) => {
            const selected = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                className={cn(
                  "relative whitespace-nowrap px-5 py-3 text-left font-mono text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:w-full",
                  selected
                    ? "bg-green-tint text-green"
                    : "text-slate hover:bg-light-navy/50 hover:text-green",
                )}
                onClick={() => setActiveId(item.id)}
              >
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full md:bottom-auto md:left-0 md:top-0 md:h-full md:w-0.5",
                    selected ? "bg-green" : "bg-transparent",
                  )}
                  aria-hidden
                />
                {item.company}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="min-h-[18rem] flex-1"
        >
          <h3 className="text-xl font-semibold text-lightest-slate">
            {active.title}{" "}
            <span className="text-green">@ {active.company}</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-slate">
            {active.range} · {active.location}
          </p>
          <ul className="mt-6 space-y-3">
            {active.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-6 text-sm leading-relaxed text-slate md:text-base before:absolute before:left-0 before:text-green before:content-['▹']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
