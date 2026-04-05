import { Bot } from "lucide-react";
import { AvatarRoot, AvatarFallback } from "@heroui/react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      <AvatarRoot size="sm" className="w-8 h-8 shrink-0">
        <AvatarFallback className="bg-glow-purple-700">
          <Bot className="w-4 h-4 text-white" />
        </AvatarFallback>
      </AvatarRoot>
      <div className="bg-glow-purple-100 rounded-2xl px-4 py-3 flex items-center gap-1">
        <span className="w-2 h-2 bg-glow-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-glow-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-glow-purple-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
