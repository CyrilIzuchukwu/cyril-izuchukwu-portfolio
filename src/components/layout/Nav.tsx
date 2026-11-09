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
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] transition-all duration-300",
        scrolled
          ? "bg-navy/85 shadow-[0_10px_30px_-10px_var(--navy-shadow)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-full max-w-content items-center justify-between px-6 md:px-12 lg:px-24"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-mono text-xl font-semibold text-green transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          aria-label={`${site.name} home`}
        >
          CI
        </Link>

        <ol className="hidden items-center gap-8 md:flex">
          {site.nav.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group inline-flex items-center gap-2 font-mono text-xs text-light-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <span className="text-green">
                  0{index + 1}.
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <Button href={site.resumePath} external>
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
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-6 flex-col gap-1.5">
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
              className="absolute right-0 top-0 flex h-full w-[min(75vw,20rem)] flex-col items-center justify-center gap-8 bg-light-navy px-8 shadow-2xl"
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
                      className="flex flex-col items-center gap-1 font-mono text-sm text-lightest-slate"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-green">0{index + 1}.</span>
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
