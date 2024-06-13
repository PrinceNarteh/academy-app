import Topbar from "@/components/layout/Topbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default HomeLayout;
