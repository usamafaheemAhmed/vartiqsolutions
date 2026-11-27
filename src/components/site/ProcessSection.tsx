import { PROCESS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// Straight connector between two circles (desktop).
// Circle is size-16 (4rem) => center at top-8. Line starts just right of the
// circle and runs to just before the next one.
function StraightConnector() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[calc(50%+2.75rem)] top-8 flex w-[calc(100%-5.5rem)] -translate-y-1/2 items-center text-primary/60"
    >
      <span className="h-0 flex-1 border-t-2 border-dashed border-current" />
      <ChevronRight className="-ml-1 size-4 shrink-0" strokeWidth={2.5} />
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          tag="Our process"
          title="How We Work"
          subtitle="A simple and transparent process to turn your ideas into real results."
        />

        {/* Mobile / tablet: vertical line */}
        <ol className="relative mx-auto mt-14 max-w-md lg:hidden">
          <span
            aria-hidden
            className="absolute bottom-7 left-7 top-7 border-l-2 border-dashed border-primary/40"
          />
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            const isPrimary = i % 2 === 0;
            return (
              <li key={p.step} className="relative flex gap-5 pb-10 last:pb-0">
                <span
                  className={cn(
                    "relative z-10 grid size-14 shrink-0 place-items-center rounded-full ring-8 ring-surface",
                    isPrimary
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-coral text-coral-foreground shadow-coral",
                  )}
                >
                  <Icon className="size-6" strokeWidth={2.25} />
                </span>
                <div className="pt-1">
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      isPrimary ? "text-primary" : "text-coral",
                    )}
                  >
                    Step {p.step}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Desktop: all steps in one straight horizontal line */}
        <ol className="mt-20 hidden grid-cols-6 lg:grid">
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            const isPrimary = i % 2 === 0;
            const isLast = i === PROCESS.length - 1;

            return (
              <li
                key={p.step}
                className="group relative flex flex-col items-center px-3 text-center"
              >
                <span
                  className={cn(
                    "relative z-10 grid size-16 place-items-center rounded-full ring-8 ring-surface transition-transform duration-300 group-hover:scale-110",
                    isPrimary
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-coral text-coral-foreground shadow-coral",
                  )}
                >
                  <Icon className="size-7" strokeWidth={2.25} />
                </span>

                <span
                  className={cn(
                    "mt-5 text-xs font-bold uppercase tracking-widest",
                    isPrimary ? "text-primary" : "text-coral",
                  )}
                >
                  Step {p.step}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground xl:text-lg">{p.title}</h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>

                {!isLast && <StraightConnector />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}