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
      className={`sm:flex hidden sm:ml-3 sm:justify-between transition-all ${
        isOpen ? "sm:items-start " : ""
      }  flex-col py-[2.5rem] h-[calc(100dvh-72px)]`}
    >
      <nav className="space-y-10">
        <div className="flex gap-8 items-center">
          <div
            className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
              path === "/dashboard" && "bg-[#A2FFA2]/40"
            }`}
          >
            <Link href="/dashboard">
              <DashboardIcon name="dashboard" />
            </Link>
          </div>
          <span
            className={`hidden transition-all ${
              isOpen ? "sm:block opacity-1" : "opacity-0"
            }`}
          >
            Dashboard
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <div
            className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
              path === "/predict" && "bg-[#A2FFA2]/40"
            }`}
          >
            <Link href="/predict">
              <PredictIcon name="predict" />
            </Link>
          </div>
          <span
            className={`hidden transition-all ${
              isOpen ? "sm:block opacity-1" : "opacity-0"
            }`}
          >
            Predict
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <div
            className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
              path === "/quickscan" && "bg-[#A2FFA2]/40"
            }`}
          >
            <Link href="/quickscan">
              <QuickScanIcon name="quickscan" />
            </Link>
          </div>
          <span
            className={`hidden transition-all ${
              isOpen ? "sm:block opacity-1" : "opacity-0"
            }`}
          >
            Quick Scan
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <div
            className={`hover:bg-[#A2FFA2]/40 p-2 rounded-md ${
              path === "/experai" && "bg-[#A2FFA2]/40"
            }`}
          >
            <Link href="/expertai">
              <ExpertAIcon name="expertai" />
            </Link>
          </div>
          <span
            className={`hidden transition-all ${
              isOpen ? "sm:block opacity-1" : "opacity-0"
            }`}
          >
            Expert AI
          </span>
        </div>
      </nav>
      <ul>
        <li>
          <SsettingsIcon />
        </li>
      </ul>
    </div>
  );
}
