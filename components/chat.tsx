"use client";

import { type CoreMessage } from "ai";
import { useState } from "react";
import { continueConversation } from "@/app/actions/chat";
import { readStreamableValue } from "ai/rsc";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content as string}
        </div>
      ))}

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: "user" },
          ];

          setMessages(newMessages);
          setInput("");

          const result = await continueConversation(newMessages);

          for await (const content of readStreamableValue(result)) {
            setMessages([
              ...newMessages,
              {
                role: "assistant",
                content: content as string,
              },
            ]);
          }
        }}
      >
        <input
          className="fixed sm:bottom-0 bottom-[56px]  w-full max-w-md p-2 mb-8 border border-black rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-black fixed bottom-0 right-0 text-white p-3">
          submit
        </button>
      </form>
    </div>
  );
}
