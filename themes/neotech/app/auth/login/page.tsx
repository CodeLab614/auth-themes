import { LoginForm } from "@/components/forms/login-form";
import { SocialLogin } from "@/components/blocks/social-login";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Fingerprint } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative px-4">
      <Card>
        {/* Header */}
        <CardHeader>
          <div className="relative mb-4 flex size-12 items-center justify-center">
            <span className="absolute inset-0 border border-primary/20" />
            <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-primary/60" />
            <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-primary/60" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary/60" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary/60" />
            <Fingerprint className="size-6 text-primary" />
          </div>
          <CardTitle>Access Portal</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>

        {/* Form + Social */}
        <CardContent>
          <LoginForm />
          <SocialLogin />
        </CardContent>

        {/* Footer */}
        <CardFooter>
          No account?{" "}
          <Link
            href="#"
            className="text-primary/70 transition-colors hover:text-primary"
          >
            Request access
          </Link>
        </CardFooter>
      </Card>

      {/* Status bar decoration */}
      <div className="mt-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
        <span>SYS.AUTH.V2</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-1.5 rounded-full bg-primary/40" />
          Secure
        </span>
      </div>
    </div>
  );
}
