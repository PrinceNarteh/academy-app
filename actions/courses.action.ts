"use server";

import { db } from "@/lib/db";
import { createCourseSchema } from "@/utils/validationSchemas";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export async function createCourse(
  formData: z.infer<typeof createCourseSchema>,
) {
  const { userId } = auth();
  if (!userId) return { message: "Unauthorized" };
  const res = createCourseSchema.safeParse(formData);
  if (res.error) {
    return {
      message: "Error creating course",
      errors: res.error.flatten().fieldErrors,
    };
  }

  if (res.success) {
    await db.course.create({ data: { ...res.data } });
    return { message: "Course created successfully" };
  }
}
