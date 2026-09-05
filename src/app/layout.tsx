import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Designer Club",
  description: "Designer Club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className="flex min-h-screen flex-col bg-zinc-950 text-white">
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
