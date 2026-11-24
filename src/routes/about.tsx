import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, HeartHandshake } from "lucide-react";

import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HERO_STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vantriqsolutions — Your Trusted IT Partner" },
      {
        name: "description",
        content:
          "Learn about Vantriqsolutions: a team of developers, marketers and sales specialists helping businesses grow since day one.",
      },
      { property: "og:title", content: "About Vantriqsolutions" },
      {
        property: "og:description",
        content: "A team of developers, marketers and sales specialists helping businesses grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Give every business access to the technology and sales support big companies have.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Be the most trusted growth partner for small and mid-sized businesses worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    text: "Clear communication, honest reporting and results you can measure.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        tag="About us"
        title="Better Technology, Brighter Tomorrow"
        subtitle="Vantriqsolutions brings developers, marketers and sales specialists together under one roof to help your business grow."
      />
      <section className="py-16">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="container-site mt-10">
          <dl className="grid gap-6 rounded-3xl bg-surface p-8 sm:grid-cols-3">
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="text-brand-gradient text-4xl font-extrabold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
