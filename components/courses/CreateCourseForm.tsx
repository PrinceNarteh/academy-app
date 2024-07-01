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
import { ComboBox } from "@/components/shared/ComboBox";
import { Button } from "@/components/ui/button";
import { createCourseSchema } from "@/utils/validationSchemas";
import { createCourse } from "@/actions/courses.action";

type FormType = z.infer<typeof createCourseSchema>;
const defaultValues = {
  title: "",
  categoryId: "",
  subCategoryId: "",
};

interface CreateCourseFormProps {
  categories: {
    label: string; // name of category
    value: string; // categoryId
    subCategories: { label: string; value: string }[];
  }[];
}

const CreateCourseForm = ({ categories }: CreateCourseFormProps) => {
  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(createCourseSchema),
  });

  const handleSubmit: SubmitHandler<FormType> = async (data) => {
    const res = await createCourse(data);
    console.log(res);
  };

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
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-5 space-y-5 max-w-lg mx-auto"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg: Web Development For Beginners"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">Category</FormLabel>
                <FormControl>
                  <ComboBox label="category" options={categories} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subCategoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">Category</FormLabel>
                <FormControl>
                  <ComboBox
                    label="sub category"
                    options={
                      categories.find(
                        (category) =>
                          category.value === form.watch("categoryId"),
                      )?.subCategories || []
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;
