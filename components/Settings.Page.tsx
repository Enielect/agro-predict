"use client";

import { BellIcon, Contact, Contact2Icon, ContactRound, SettingsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  ChevronRightIcon,
  GlobeIcon,
  HelpIcon,
  LeftArrow,
  LockIcon,
  ProfileIcon,
  UersIcon,
} from "./svgIcons";

export const SettingsOptions = [
  {
    name: "Account",
    id: 1,
    options: [
      {
        name: "Manage Account",
        icon: <GlobeIcon />,
        link: "/settings/account/profile",
      },
      {
        name: "Password & Security",
        icon: <LockIcon />,
        link: "/settings/account/security",
      },
      {
        name: "Profile Information",
        icon: <ContactRound />,
        link: "/settings/account/notifications",
      },
      {
        name: "Notification Preference",
        icon: <BellIcon />,
        link: "/settings/account/notifications",
      },
    ],
  },
  {
    name: "General",
    id: 2,
    options: [
      {
        name: "Help",
        icon: <HelpIcon />,
        link: "/settings/account/profile",
      },
      {
        name: "Contact Us",
        icon: <UersIcon />,
        link: "/settings/account/security",
      },
    ],
  },
];

const Settings = () => {
  return (
    <div>
      <Header name="Settings" icon={<SettingsIcon />} />
      <SettingsItemList />
    </div>
  );
};

const SettingsItemList = () => {
  return (
    <div className="w-full">
      {SettingsOptions.map((option) => (
        <div key={option.id}>
          <h3>{option.name}</h3>
          <div className="py-5 px-4">
            {option.options.map((item) => (
              <div
                key={item.link}
                className="flex py-5 items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <ChevronRightIcon />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

type HeaderProps = {
  name: string;
  icon: React.ReactNode;
};

export function Header({ name, icon }: HeaderProps) {
  const router = useRouter();
  return (
    <div className="flex py-7 items-center justify-between w-full">
      <span className="cursor-pointer" onClick={() => router.back()}>
        <LeftArrow />
      </span>
      <span>{name}</span>
      {icon}
    </div>
  );
}

export default Settings;
