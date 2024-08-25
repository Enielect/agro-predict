"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardIcon = ({ name }: { name: string }) => {
  const pathname = usePathname();

  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 3C1.75 2.46957 1.96071 1.96086 2.33579 1.58579C2.71086 1.21071 3.21957 1 3.75 1H5.75C6.28043 1 6.78914 1.21071 7.16421 1.58579C7.53929 1.96086 7.75 2.46957 7.75 3V5C7.75 5.53043 7.53929 6.03914 7.16421 6.41421C6.78914 6.78929 6.28043 7 5.75 7H3.75C3.21957 7 2.71086 6.78929 2.33579 6.41421C1.96071 6.03914 1.75 5.53043 1.75 5V3ZM11.75 3C11.75 2.46957 11.9607 1.96086 12.3358 1.58579C12.7109 1.21071 13.2196 1 13.75 1H15.75C16.2804 1 16.7891 1.21071 17.1642 1.58579C17.5393 1.96086 17.75 2.46957 17.75 3V5C17.75 5.53043 17.5393 6.03914 17.1642 6.41421C16.7891 6.78929 16.2804 7 15.75 7H13.75C13.2196 7 12.7109 6.78929 12.3358 6.41421C11.9607 6.03914 11.75 5.53043 11.75 5V3ZM1.75 13C1.75 12.4696 1.96071 11.9609 2.33579 11.5858C2.71086 11.2107 3.21957 11 3.75 11H5.75C6.28043 11 6.78914 11.2107 7.16421 11.5858C7.53929 11.9609 7.75 12.4696 7.75 13V15C7.75 15.5304 7.53929 16.0391 7.16421 16.4142C6.78914 16.7893 6.28043 17 5.75 17H3.75C3.21957 17 2.71086 16.7893 2.33579 16.4142C1.96071 16.0391 1.75 15.5304 1.75 15V13ZM11.75 13C11.75 12.4696 11.9607 11.9609 12.3358 11.5858C12.7109 11.2107 13.2196 11 13.75 11H15.75C16.2804 11 16.7891 11.2107 17.1642 11.5858C17.5393 11.9609 17.75 12.4696 17.75 13V15C17.75 15.5304 17.5393 16.0391 17.1642 16.4142C16.7891 16.7893 16.2804 17 15.75 17H13.75C13.2196 17 12.7109 16.7893 12.3358 16.4142C11.9607 16.0391 11.75 15.5304 11.75 15V13Z"
        stroke={`${pathname === `/core/${name}` ? "#389738" : "#1E1E1E"}`}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PredictIcon = ({name}: {name: string}) => {
  const pathname = usePathname();
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.25 5V13M9.25 8V13M5.25 11V13M3.25 17H15.25C15.7804 17 16.2891 16.7893 16.6642 16.4142C17.0393 16.0391 17.25 15.5304 17.25 15V3C17.25 2.46957 17.0393 1.96086 16.6642 1.58579C16.2891 1.21071 15.7804 1 15.25 1H3.25C2.71957 1 2.21086 1.21071 1.83579 1.58579C1.46071 1.96086 1.25 2.46957 1.25 3V15C1.25 15.5304 1.46071 16.0391 1.83579 16.4142C2.21086 16.7893 2.71957 17 3.25 17Z"
        stroke={`${pathname === `/core/${name}` ? "#389738" : "#1E1E1E"}`}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const QuickScanIcon = ({name}: {name: string}) => {
  const pathname = usePathname();
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8V1L1.75 12H8.75V19L17.75 8H10.75Z"
        stroke={`${pathname === `/core/${name}` ? "#389738" : "#1E1E1E"}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ExpertAIcon = ({name}: {name: string}) => {
  const pathname = usePathname();
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 9H6.26M10.25 9H10.26M14.25 9H14.26M19.25 9C19.25 13.418 15.22 17 10.25 17C8.77864 17.005 7.32479 16.6808 5.995 16.051L1.25 17L2.645 13.28C1.762 12.042 1.25 10.574 1.25 9C1.25 4.582 5.28 1 10.25 1C15.22 1 19.25 4.582 19.25 9Z"
        stroke={`${pathname === `/core/${name}` ? "#389738" : "#1E1E1E"}`}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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
];

const BottomNav = () => {
  return (
    <nav className="px-6 fixed bottom-0 right-0 left-0 py-2">
      <ul className="flex justify-between">
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
    <li>
      <Link
        className="flex flex-col gap-4 hover:text-[#389738] justify-center items-center text-[#1E1E1E] textOpacity-60"
        href={`/core/${item.name.split(" ").join("").toLowerCase()}`}
      >
        {item.icon}
        <span
          className={` ${
            pathname === `/core/${item.name.split(" ").join("").toLowerCase()}` &&
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
