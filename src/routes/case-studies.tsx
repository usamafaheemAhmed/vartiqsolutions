import { createFileRoute } from "@tanstack/react-router";

import { CaseStudiesGrid } from "@/components/site/CaseStudies";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Results | Vantriqsolutions" },
      {
        name: "description",
        content:
          "See how Vantriqsolutions helped clients grow with SEO, lead generation, cold calling, booking and web development.",
      },
      { property: "og:title", content: "Case Studies | Vantriqsolutions" },
      {
        property: "og:description",
        content: "Real results from real clients across SEO, leads, calling and web.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        tag="Case studies"
        title="Real Results for Real Businesses"
        subtitle="A look at how we've helped clients get more leads, more bookings and more sales."
      />
      <section className="py-20">
        <div className="container-site">
          <CaseStudiesGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
