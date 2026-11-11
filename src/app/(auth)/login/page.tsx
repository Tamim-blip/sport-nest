'use client'
import { LogIn } from "lucide-react";

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
import { signIn } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { redirect } from "next/navigation";



export default function LoginPage() {

    const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const allData = Object.fromEntries(formData.entries())

        const {data, error} = await signIn.email({
            email : allData.email as string,
            password : allData.password as string
        })

        if(data){
        toast.add({
        title: "Login successfull",
        description: `You have Loged in successfully.`,
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
          <LogIn className="size-6" />
        </span>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Welcome back
        </CardTitle>
        <CardDescription>
          Login to your account to book your next game.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={HandleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <Label
              htmlFor="remember"
              className="flex items-center gap-2 text-sm font-normal text-muted-foreground"
            >
              <Checkbox id="remember" name="remember" defaultChecked />
              Remember me
            </Label>
            <Button variant="link" size="sm" type="button">
              Forgot password?
            </Button>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <ButtonLink
            variant="link"
            size="sm"
            href="/sign-up"
            className="px-0"
          >
            Sign up
          </ButtonLink>
        </p>
      </CardContent>
    </Card>
  );
}
