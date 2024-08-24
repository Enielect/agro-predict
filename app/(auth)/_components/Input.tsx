"use client";

import React, { useState } from "react";

type InputProp = {
  inputName: string;
  label: string;
  placeholder: string;
  type?: string;
  error: number | undefined;
};

const Input = ({ inputName, label, type, placeholder, error }: InputProp) => {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-3">
      <label className="block text-[#1E1E1E] font-semibold" htmlFor={inputName}>
        {label}
      </label>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        id={inputName}
        name={inputName}
        value={value}
        placeholder={placeholder}
        className={`${
          typeof error !== "undefined" && value && "border border-red-600"
        } ${
          value && typeof error === "undefined" && "border border-green-500"
        } w-full border border-[#444444] border-opacity-60 placeholder:text-opacity-60 placeholder:text-[#444444] rounded-lg px-5 py-3 mt-1`}
      />
    </div>
  );
};

export default Input;
