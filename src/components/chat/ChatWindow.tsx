"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { SUGGESTED_PROMPTS } from "@/lib/constants";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import TypingIndicator from "./TypingIndicator";
import { CardRoot } from "@heroui/react";

export default function ChatWindow() {
  const { messages, isLoading, suggestions, error, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const displaySuggestions =
    suggestions.length > 0 ? suggestions : SUGGESTED_PROMPTS;

  return (
    <CardRoot className="flex flex-col h-full bg-own-cream/50 backdrop-blur-md rounded-2xl border border-own-warm shadow-[0_4px_24px_rgba(26,26,46,0.06)] overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {isLoading && <TypingIndicator />}

        {error && (
          <div className="text-center text-red-500 text-sm py-2">{error}</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {!isLoading && (
        <div className="px-6 py-3 border-t border-own-warm">
          <SuggestedPrompts
            prompts={displaySuggestions.slice(0, 3)}
            onSelect={sendMessage}
          />
        </div>
      )}

      <div className="p-4 border-t border-own-warm bg-own-white/50">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </CardRoot>
  );
}
