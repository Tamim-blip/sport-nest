import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";

import { ComingSoon } from "./_component/coming-soon";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3 rounded-2xl bg-gradient-to-r from-primary to-emerald-500 p-8 text-primary-foreground md:p-10">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Welcome back 👋
        </h1>
        <p className="max-w-md text-sm opacity-90">
          Manage your facilities and bookings — everything in your SportNest
          dashboard, all in one place.
        </p>
        <ButtonLink
          variant="secondary"
          href="/dashboard/add-facilities"
          className="mt-2"
        >
          Add a Facility
          <ArrowRight data-icon="inline-end" />
        </ButtonLink>
      </div>

      <ComingSoon description="Dashboard stats and quick actions will live here." />
    </div>
  );
}
