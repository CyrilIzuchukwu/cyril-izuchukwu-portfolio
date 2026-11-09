import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content px-6 md:px-12 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
}
