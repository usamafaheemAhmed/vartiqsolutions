import { createFileRoute } from "@tanstack/react-router";

import { LegalDocument } from "@/components/site/LegalDocument";
import { PageHero } from "@/components/site/PageHero";
import termsContent from "@/lib/legal/terms-and-conditions.txt?raw";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Vantriqsolutions" },
      {
        name: "description",
        content: "Read the terms and conditions for Vantriqsolutions website and services.",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Terms and Conditions"
        subtitle="The terms that govern your use of our website and services."
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <LegalDocument content={termsContent} />
        </div>
      </section>
    </>
  );
}
