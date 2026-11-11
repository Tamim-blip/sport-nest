import type { Metadata } from "next";

import { SearchX } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Page Not Found | SportNest",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-24 sm:py-32">
        <div className="space-y-6 text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <SearchX className="size-8" />
          </span>
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary">404</p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Page not found
            </h1>
            <p className="mx-auto max-w-md text-sm text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved. Head back and find your next game instead.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/all-facilities" variant="outline">
              Browse facilities
            </ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
