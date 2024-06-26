import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

interface InstructorLayoutProps {
  children: React.ReactNode;
}

const InstructorLayout = ({ children }: InstructorLayoutProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-full flex flex-col">
      <Topbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default InstructorLayout;
