import React from "react";
import { CameraIcon, MessageIcon } from "./svgIcons";
import { ChevronRight } from "lucide-react";
import { ReceiverChat, SenderChat } from "./QuickScan.Page";
import { ExpertAiHeader } from "@/app/(core)/(AI)/expertai/components/ExpertAiReusables";

const ExpertAi = () => {
  return (
    <>
      <div>
        <ExpertAiHeader />
        <div className="px-4">
          <ChatDescriptionTag />
        </div>
      </div>
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

function ChatDescriptionTag() {
  return (
    <div>
      <div className="px-2 py-3 flex items-center my-3 rounded-md space-x-4 bg-[#A2FFA2]/40">
        <MessageIcon />
        <h3>Start new Session</h3>
      </div>
    </div>
  );
}

export default ExpertAi;
