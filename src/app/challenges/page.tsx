"use client";

import { useState } from "react";
import { CHALLENGES } from "@/lib/constants";
import { Users, Clock, ChevronRight } from "lucide-react";
import { CardRoot, CardContent, ButtonRoot, ChipRoot, ProgressBarRoot, ProgressBarTrack, ProgressBarFill } from "@heroui/react";

export default function ChallengesPage() {
  const [joined, setJoined] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleJoin = (id: string) => {
    setJoined((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Challenges
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          Gentle, non-competitive wellness challenges.
        </p>
      </div>

      {/* Joined summary */}
      {joined.size > 0 && (
        <CardRoot className="bg-glow-purple-100 rounded-2xl p-4 mb-6 border-none animate-fade-in-up">
          <p className="text-sm font-medium text-glow-purple-900">
            You&apos;re in {joined.size} challenge{joined.size > 1 ? "s" : ""}! Keep going 💪
          </p>
        </CardRoot>
      )}

      {/* Challenges List */}
      <div className="space-y-4">
        {CHALLENGES.map((challenge) => {
          const isJoined = joined.has(challenge.id);
          const isExpanded = expandedId === challenge.id;

          return (
            <CardRoot
              key={challenge.id}
              className={`rounded-2xl border overflow-hidden transition-all hover:shadow-md ${
                isJoined
                  ? "border-glow-purple-400 shadow-sm"
                  : "border-glow-purple-100/50"
              }`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : challenge.id)}
                className="w-full p-5 text-left"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{challenge.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-glow-purple-900">
                        {challenge.title}
                      </h3>
                      {isJoined && (
                        <ChipRoot size="sm" variant="primary" className="bg-glow-purple-700 text-white text-[10px]">
                          Joined
                        </ChipRoot>
                      )}
                    </div>
                    <p className="text-sm text-glow-warm-gray mt-1">
                      {challenge.description}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1 text-xs text-glow-warm-gray">
                        <Clock className="w-3 h-3" /> {challenge.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-glow-warm-gray">
                        <Users className="w-3 h-3" /> {challenge.participants + (isJoined ? 1 : 0)} joined
                      </span>
                      <ChipRoot
                        size="sm"
                        variant="soft"
                        className={`text-xs ${
                          challenge.difficulty === "gentle"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {challenge.difficulty}
                      </ChipRoot>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-glow-purple-300 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-0">
                  <div className="border-t border-glow-purple-100 pt-4">
                    {isJoined && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-glow-warm-gray mb-1">
                          <span>Progress</span>
                          <span>Day 1 of {challenge.duration.split(" ")[0]}</span>
                        </div>
                        <ProgressBarRoot value={14} className="w-full">
                          <ProgressBarTrack className="h-2 bg-glow-purple-100 rounded-full overflow-hidden">
                            <ProgressBarFill className="h-full bg-glow-purple-700 rounded-full" />
                          </ProgressBarTrack>
                        </ProgressBarRoot>
                      </div>
                    )}
                    <ButtonRoot
                      variant="primary"
                      onPress={() => toggleJoin(challenge.id)}
                      className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isJoined
                          ? "bg-glow-purple-100 text-glow-purple-700 hover:bg-glow-purple-200"
                          : "bg-glow-purple-700 text-white hover:bg-glow-purple-500"
                      }`}
                    >
                      {isJoined ? "Leave Challenge" : "Join Challenge"}
                    </ButtonRoot>
                  </div>
                </div>
              )}
            </CardRoot>
          );
        })}
      </div>
    </div>
  );
}
