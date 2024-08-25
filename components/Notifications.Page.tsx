import { useRouter } from "next/navigation";
import React from "react";
import { BellIcon, Header } from "./Settings.Page";
import { notificationData, notificationDataType } from "@/lib/dummydata";
import { cn } from "@/lib/utils";

const UnreadBellIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_46_804)">
        <path
          d="M18.4285 9.42858C20.7955 9.42858 22.7143 7.50979 22.7143 5.14286C22.7143 2.77593 20.7955 0.857147 18.4285 0.857147C16.0616 0.857147 14.1428 2.77593 14.1428 5.14286C14.1428 7.50979 16.0616 9.42858 18.4285 9.42858Z"
          fill="#389738"
          stroke="#389738"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.0274 13.7143V16.3433C17.0274 17.0138 17.2937 17.6568 17.7679 18.131C18.2419 18.605 19.0438 18.8714 19.7143 18.8714H0.857117C1.52762 18.8714 2.32948 18.605 2.8036 18.131C3.27771 17.6568 3.54407 17.0138 3.54407 16.3433L3.54405 10.1702C3.54405 8.38224 4.25433 6.66747 5.51864 5.40317C6.78294 4.13887 8.49771 3.42859 10.2857 3.42859"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.57141 23.1429H12"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_46_804">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CircleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#389738" fillOpacity="0.6" />
    </svg>
  );
};

const hasRead = true;

const Notifications = () => {
  return (
    <div>
      <div className="mx-5">
        <Header
          name="Notifications"
          icon={
            notificationData.some((ele) =>
              ele.items.some((ele) => ele.isRead === true)
            ) ? (
              <UnreadBellIcon />
            ) : (
              <BellIcon />
            )
          }
        />
      </div>
      <div className="space-y-5">
        {notificationData.map((data, index) => (
          <NotificationList
            key={index}
            date={data.date}
            notifications={data.items}
          />
        ))}
      </div>
    </div>
  );
};

type NotificationList = {
  date: string;
  notifications: notificationDataType["items"];
};

function NotificationList({ date, notifications }: NotificationList) {
  return (
    <div>
      <header className="mx-5 py-3">{date}</header>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={cn(
            "px-4 flex gap-5 py-4",
            !notification.isRead && "bg-[#D3E8D3]"
          )}
        >
          <div>
            <CircleIcon />
          </div>
          <div className="flex w-full justify-between items-start">
            <div className="space-y-3">
              <h4>{notification.title}</h4>
              <p className="text-sm text-[#444444]">{notification.message}</p>
            </div>
            <div className="w-fit text-nowrap text-sm">{notification.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
