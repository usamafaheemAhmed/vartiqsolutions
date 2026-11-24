import { createFileRoute } from "@tanstack/react-router";

import { LegalDocument } from "@/components/site/LegalDocument";
import { PageHero } from "@/components/site/PageHero";
import privacyContent from "@/lib/legal/privacy-policy.txt?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Vantriqsolutions" },
      {
        name: "description",
        content: "Learn how Vantriqsolutions collects, uses and protects personal information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal information."
      />
      <section className="py-16 md:py-20">
        <div className="container-site">
          <LegalDocument content={privacyContent} />
        </div>
      </section>
    </>
  );
}
