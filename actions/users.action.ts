"use server";

import * as bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { registerUserSchema } from "@/utils/validationSchemas";
import { roleStringToEnum } from "@/utils/convert-enum";

export async function registerUser(formData: FormData) {
  const data = Object.fromEntries(formData);
  const res = await registerUserSchema.safeParseAsync(data);

  if (!res.success) {
    return {
      message: "Error Creating User",
      errors: res.error.flatten().fieldErrors,
    };
  }
  console.log(res.data);
  const { email, password, role } = res.data;
  const emailExists = await db.user.findUnique({ where: { email: email } });
  if (emailExists) {
    return {
      message: "Email already in used",
    };
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await db.user.create({
    data: {
      ...res.data,
      password: hashedPassword,
      role: roleStringToEnum(role),
    },
  });
  console.log(user);
  return {
    message: "Registration successful",
    data: user,
  };
}
