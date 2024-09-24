import React from "react";
import { Hamburger, ProfileIcon } from "./svgIcons";
import Link from "next/link";
import Notifications, { UnreadBellIcon } from "./Notifications.Page";

const TopNav = () => {
  return (
    <div className="sm:w-[calc(100vw-60px)] w-full fixed bg-white z-10 flex justify-between items-center px-6 border-b  py-4 border-[#444444]/20">
      <Link href="/" className="font-bold">
        Agro<span className="text-[#389738]">Predict</span>
      </Link>
      <span>
        <div className="flex gap-5 items-center pr-2">
          <UnreadBellIcon />
          <ProfileIcon />
        </div>
      </span>
    </div>
  );
};

export default TopNav;
