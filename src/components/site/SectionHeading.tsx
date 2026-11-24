import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}
    >
      <span className="section-tag">{tag}</span>
      <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-[2.5rem] md:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
