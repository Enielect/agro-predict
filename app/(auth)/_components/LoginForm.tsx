"use client";

import React from "react";
import Input from "@/app/(auth)/_components/Input";
import Label from "@/app/(auth)/_components/Label";
import CheckBoxInfo from "@/app/(auth)/_components/CheckBoxInfo";
import Button from "@/app/(auth)/_components/Button";
import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "@/app/actions/auth";
import { MailIcon } from "@/components/Profile.Page";
import { EyeIcon } from "lucide-react";

const LoginForm = () => {
  const [state, action] = useFormState(loginAction, undefined);
  console.log(state);
  const { pending } = useFormStatus();
  return (
    <form className="py-7" action={action}>
      <Label type="login" />
      <div className="py-5 space-y-5">
        <Input
        icon={<MailIcon />}
          inputName="email"
          label="Email Address"
          placeholder="Enter your email address"
          type="text"
          error={state?.errors?.email?.length}
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}
        <Input
        icon={<EyeIcon />}
          inputName="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
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
        <CheckBoxInfo inputName="forgotPassword">
          I have read and agreed to all the Terms and Conditions that has been
          put down by the team
        </CheckBoxInfo>
      </div>
      <div className="py-3 space-y-3">
        <Button style="active" type="submit" className={""}>
          {pending ? "Loading..." : "Log in"}
        </Button>
        <Button style="guest" className={""}>
          Continue as Guest
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
