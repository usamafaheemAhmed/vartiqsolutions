import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, PhoneCall } from "lucide-react";

import heroImg from "@/assets/hero-illustration.webp";
import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-10 size-[28rem] rounded-full bg-primary-glow/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-dots pointer-events-none absolute right-8 top-8 hidden h-24 w-32 opacity-70 lg:block"
        aria-hidden="true"
      />

      <div className="container-site relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <span className="section-tag animate-fade-up">
            <span className="size-1.5 rounded-full bg-primary" />
            Smart IT solutions for growing businesses
          </span>
          <h1 className="mt-6 animate-fade-up text-[2.6rem] font-extrabold leading-[1.05] text-foreground [animation-delay:80ms] sm:text-6xl lg:text-[4.1rem]">
            Grow Your Business With <span className="text-brand-gradient">Smart IT</span> Solutions
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
            From custom web, mobile, and backend engineering to SEO, social media, lead generation,
            and appointment booking—built to scale your business.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Button asChild variant="brand" size="xl">
              <Link to="/contact">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-brand" size="xl">
              <Link to="/services">
                Our Services <ArrowRight />
              </Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-xl animate-fade-up grid-cols-3 gap-4 [animation-delay:320ms]">
            {HERO_STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-xl font-extrabold leading-none text-foreground">{value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Laptop showing a growth dashboard surrounded by SEO, booking, calling and lead icons"
            width={1200}
            height={800}
            className="relative w-full animate-float drop-shadow-2xl"
          />
          <div className="absolute -bottom-2 left-2 hidden animate-float-slow items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-card sm:flex">
            <span className="grid size-10 place-items-center rounded-xl bg-coral-soft text-coral">
              <CalendarCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">+240 bookings</p>
              <p className="text-xs text-muted-foreground">this month</p>
            </div>
          </div>
          <div className="absolute right-0 top-0 hidden animate-float-slow items-center gap-3 rounded-2xl bg-card p-3 pr-5 shadow-card [animation-delay:1.5s] sm:flex">
            <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <PhoneCall className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">1,800+ calls</p>
              <p className="text-xs text-muted-foreground">made every week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
