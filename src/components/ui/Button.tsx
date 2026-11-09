import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-6 py-3 font-mono text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
    variant === "primary" &&
      "border border-green text-green hover:bg-green-tint",
    variant === "ghost" &&
      "border border-transparent text-light-slate hover:text-green",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
