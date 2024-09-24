"use client";

import React, { useState } from "react";

type PredictInputProp = {
  inputName: string;
  label: string;
  placeholder: string;
  type?: string;
  error: number | undefined;
  icon: React.ReactNode;
};

const PredictInput = ({
  inputName,
  label,
  type,
  icon,
  placeholder,
  error,
}: PredictInputProp) => {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-3 relative">
      <label className="block text-[#444444] " htmlFor={inputName}>
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
        } w-full border bg-[#8B978B] bg-opacity-20 placeholder:text-opacity-60 outline-transparent placeholder:text-[#1E1E1E] rounded-full px-5 py-3 mt-1`}
      />
      <span className="absolute right-5 top-9">{icon}</span>
    </div>
  );
};

export default PredictInput;
