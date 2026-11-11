import { FType } from '@/components/type/fecilitiesType';
import { Card } from '@/components/ui/card';
import {  MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import DeleteDialog from '../_component/deleteDialog';
import EditDialog from '../_component/editDialog';

import { Users, Clock,} from "lucide-react";




import { Separator } from "@/components/ui/separator";
import BookingForm from '../_component/bookingForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const FacilityDetail = async({params}: {params: Promise<{ detailID: string }>}) => {

    const {detailID} = await params

    const jwtToken = await auth.api.getToken({
      headers : await headers()
    })
    const token = jwtToken?.token

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fecilities/${detailID}`,{
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    const facility : FType = await res.json()

    
    return (
       <div className='container mx-auto my-15'>
       <div className='flex gap-4 justify-end my-4'>
         <EditDialog facility = {facility}></EditDialog>
        <DeleteDialog facility = {facility}></DeleteDialog>
       </div>
         {/* <Card className=" gap-4 pt-0">
        <Image
          src={facility.imageUrl}
          alt={facility.name}
          width={800}
          height={450}
          priority
          className="aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            {facility.name}
            <p  className="gap-1">
              Capacity {facility.capacity}
            </p>
          </CardTitle>
          <CardDescription className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {facility.location} · {facility.sportType}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base font-semibold text-primary">
            ৳{facility.pricePerHour}
            <span className="text-xs font-normal text-muted-foreground">
              {" "}
              / hour
            </span>
          </p>
          <div className="border-t pt-4">
            <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
              {facility.description}
            </p>
          </div>
        </CardContent>
      </Card> */}
      <Card className="overflow-hidden gap-0 py-0">
  <div className="grid md:grid-cols-2">

    {/* LEFT: Facility Details */}
    <div className="flex flex-col">

      {/* Facility Image */}
      <div className="relative min-h-[280px] md:min-h-[350px]">
        <Image
          src={facility.imageUrl}
          alt={facility.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <p className="absolute top-4 left-4 rounded-lg bg-black/50 px-3 py-1 text-white">
          {facility.sportType}
        </p>
      </div>

      {/* Facility Information */}
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-8">

        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Facility Details
            </p>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {facility.name}
            </h1>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              {facility.location}
            </p>
          </div>

          <Separator />

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2 rounded-xl border bg-muted/40 p-4">
              <Users className="size-5 text-primary" />
              <p className="text-sm text-muted-foreground">Capacity</p>
              <p className="text-lg font-semibold">
                {facility.capacity} People
              </p>
            </div>

            <div className="space-y-2 rounded-xl border bg-muted/40 p-4">
              <Clock className="size-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Booking Duration
              </p>
              <p className="text-lg font-semibold">Per Hour</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">
              About This Facility
            </h2>

            <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
              {facility.description}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="rounded-xl border bg-muted/30 p-5">
          <p className="text-sm text-muted-foreground">
            Booking Price
          </p>

          <p className="text-2xl font-bold text-primary">
            ৳{facility.pricePerHour}
            <span className="text-sm font-normal text-muted-foreground">
              /hr
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT: Booking Form */}
   <BookingForm facility = {facility}></BookingForm>

  </div>
</Card>
       </div>
    );
};

export default FacilityDetail;