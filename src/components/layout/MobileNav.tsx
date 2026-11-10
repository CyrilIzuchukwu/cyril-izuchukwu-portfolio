"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-sm border border-lightest-navy/70 bg-navy/80 text-green backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex w-5 flex-col gap-1.5">
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

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm"
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
    </div>
  );
}
