"use client";

import ImageUpload from "@/app/(core)/components/ImageUpload";
import React, { useState } from "react";
import { MessageIcon, ProfileIcon } from "./svgIcons";
import ImageDescription, {
  CropDescription,
} from "@/app/(core)/quickscan/components/ImageDescription";
import { CameraIcon, ChevronRight, Loader2 } from "lucide-react";

const AddIcon = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="39.5"
        fill="#FEFEFE"
        fillOpacity="0.6"
        stroke="#389738"
      />
      <path
        d="M40 32V48M48 40H32"
        stroke="#389738"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const QuickScan = () => {
  const [active, setActive] = useState("upload");
  return (
    <>
      {active === "upload" && (
        <div className="w-full sm:hidden px-6">
          <h2 className="py-8 text-[20px]">Disease Detector</h2>
          <ImageUpload
            setActive={setActive}
            description=" Press the circle to upload your image or drag and drop the image here"
            icon={<AddIcon />}
          />
          <div className="space-y-4">
            <h4 className="font-semibold py-4">Previous sessions</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SmallCamera /> <span className="ml-3">Nematoda Infection</span>
              </div>
              <span className="text-[#389738]">15 min</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SmallCamera /> <span className="ml-3">Nematoda Infection</span>
              </div>
              <span className="text-[#389738]">15 min</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SmallCamera /> <span className="ml-3">Nematoda Infection</span>
              </div>
              <span className="text-[#389738]">15 min</span>
            </div>
          </div>
        </div>
      )}
      {active === "parameter" && <ImageDescription />}

      {/* desktop design */}
      <div className="hidden p-4 sm:grid grid-cols-[15rem_1fr] gap-3">
        <div className="px-2 bg-white rounded-md flex flex-col justify-between min-h-[calc(100dvh-69px)]">
          <div>
            <div className="flex py-3 justify-between">
              <span>Quick Scan </span>
              <CameraIcon />
            </div>
            <div className="py-4 flex justify-between">
              <span>Today</span>
              <ChevronRight />
            </div>
            <div className="py-4 flex justify-between">
              <span>Today</span>
              <ChevronRight />
            </div>
            <div className="py-4 flex justify-between">
              <span>Today</span>
              <ChevronRight />
            </div>
            <div className="py-4 flex justify-between">
              <span>Today</span>
              <ChevronRight />
            </div>
          </div>
          <button className="bg-[#389738] py-2 rounded-full text-white">
            Upgrade Plan
          </button>
        </div>
        <div>
          <div className="w-full h-14 bg-white rounded-full flex items-center pl-4">
            Crop Scanner
          </div>
          {/* chat */}
          <div className="py-4 space-y-6">
            <SenderChat />
            <ReceiverChat />
          </div>
        </div>
      </div>
    </>
  );
};

export function SenderChat() {
  return (
    <div className="flex  justify-end">
      <div className="ml-[2.6rem] flex items-end gap-3">
        <ImageUpload
          description=" Press the circle to upload your image or drag and drop the image here"
          icon={<AddIcon />}
        />
        <ProfileIcon />
      </div>
    </div>
  );
}

export function ReceiverChat() {
  return (
    <div className="flex mr-[2.6rem] max-w-[600px] justify-start">
      <div className=" flex items-end gap-3">
        <div>
          <MessageIcon />
        </div>
        <div className="bg-white p-3 gap-3 flex sm:flex-col md:flex-row">
          <div className="bg-[#a2ffa2]/20 grid place-items-center md:flex-1 aspect-video">
            <Loader2 className="animate-spin text-green-700" />
          </div>
          <div className="md:flex-[2]">
            <CropDescription />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiverLoader() {
  <div className="flex  justify-start">
    <div className="w-[50%] h-16 flex items-end gap-3">
      <div className="bg-[#A2FFA2]/20">
        <Loader2 className="animate-spin text-green-700" />
      </div>
      <MessageIcon />
    </div>
  </div>;
}

function SmallCamera() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#389738" />
      <path
        d="M6 10C6 9.64638 6.14048 9.30724 6.39052 9.05719C6.64057 8.80714 6.97971 8.66667 7.33333 8.66667H7.95333C8.17279 8.6667 8.38886 8.61256 8.58238 8.50906C8.77589 8.40556 8.94087 8.25589 9.06267 8.07333L9.604 7.26C9.7258 7.07745 9.89077 6.92778 10.0843 6.82427C10.2778 6.72077 10.4939 6.66664 10.7133 6.66667H13.2867C13.5061 6.66664 13.7222 6.72077 13.9157 6.82427C14.1092 6.92778 14.2742 7.07745 14.396 7.26L14.9373 8.07333C15.0591 8.25589 15.2241 8.40556 15.4176 8.50906C15.6111 8.61256 15.8272 8.6667 16.0467 8.66667H16.6667C17.0203 8.66667 17.3594 8.80714 17.6095 9.05719C17.8595 9.30724 18 9.64638 18 10V16C18 16.3536 17.8595 16.6928 17.6095 16.9428C17.3594 17.1929 17.0203 17.3333 16.6667 17.3333H7.33333C6.97971 17.3333 6.64057 17.1929 6.39052 16.9428C6.14048 16.6928 6 16.3536 6 16V10Z"
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12.6667C14 13.1971 13.7893 13.7058 13.4142 14.0809C13.0391 14.456 12.5304 14.6667 12 14.6667C11.4696 14.6667 10.9609 14.456 10.5858 14.0809C10.2107 13.7058 10 13.1971 10 12.6667C10 12.1362 10.2107 11.6275 10.5858 11.2525C10.9609 10.8774 11.4696 10.6667 12 10.6667C12.5304 10.6667 13.0391 10.8774 13.4142 11.2525C13.7893 11.6275 14 12.1362 14 12.6667Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default QuickScan;
