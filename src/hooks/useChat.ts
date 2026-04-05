"use client";

import { useState, useCallback } from "react";
import { sendChatMessage, ChatMessage, ChatResponse } from "@/lib/api";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const userMessage: ChatMessage = { role: "user", content: text };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const allMessages = [...messages, userMessage];
      const response: ChatResponse = await sendChatMessage(allMessages);

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setSuggestions(response.suggestions);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return { messages, isLoading, suggestions, error, sendMessage };
}
