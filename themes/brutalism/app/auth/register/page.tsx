import { RegisterForm } from "@/components/forms/register-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account. No nonsense.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>

      <CardFooter>
        Already have an account?{" "}
        <Link
          href="#"
          className="font-bold text-primary underline-offset-2 hover:underline"
        >
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}
