"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Full name" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="user@neotech.io" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create password" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="confirm">Confirm Password</Label>
        <Input id="confirm" type="password" placeholder="Confirm password" />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox id="terms" className="mt-0.5" />
        <label
          htmlFor="terms"
          className="text-xs leading-relaxed text-muted-foreground select-none"
        >
          I agree to the{" "}
          <Link href="#" className="text-primary/70 transition-colors hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary/70 transition-colors hover:text-primary">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button className="w-full" type="submit">
        Create Account
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
