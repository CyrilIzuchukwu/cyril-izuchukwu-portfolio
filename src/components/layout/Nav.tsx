"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] px-6 transition-all duration-300 md:px-10",
        scrolled
          ? "h-[70px] bg-navy/85 shadow-[0_10px_30px_-10px_var(--navy-shadow)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-full w-full max-w-[1000px] items-center justify-between lg:max-w-none"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group relative flex h-10 w-10 items-center justify-center text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          aria-label={`${site.name} home`}
        >
          <svg
            viewBox="0 0 84 96"
            className="absolute inset-0 h-full w-full text-green transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="42,2 82,24 82,72 42,94 2,72 2,24"
              stroke="currentColor"
              strokeWidth="5"
              fill="var(--navy)"
            />
          </svg>
          <span className="relative z-10 font-mono text-xl font-semibold">
            C
          </span>
        </Link>

        <ol className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 font-mono text-xs text-lightest-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <span className="text-green">0{index + 1}.</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Button href={site.resumePath} external className="px-4 py-2 text-xs">
              Resume
            </Button>
          </li>
        </ol>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-green md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-[30px] flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full bg-green transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-green transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-green transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[min(75vw,400px)] flex-col items-center justify-center gap-10 bg-light-navy px-8 shadow-2xl"
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <ol className="flex flex-col items-center gap-6">
                {site.nav.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex flex-col items-center gap-1 font-mono text-lg text-lightest-slate"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-sm text-green">0{index + 1}.</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <Button href={site.resumePath} external>
                Resume
              </Button>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
