"use client";

import { useState } from "react";
import { experience } from "@/content/experience";
import { SECTION_IDS } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experience.items[activeIndex] ?? experience.items[0];

  return (
    <Section id={SECTION_IDS.experience} containerClassName="max-w-[700px]">
      <Heading index="02.">{experience.headline}</Heading>

      <div className="mt-10 flex min-h-[340px] flex-col md:flex-row">
        <div
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
              event.preventDefault();
              setActiveIndex((i) => (i + 1) % experience.items.length);
            }
            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
              event.preventDefault();
              setActiveIndex(
                (i) =>
                  (i - 1 + experience.items.length) % experience.items.length,
              );
            }
          }}
          className="relative z-[3] mb-8 flex w-full overflow-x-auto md:mb-0 md:w-max md:flex-col md:overflow-visible"
        >
          {experience.items.map((item, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  "relative flex h-[42px] min-w-[120px] items-center whitespace-nowrap border-b-2 border-lightest-navy px-4 text-center font-mono text-xs transition md:w-full md:border-b-0 md:border-l-2 md:px-5 md:text-left",
                  selected
                    ? "bg-green-tint text-green"
                    : "bg-transparent text-slate hover:bg-light-navy hover:text-green",
                )}
                onClick={() => setActiveIndex(index)}
              >
                {item.company}
              </button>
            );
          })}
          <span
            aria-hidden
            className="absolute bottom-0 left-0 z-10 hidden h-[42px] w-0.5 rounded bg-green transition-transform duration-250 md:block"
            style={{
              transform: `translateY(${activeIndex * 42}px)`,
            }}
          />
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="w-full px-1 py-2.5 md:ml-5"
        >
          <h3 className="text-[22px] font-medium leading-snug text-lightest-slate">
            <span>{active.title}</span>{" "}
            <span className="text-green">@ {active.company}</span>
          </h3>
          <p className="mb-6 mt-1 font-mono text-xs text-light-slate">
            {active.range}
          </p>
          <ul className="space-y-2.5">
            {active.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-7 text-[15px] leading-relaxed text-slate before:absolute before:left-0 before:text-green before:content-['▹'] md:text-base"
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
