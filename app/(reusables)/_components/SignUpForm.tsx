import React from "react";
import Label from "./Label";
import Input from "./Input";
import CheckBoxInfo from "./CheckBoxInfo";
import Button from "./Button";

const SignUpForm = () => {
  return (
    <form className="py-7">
      <Label type="signup" />
      <div className="py-5 space-y-5">
        <Input
          inputName="first-name"
          label="First Name"
          placeholder="Enter your first name"
        />
        <Input
          inputName="last-name"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <Input
          inputName="email"
          label="Email Address"
          placeholder="Enter your email address"
        />
        <Input
          inputName="password"
          label="Passoword"
          placeholder="Enter your password"
        />
      </div>
      <div className="py-5">
        <CheckBoxInfo inputName="termsAndConditions">
          I have read and agreed to all the Terms and Conditions that has been
          put down by the team
        </CheckBoxInfo>
      </div>
      <div className="py-3 space-y-3">
        <Button type="active" className={""}>
          Create Account
        </Button>
        <Button type="guest" className={""}>
          Continue as Guest
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
