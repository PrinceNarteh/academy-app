import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <div className="">
      <Link href="/instructor/create-course">
        <Button>Create New Course</Button>
      </Link>
    </div>
  );
};

export default Courses;
