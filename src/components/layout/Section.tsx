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
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-[var(--section-pad)]", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
