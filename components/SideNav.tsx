"use client";

import React from "react";
import {
  DashboardIcon,
  ExpertAIcon,
  Hamburger,
  PredictIcon,
  QuickScanIcon,
  SsettingsIcon,
} from "@/components/svgIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SideNav({ isOpen }: { isOpen: boolean }) {
  const path = usePathname();
  return (
    <div
      className={`sm:flex hidden sm:ml-3 sm:justify-between transition-all duration-500 ease-linear flex-col py-[2.5rem] h-[calc(100dvh-72px)]`}
    >
      <nav className="space-y-10">
        <div>
          <Link
            className={`flex gap-8 h-[34px] mr-4 hover:bg-[#A2FFA2]/40 items-center ${
              isOpen && path === "/dashboard" && "bg-[#A2FFA2]/40"
            } rounded-md`}
            href="/dashboard"
          >
            <div
              className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
                path === "/dashboard" && !isOpen && "bg-[#A2FFA2]/40"
              }`}
            >
              <DashboardIcon name="dashboard" />
            </div>
            <span className={` transition-all ${isOpen ? " block" : "hidden"}`}>
              Dashboard
            </span>
          </Link>
        </div>
        <div>
          <Link
            className={`flex gap-8 h-[34px] mr-4 hover:bg-[#A2FFA2]/40 items-center ${
              isOpen && path === "/predict" && "bg-[#A2FFA2]/40"
            } rounded-md`}
            href="/predict"
          >
            <div
              className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
                path === "/predict" && !isOpen && "bg-[#A2FFA2]/40"
              }`}
            >
              <PredictIcon name="predict" />
            </div>
            <span className={` transition-all ${isOpen ? " block" : "hidden"}`}>
              Predict
            </span>
          </Link>
        </div>
        <div>
          <Link
            className={`flex gap-8 h-[34px] mr-4 hover:bg-[#A2FFA2]/40 items-center ${
              isOpen && path === "/quickscan" && "bg-[#A2FFA2]/40"
            } rounded-md`}
            href="/quickscan"
          >
            <div
              className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
                path === "/quickscan" && !isOpen && "bg-[#A2FFA2]/40"
              }`}
            >
              <QuickScanIcon name="quickscan" />
            </div>
            <span className={` transition-all ${isOpen ? "block" : "hidden"}`}>
              Quick Scan
            </span>
          </Link>
        </div>
        <div>
          <Link
            className={`flex gap-8 h-[34px] mr-4 hover:bg-[#A2FFA2]/40 items-center ${
              isOpen && path === "/expertai" && "bg-[#A2FFA2]/40"
            } rounded-md`}
            href="/expertai"
          >
            <div
              className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
                path === "/expertai" && !isOpen && "bg-[#A2FFA2]/40"
              }`}
            >
              <ExpertAIcon name="expertai" />
            </div>
            <span className={` transition-all ${isOpen ? "block" : "hidden"}`}>
              Expert AI
            </span>
          </Link>
        </div>
      </nav>
      <ul className="ml-3">
        <li>
          <SsettingsIcon />
        </li>
      </ul>
    </div>
  );
}
