import { cn } from "@/lib/utils";
import logoAsset from "@/assets/vantriq-logo.png";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img src={logoAsset} alt="" className="h-9 w-auto shrink-0" aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.2rem] font-extrabold tracking-tight",
            inverted ? "text-navy-foreground" : "text-foreground",
          )}
        >
          Vantriq
        </span>
        <span
          className={cn(
            "text-[0.95rem] font-medium tracking-tight",
            inverted ? "text-navy-muted" : "text-muted-foreground",
          )}
        >
          solutions
        </span>
      </span>
    </span>
  );
}
