import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function SectionDescription({ className, children = "Description" }: Props) {
  return (
    <h2
      className={cn(
        "text-muted-foreground max-w-[50ch] leading-relaxed font-medium lg:text-lg lg:leading-loose",
        className,
      )}
    >
      {children}
    </h2>
  );
}
