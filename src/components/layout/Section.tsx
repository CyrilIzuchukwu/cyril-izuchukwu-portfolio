import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function Section({
  id,
  children,
  className,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("scroll-mt-24 mb-16 last:mb-0 md:mb-24", className)}
    >
      {children}
    </section>
  );
}
