import { createFileRoute } from "@tanstack/react-router";
import { Code2, HeartHandshake, Megaphone, PhoneCall } from "lucide-react";

import ali from "@/assets/avatar-ali.jpg";
import sarah from "@/assets/avatar-sarah.jpg";
import teamOffice from "@/assets/team-office.jpg";
import usman from "@/assets/avatar-usman.jpg";
import musama from "@/assets/avatar-usman.jpg";
import usama from "@/assets/usama-faheem-ahmed.jpg";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { TEAM_MEMBERS } from "@/lib/site-data";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Team — Vantriqsolutions" },
      {
        name: "description",
        content: "Meet the developers, marketers and sales specialists behind Vantriqsolutions.",
      },
      { property: "og:title", content: "Meet Our Team | Vantriqsolutions" },
      {
        property: "og:description",
        content: "A collaborative team of developers, marketers and sales specialists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurTeamPage,
});

const AVATARS = { ali, sarah, usman, musama, usama };

const capabilities = [
  {
    icon: Code2,
    title: "Development",
    text: "Websites, apps and cloud systems built for reliability.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    text: "SEO and campaigns focused on sustainable growth.",
  },
  {
    icon: PhoneCall,
    title: "Sales",
    text: "Professional outreach that creates real opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Client Success",
    text: "Clear communication and support from start to finish.",
  },
];

function OurTeamPage() {
  return (
    <>
      <PageHero
        tag="Our team"
        title="People Behind Your Growth"
        subtitle="Our developers, marketers and sales specialists work together to turn your business goals into practical results."
      />

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <img
                src={teamOffice}
                alt="Vantriqsolutions team working together"
                className="h-full max-h-[470px] w-full object-cover"
              />
            </div>
            <div>
              <span className="section-tag">One collaborative team</span>
              <h2 className="mt-5 text-3xl font-extrabold text-foreground md:text-4xl">
                Different Expertise. Shared Goals.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                We combine technical skill, commercial thinking and responsive support under one
                team. You do not need to coordinate separate vendors: our specialists align around
                your priorities and keep work moving.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-border bg-card p-5">
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-3 font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag">Meet the team</span>
            <h2 className="mt-5 text-3xl font-extrabold text-foreground md:text-4xl">
              The People You Can Count On
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experienced specialists committed to quality work and honest communication.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card text-center shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={AVATARS[member.avatar]}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
