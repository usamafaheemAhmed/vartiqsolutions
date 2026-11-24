import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vantriqsolutions — Get a Free Quote" },
      {
        name: "description",
        content:
          "Tell us about your project and get a free consultation and quote from Vantriqsolutions.",
      },
      { property: "og:title", content: "Contact Vantriqsolutions" },
      {
        property: "og:description",
        content: "Get a free consultation and quote for your next project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Let's Grow Your Business Together"
        subtitle="Have a project in mind? Send us a message and we'll reply within 24 hours."
      />
      <ContactSection />
    </>
  );
}
