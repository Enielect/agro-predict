import React from "react";

const AddIcon = () => {
    return <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="39.5" fill="#FEFEFE" fillOpacity="0.6" stroke="#389738"/>
    <path d="M40 32V48M48 40H32" stroke="#389738" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  }

const QuickScan = () => {
  return (
    <div className="w-full">
      <h2 className="py-8 text-[20px]">Disease Detector</h2>
      <div className="bg-[#D6FFD6] px-6 py-5 rounded-lg w-full mx-auto">
        <label
          htmlFor="plantImage"
          className="flex items-center justify-center py-3 text-lg font-bold "
        >
          <AddIcon />
        </label>
        <input
          type="file"
          accept="image/*"
          id="plantImage"
          className="hidden"
        />
        <span className="text-center block py-2 text-[#444444]">
          Press the circle to upload your image or drag and drop the image here
        </span>
      </div>
    </div>
  );
};

export default QuickScan;
