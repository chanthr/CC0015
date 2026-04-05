"use client";

import { useState, useCallback } from "react";
import { ChatMessage } from "@/lib/api";
import { getMockResponse } from "@/lib/mock-responses";

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content: `Hi there. I'm your AI Companion — not a generic chatbot.

I've read your situation document, and I understand what you're going through. I'm here to help you **detect** anxiety patterns, **interrupt** spirals before they take over, **guide** you through tough moments, and **reflect** on your progress.

You can talk to me anytime — about gym anxiety, comparison, rest guilt, body image, or anything on your mind. I'll always respond with context, never with generic advice.

What's on your mind today?`,
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const userMessage: ChatMessage = { role: "user", content: text };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    const mockResponse = getMockResponse(text);

    // Typing delay proportional to response length (min 600ms, max 2000ms)
    const responseLength = mockResponse?.reply.length || 200;
    const delay = Math.min(2000, Math.max(600, responseLength * 1.5));
    await new Promise((resolve) => setTimeout(resolve, delay));

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
