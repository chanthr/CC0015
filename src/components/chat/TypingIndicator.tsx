import { Shield } from "lucide-react";
import { AvatarRoot, AvatarFallback } from "@heroui/react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      <AvatarRoot size="sm" className="w-8 h-8 shrink-0">
        <AvatarFallback className="bg-own-teal">
          <Shield className="w-4 h-4 text-white" />
        </AvatarFallback>
      </AvatarRoot>
      <div className="bg-own-teal-muted rounded-2xl px-4 py-3 flex items-center gap-1">
        <span className="w-2 h-2 bg-own-teal rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-own-teal rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-own-teal rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
