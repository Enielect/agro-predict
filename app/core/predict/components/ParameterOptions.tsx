"use client";

import React, { useState } from "react";

const ParameterOptions = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold py-3">Predict</h2>
      <div className="py-3">
        Select the parameters you want to use. Your can select more than one.
      </div>
      <div className="space-y-4 mb-6">
        {Array(6)
          .fill(0)
          .map((ele, i) => (
            <SelectOption key={i} description="placeholder text" />
          ))}
      </div>
      <button className="bg-[#389738] w-full rounded-full text-center py-3 text-white">Proceed (4 Selected)</button>
    </div>
  );
};

function SelectOption({ description }: { description: string }) {
  const [isChecked, SetIsChecked] = useState(false);
  return (
    <div
      className={`flex justify-between py-3 px-4 rounded-md border ${
        isChecked && "border-[#389738]"
      } items-center`}
    >
      <span>{description}</span>
      <input
        type="checkbox"
        value={Number(isChecked)}
        onChange={() => SetIsChecked((c) => !c)}
        className="accent-[#389738]"
      />
    </div>
  );
}

export default ParameterOptions;
