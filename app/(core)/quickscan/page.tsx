import QuickScan from "@/components/QuickScan.Page";
import React from "react";
import ImageDescription from "./components/ImageDescription";
import ImagePreview from "./components/ImagePreview";

const QuickScanPage = () => {
  return (
    <div className=" sm:bg-[#A2FFA2]/10 min-h-[100dvh] ">
      <QuickScan />
      {/* <ImageDescription /> */}
      {/* <ImagePreview /> */}
    </div>
  );
};

export default QuickScanPage;
