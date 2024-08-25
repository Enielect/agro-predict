import React from "react";
import { Hamburger } from "./svgIcons";
import Link from "next/link";

const TopNav = () => {
  return (
      <div className="w-full fixed bg-white flex justify-between items-center px-6 border-b  py-4 border-black">
        <Link href='/' className="">Logo</Link>
        <span>
          <Hamburger />
        </span>
      </div>
  );
};

export default TopNav;
