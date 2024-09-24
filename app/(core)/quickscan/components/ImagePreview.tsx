import Image from "next/image";
import React from "react";
import QuickScanHeader from "./QuickScanHeader";

const ImagePreview = () => {
  return (
    <div className="space-y-7">
      <QuickScanHeader />
      <div>
        {/* <Image src={""} alt="image" /> */}

        <div className="w-full h-[300px] bg-gray-300"></div>
      </div>
      <button className="bg-[#389738] w-full py-3 rounded-full text-center text-white">
        Scan Image
      </button>
    </div>
  );
};

export default ImagePreview;
