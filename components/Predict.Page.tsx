import ImageUpload from "@/app/core/components/ImageUpload";
import React from "react";

const PredictIcon = () => {
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
        fill-opacity="0.6"
        stroke="#389738"
      />
      <path
        d="M44 36V44M40 39V44M36 42V44M34 48H46C46.5304 48 47.0391 47.7893 47.4142 47.4142C47.7893 47.0391 48 46.5304 48 46V34C48 33.4696 47.7893 32.9609 47.4142 32.5858C47.0391 32.2107 46.5304 32 46 32H34C33.4696 32 32.9609 32.2107 32.5858 32.5858C32.2107 32.9609 32 33.4696 32 34V46C32 46.5304 32.2107 47.0391 32.5858 47.4142C32.9609 47.7893 33.4696 48 34 48Z"
        stroke="#389738"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Predict = () => {
  return (
    <div>
      <ImageUpload
        description="Tap the icon to predict"
        icon={<PredictIcon />}
      />

      <h3 className="py-4 font-semibold text-lg">Previous Predictions</h3>
    </div>
  );
};

export default Predict;
