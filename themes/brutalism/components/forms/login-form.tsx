"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="#"
            className="text-xs font-bold uppercase tracking-wide text-primary underline-offset-2 hover:underline"
          >
            Forgot?
          </Link>
        </div>
        <Input id="password" type="password" placeholder="Enter password" />
      </div>

      <Button className="w-full" type="submit">
        <LogIn className="size-4" />
        Sign In
      </Button>
    </form>
  );
}
