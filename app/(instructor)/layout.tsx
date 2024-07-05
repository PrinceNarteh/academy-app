import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import React from "react";

interface InstructorLayoutProps {
  children: React.ReactNode;
}

const InstructorLayout = ({ children }: InstructorLayoutProps) => {
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
