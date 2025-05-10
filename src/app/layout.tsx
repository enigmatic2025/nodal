import SideBar from "@/components/global/navigation/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nodal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nodal-black.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} subpixel-antialiased`}
      >
        <div className="relative flex h-screen justify-center items-start gap-2 bg-black/10  p-2 overflow-hidden">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
