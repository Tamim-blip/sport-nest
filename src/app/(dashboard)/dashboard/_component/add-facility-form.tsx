"use client"
import { Field, sportTypes } from "@/components/facility-form-fields";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

export function AddFacilityForm() {

 const [sportType, setSportType] = useState("");

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...data,
      sportType,
    };

    

    const {data : jwtToken} = await authClient.token()
    const token = jwtToken?.token



    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fecilities`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        authorization : `Bearer ${token}`
      },
      body : JSON.stringify(finalData)
    })

    const result = await res.json()

    if(result.acknowledged){
      toast.add({
        title : "Facilitiy added successfully",
        description : "Your facility has beed added to the platform",
        type : "success"
      })
      redirect('/dashboard')
    }
  }
  return (
    <Card>
      <CardContent>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Facility Name" htmlFor="name">
              <Input
                id="name"
                name="name"
                placeholder="Greenfield Football Arena"
              />
            </Field>

            <Field label="Sport Type" htmlFor="sportType">
             <Select onValueChange={(value: string | null) => setSportType(value ?? "")}>
  <SelectTrigger id="sportType" className="w-full">
    <SelectValue placeholder="Select a sport" />
  </SelectTrigger>

  <SelectContent>
    {sportTypes.map((sport) => (
      <SelectItem key={sport} value={sport}>
        {sport}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
            </Field>

            <Field
              label="Image URL"
              htmlFor="imageUrl"
              hint="A direct link to a facility photo (https://…)"
            >
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://images.unsplash.com/photo-…"
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Location" htmlFor="location">
              <Input
                id="location"
                name="location"
                placeholder="Dhanmondi, Dhaka"
              />
            </Field>

            <Field label="Price Per Hour" htmlFor="pricePerHour">
              <div className="relative">
                <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-muted-foreground">
                  ৳
                </span>
                <Input
                  id="pricePerHour"
                  name="pricePerHour"
                  type="number"
                  className="pl-7"
                  placeholder="800"
                />
              </div>
            </Field>

            <Field label="Capacity (players)" htmlFor="capacity">
              <Input
                id="capacity"
                name="capacity"
                type="number"
                placeholder="22"
              />
            </Field>
          </div>

          <Field
            label="Description"
            htmlFor="description"
            hint="Surface type, amenities, rules — anything players should know."
          >
            <Textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Full-size grass pitch with floodlights, changing rooms, and free parking…"
            />
          </Field>

          <div className="flex justify-end border-t pt-5">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Add Facility
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
