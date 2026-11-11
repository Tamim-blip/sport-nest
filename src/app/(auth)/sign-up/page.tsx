"use client"


import { UserPlus } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/toast";



export default function SignUpPage() {


    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()

       const formData = new FormData(e.currentTarget)
       const allData = Object.fromEntries(formData.entries())
       

       const {data, error} = await signUp.email({
         email : allData.email as string,
         password : allData.password as string,
         name : allData.name as string,
         image : allData.image as string,
        
       })

      if(data){
        toast.add({
        title: "Sign up successfull",
        description: `You have signed up successfully.`,
        type: "success",
      });
        redirect("/")
        
      }
      if(error){
        console.log(error)
      }

    }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <span className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UserPlus className="size-6" />
        </span>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Create your account
        </CardTitle>
        <CardDescription>
          Join SportNest and book facilities near you.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={HandleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" required/>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="url"
              placeholder="Enter image url"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Use strong password"
              required
            />
          </div>

          {/* <div className="space-y-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
            />
          </div> */}

          <Label
            htmlFor="terms"
            className="flex items-start gap-2 text-sm font-normal text-muted-foreground"
          >
            <Checkbox id="terms" name="terms" />
            I agree to the Terms of Service and Privacy Policy
          </Label>

          <Button type="submit" size="lg" className="w-full">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <ButtonLink variant="link" size="sm" href="/login" className="px-0">
            Login
          </ButtonLink>
        </p>
      </CardContent>
    </Card>
  );
}
