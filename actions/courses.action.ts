"use server";

import { createCourseSchema } from "@/utils/validationSchemas";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function createCourse(
  formData: z.infer<typeof createCourseSchema>,
) {
  const { userId } = auth();
  if (!userId) return {};
  const res = createCourseSchema.safeParse(formData);

  if (res.success) {
    return res.data;
  }
}
