import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SERVICES, TINT_CLASSES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection({
  detailed = false,
  showHeading = true,
}: {
  detailed?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-site">
        {showHeading ? (
          <SectionHeading
            tag="Our services"
            title="What We Offer"
            subtitle="We provide integrated services to help your business grow faster and smarter."
          />
        ) : null}
        <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", showHeading && "mt-14")}>
          {SERVICES.slice(0, detailed ? SERVICES.length : 8).map(
            ({ title, description, icon: Icon, tint, points }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
              >
                <span
                  className={cn(
                    "grid size-14 place-items-center rounded-full transition-transform group-hover:scale-110",
                    TINT_CLASSES[tint],
                  )}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                {detailed ? (
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ),
          )}
        </div>
        {!detailed ? (
          <div className="mt-10 flex justify-center">
            <Button asChild variant="brand" size="xl">
              <Link to="/services">
                View More Services <ArrowRight />
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
