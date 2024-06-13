import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/poppins-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/poppins-medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/poppins-semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../assets/fonts/poppins-bold.woff2",
      style: "normal",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tech Vision Academy",
  description: "Empowering minds, shaping future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-poppins", poppins.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
