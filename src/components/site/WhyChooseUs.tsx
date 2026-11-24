import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import teamImg from "@/assets/team-office.jpg";
import { WHY_POINTS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  const pct = 98;
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <section className="py-20 md:py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            tag="Why Vantriq"
            title="Built to Help Your Business Scale Faster"
            subtitle="We take the heavy lifting of web development, search rankings, and daily prospecting off your plate—giving you back the time to focus on running your business."
          />
          <ul className="mt-8 space-y-4">
            {WHY_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-lg font-medium text-foreground">
                <CheckCircle2 className="size-6 shrink-0 fill-primary text-primary-foreground" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={teamImg}
            alt="Vantriqsolutions team members on calls and working on laptops"
            width={1200}
            height={800}
            loading="lazy"
            className="aspect-[3/2] w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute -bottom-8 right-4 flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card-hover sm:right-8">
            <svg viewBox="0 0 64 64" className="size-16 -rotate-90" aria-hidden="true">
              <circle
                cx="32"
                cy="32"
                r={r}
                fill="none"
                stroke="var(--primary-soft)"
                strokeWidth="8"
              />
              <circle
                cx="32"
                cy="32"
                r={r}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={c * (1 - pct / 100)}
              />
            </svg>
            <div>
              <p className="flex items-center gap-2 text-3xl font-extrabold text-foreground">
                {pct}% <ArrowUpRight className="size-5 text-primary" />
              </p>
              <p className="text-sm font-medium text-foreground">Client Satisfaction</p>
              <p className="text-xs text-muted-foreground">Based on 500+ client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
