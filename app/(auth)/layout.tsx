import Topbar from "@/components/layout/Topbar";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="">
      <Topbar />
      <div className="min-h-[calc(100dvh_-_91px)] flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
