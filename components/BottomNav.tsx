"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DashboardIcon,
  ExpertAIcon,
  PredictIcon,
  QuickScanIcon,
  SsettingsIcon,
} from "./svgIcons";

type buttonNavProp = {
  item: {
    name: string;
    icon: React.ReactNode;
  };
};

const bottomNav = [
  {
    name: "Dashboard",
    icon: <DashboardIcon name="dashboard" />,
  },
  {
    name: "Predict",
    icon: <PredictIcon name="predict" />,
  },
  {
    name: "QuickScan",
    icon: <QuickScanIcon name="quickscan" />,
  },
  {
    name: "Expert AI",
    icon: <ExpertAIcon name="expertai" />,
  },
  { name: "Settings", icon: <SsettingsIcon /> },
];

const BottomNav = () => {
  return (
    <nav className="px-6 z-10 bg-white fixed bottom-0 right-0 left-0 py-2">
      <ul className="flex items-center justify-between">
        {bottomNav.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const NavLink = ({ item }: buttonNavProp) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <li className="text-xs sm:text-base">
      <Link
        className="flex flex-col gap-4 hover:text-[#389738] justify-center items-center text-[#1E1E1E] textOpacity-60"
        href={`/${item.name.split(" ").join("").toLowerCase()}`}
      >
        {item.icon}
        <span
          className={` ${
            pathname === `/${item.name.split(" ").join("").toLowerCase()}` &&
            "text-[#389738]"
          }`}
        >
          {item.name}
        </span>
      </Link>
    </li>
  );
};

export default BottomNav;
