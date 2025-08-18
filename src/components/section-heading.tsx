import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({ className, children = "Title" }: Props) {
  return (
    <h2
      className={cn(
        "max-w-[12ch] text-2xl leading-normal font-semibold sm:text-4xl xl:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
