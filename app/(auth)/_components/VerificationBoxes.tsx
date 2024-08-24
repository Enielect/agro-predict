"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const VerificationBoxes = () => {
  return (
    <div className="flex justify-between py-9">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <NumberInput key={i} />
        ))}
    </div>
  );
};

function NumberInput() {
  const [code, setCode] = useState("");
  return (
    <input
      onChange={(e) => setCode(e.target.value)}
      value={code}
      type="number"
      className={cn(
        "w-10 h-10 p-4 border outline-transparent rounded-md border-bg-[#444444]",
        code.length > 0 && "border-green-500"
      )}
    />
  );
}

export default VerificationBoxes;
