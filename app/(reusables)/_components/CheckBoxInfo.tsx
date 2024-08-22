import React from "react";

type CheckBoxInfoProps = {
  inputName: string;
  children: React.ReactNode;
};

const CheckBoxInfo = ({ inputName, children }: CheckBoxInfoProps) => {
  return (
    <div className="flex items-start gap-4">
      <input
        type="checkbox"
        className="accent-[#389738] w-7 rounded-md h-7"
        id={inputName}
        name={inputName}
      />
      <label htmlFor={inputName}>{children}</label>
    </div>
  );
};

export default CheckBoxInfo;
