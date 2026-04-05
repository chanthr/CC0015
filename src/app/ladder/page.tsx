"use client";

import { useState } from "react";
import { LADDER_MILESTONES, PROGRAMME_WEEKS } from "@/lib/constants";
import { CardRoot, ButtonRoot, ChipRoot } from "@heroui/react";

export default function LadderPage() {
  const [achieved, setAchieved] = useState<Set<string>>(new Set(["1", "2"]));
  const [currentWeek] = useState(2);

  const toggleAchieved = (id: string) => {
    setAchieved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = (achieved.size / LADDER_MILESTONES.length) * 100;

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          OwnPace Ladder
        </h1>
        <p className="text-sm text-own-gray mt-1">
          Behavior-based milestones. Not appearance. Not performance.
        </p>
      </div>

      {/* Progress Overview */}
      <CardRoot className="bg-gradient-to-br from-own-indigo to-own-teal rounded-2xl p-6 text-white mb-6 border-none shadow-lg">
        <p className="text-white/70 text-sm">Your Progress</p>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-4xl font-bold">{achieved.size}</span>
          <span className="text-white/70 text-sm mb-1">/ {LADDER_MILESTONES.length} milestones</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/60 text-xs mt-2">
          Every milestone is about how you FEEL, not how you look.
        </p>
      </CardRoot>

      {/* 4-Week Programme */}
      <div className="mb-6">
        <h2 className="font-semibold text-own-deep mb-3">4-Week Reset Programme</h2>
        <div className="grid grid-cols-2 gap-2">
          {PROGRAMME_WEEKS.map((w) => (
            <CardRoot
              key={w.week}
              className={`p-3 rounded-xl border ${
                w.week === currentWeek
                  ? "border-own-teal bg-own-teal-muted/30 shadow-sm"
                  : w.week < currentWeek
                  ? "border-own-teal-light/30 bg-own-sand/50"
                  : "border-own-warm"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <ChipRoot
                  size="sm"
                  variant="soft"
                  className={`text-[10px] ${
                    w.week === currentWeek
                      ? "bg-own-teal text-white"
                      : w.week < currentWeek
                      ? "bg-own-teal-muted text-own-teal"
                      : "bg-own-warm text-own-gray"
                  }`}
                >
                  Week {w.week}
                </ChipRoot>
                {w.week < currentWeek && <span className="text-xs">✓</span>}
              </div>
              <p className="text-xs font-medium text-own-deep">{w.theme}</p>
              <p className="text-[10px] text-own-gray mt-0.5">{w.goal}</p>
            </CardRoot>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <h2 className="font-semibold text-own-deep mb-3">Milestones</h2>
      <div className="space-y-3">
        {LADDER_MILESTONES.map((milestone) => {
          const isAchieved = achieved.has(milestone.id);
          const isCurrentWeek = milestone.week === currentWeek;

          return (
            <CardRoot
              key={milestone.id}
              className={`rounded-2xl border transition-all ${
                isAchieved
                  ? "border-own-teal bg-own-teal-muted/20"
                  : isCurrentWeek
                  ? "border-own-teal-light/50"
                  : "border-own-warm"
              }`}
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{milestone.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold text-sm ${isAchieved ? "text-own-teal" : "text-own-deep"}`}>
                        {milestone.title}
                      </h3>
                      {isAchieved && (
                        <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-[10px]">
                          ✓ Done
                        </ChipRoot>
                      )}
                    </div>
                    <p className="text-xs text-own-gray mt-1">{milestone.description}</p>
                    <ChipRoot size="sm" variant="soft" className="bg-own-warm text-own-gray text-[10px] mt-2">
                      Week {milestone.week}
                    </ChipRoot>
                  </div>
                </div>
                {!isAchieved && isCurrentWeek && (
                  <ButtonRoot
                    variant="primary"
                    onPress={() => toggleAchieved(milestone.id)}
                    className="w-full mt-3 bg-own-teal text-white py-2 rounded-xl text-sm font-medium hover:bg-own-teal-light"
                  >
                    Mark as achieved
                  </ButtonRoot>
                )}
              </div>
            </CardRoot>
          );
        })}
      </div>
    </div>
  );
}
