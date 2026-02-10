"use client";

import { Button } from "@/components/ui/button";

export function SocialLogin() {
  return (
    <div>
      <div className="relative my-6 flex items-center">
        <div className="h-px flex-1 bg-border" />
        <span className="px-3 text-xs text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline">GitHub</Button>
        <Button variant="outline">Passkey</Button>
      </div>
    </div>
  );
}
