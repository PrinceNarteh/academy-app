"use client";

import { registerUserSchema } from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/shared/InputField";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FormType = z.infer<typeof registerUserSchema>;
const defaultValues: FormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "User",
};

const RegisterForm = () => {
  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(registerUserSchema),
  });
  return (
    <Card className="max-w-xl w-full mx-auto p-5">
      <CardHeader>
        <CardTitle>Register Form</CardTitle>
        <CardDescription>
          Please enter your information to be registered.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            <div className="flex gap-5">
              <InputField name="firstName" label="First Name" />
              <InputField name="lastName" label="Last Name" />
            </div>
            <InputField name="email" label="Email" type="email" />
            <div className="flex gap-5">
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Register</Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
