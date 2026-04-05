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
          className="bg-glow-white border border-glow-purple-300 text-glow-purple-700 px-4 py-2 rounded-full text-sm hover:bg-glow-purple-100 hover:border-glow-purple-500 transition-colors"
        >
          {prompt}
        </ButtonRoot>
      ))}
    </div>
  );
}
