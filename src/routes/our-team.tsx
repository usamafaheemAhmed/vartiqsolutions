import { createFileRoute } from "@tanstack/react-router";
import { Code2, HeartHandshake, Megaphone, PhoneCall } from "lucide-react";

import teamOffice from "@/assets/team-office.jpg";
import MU from "@/assets/Muhammad-usama.jpg";
import SN from "@/assets/avatar-sarah.jpg";
import TF from "@/assets/avatar-sarah.jpg";
import UFA from "@/assets/usama-faheem-ahmed-white.jpg";
import AIM from "@/assets/ali-irtiah-mukhat.jpg";
import AA from "@/assets/arsalan-ali.jpg";
import MAK from "@/assets/Muhammad-ali-khan.jpg";
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

const AVATARS = {
  MU,
  SN,
  UFA,
  AIM,
  AA,
  MAK,
  TF,
};

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

          {/* Compact member list: circular photo, name and title only.
              Flex-wrap + justify-center keeps an incomplete last row centered,
              so it looks balanced with any number of members (12, 17, ...). */}
          <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10">
            {TEAM_MEMBERS.map((member) => (
              <li
                key={member.name}
                className="group flex w-[calc(50%-0.75rem)] flex-col items-center text-center sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div className="size-28 overflow-hidden rounded-full bg-muted shadow-card ring-4 ring-background transition-transform duration-300 group-hover:scale-105 sm:size-32 lg:size-36">
                  <img
                    src={AVATARS[member.avatar]}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-primary">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
