import Image from "next/image";
import { ArrowRight, CalendarCheck, Star } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { heroImage } from "@/data/dummy-data";

export function Hero() {
  return (
    <section className="relative flex h-[480px] items-center overflow-hidden md:h-[540px]">
      <Image
        src={heroImage}
        alt="Athletes playing sports"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-xl space-y-5">
          <Badge variant="secondary" className="gap-1">
            <Star className="fill-current" />
            Trusted by 5,000+ athletes
          </Badge>
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Book Your Game.
            <br />
            <span className="text-primary">Play Your Passion.</span>
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Find and reserve football grounds, cricket fields, courts, and
            pools near you — all in one place, all in seconds.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink size="lg" href="/all-facilities">
              Browse Facilities
              <ArrowRight data-icon="inline-end" />
            </ButtonLink>
            <ButtonLink size="lg" variant="outline" href="#why-choose-us">
              Learn More
            </ButtonLink>
          </div>
          <p className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <CalendarCheck className="size-4 text-primary" />
            Free cancellation up to 6 hours before your slot
          </p>
        </div>
      </div>
    </section>
  );
}
