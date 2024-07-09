"use server";

import { db } from "@/lib/db";
import { ReturnType } from "@/types";
import { createCourseSchema } from "@/utils/validationSchemas";

export async function createCourse(prevState: ReturnType, formData: FormData) {
  const data = Object.fromEntries(formData);
  const res = createCourseSchema.safeParse(data);
  if (res.error) {
    return {
      message: "Error creating course",
      errors: res.error.flatten().fieldErrors,
    };
  }
  console.log(res);

  if (res.success) {
    const res = await db.course.create({ data: { ...res.data } });
    return {
      message: "Course created successfully",
      data: res,
    };
  }
}
