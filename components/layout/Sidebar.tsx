"use client";

import { BarChart4, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    label: "Courses",
    path: "/instructor/courses",
    icon: <MonitorPlay />,
  },
  {
    label: "Performance",
    path: "/instructor/performance",
    icon: <BarChart4 />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="max-sm:hidden min-h-[calc(100vh_-_120px)] flex flex-col w-64 border-r shadow-md px-3 py-4 gap-4 text-sm font-medium">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`flex items-center gap-4 p-3 rounded-lg hover:bg-brand/20 ${pathname.startsWith(link.path) && "bg-brand text-white hover:bg-brand/20 hover:text-gray-500"}`}
        >
          {link.icon} {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
