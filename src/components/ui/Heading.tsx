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
        "flex w-full items-center gap-3 whitespace-nowrap text-[clamp(26px,5vw,32px)] font-semibold leading-tight text-lightest-slate",
        className,
      )}
    >
      {index ? (
        <span className="relative top-1 font-mono text-[clamp(16px,3vw,20px)] font-normal text-green">
          {index}
        </span>
      ) : null}
      <span>{children}</span>
      <span
        aria-hidden
        className="ml-2 hidden h-px w-full max-w-[300px] bg-lightest-navy md:block"
      />
    </Tag>
  );
}
