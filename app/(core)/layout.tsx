"use client";

import BottomNav from "@/components/BottomNav";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import { Hamburger } from "@/components/svgIcons";
import Link from "next/link";
import { useState } from "react";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:flex w-full  h-[100dvh]">
      <div
        className={`sm:h-[100dvh] sm:fixed  transition-all ease-in  ${
          isOpen
            ? "sm:w-[300px] sm:bg-white sm:z-30"
            : "sm:w-[60px] sm:bg-white sm:z-30"
        } sm:border-r sm:border-[#444444]/20`}
      >
        {/* className={`sm:h-[100dvh] sm:fixed  transition-all ease-in  ${
          isOpen
            ? "sm:w-[300px] sm:bg-white sm:z-30"
            : "sm:w-[60px] /&sm:bg-white sm:z-30 &/ (this was the addtion that solve the transiton onclose issue)"
        } sm:border-r sm:border-[#444444]/20`} */}
        <button
          onClick={() => setIsOpen((c) => !c)}
          className={`sm:h-[69px] transition-all hidden sm:grid sm:ml-5 sm:items-center sm:w-full`}
        >
          <Hamburger
            className={`transition-all hover:bg-black/10 hover:scale-150 hover:p-[5px] hover:rounded-full ${
              isOpen && "bg-black/10 scale-150 p-[5px] rounded-full"
            }`}
          />
        </button>
        <SideNav isOpen={isOpen} />
      </div>
      <div className="sm:left-[60px] sm:w-[calc(100dvw-60px)] h-[100dvh] sm:relative">
        <TopNav />
        <div className="absolute top-[69px] w-full  min-h-[100dvh]">
          <div className="overflow-y-auto pb-[68px]  sm:pb-0 h-full">
            {children}
          </div>
          <div className="sm:hidden">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
