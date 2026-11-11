import type { Metadata } from "next";

import { ComingSoon } from "../_component/coming-soon";

export const metadata: Metadata = {
  title: "My Facilities | SportNest",
};

export default function MyFacilitiesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">My Facilities</h1>
        <p className="text-sm text-muted-foreground">
          Manage the facilities you have listed on SportNest.
        </p>
      </div>

      <ComingSoon description="Your listed facilities will live here." />
    </div>
  );
}
