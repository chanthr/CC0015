"use client";

import { useState } from "react";
import { MOOD_OPTIONS } from "@/lib/constants";
import { CardRoot, CardContent, ButtonRoot, ProgressBarRoot, ProgressBarTrack, ProgressBarFill } from "@heroui/react";

interface MoodEntry {
  date: string;
  value: number;
  emoji: string;
  label: string;
}

const mockHistory: MoodEntry[] = [
  { date: "Mon", value: 3, emoji: "😐", label: "Neutral" },
  { date: "Tue", value: 4, emoji: "😌", label: "Calm" },
  { date: "Wed", value: 2, emoji: "😔", label: "Low" },
  { date: "Thu", value: 4, emoji: "😌", label: "Calm" },
  { date: "Fri", value: 5, emoji: "😊", label: "Happy" },
  { date: "Sat", value: 3, emoji: "😐", label: "Neutral" },
];

export default function JoyScorePage() {
  const [todayMood, setTodayMood] = useState<number | null>(null);
  const [history, setHistory] = useState<MoodEntry[]>(mockHistory);

  const avgScore =
    history.length > 0
      ? (history.reduce((s, e) => s + e.value, 0) / history.length).toFixed(1)
      : "—";

  const logMood = (option: (typeof MOOD_OPTIONS)[number]) => {
    setTodayMood(option.value);
    setHistory((prev) => [
      ...prev,
      { date: "Today", value: option.value, emoji: option.emoji, label: option.label },
    ]);
  };

  const maxBarHeight = 80;

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Joy Score
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          Track your wellness, your pace, no judgment.
        </p>
      </div>

      {/* Score Overview */}
      <CardRoot className="bg-gradient-to-br from-glow-purple-700 to-glow-purple-500 rounded-2xl p-6 text-white mb-6 border-none shadow-lg">
        <p className="text-white/70 text-sm">Weekly Average</p>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-5xl font-bold">{avgScore}</span>
          <span className="text-white/70 text-sm mb-2">/ 5.0</span>
        </div>
        <p className="text-white/60 text-xs mt-2">
          {Number(avgScore) >= 4
            ? "You're doing great! Keep nurturing yourself."
            : Number(avgScore) >= 3
            ? "Steady vibes. Every day is a new spark."
            : "Tough week? That's okay. Be gentle with yourself."}
        </p>
      </CardRoot>

      {/* Today's Mood */}
      {todayMood === null ? (
        <CardRoot className="rounded-2xl p-5 border border-glow-purple-100/50 mb-6 shadow-sm">
          <h2 className="font-semibold text-glow-purple-900 mb-4">
            How are you feeling today?
          </h2>
          <div className="flex justify-between">
            {MOOD_OPTIONS.map((option) => (
              <ButtonRoot
                key={option.value}
                variant="ghost"
                onPress={() => logMood(option)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-glow-purple-100 transition-colors"
              >
                <span className="text-3xl">{option.emoji}</span>
                <span className="text-[10px] text-glow-warm-gray">{option.label}</span>
              </ButtonRoot>
            ))}
          </div>
        </CardRoot>
      ) : (
        <CardRoot className="bg-glow-purple-100 rounded-2xl p-5 mb-6 text-center border-none animate-fade-in-up">
          <span className="text-3xl">
            {MOOD_OPTIONS.find((m) => m.value === todayMood)?.emoji}
          </span>
          <p className="text-sm text-glow-purple-900 font-medium mt-2">
            Today: {MOOD_OPTIONS.find((m) => m.value === todayMood)?.label}
          </p>
          <p className="text-xs text-glow-warm-gray mt-1">Logged! You can update tomorrow.</p>
        </CardRoot>
      )}

      {/* Weekly Chart */}
      <CardRoot className="rounded-2xl p-5 border border-glow-purple-100/50 mb-6 shadow-sm">
        <h2 className="font-semibold text-glow-purple-900 mb-4">This Week</h2>
        <div className="flex items-end justify-between gap-2 h-28">
          {history.slice(-7).map((entry, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-xs">{entry.emoji}</span>
              <div
                className="w-full bg-gradient-to-t from-glow-purple-500 to-glow-purple-300 rounded-t-lg transition-all duration-500"
                style={{ height: `${(entry.value / 5) * maxBarHeight}px` }}
              />
              <span className="text-[10px] text-glow-warm-gray">{entry.date}</span>
            </div>
          ))}
        </div>
      </CardRoot>

      {/* Insights */}
      <CardRoot className="rounded-2xl p-5 border border-glow-purple-100/50 shadow-sm">
        <h2 className="font-semibold text-glow-purple-900 mb-3">Insights</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-lg">🌟</span>
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Best day: Friday</p>
              <p className="text-xs text-glow-warm-gray">You tend to feel happiest at the end of the week.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Joy Spark connection</p>
              <p className="text-xs text-glow-warm-gray">Days you did a Joy Spark scored 0.8 higher on average.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">💜</span>
            <div>
              <p className="text-sm font-medium text-glow-purple-900">Gentle reminder</p>
              <p className="text-xs text-glow-warm-gray">Your score doesn&apos;t define you. Every day is a fresh start.</p>
            </div>
          </div>
        </div>
      </CardRoot>
    </div>
  );
}
