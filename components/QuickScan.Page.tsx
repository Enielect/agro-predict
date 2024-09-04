import ImageUpload from "@/app/core/components/ImageUpload";
import React from "react";

const AddIcon = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="39.5"
        fill="#FEFEFE"
        fillOpacity="0.6"
        stroke="#389738"
      />
      <path
        d="M40 32V48M48 40H32"
        stroke="#389738"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const QuickScan = () => {
  return (
    <div className="w-full">
      <h2 className="py-8 text-[20px]">Disease Detector</h2>
      <ImageUpload
        description=" Press the circle to upload your image or drag and drop the image here"
        icon={<AddIcon />}
      />
    </div>
  );
};

export default QuickScan;
