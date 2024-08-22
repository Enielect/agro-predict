import Link from "next/link";
import React from "react";

type LabelProps = {
  type: "login" | "signup";
};

const Label = ({ type }: LabelProps) => {
  return (
    <div>
      <h2 className="py-2 text-[20px] font-semibold">
        {type === "login" ? "Login" : "Sign Up"}
      </h2>
      <div>
        <span className="text-[#444444]">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </span>
        <span className="px-3">
          <Link
            className="text-[#389738] text-[14px] font-semibold"
            href={type === "login" ? "/signup" : "login"}
          >
            {type === "login" ? "Sign up" : "Log In"}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Label;
