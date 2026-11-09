import { cn } from "@/lib/cn";

type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-lightest-navy/60 bg-light-navy/40 px-2.5 py-1 font-mono text-xs text-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
