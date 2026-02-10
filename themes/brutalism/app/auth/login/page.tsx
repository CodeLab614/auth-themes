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
import Link from "next/link";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Enter your credentials. No fluff.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
        <SocialLogin />
      </CardContent>

      <CardFooter>
        No account?{" "}
        <Link
          href="#"
          className="font-bold text-primary underline-offset-2 hover:underline"
        >
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}
