import { cn } from "@/lib/cn";

type HeadingProps = {
  children: React.ReactNode;
  index?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function Heading({
  children,
  index,
  className,
  as: Tag = "h2",
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "flex items-baseline gap-3 font-display text-2xl font-semibold tracking-tight text-lightest-slate md:text-3xl",
        className,
      )}
    >
      {index ? (
        <span className="font-mono text-base font-normal text-green md:text-lg">
          {index}
        </span>
      ) : null}
      <span className="relative after:absolute after:left-[calc(100%+1rem)] after:top-1/2 after:hidden after:h-px after:w-40 after:bg-lightest-navy after:content-[''] md:after:block">
        {children}
      </span>
    </Tag>
  );
}
