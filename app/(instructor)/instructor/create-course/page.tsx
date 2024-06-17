import CreateCourseForm from "@/components/courses/CreateCourseForm";
import { db } from "@/lib/db";
import React from "react";

const CreateCourse = async () => {
  const res = await db.category.findMany({
    orderBy: { name: "asc" },
    include: { subCategories: true },
  });

  const categories = res.map((category) => ({
    label: category.name,
    value: category.id,
    subCategories: category.subCategories.map((subCategory) => ({
      label: subCategory.name,
      value: subCategory.id,
    })),
  }));

  return (
    <div>
      <CreateCourseForm categories={categories} />
    </div>
  );
};

export default CreateCourse;
