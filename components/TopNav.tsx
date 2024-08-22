import React from "react";
import { Hamburger } from "./svgIcons";

const TopNav = () => {
  return (
      <div className="w-full fixed bg-white flex justify-between items-center px-6 border-b  py-4 border-black">
        <span className="">Logo</span>
        <span>
          <Hamburger />
        </span>
      </div>
  );
};

export default TopNav;
