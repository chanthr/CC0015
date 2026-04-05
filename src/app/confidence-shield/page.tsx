"use client";

import { useState } from "react";
import { CONFIDENCE_SHIELDS } from "@/lib/constants";
import { CardRoot, ButtonRoot, ChipRoot } from "@heroui/react";

const categories = ["all", "comparison", "body-image", "rest-guilt", "overexertion", "anxiety", "self-doubt"];

export default function ConfidenceShieldPage() {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [usedShields, setUsedShields] = useState<Set<string>>(new Set());

  const filtered = filter === "all"
    ? CONFIDENCE_SHIELDS
    : CONFIDENCE_SHIELDS.filter((s) => s.category === filter);

  const markUsed = (id: string) => {
    setUsedShields((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setExpandedId(null);
  };

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          Confidence Shield
        </h1>
        <p className="text-sm text-own-gray mt-1">
          Catch the thought before it catches you.
        </p>
        <p className="text-xs text-own-gray-light mt-1">
          Based on CBT — Thought → Reframe → Action
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              filter === cat
                ? "bg-own-teal text-white"
                : "bg-own-white border border-own-warm text-own-gray hover:border-own-teal-light"
            }`}
          >
            {cat === "all" ? "All" : cat.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Shield Cards */}
      <div className="space-y-3">
        {filtered.map((shield) => {
          const isExpanded = expandedId === shield.id;
          const isUsed = usedShields.has(shield.id);

          return (
            <CardRoot
              key={shield.id}
              className={`rounded-2xl border transition-all ${
                isUsed
                  ? "border-own-teal-light bg-own-teal-muted/30"
                  : isExpanded
                  ? "border-own-teal shadow-lg"
                  : "border-own-warm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : shield.id)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{shield.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm text-own-gray italic">&ldquo;{shield.thought}&rdquo;</p>
                    {isUsed && (
                      <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-[10px] mt-1">
                        Used today ✓
                      </ChipRoot>
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 animate-fade-in-up">
                  <div className="border-t border-own-warm pt-3 space-y-3">
                    <div>
                      <p className="text-xs font-medium text-own-teal uppercase tracking-wide">Kinder Reframe</p>
                      <p className="text-sm text-own-deep mt-1">{shield.reframe}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-own-gold uppercase tracking-wide">Tiny Action</p>
                      <p className="text-sm text-own-deep mt-1">{shield.action}</p>
                    </div>
                    {!isUsed && (
                      <ButtonRoot
                        variant="primary"
                        onPress={() => markUsed(shield.id)}
                        className="w-full bg-own-teal text-white py-2.5 rounded-xl text-sm font-medium hover:bg-own-teal-light"
                      >
                        I used this shield 🛡️
                      </ButtonRoot>
                    )}
                  </div>
                </div>
              )}
            </CardRoot>
          );
        })}
      </div>

      {usedShields.size > 0 && (
        <div className="mt-6 text-center animate-fade-in-up">
          <p className="text-sm text-own-teal font-medium">
            🛡️ {usedShields.size} shield{usedShields.size > 1 ? "s" : ""} used today — you're building resilience!
          </p>
        </div>
      )}
    </div>
  );
}
