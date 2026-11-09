import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  external,
  className,
}: TextLinkProps) {
  const classes = cn(
    "text-lightest-slate transition hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
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
