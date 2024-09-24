import { MoreVertical } from "lucide-react";

export function ExpertAiHeader() {
  return (
    <div>
      <div className="py-3 border-b border-[#444444]/20 px-2 flex justify-between items-cener">
        <h3 className="font-semibold text-2xl">Expert AI</h3>
        <MoreVertical />
      </div>
    </div>
  );
}
