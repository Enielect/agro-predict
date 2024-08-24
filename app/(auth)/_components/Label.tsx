import Link from "next/link";
import React from "react";

type LabelProps = {
  type: "login" | "signup" | "verify" | "custom";
  header?: string;
  description?: string;
};

const Label = ({ type, header, description }: LabelProps) => {
  return (
    <div>
      <h2 className="py-2 text-[20px] font-semibold">
        {type === "login" && "Login"} {type === "signup" && "Sign Up"}{" "}
        {type === "verify" && "Enter Verification Code"}
        {type === "custom" && header && header}
      </h2>
      <div>
        <span className="text-[#444444]">
          {type === "login" && "Don't have an account?"}
          {type === "signup" && "Already have an account?"}
          {type === "verify" &&
            "We have sent you a 6 digit code for verification to your email"}
          {type === "custom" && description && description}
        </span>
        {(type === "login" || type === "signup") && (
          <span className="px-3">
            <Link
              className="text-[#389738] text-[14px] font-semibold"
              href={type === "login" ? "/signup" : "login"}
            >
              {type === "login" ? "Sign up" : "Log In"}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Label;
