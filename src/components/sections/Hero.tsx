"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen items-center pt-[var(--nav-height)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(100,255,218,0.07),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(17,34,64,0.9),transparent_55%)]"
      />
      <Container className="relative py-24 md:py-28">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-sm text-green md:text-base"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-lightest-slate sm:text-6xl md:text-7xl"
          >
            {site.name}.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-slate sm:text-4xl md:text-5xl"
          >
            {site.role}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-slate md:text-lg"
          >
            {site.pitch} Based in {site.location}.
          </motion.p>
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Button href={`mailto:${site.email}`}>Get in touch</Button>
            <Button
              href={site.socials.find((s) => s.label === "LinkedIn")!.href}
              variant="ghost"
              external
            >
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
