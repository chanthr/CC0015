"use client";

import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { SUGGESTED_PROMPTS } from "@/lib/constants";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import TypingIndicator from "./TypingIndicator";
import { Sparkles } from "lucide-react";
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
    <CardRoot className="flex flex-col h-full bg-glow-cream/50 backdrop-blur-md rounded-2xl border border-glow-purple-100 shadow-[0_4px_24px_rgba(91,58,140,0.08)] overflow-hidden">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 rounded-full bg-glow-purple-100 flex items-center justify-center mb-4 animate-float">
              <Sparkles className="w-8 h-8 text-glow-purple-700" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-glow-purple-900 mb-2">
              Hi, I&apos;m Glow!
            </h3>
            <p className="text-glow-warm-gray text-sm max-w-md mb-8">
              Your wellness coach. I&apos;m here to help you find joy, practice
              self-care, and feel good about being you. What&apos;s on your
              mind?
            </p>
            <SuggestedPrompts
              prompts={SUGGESTED_PROMPTS}
              onSelect={sendMessage}
            />
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {isLoading && <TypingIndicator />}

        {error && (
          <div className="text-center text-red-500 text-sm py-2">{error}</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (when there are messages) */}
      {messages.length > 0 && !isLoading && (
        <div className="px-6 py-3 border-t border-glow-purple-100">
          <SuggestedPrompts
            prompts={displaySuggestions.slice(0, 3)}
            onSelect={sendMessage}
          />
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-glow-purple-100 bg-glow-white/50">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </CardRoot>
  );
}
