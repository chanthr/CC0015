"use client";

import { useState } from "react";
import { JOY_SPARKS } from "@/lib/constants";
import { Check } from "lucide-react";
import { CardRoot, CardContent, ButtonRoot, ChipRoot } from "@heroui/react";

const categories = ["all", "creative", "music", "mindfulness", "gratitude", "movement", "affirmation"];

export default function JoySparksPage() {
  const [filter, setFilter] = useState("all");
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [activeSpark, setActiveSpark] = useState<string | null>(null);

  const filtered = filter === "all"
    ? JOY_SPARKS
    : JOY_SPARKS.filter((s) => s.category === filter);

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setActiveSpark(null);
  };

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Joy Sparks
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          Quick activities to brighten your moment.
        </p>
      </div>

      {/* Category Filter - Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {categories.map((cat) => (
          <ButtonRoot
            key={cat}
            variant={filter === cat ? "primary" : "outline"}
            onPress={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              filter === cat
                ? "bg-glow-purple-700 text-white"
                : "bg-glow-white border border-glow-purple-200 text-glow-warm-gray hover:border-glow-purple-400"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </ButtonRoot>
        ))}
      </div>

      {/* Sparks List */}
      <div className="space-y-3">
        {filtered.map((spark) => {
          const isDone = completed.has(spark.id);
          const isActive = activeSpark === spark.id;

          return (
            <CardRoot
              key={spark.id}
              className={`rounded-2xl border transition-all ${
                isDone
                  ? "border-green-300 bg-green-50/50"
                  : isActive
                  ? "border-glow-purple-400 shadow-lg"
                  : "border-glow-purple-100/50 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setActiveSpark(isActive ? null : spark.id)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{spark.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold text-sm ${isDone ? "line-through text-glow-warm-gray" : "text-glow-purple-900"}`}>
                        {spark.title}
                      </h3>
                      {isDone && <Check className="w-4 h-4 text-green-500" />}
                    </div>
                    <p className="text-xs text-glow-warm-gray mt-1">{spark.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700 text-[10px]">
                        {spark.duration}
                      </ChipRoot>
                      <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700 text-[10px]">
                        {spark.category}
                      </ChipRoot>
                    </div>
                  </div>
                </div>
              </button>

              {isActive && !isDone && (
                <div className="px-4 pb-4">
                  <ButtonRoot
                    variant="primary"
                    onPress={() => toggleComplete(spark.id)}
                    className="w-full bg-glow-purple-700 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-glow-purple-500"
                  >
                    Mark as Done ✓
                  </ButtonRoot>
                </div>
              )}
            </CardRoot>
          );
        })}
      </div>

      {/* Completed count */}
      {completed.size > 0 && (
        <div className="mt-6 text-center animate-fade-in-up">
          <CardRoot className="inline-block rounded-full px-6 py-3 bg-glow-purple-100 border-none">
            <p className="text-sm text-glow-purple-700 font-medium">
              🎉 {completed.size} spark{completed.size > 1 ? "s" : ""} completed today!
            </p>
          </CardRoot>
        </div>
      )}
    </div>
  );
}
