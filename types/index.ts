import { createCourseSchema } from "@/utils/validationSchemas";
import { z, ZodParsedType } from "zod";

export type ReturnType = {
  message: string;
  data?: any;
  errors?: any;
};
