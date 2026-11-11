import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { FacilityCard } from "@/components/facility-card";

import { FType } from "../type/fecilitiesType";

export async function FeaturedFacilities() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-fecilities`,{cache : "no-store"})
  const featuredFecilities : FType[] = await res.json()
  return (
    <section className="bg-muted/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Featured Facilities
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            Hand-picked venues with top ratings from the SportNest community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredFecilities.map((facility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink variant="outline" href="/all-facilities">
            View All Facilities
            <ArrowRight data-icon="inline-end" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
