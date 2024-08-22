import { cn } from "@/lib/utils";
import React from "react";

type ButtonProp = {
  className: string;
  children: React.ReactNode;
  type: "active" | "guest";
};

const Button = ({ className, type, children }: ButtonProp) => {
  return (
    <button
      className={cn(
        "w-full py-3 rounded-lg",
        `${
          type === "active"
            ? "bg-[#389738] text-white text-[14px]"
            : "bg-[#D3E8D3] text-[#389738] text-[14px]"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
