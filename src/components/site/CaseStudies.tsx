import { ArrowUpRight } from "lucide-react";

import { CASE_STUDIES } from "@/lib/site-data";

export function CaseStudiesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {CASE_STUDIES.map(({ client, industry, service, title, result, resultLabel, icon: Icon }) => (
        <article
          key={client}
          className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="bg-navy-gradient relative flex h-44 items-end justify-between p-6 text-navy-foreground">
            <div
              className="bg-dots absolute right-4 top-4 h-16 w-24 opacity-40"
              aria-hidden="true"
            />
            <div>
              <p className="text-4xl font-extrabold text-primary-glow">{result}</p>
              <p className="text-sm text-navy-muted">{resultLabel}</p>
            </div>
            <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="size-6" />
            </span>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-primary-soft px-2.5 py-1 text-accent-foreground">
                {service}
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                {industry}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-primary">
              {client}{" "}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
