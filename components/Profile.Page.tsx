"use client";

import React, { useState } from "react";
import { Header } from "./Settings.Page";
import { ProfileIcon } from "./svgIcons";
import Image from "next/image";
import Input from "@/app/(auth)/_components/Input";
import Button from "@/app/(auth)/_components/Button";

import dummyProfile from "@/public/dummy-profile.png";
import Modal from "./Modal";

export const UserIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.121 15.804C5.21942 14.6179 7.58958 13.9963 10 14C12.5 14 14.847 14.655 16.879 15.804M13 8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "#444444" }}
    >
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
        stroke="#1E1E1E"
        strokeOpacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function ImageBlock() {
  return (
    <div className="py-3 w-full text-center">
      <div className="w-full flex justify-center mb-3">
        <Image src={dummyProfile} alt="profile" width={100} height={100} />
      </div>
      <span className="text-center">You are on the free plan</span>
    </div>
  );
}

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-5">
      <Header name="Profile" icon={<UserIcon />} />
      <ImageBlock />
      <div className="space-y-4">
        <Input
          inputName="updatedName"
          label="User Name"
          placeholder="Tf kunmicreative?"
          error={undefined}
          icon={<ProfileIcon />}
        />
        <Input
          inputName="Email"
          label="Email"
          placeholder="sapa@gmail.com"
          error={undefined}
          icon={<MailIcon />}
        />
        <Input
          inputName="Phone Number"
          label="updatedPhone"
          placeholder="09012345678"
          error={undefined}
          icon={<PhoneIcon />}
        />
      </div>
      <div className="space-y-4">
        <Button style="active" onClick={() => setIsOpen(true)}>
          Update your plan
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="rounded-xl bg-white w-fit mx-[10%] px-4 py-3">
            <header className="font-semibold py-1  ">Changes Saved</header>
            <p className="py-4 text-[#444444] text-[14px]">
              You have successully updated your profile. It will reflect in a
              bit
            </p>
            <button className="px-3 py-2  w-1/4 rounded-full text-white  bg-[#389738] capitalize">
              done
            </button>
          </div>
        </Modal>
        <Button type="submit" style="guest">
          Edit your profile
        </Button>
      </div>
    </div>
  );
};

export default Profile;
