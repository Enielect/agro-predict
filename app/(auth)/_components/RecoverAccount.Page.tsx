"use client";

import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/Profile.Page";
import { EyeIcon } from "lucide-react";

const RecoverAccountPage = () => {
  const [showing, setIsShowing] = useState("email");
  return (
    <>
      {showing === "email" && (
        <div className="py-5 space-y-5">
          <Label
            type="custom"
            header="Recover your account"
            description="A new password will be sent to the email you provided"
          />
          <Input
            icon={<MailIcon />}
            inputName="email"
            label="Email Address"
            placeholder="Enter your email address"
            error={undefined}
          />
          <div className="py-3 space-y-3">
            {/* for demonstraton purposes only */}
            <Button
              onClick={() => setIsShowing("confirmNewPassword")}
              style="active"
              type="submit"
            >
              Get Password
            </Button>

            <Button style="guest" onClick={() => setIsShowing("number")}>
              Can&apos;t access my mail
            </Button>
          </div>
        </div>
      )}
      {showing === "number" && (
        <div className="py-5 space-y-5">
          <Label
            type="custom"
            header="Recover your account"
            description="A new password will be sent to the number you provided"
          />
          <Input
            icon={<PhoneIcon />}
            inputName="phone-number"
            label="Phone Number"
            placeholder="Enter your phone number"
            error={undefined}
          />
          <div className="py-3 space-y-3">
            {/* for demonstration purposes */}
            <Button
              onClick={() => setIsShowing("confirmNewPassword")}
              style="active"
              type="submit"
            >
              Get Password
            </Button>
            <Button style="guest" onClick={() => setIsShowing("email")}>
              Can&apos;t access my phone number
            </Button>
          </div>
        </div>
      )}
      {showing === "confirmNewPassword" && (
        <div className="py-5 space-y-5">
          <Label
            type="custom"
            header="Recover your account"
            description="Enter the default password that was sent to you"
          />
          <Input
            icon={<EyeIcon />}
            inputName={"default-password"}
            label={"Default Password"}
            placeholder="Default Password"
            error={undefined}
          />
          <Input
            icon={<EyeIcon />}
            inputName={"new-password"}
            label="New Password"
            placeholder={"Enter New Password"}
            error={undefined}
          />
          <Input
            icon={<EyeIcon />}
            inputName={"confirm-new-password"}
            label="Confirm New Password"
            placeholder={"Confirm New Password"}
            error={undefined}
          />

          <Button className="my-3" type="submit" style="active">
            Log in
          </Button>
        </div>
      )}
    </>
  );
};

export default RecoverAccountPage;
