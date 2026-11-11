import type { Metadata } from "next";

import { FacilityCard } from "@/components/facility-card";
import { FType } from "@/components/type/fecilitiesType";


export const metadata: Metadata = {
  title: "All Facilities | SportNest",
  description:
    "Browse all sports facilities available for booking on SportNest.",
};

export default async function AllFacilitiesPage() {

  const res = await fetch('http://localhost:3001/fecilities',{cache : "no-cache"})
  const allFecilities : FType[] = await res.json()
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          All Facilities
        </h1>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Browse every venue on SportNest and book the perfect slot for your
          next game.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allFecilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
}
