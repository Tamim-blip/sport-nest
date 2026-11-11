"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FType } from "@/components/type/fecilitiesType";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";


const BookingForm = ({facility} : {facility : FType}) => {

    const {_id, ...allFacilities} = facility

    const {data : session} = useSession()
    const user = session?.user
    

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const bookingData= Object.fromEntries(formData.entries())

        const allData = {
            
            ...allFacilities,
            ...bookingData
        } 

         const {data : jwtToken} = await authClient.token()
        const token = jwtToken?.token


        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                authorization : `Bearer ${token}`

                
            },
            body : JSON.stringify(allData)
        })

        const data = await res.json()
        if(data?.acknowledged){
            toast.add({
        title: "Booking successful",
        description: "You have successfully booked the game.",
        type: "success",
            })
        }
    }
    return (
        <CardContent className="flex flex-col justify-center gap-5 border-t p-6 sm:p-8 md:border-t-0 md:border-l">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Book This Facility</h2>
        <p className="text-sm text-muted-foreground">
          Fill in your details to reserve this facility.
        </p>
      </div>

      <Separator />

      <form onSubmit={HandleSubmit} className="space-y-5">

        {/* Customer Information */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="customar_name"
            value={user?.name}
            readOnly
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="customar_email"
            type="email"
            value={user?.email}
            readOnly
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="customar_phone"
            type="tel"
            placeholder="01XXXXXXXXX"
            required
          />
        </div>

        <Separator />

        {/* Booking Schedule */}
        <div className="space-y-2">
          <Label htmlFor="date">Booking Date</Label>
          <Input
            id="date"
            name="booking_date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Start Time</Label>
          <Input
            id="time"
            name="booking_time"
            type="time"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Booking Duration</Label>
          <Select name="booking_duration" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Hour</SelectItem>
              <SelectItem value="2">2 Hours</SelectItem>
              <SelectItem value="3">3 Hours</SelectItem>
              <SelectItem value="4">4 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">
            Special Instructions (Optional)
          </Label>
          <Textarea
            id="notes"
            name="customar_notes"
            placeholder="Any additional information..."
            rows={3}
          />
        </div>

        <Separator />

        <Button type="submit" className="w-full gap-2">
          Confirm Booking
          <ArrowRight className="size-4" />
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Booking is subject to availability and confirmation.
        </p>

      </form>
    </CardContent>

    );
};

export default BookingForm;