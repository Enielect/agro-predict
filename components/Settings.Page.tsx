"use client";

import { SettingsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const LeftArrow = () => {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9L1 5M1 5L5 1M1 5H19"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SsettingsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z"
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const GlobeIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.055 9H3C3.53043 9 4.03914 9.21071 4.41421 9.58579C4.78929 9.96086 5 10.4696 5 11V12C5 12.5304 5.21071 13.0391 5.58579 13.4142C5.96086 13.7893 6.46957 14 7 14C7.53043 14 8.03914 14.2107 8.41421 14.5858C8.78929 14.9609 9 15.4696 9 16V18.945M6 1.935V3.5C6 4.16304 6.26339 4.79893 6.73223 5.26777C7.20107 5.73661 7.83696 6 8.5 6H9C9.53043 6 10.0391 6.21071 10.4142 6.58579C10.7893 6.96086 11 7.46957 11 8C11 8.53043 11.2107 9.03914 11.5858 9.41421C11.9609 9.78929 12.4696 10 13 10C13.5304 10 14.0391 9.78929 14.4142 9.41421C14.7893 9.03914 15 8.53043 15 8C15 7.46957 15.2107 6.96086 15.5858 6.58579C15.9609 6.21071 16.4696 6 17 6H18.064M13 18.488V16C13 15.4696 13.2107 14.9609 13.5858 14.5858C13.9609 14.2107 14.4696 14 15 14H18.064M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
        stroke="#1E1E1E"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LockIcon = () => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 13V15M3 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H3C2.46957 9 1.96086 9.21071 1.58579 9.58579C1.21071 9.96086 1 10.4696 1 11V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19ZM13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13Z"
        stroke="#1E1E1E"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ProfileIcon = () => {
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
        stroke-opacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BellIcon = () => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.49997 9.79311L1.35352 9.93955L0.646577 10.6465C0.646559 10.6465 0.646541 10.6465 0.646523 10.6466C0.576648 10.7165 0.529064 10.8055 0.509785 10.9025C0.490501 10.9995 0.500403 11.1 0.538238 11.1913C0.576073 11.2827 0.640143 11.3608 0.722347 11.4157C0.804523 11.4706 0.901132 11.5 0.99997 11.5L1.49997 9.79311ZM1.49997 9.79311V9.586M1.49997 9.79311V9.586M1.49997 9.586V6C1.49997 4.54131 2.07943 3.14236 3.11088 2.11091C4.14233 1.07946 5.54128 0.5 6.99997 0.5C8.45866 0.5 9.85761 1.07946 10.8891 2.11091C11.9205 3.14236 12.5 4.54131 12.5 6V9.586V9.79311M1.49997 9.586L12.5 9.79311M12.5 9.79311L12.6464 9.93955M12.5 9.79311L12.6464 9.93955M12.6464 9.93955L13.3534 10.6465C13.3534 10.6465 13.3534 10.6465 13.3534 10.6466C13.4233 10.7165 13.4709 10.8055 13.4902 10.9025C13.5094 10.9995 13.4995 11.1 13.4617 11.1913C13.4239 11.2827 13.3598 11.3608 13.2776 11.4157C13.1954 11.4706 13.0988 11.5 13 11.5C12.9999 11.5 12.9999 11.5 12.9999 11.5M12.6464 9.93955L12.9999 11.5M12.9999 11.5H1.00008H12.9999ZM6.99997 15.5C6.33693 15.5 5.70104 15.2366 5.2322 14.7678C4.88301 14.4186 4.64779 13.9767 4.55047 13.5H9.44947C9.35215 13.9767 9.11693 14.4186 8.76774 14.7678C8.2989 15.2366 7.66301 15.5 6.99997 15.5Z"
        stroke="#1E1E1E"
        strokeOpacity="0.6"
      />
    </svg>
  );
};

const ChevronRightIcon = () => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.293031 9.707C0.10556 9.51947 0.000244141 9.26516 0.000244141 9C0.000244141 8.73483 0.10556 8.48052 0.293031 8.293L3.58603 5L0.293031 1.707C0.110873 1.51839 0.0100779 1.26579 0.0123563 1.00359C0.0146347 0.741397 0.119804 0.490585 0.305212 0.305177C0.49062 0.119769 0.741433 0.0145995 1.00363 0.0123211C1.26583 0.0100427 1.51843 0.110838 1.70703 0.292996L5.70703 4.293C5.8945 4.48052 5.99982 4.73483 5.99982 5C5.99982 5.26516 5.8945 5.51947 5.70703 5.707L1.70703 9.707C1.5195 9.89447 1.26519 9.99978 1.00003 9.99978C0.734866 9.99978 0.480558 9.89447 0.293031 9.707Z"
        fill="#1E1E1E"
        fillOpacity="0.6"
      />
    </svg>
  );
};

const HelpIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 14H10V10H9M10 6H10.01M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
        stroke="#1E1E1E"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const UersIcon = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.14284 8.28571C9.11528 8.28571 10.7143 6.68672 10.7143 4.71428C10.7143 2.74184 9.11528 1.14285 7.14284 1.14285C5.1704 1.14285 3.57141 2.74184 3.57141 4.71428C3.57141 6.68672 5.1704 8.28571 7.14284 8.28571Z"
        stroke="#1E1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.714294 18.2857H7.14287H13.5714V17.5113C13.5601 16.4224 13.2729 15.3541 12.7368 14.4064C12.2006 13.4586 11.433 12.6621 10.5056 12.0914C9.57822 11.5207 8.52131 11.1944 7.43361 11.1429C7.33664 11.1383 7.23969 11.1359 7.14287 11.1357C7.04604 11.1359 6.94909 11.1383 6.85212 11.1429C5.76442 11.1944 4.70751 11.5207 3.78011 12.0914C2.85272 12.6621 2.08511 13.4586 1.54897 14.4064C1.01283 15.3541 0.725667 16.4224 0.714294 17.5113V18.2857Z"
        stroke="#1E1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8572 8.28571C14.8296 8.28571 16.4286 6.68672 16.4286 4.71428C16.4286 2.74184 14.8296 1.14285 12.8572 1.14285"
        stroke="#1E1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4286 18.2859H19.2857V17.5113C19.2743 16.4224 18.9871 15.3541 18.451 14.4064C17.9148 13.4586 17.1473 12.6622 16.2198 12.0915C15.6204 11.7225 14.9667 11.4557 14.2857 11.2993"
        stroke="#1E1E1E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SettingsOptions = [
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
        icon: <ProfileIcon />,
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
