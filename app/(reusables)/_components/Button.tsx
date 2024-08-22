import { cn } from "@/lib/utils";
import React from "react";

type ButtonProp = {
  className?: string;
  children: React.ReactNode;
  style: "active" | "guest";
  type?: "submit";
  onClick?: () => void;
};

const Button = ({ className, type, style, children, onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        "w-full py-3 rounded-lg",
        `${
          style === "active"
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
