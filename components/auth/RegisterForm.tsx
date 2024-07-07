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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { registerUser } from "@/actions/users.action";
import { useRef } from "react";

type FormType = z.infer<typeof registerUserSchema>;
const defaultValues: FormType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "User",
};

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(registerUserSchema),
  });
  console.log(formRef);

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
          <form
            ref={formRef}
            action={registerUser}
            onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
            className="space-y-4"
          >
            <div className="flex gap-5">
              <InputField name="firstName" label="First Name" />
              <InputField name="lastName" label="Last Name" />
            </div>
            <InputField name="email" label="Email" type="email" />
            <InputField name="password" label="Password" type="password" />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
            <div className="flex justify-end">
              <Button type="submit">Register</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
