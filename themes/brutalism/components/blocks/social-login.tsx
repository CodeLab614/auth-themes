"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, KeyRound } from "lucide-react";

export function SocialLogin() {
  return (
    <div>
      {/* Divider */}
      <div className="relative my-6 flex items-center">
        <div className="h-[2px] flex-1 bg-foreground" />
        <span className="px-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
          or
        </span>
        <div className="h-[2px] flex-1 bg-foreground" />
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline">
          <GithubIcon className="size-4" />
          GitHub
        </Button>
        <Button variant="outline">
          <KeyRound className="size-4" />
          Passkey
        </Button>
      </div>
    </div>
  );
}
