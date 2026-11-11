import type { Metadata } from "next";

import { AddFacilityForm } from "../_component/add-facility-form";

export const metadata: Metadata = {
  title: "Add Facilities | SportNest",
};

export default function AddFacilitiesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Add Facilities</h1>
        <p className="text-sm text-muted-foreground">
          List a new sports facility on SportNest.
        </p>
      </div>

      <AddFacilityForm />
    </div>
  );
}
