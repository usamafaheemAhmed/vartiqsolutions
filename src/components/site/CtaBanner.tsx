import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-site">
        <div className="bg-navy-gradient relative overflow-hidden rounded-3xl px-8 py-12 text-navy-foreground md:px-14 md:py-14">
          <TrendingUp
            className="pointer-events-none absolute right-[30%] top-1/2 hidden size-32 -translate-y-1/2 text-primary-glow/30 lg:block"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Scale Your Business?</h2>
              <p className="mt-3 max-w-xl text-navy-muted">
                Let's discuss how Vantriqsolutions can help you achieve your goals.
              </p>
            </div>
            <Button asChild variant="coral" size="xl" className="h-14 px-8 text-base">
              <Link to="/contact">
                Book a Free Consultation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
