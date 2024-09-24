import { DecoratedCamera, LeftArrow } from "@/components/svgIcons";
import { MoreVertical } from "lucide-react";
import React from "react";

const QuickScanHeader = () => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <button>
          <LeftArrow />
        </button>
        <MoreVertical />
      </div>
      <header className="flex gap-5">
        <div>
          <DecoratedCamera />
        </div>
        <div className="space-y-2">
          <h4>Disease Detector</h4>
          <span className="block text-[#444444]">16th September 2024</span>
        </div>
      </header>
    </div>
  );
};

export default QuickScanHeader;
