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
