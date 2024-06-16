"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title is required and minimun of 2 characters" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  subCategoryId: z.string().min(1, { message: "Sub Category is required" }),
});

type FormType = z.infer<typeof formSchema>;
const defaultValues = {
  title: "",
  categoryId: "",
  subCategoryId: "",
};

const CreateCourseForm = () => {
  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const handleSubmit: SubmitHandler<FormType> = (data) => {};

  return (
    <div>
      <h1 className="text-xl font-bold">
        Let give some basics for your course
      </h1>
      <p className="text-sm text-gray-400">
        It is Ok if you cannot think of a good title or correct category now.
        You can change them later
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;
