import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PricingPlans() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {PLANS.map((plan) => (
        <article
          key={plan.name}
          className={cn(
            "relative flex flex-col rounded-3xl border p-8 shadow-card",
            plan.featured
              ? "bg-navy-gradient border-transparent text-navy-foreground lg:-translate-y-3"
              : "border-border bg-card",
          )}
        >
          {plan.featured ? (
            <span className="absolute -top-3 left-8 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral-foreground">
              Most popular
            </span>
          ) : null}
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p
            className={cn(
              "mt-2 text-sm",
              plan.featured ? "text-navy-muted" : "text-muted-foreground",
            )}
          >
            {plan.description}
          </p>
          <p className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold">{plan.price}</span>
            <span
              className={cn("text-sm", plan.featured ? "text-navy-muted" : "text-muted-foreground")}
            >
              {plan.period}
            </span>
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant={plan.featured ? "coral" : "brand"}
            size="xl"
            className="mt-8 w-full"
          >
            <Link to="/contact">{plan.price === "Custom" ? "Talk to Sales" : "Get Started"}</Link>
          </Button>
        </article>
      ))}
    </div>
  );
}
