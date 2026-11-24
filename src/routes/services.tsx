import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ServicesSection } from "@/components/site/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services — Web, SEO, Leads & Cold Calling | Vantriqsolutions" },
      {
        name: "description",
        content:
          "Explore Vantriqsolutions's services: web development, appointment booking, cold calling, SEO, lead generation, digital marketing, apps and IT support.",
      },
      { property: "og:title", content: "IT Services | Vantriqsolutions" },
      {
        property: "og:description",
        content:
          "Web development, appointment booking, cold calling, SEO, lead generation and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our services"
        title="Everything Your Business Needs to Grow"
        subtitle="From your website to your sales calls, our expert team handles the work so you can focus on running your business."
      />
      <ServicesSection detailed showHeading={false} />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
