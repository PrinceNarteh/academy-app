"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const topLinks = [
  {
    label: "Instructor",
    path: "/instructor/courses",
  },
  {
    label: "Learning",
    path: "/learning",
  },
];

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow shadow-primary/30">
      <Link href="">
        <Image src="/logo.png" height={100} width={200} alt="logo" />
      </Link>

      <div className="max-md:hidden w-[400px] rounded-full flex border border-primary">
        <input
          type="text"
          className="flex-grow bg-[#fff8eb] rounded-l-full border-none text-sm pl-4 py-3"
          placeholder="Search for courses"
        />
        <button className="bg-primary rounded-r-full border-none cursor-pointer px-4 py-3 hover:bg-brand/80">
          <Search className="size-4 text-white" />
        </button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className="text-sm font-medium hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
