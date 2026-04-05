"use client";

import { useState } from "react";
import { JOY_DIMENSIONS, MOOD_OPTIONS } from "@/lib/constants";
import { CardRoot, ButtonRoot } from "@heroui/react";

interface DimensionScore {
  id: string;
  score: number;
}

export default function JoyScorePage() {
  const [todayScores, setTodayScores] = useState<DimensionScore[]>([]);
  const [currentDimension, setCurrentDimension] = useState(0);
  const [isLogging, setIsLogging] = useState(false);

  const mockWeekly = [
    { day: "Mon", scores: [3, 4, 3, 2] },
    { day: "Tue", scores: [4, 3, 4, 3] },
    { day: "Wed", scores: [2, 2, 3, 3] },
    { day: "Thu", scores: [4, 4, 4, 4] },
    { day: "Fri", scores: [5, 4, 3, 4] },
    { day: "Sat", scores: [3, 3, 4, 3] },
  ];

  const weeklyAvg = todayScores.length === 4
    ? ((mockWeekly.reduce((s, d) => s + d.scores.reduce((a, b) => a + b, 0) / 4, 0) + todayScores.reduce((s, d) => s + d.score, 0) / 4) / (mockWeekly.length + 1)).toFixed(1)
    : (mockWeekly.reduce((s, d) => s + d.scores.reduce((a, b) => a + b, 0) / 4, 0) / mockWeekly.length).toFixed(1);

  const logScore = (score: number) => {
    const dim = JOY_DIMENSIONS[currentDimension];
    setTodayScores((prev) => [...prev, { id: dim.id, score }]);
    if (currentDimension < JOY_DIMENSIONS.length - 1) {
      setCurrentDimension((prev) => prev + 1);
    } else {
      setIsLogging(false);
    }
  };

  const maxBarHeight = 80;

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          Joy Score
        </h1>
        <p className="text-sm text-own-gray mt-1">
          Zero-data mode. Feeling-based. No calories, no weight.
        </p>
      </div>

      {/* Score Overview */}
      <CardRoot className="bg-gradient-to-br from-own-indigo to-own-teal rounded-2xl p-6 text-white mb-6 border-none shadow-lg">
        <p className="text-white/70 text-sm">Weekly Average</p>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-5xl font-bold">{weeklyAvg}</span>
          <span className="text-white/70 text-sm mb-2">/ 5.0</span>
        </div>
        <p className="text-white/60 text-xs mt-2">
          Measured across 4 dimensions: calm, enjoyment, body connection, self-kindness.
        </p>
      </CardRoot>

      {/* 4 Dimensions Display */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {JOY_DIMENSIONS.map((dim, i) => {
          const todayScore = todayScores.find((s) => s.id === dim.id);
          return (
            <CardRoot key={dim.id} className="rounded-xl p-3 border border-own-warm text-center">
              <span className="text-2xl">{dim.emoji}</span>
              <p className="text-[10px] text-own-gray mt-1">{dim.label}</p>
              {todayScore && (
                <p className="text-lg font-bold text-own-teal mt-1">{todayScore.score}</p>
              )}
            </CardRoot>
          );
        })}
      </div>

      {/* Today's Check-in */}
      {todayScores.length < 4 ? (
        !isLogging ? (
          <CardRoot className="rounded-2xl p-5 border border-own-warm mb-6 shadow-sm">
            <h2 className="font-semibold text-own-deep mb-2">Post-Session Check-in</h2>
            <p className="text-sm text-own-gray mb-4">
              Rate how you feel across 4 dimensions. No right answers.
            </p>
            <ButtonRoot
              variant="primary"
              onPress={() => setIsLogging(true)}
              className="w-full bg-own-teal text-white py-2.5 rounded-xl text-sm font-medium hover:bg-own-teal-light"
            >
              Start Check-in
            </ButtonRoot>
          </CardRoot>
        ) : (
          <CardRoot className="rounded-2xl p-5 border border-own-teal mb-6 shadow-lg animate-fade-in-up">
            <div className="text-center mb-4">
              <span className="text-3xl">{JOY_DIMENSIONS[currentDimension].emoji}</span>
              <h2 className="font-semibold text-own-deep mt-2">
                {JOY_DIMENSIONS[currentDimension].label}
              </h2>
              <p className="text-sm text-own-gray mt-1">
                {JOY_DIMENSIONS[currentDimension].description}
              </p>
              <p className="text-xs text-own-gray-light mt-1">
                {currentDimension + 1} of {JOY_DIMENSIONS.length}
              </p>
            </div>
            <div className="flex justify-between">
              {MOOD_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => logScore(option.value)}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-own-sand transition-colors min-w-[48px] min-h-[48px]"
                >
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-[10px] text-own-gray">{option.value}</span>
                </button>
              ))}
            </div>
          </CardRoot>
        )
      ) : (
        <CardRoot className="bg-own-teal-muted rounded-2xl p-5 mb-6 text-center border-none animate-fade-in-up">
          <span className="text-3xl">✨</span>
          <p className="text-sm text-own-deep font-medium mt-2">Today&apos;s Joy Score logged!</p>
          <div className="flex justify-center gap-3 mt-3">
            {todayScores.map((s) => {
              const dim = JOY_DIMENSIONS.find((d) => d.id === s.id);
              return (
                <div key={s.id} className="text-center">
                  <span className="text-lg">{dim?.emoji}</span>
                  <p className="text-sm font-bold text-own-teal">{s.score}</p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-own-gray mt-2">
            Avg: {(todayScores.reduce((s, d) => s + d.score, 0) / todayScores.length).toFixed(1)} / 5.0
          </p>
        </CardRoot>
      )}

      {/* Weekly Chart */}
      <CardRoot className="rounded-2xl p-5 border border-own-warm mb-6 shadow-sm">
        <h2 className="font-semibold text-own-deep mb-4">This Week</h2>
        <div className="flex items-end justify-between gap-2 h-28">
          {[...mockWeekly, ...(todayScores.length === 4 ? [{ day: "Today", scores: todayScores.map(s => s.score) }] : [])].map((entry, i) => {
            const avg = entry.scores.reduce((a, b) => a + b, 0) / entry.scores.length;
            return (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-xs">{avg >= 4 ? "😊" : avg >= 3 ? "😌" : "😔"}</span>
                <div
                  className="w-full bg-gradient-to-t from-own-teal to-own-teal-light rounded-t-lg transition-all duration-500"
                  style={{ height: `${(avg / 5) * maxBarHeight}px` }}
                />
                <span className="text-[10px] text-own-gray">{entry.day}</span>
              </div>
            );
          })}
        </div>
      </CardRoot>

      {/* Insights */}
      <CardRoot className="rounded-2xl p-5 border border-own-warm shadow-sm">
        <h2 className="font-semibold text-own-deep mb-3">Insights</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lg">🧗</span>
            <div>
              <p className="text-sm font-medium text-own-deep">Body connection improving</p>
              <p className="text-xs text-own-gray">Your &ldquo;connected to body&rdquo; score rose 0.6 this week.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">💜</span>
            <div>
              <p className="text-sm font-medium text-own-deep">Self-kindness trend</p>
              <p className="text-xs text-own-gray">Days you used Confidence Shield scored 0.8 higher in self-kindness.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">🌙</span>
            <div>
              <p className="text-sm font-medium text-own-deep">Gentle reminder</p>
              <p className="text-xs text-own-gray">Your score doesn&apos;t define you. It helps you understand you.</p>
            </div>
          </div>
        </div>
      </CardRoot>
    </div>
  );
}
