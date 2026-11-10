import { cn } from "@/lib/cn";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lightest-slate md:hidden",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
