"use client";

import { cn } from "@/lib/utils";
import React, { Key, use, useEffect, useState } from "react";

const VerificationBoxes = () => {
  const handleBackspace = (index: number) => {
    if (index > 0) {
      const prevInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
        // prevInput.value = "";
      }
    }
  };

  return (
    <div className="flex justify-between py-9">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <NumberInput key={i} index={i} onBackspace={handleBackspace} />
        ))}
    </div>
  );
};

interface NumberInputProps {
  index: number;
  onBackspace: (index: number) => void;
}

function NumberInput({ index, onBackspace }: NumberInputProps) {
  const [code, setCode] = useState("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    code.length < 1 && setCode(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (code === "") {
        onBackspace(index);
      } else {
        setCode("");
      }
    }
  }

  useEffect(() => {
    if (code.length === 1) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      ) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  }, [code, index]);

  return (
    <input
      data-index={index}
      onChange={handleChangeInput}
      onKeyDown={handleKeyDown}
      value={code}
      type="number"
      className={cn(
        "w-10 text-center flex items-center justify-center h-10 border outline-transparent rounded-md border-bg-[#444444]",
        code.length > 0 && "border-green-500"
      )}
    />
  );
}

export default VerificationBoxes;
