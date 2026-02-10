"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="Your name" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Create password" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="confirm">Confirm Password</Label>
        <Input id="confirm" type="password" placeholder="Confirm password" />
      </div>

      <Button className="w-full" type="submit">
        Create Account
      </Button>
    </form>
  );
}
