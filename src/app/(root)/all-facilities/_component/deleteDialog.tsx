"use client"

import { FType } from '@/components/type/fecilitiesType';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { authClient } from '@/lib/auth-client';
import { Trash2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const DeleteDialog = ({facility} : {facility : FType}) => {

  const HandleDelete = async () => {

    const {data} = await authClient.token()
    const token = data?.token
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fecilities/${facility._id}`, {
      method : "DELETE",
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    const result = await res.json()

    if(result.deletedCount > 0){
      
      toast.add({
        title: "Facility deleted",
        description: `${facility.name} has been removed from the platform.`,
        type: "success",
      });
      redirect('/all-facilities')
    }
   
  }
    return (
        <div>
            <AlertDialog
            
          >
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              <Trash2 data-icon="inline-start" />
              Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive">
                  <Trash2 />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete this facility?</AlertDialogTitle>
                <AlertDialogDescription>
                  {facility.name} will be permanently removed from the
                  platform. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                onClick={HandleDelete}
                >
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
            
        </div>
    );
};

export default DeleteDialog;