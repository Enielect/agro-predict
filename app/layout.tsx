import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AgroPredict 1.0",
  description: "predict the nature of you soil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-[100dvh]  font-sans antialiased", inter.variable)}
      >
        <TopNav />
        <div className="pt-11">{children}</div>
      </body>
    </html>
  );
}
