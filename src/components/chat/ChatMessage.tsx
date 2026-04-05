import { Bot, User } from "lucide-react";
import { AvatarRoot, AvatarFallback } from "@heroui/react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
    >
      {isAssistant && (
        <AvatarRoot size="sm" className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-glow-purple-700">
            <Bot className="w-4 h-4 text-white" />
          </AvatarFallback>
        </AvatarRoot>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isAssistant
            ? "bg-glow-purple-100 text-glow-purple-900"
            : "bg-glow-beige text-glow-purple-900"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
      {!isAssistant && (
        <AvatarRoot size="sm" className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-glow-beige border border-glow-purple-300">
            <User className="w-4 h-4 text-glow-purple-700" />
          </AvatarFallback>
        </AvatarRoot>
      )}
    </div>
  );
}
