import { Quote, Star } from "lucide-react";

import ali from "@/assets/avatar-ali.jpg";
import sarah from "@/assets/avatar-sarah.jpg";
import usman from "@/assets/avatar-usman.jpg";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const AVATARS = { ali, sarah, usman };

export function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from businesses that trust us."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Quote className="size-9 fill-primary text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-star text-star" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3">
                <img
                  src={AVATARS[t.avatar]}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
