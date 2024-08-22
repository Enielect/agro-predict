import React from "react";

type InputProp = {
  inputName: string;
  label: string;
  placeholder: string;
  type?: string;
};

const Input = ({ inputName, label, type, placeholder }: InputProp) => {
  return (
    <div className="space-y-3">
      <label className="block text-[#1E1E1E] font-semibold" htmlFor={inputName}>
        {label}
      </label>
      <input
        type={type}
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        className="w-full border border-[#444444] border-opacity-60 placeholder:text-opacity-60 placeholder:text-[#444444] rounded-lg px-5 py-3 mt-1"
      />
    </div>
  );
};

export default Input;
