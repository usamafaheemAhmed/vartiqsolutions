import { PROCESS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

// Desktop: row 1 = steps 1-3 (left→right), row 2 = steps 4-6 (left→right)
const POSITION = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

// Curved connector between two circles (desktop)
// set 1 = starts at top, arches over, ends at bottom
// set 2 = starts at bottom, dips under, ends at top
function CurveConnector({ set = 1 }: { set?: 1 | 2 }) {
  const isDown = set === 1;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[calc(50%+3rem)] top-0 h-16 w-[calc(100%-6rem)] text-primary/60"
    >
      {/* curved dashed line (viewBox height 64 = container height in px) */}
      <svg
        viewBox="0 0 100 64"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          d={isDown ? "M -5 0 C 20 -84, 70 -16, 100 15" : "M -3 60 C 20 110, 70 80, 100 40"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* arrow head: fixed-size SVG so it never gets stretched */}
      <svg
        viewBox="0 0 12 12"
        className="absolute right-0 size-3.5"
        style={{
          top: isDown ? "17px" : "36px",
          right: isDown ? "-3px" : "-7px",
          transform: `translate(30%, -50%) rotate(${isDown ? 38 : -38}deg)`,
        }}
      >
        <path
          d="M 2 1.5 L 10 6 L 2 10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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

        {/* Desktop: two rows, left→right, curved connectors */}
        <ol className="mt-20 hidden grid-cols-3 gap-y-24 lg:grid">
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            const isPrimary = i % 2 === 0;
            const isLastInRow = i % 3 === 2; // no connector after step 3 or step 6

            return (
              <li
                key={p.step}
                className={cn(
                  "group relative flex flex-col items-center px-8 text-center",
                  POSITION[i],
                )}
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
                <h3 className="mt-2 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>

                {!isLastInRow && <CurveConnector set={i % 3 === 0 ? 1 : 2} />}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
