"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { ButtonRoot } from "@heroui/react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Share what's on your mind..."
        disabled={disabled}
        className="flex-1 bg-own-white border border-own-warm rounded-full px-5 py-3 text-sm text-own-deep placeholder:text-own-gray-light focus:outline-none focus:border-own-teal focus:ring-2 focus:ring-own-teal/20 disabled:opacity-50"
      />
      <ButtonRoot
        type="submit"
        isDisabled={disabled || !input.trim()}
        isIconOnly
        className="bg-own-teal text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-own-teal-light transition-colors shrink-0"
      >
        <Send className="w-5 h-5" />
      </ButtonRoot>
    </form>
  );
}
