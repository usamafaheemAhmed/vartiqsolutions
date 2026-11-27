import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/site/CtaBanner";
import { Hero } from "@/components/site/Hero";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantriqsolutions — Smart IT Solutions for Growing Businesses" },
      {
        name: "description",
        content:
          "Web development, SEO, lead generation, cold calling and appointment booking — all under one roof with Vantriqsolutions.",
      },
      {
        property: "og:title",
        content: "Vantriqsolutions — Smart IT Solutions for Growing Businesses",
      },
      {
        property: "og:description",
        content:
          "Web development, SEO, lead generation, cold calling and appointment booking — all under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CtaBanner />
    </>
  );
}
