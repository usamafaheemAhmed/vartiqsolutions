import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { PricingPlans } from "@/components/site/PricingPlans";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Simple Plans | Vantriqsolutions" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for websites, SEO, lead generation, appointment booking and cold calling.",
      },
      { property: "og:title", content: "Pricing | Vantriqsolutions" },
      {
        property: "og:description",
        content: "Simple, transparent plans for every stage of your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        tag="Pricing"
        title="Simple Plans, Real Growth"
        subtitle="Pick a plan that fits your business today — upgrade any time as you grow."
      />
      <section className="py-20">
        <div className="container-site">
          <PricingPlans />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
