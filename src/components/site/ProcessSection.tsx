import { PROCESS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          tag="Our process"
          title="How We Work"
          subtitle="A simple and transparent process to turn your ideas into real results."
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <li key={p.step} className="relative flex items-start gap-4">
              <span
                className={cn(
                  "grid size-14 shrink-0 place-items-center rounded-full text-lg font-extrabold",
                  i % 2 === 0
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-coral text-coral-foreground shadow-coral",
                )}
              >
                {p.step}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
              {i < PROCESS.length - 1 && (i + 1) % 3 !== 0 ? (
                <span
                  className="absolute -right-6 top-7 hidden w-8 items-center lg:flex"
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 border-t-2 border-dashed border-primary/50" />
                  <span className="-ml-1 size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-primary/50" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
