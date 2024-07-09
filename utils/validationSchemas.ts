import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Title is required",
  }),
  categoryId: z.string().trim().min(1, {
    message: "Category is required",
  }),
  subCategoryId: z.string().trim().min(1, {
    message: "Sub Category is required",
  }),
});

export const registerUserSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required." }),
  lastName: z.string().trim().min(1, { message: "Last name is required." }),
  email: z.string().trim().email(),
  password: z.string().trim().min(6, {
    message:
      "Password too short. Password should have a minimum of six(6) characters.",
  }),
  role: z.string().trim().min(1, { message: "Role is required." }),
});

export const loginUserSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(6, {
    message:
      "Password too short. Password should have a minimum of six(6) characters.",
  }),
});
