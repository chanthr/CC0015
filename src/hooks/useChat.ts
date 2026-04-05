"use client";

import { useState, useCallback } from "react";
import { ChatMessage } from "@/lib/api";
import { getMockResponse } from "@/lib/mock-responses";

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

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    const mockResponse = getMockResponse(text);
    if (mockResponse) {
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: mockResponse.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setSuggestions(mockResponse.suggestions);
    }

    setIsLoading(false);
  }, []);

  return { messages, isLoading, suggestions, error, sendMessage };
}
