import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FType } from "./type/fecilitiesType";

export function FacilityCard({ facility }: { facility: FType }) {
  return (
    <Card className="gap-4 pt-0 transition-shadow hover:shadow-md">
      <Image
        src={facility.imageUrl}
        alt={facility.name}
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          {facility.name}
          <Badge variant="secondary" className="gap-1">
            Capacity {facility.capacity}
          </Badge>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="size-3.5" />
          {facility.location} · {facility.sportType}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-base font-semibold text-primary">
          ৳{facility.pricePerHour}
          <span className="text-xs font-normal text-muted-foreground">
            {" "}
            / hour
          </span>
        </p>
        <ButtonLink size="sm" variant="outline" href={`/all-facilities/${facility._id}`}>
          Book Now
        </ButtonLink>
      </CardContent>
    </Card>
  );
}
