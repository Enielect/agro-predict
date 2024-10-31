import ExpertAi from "@/components/ExpertAi.Page";
import React from "react";
import { nanoid } from "@/lib/utils";
import Chat from "@/components/chat";

export const runtime = "edge";
const ExpertAiPage = () => {
  const id = nanoid();
  return (
    // <main className="min-h-full w-full ">
    //   {/* <ExpertAi /> */}
    // </main>

    // <Chat id={id} />
    <>
      <p>What is making this not show</p>
      <Chat />
    </>
  );
};

export default ExpertAiPage;
