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
      <Container className="relative py-24 md:py-28">
        <motion.div
          className="max-w-[1000px]"
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
            className="mb-7 font-mono text-base text-green md:mb-8"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] text-lightest-slate"
          >
            {site.name}.
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-1 font-display text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] text-slate"
          >
            {site.role}
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-5 max-w-[540px] text-lg leading-relaxed text-slate md:mt-6 md:text-xl"
          >
            {site.pitch}
          </motion.p>
          <motion.div variants={item} className="mt-12">
            <Button href={`mailto:${site.email}`}>Get in touch</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
