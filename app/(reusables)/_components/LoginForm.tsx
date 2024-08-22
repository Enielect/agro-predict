import React from "react";
import Input from "@/app/(reusables)/_components/Input";
import Label from "@/app/(reusables)/_components/Label";
import CheckBoxInfo from "@/app/(reusables)/_components/CheckBoxInfo";
import Button from "@/app/(reusables)/_components/Button";

const LoginForm = () => {
  return (
    <form className="py-7">
      <Label type="login" />
      <div className="py-5 space-y-5">
        <Input
          inputName="email"
          label="Email Address"
          placeholder="Enter your email address"
          type="text"
        />
        <Input
          inputName="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div className="py-5">
        <CheckBoxInfo inputName="forgotPassword">
          I have read and agreed to all the Terms and Conditions that has been
          put down by the team
        </CheckBoxInfo>
      </div>
      <div className="py-3 space-y-3">
        <Button type="active" className={""}>
          Log in
        </Button>
        <Button type="guest" className={""}>
          Continue as Guest
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
