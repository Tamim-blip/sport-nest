import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";

export function Cta() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="space-y-5 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            Ready To Book Your Next Game?
          </h2>
          <p className="mx-auto max-w-xl text-sm opacity-90 md:text-base">
            Join thousands of athletes who book their favourite facilities with
            SportNest. Your next match is just a few clicks away.
          </p>
          <ButtonLink
            size="lg"
            variant="secondary"
            className="h-11 px-8 text-base"
            href="/all-facilities"
          >
            Book Now
            <ArrowRight data-icon="inline-end" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
