import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { Suspense } from "react";
import {
  CalendarDays,
  CalendarX,
  Clock,
  LogIn,
  MapPin,
  Timer,
} from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { BType } from "@/components/type/bookingType";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

export const metadata: Metadata = {
  title: "My Bookings | SportNest",
};

function BookingsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-xl border bg-card">
          <Skeleton className="aspect-video w-full rounded-none" />
          <div className="space-y-3 p-6">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingCard({ booking }: { booking: BType }) {
  const total =
    Number(booking.pricePerHour) * Number(booking.booking_duration) || 0;
  const hours = Number(booking.booking_duration);

  return (
    <Card className="gap-4 pt-0">
      <Image
        src={booking.imageUrl}
        alt={booking.name}
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          {booking.customar_name}
          <Badge variant="secondary">{booking.sportType}</Badge>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="size-3.5" />
          {booking.location} · Capacity {booking.capacity}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 rounded-lg border bg-muted/40 p-4 text-sm">
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />
            {new Date(`${booking.booking_date}T00:00:00`).toLocaleDateString(
              "en-US",
              { dateStyle: "medium" }
            )}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-primary" />
            {booking.booking_time}
          </p>
          <p className="flex items-center gap-2">
            <Timer className="size-4 text-primary" />
            {booking.booking_duration} hour{hours > 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total cost</span>
          <span className="text-base font-semibold text-primary">
            ৳{total}
          </span>
        </div>

        {booking.customar_notes ? (
          <p className="rounded-lg bg-muted/50 p-3 text-sm italic text-muted-foreground">
            “{booking.customar_notes}”
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

async function BookingsList() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user?.email;

  if (!email) {
    return (
      <Card className="border-dashed border-primary/25 bg-gradient-to-b from-primary/5 to-transparent ring-primary/15">
        <CardContent className="flex flex-col items-center gap-3 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <LogIn className="size-6" />
          </span>
          <p className="text-sm font-medium">You are not logged in</p>
          <p className="max-w-xs text-sm text-muted-foreground">
            Login to see all your facility bookings.
          </p>
          <ButtonLink href="/login">Login</ButtonLink>
        </CardContent>
      </Card>
    );
  }


  const jwtToken = await auth.api.getToken({
        headers  : await headers()
    })

  
  const token = jwtToken?.token
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${email}`, {
    cache: "no-store",
    headers : {
      authorization: `Bearer ${token}`
    }
  },);

  if (!res.ok) {
    return (
      <Card className="border-dashed border-destructive/25 ring-destructive/15">
        <CardContent className="py-14 text-center">
          <p className="text-sm font-medium">Could not load your bookings</p>
          <p className="mt-1 text-sm text-muted-foreground">
            The booking service is not responding. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  const bookings = (await res.json()) as BType[];

  if (bookings.length === 0) {
    return (
      <Card className="border-dashed border-primary/25 bg-gradient-to-b from-primary/5 to-transparent ring-primary/15">
        <CardContent className="flex flex-col items-center gap-3 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CalendarX className="size-6" />
          </span>
          <p className="text-sm font-medium">No bookings yet</p>
          <p className="max-w-xs text-sm text-muted-foreground">
            You have not booked any facility. Browse the platform and book your
            first game.
          </p>
          <ButtonLink href="/all-facilities">Browse facilities</ButtonLink>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
}

export default function MyBookingsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">My Bookings</h1>
        <p className="text-sm text-muted-foreground">
          Track and manage all your facility bookings.
        </p>
      </div>

      <Suspense fallback={<BookingsSkeleton />}>
        <BookingsList />
      </Suspense>
    </div>
  );
}
