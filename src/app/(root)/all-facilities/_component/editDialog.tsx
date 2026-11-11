'use client'
import { Field } from '@/components/facility-form-fields';
import { FType } from '@/components/type/fecilitiesType';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';
import { authClient } from '@/lib/auth-client';

import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';


import React, { useState } from 'react';

export const sportTypes = [
    "Football",
    "Cricket",
    "Badminton",
    "Swimming",
    "Tennis",
    "Basketball",
    "Volleyball",
    "Cycling",
    "Fitness",
    "Athletics",
];

const EditDialog = ({ facility }: { facility: FType }) => {

    const router = useRouter()
    const [sportType, setSportType] = useState(facility.sportType);
   
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const updateData = Object.fromEntries(formData.entries())

        const allData = {
            ...updateData,
            sportType
        }

        const {data} = await authClient.token()

        const token = data?.token

   

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fecilities/${facility._id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
                authorization : `Bearer ${token}`
            },
            body : JSON.stringify(allData)
        })

        const result = await res.json()

       

        if(result.modifiedCount > 0){
            router.refresh()
            toast.add({
        title: "Facility updated",
        description: "Your changes have been saved.",
        type: "success",
      });

      
    }
    }
    return (
        <div>
            <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>
                    <Pencil data-icon="inline-start" />
                    Edit
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Edit facility</DialogTitle>
                        <DialogDescription>
                            Update the details for {facility.name}.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleUpdate} className="space-y-5">
                        <Field label="Facility Name" htmlFor="edit-name">
                            <Input
                                id="edit-name"
                                name="name"
                                defaultValue={facility.name}
                            />
                        </Field>

                        <Field label="Sport Type" htmlFor="edit-sportType">
                            <Select
                                value={sportType}
                                onValueChange={(value) => setSportType(value ?? "")}
                            >
                                <SelectTrigger id="edit-sportType" className="w-full">
                                    <SelectValue placeholder = {facility.sportType} />
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
                            htmlFor="edit-imageUrl"
                            hint="A direct link to a facility photo (https://…)"
                        >
                            <Input
                                id="edit-imageUrl"
                                name="imageUrl"
                                type="url"
                                defaultValue={facility.imageUrl}
                            />
                        </Field>

                        <Field label="Location" htmlFor="edit-location">
                            <Input
                                id="edit-location"
                                name="location"
                                defaultValue={facility.location}
                            />
                        </Field>

                        <Field label="Price Per Hour" htmlFor="edit-pricePerHour">
                            <div className="relative">
                                <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-muted-foreground">
                                    ৳
                                </span>
                                <Input
                                    id="edit-pricePerHour"
                                    name="pricePerHour"
                                    type="number"
                                    className="pl-7"
                                    defaultValue={facility.pricePerHour}
                                />
                            </div>
                        </Field>

                        <Field label="Capacity (players)" htmlFor="edit-capacity">
                            <Input
                                id="edit-capacity"
                                name="capacity"
                                type="number"
                                defaultValue={facility.capacity}
                            />
                        </Field>

                        <Field
                            label="Description"
                            htmlFor="edit-description"
                            hint="Surface type, amenities, rules — anything players should know."
                        >
                            <Textarea
                                id="edit-description"
                                name="description"
                                rows={4}
                                defaultValue={facility.description}
                            />
                        </Field>

                        <DialogFooter>
                            <DialogTrigger render={<Button variant="outline">  Cancel </Button>}>
                            
                            </DialogTrigger>
                            <Button  type='submit'>
                                Save Change
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default EditDialog;