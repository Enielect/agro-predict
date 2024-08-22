"use client";

import React from "react";
import Label from "./Label";
import Input from "./Input";
import CheckBoxInfo from "./CheckBoxInfo";
import Button from "./Button";
import { useFormState, useFormStatus } from "react-dom";
import { signUpAction } from "@/app/actions/auth";
import Link from "next/link";

const SignUpForm = () => {
  const [state, action] = useFormState(signUpAction, undefined);
  const { pending } = useFormStatus();
  return (
    <form className="py-7" action={action}>
      <Label type="signup" />
      <div className="py-5 space-y-5">
        <Input
          inputName="first-name"
          label="First Name"
          placeholder="Enter your first name"
          error={state?.errors?.first_name?.length}
        />
        {state?.errors?.first_name && (
          <p className="text-red-500 text-sm">{state.errors.first_name}</p>
        )}
        <Input
          inputName="last-name"
          label="Last Name"
          placeholder="Enter your last name"
          error={state?.errors?.last_name?.length}
        />
        {state?.errors?.last_name && (
          <p className="text-red-500 text-sm">{state.errors.last_name}</p>
        )}
        <Input
          inputName="email"
          label="Email Address"
          placeholder="Enter your email address"
          error={state?.errors?.email?.length}
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}
        <Input
          inputName="password"
          label="Passoword"
          placeholder="Enter your password"
          error={state?.errors?.password?.length}
        />
        {state?.errors?.password && (
          <div className="text-red-500 text-sm">
            <p>Password must:</p>
            <ul>
              {state?.errors?.password?.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="py-5">
        <CheckBoxInfo inputName="termsAndConditions">
          I have read and agreed to all the Terms and Conditions that has been
          put down by the team
        </CheckBoxInfo>
      </div>
      <div className="py-3 space-y-3">
        <Button type="submit" style="active" className={""}>
          {pending ? "Loading..." : "Create Account"}
        </Button>
        <Button style="guest" className={""}>
          Continue as Guest
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
