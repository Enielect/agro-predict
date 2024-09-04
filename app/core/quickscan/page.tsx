import QuickScan from "@/components/QuickScan.Page";
import React from "react";
import ImageDescription from "./components/ImageDescription";
import ImagePreview from "./components/ImagePreview";

const QuickScanPage = () => {
  return (
    <div className="mx-6 min-h-[100dvh] py-[35px]">
      {/* <QuickScan /> */}
      <ImageDescription />
      {/* <ImagePreview /> */}
    </div>
  );
};

export default QuickScanPage;
