"use client";

import { Shield, User } from "lucide-react";
import { AvatarRoot, AvatarFallback } from "@heroui/react";
import Markdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}>
      {isAssistant && (
        <AvatarRoot size="sm" className="w-8 h-8 shrink-0 mt-1">
          <AvatarFallback className="bg-own-teal">
            <Shield className="w-4 h-4 text-white" />
          </AvatarFallback>
        </AvatarRoot>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isAssistant
            ? "bg-own-teal-muted text-own-deep"
            : "bg-own-sand text-own-deep"
        }`}
      >
        {isAssistant ? (
          <div className="text-sm leading-relaxed prose-sm prose-p:my-1.5 prose-ul:my-1 prose-li:my-0.5 prose-strong:text-own-deep prose-blockquote:border-own-teal prose-blockquote:text-own-gray prose-blockquote:not-italic prose-blockquote:pl-3 prose-blockquote:my-2">
            <Markdown
              components={{
                p: ({ children }) => <p className="my-1.5">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-own-deep">{children}</strong>,
                ul: ({ children }) => <ul className="list-disc pl-4 my-1.5 space-y-0.5">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 my-1.5 space-y-0.5">{children}</ol>,
                li: ({ children }) => <li className="text-sm">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-own-teal pl-3 my-2 text-own-gray italic">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </Markdown>
          </div>
        ) : (
          <p className="text-sm leading-relaxed">{content}</p>
        )}
      </div>
      {!isAssistant && (
        <AvatarRoot size="sm" className="w-8 h-8 shrink-0 mt-1">
          <AvatarFallback className="bg-own-sand border border-own-warm">
            <User className="w-4 h-4 text-own-indigo" />
          </AvatarFallback>
        </AvatarRoot>
      )}
    </div>
  );
}
