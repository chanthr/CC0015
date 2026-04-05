import { ButtonRoot } from "@heroui/react";

interface SuggestedPromptsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export default function SuggestedPrompts({
  prompts,
  onSelect,
}: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {prompts.map((prompt) => (
        <ButtonRoot
          key={prompt}
          variant="outline"
          onPress={() => onSelect(prompt)}
          className="bg-own-white border border-own-warm text-own-indigo px-4 py-2 rounded-full text-sm hover:bg-own-teal-muted hover:border-own-teal-light transition-colors"
        >
          {prompt}
        </ButtonRoot>
      ))}
    </div>
  );
}
