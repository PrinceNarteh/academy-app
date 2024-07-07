import Topbar from "@/components/layout/Topbar";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="">
      <Topbar />
      {children}
    </div>
  );
};

export default AuthLayout;
