import React, { ReactNode } from "react";

type ImageUploadProp = {
  description: string;
  icon: ReactNode;
};

const ImageUpload = ({ description, icon }: ImageUploadProp) => {
  return (
    <div className="bg-[#D6FFD6] px-6 py-5 rounded-lg w-full mx-auto">
      <label
        htmlFor="plantImage"
        className="flex items-center justify-center py-3 text-lg font-bold "
      >
        {icon}
      </label>
      <input type="file" accept="image/*" id="plantImage" className="hidden" />
      <span className="text-center block py-2 text-[#444444]">
        {description}
      </span>
    </div>
  );
};

export default ImageUpload;
