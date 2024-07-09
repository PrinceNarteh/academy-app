"use server";

import * as bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { registerUserSchema } from "@/utils/validationSchemas";
import { roleStringToEnum } from "@/utils/convert-enum";
import { actionClient } from "@/utils/safe-action";

export const registerUser = actionClient
  .schema(registerUserSchema)
  .action(async ({ parsedInput }) => {
    const { email, password, role } = parsedInput;
    const emailExists = await db.user.findUnique({ where: { email: email } });
    if (emailExists) {
      return {
        message: "Email already in used",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await db.user.create({
      data: {
        ...parsedInput,
        password: hashedPassword,
        role: roleStringToEnum(role),
      },
    });
    return {
      message: "Registration successful",
      data: user,
    };
  });
