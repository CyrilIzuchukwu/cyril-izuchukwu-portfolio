"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24 py-[var(--section-pad)]", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className={containerClassName}>{children}</Container>
    </motion.section>
  );
}
