"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Target, TrendingUp, Users, MessageCircle, ChevronRight, Settings } from "lucide-react";
import { Card, CardRoot, CardContent, CardHeader, CardTitle, Button, ButtonRoot, Chip, ChipRoot } from "@heroui/react";
import { JOY_SPARKS, CHALLENGES } from "@/lib/constants";

export default function HomePage() {
  const [sparkIndex, setSparkIndex] = useState(0);
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    setSparkIndex(Math.floor(Math.random() * JOY_SPARKS.length));
    setGreeting(getGreeting());
  }, []);

  const randomSpark = JOY_SPARKS[sparkIndex];

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-sm text-glow-warm-gray">{greeting}</p>
          <h1 className="font-serif text-3xl font-bold text-glow-purple-900 mt-1">
            Glow & Flow
          </h1>
        </div>
        <Link href="/settings">
          <ButtonRoot variant="outline" isIconOnly className="rounded-full border-glow-purple-100 hover:bg-glow-purple-100">
            <Settings className="w-5 h-5 text-glow-purple-700" />
          </ButtonRoot>
        </Link>
      </div>

      {/* Joy Score Summary Card */}
      <Link href="/joy-score" className="block mb-6">
        <CardRoot className="bg-gradient-to-br from-glow-purple-700 to-glow-purple-500 rounded-2xl p-5 text-white border-none shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Your Joy Score</p>
              <p className="text-4xl font-bold mt-1">3.8</p>
              <p className="text-white/70 text-xs mt-1">+0.5 from last week</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-float">
              <span className="text-3xl">😊</span>
            </div>
          </div>
        </CardRoot>
      </Link>

      {/* Quick Joy Spark */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-lg font-semibold text-glow-purple-900">
            Quick Joy Spark
          </h2>
          <Link href="/joy-sparks" className="text-sm text-glow-purple-700 flex items-center gap-1 hover:text-glow-purple-500 transition-colors">
            See all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <CardRoot className="rounded-2xl shadow-[0_2px_16px_rgba(91,58,140,0.08)] border border-glow-purple-100/50">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{randomSpark.emoji}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-glow-purple-900">{randomSpark.title}</h3>
                <p className="text-sm text-glow-warm-gray mt-1">{randomSpark.description}</p>
                <div className="flex items-center gap-2 mt-3">
                  <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700 text-xs">
                    {randomSpark.duration}
                  </ChipRoot>
                  <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700 text-xs">
                    {randomSpark.category}
                  </ChipRoot>
                </div>
              </div>
            </div>
            <ButtonRoot variant="primary" className="w-full mt-4 bg-glow-purple-700 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-glow-purple-500">
              Start This Spark
            </ButtonRoot>
          </CardContent>
        </CardRoot>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { href: "/joy-sparks", icon: <Sparkles className="w-6 h-6 text-glow-joy-gold" />, label: "Sparks", sub: `${JOY_SPARKS.length} activities` },
          { href: "/challenges", icon: <Target className="w-6 h-6 text-green-500" />, label: "Challenges", sub: `${CHALLENGES.length} active` },
          { href: "/glow-pod", icon: <span className="text-2xl">🔮</span>, label: "Glow Pod", sub: "Room control" },
          { href: "/community", icon: <Users className="w-6 h-6 text-glow-purple-500" />, label: "Community", sub: "Safe space" },
          { href: "/chat", icon: <MessageCircle className="w-6 h-6 text-glow-purple-700" />, label: "Glow AI", sub: "Wellness coach" },
          { href: "/joy-score", icon: <TrendingUp className="w-6 h-6 text-glow-purple-500" />, label: "Joy Score", sub: "Track mood" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <CardRoot className="rounded-2xl p-4 border border-glow-purple-100/50 hover:border-glow-purple-300 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="mb-2">{item.icon}</div>
              <p className="font-semibold text-sm text-glow-purple-900">{item.label}</p>
              <p className="text-xs text-glow-warm-gray mt-0.5">{item.sub}</p>
            </CardRoot>
          </Link>
        ))}
      </div>

      {/* Trending Challenges */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-lg font-semibold text-glow-purple-900">
            Trending Challenges
          </h2>
          <Link href="/challenges" className="text-sm text-glow-purple-700 flex items-center gap-1 hover:text-glow-purple-500 transition-colors">
            See all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-3">
          {CHALLENGES.slice(0, 2).map((c) => (
            <CardRoot key={c.id} className="rounded-xl p-4 border border-glow-purple-100/50 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-glow-purple-900 truncate">{c.title}</p>
                  <p className="text-xs text-glow-warm-gray">{c.participants} joined &middot; {c.duration}</p>
                </div>
                <TrendingUp className="w-4 h-4 text-glow-purple-300 shrink-0" />
              </div>
            </CardRoot>
          ))}
        </div>
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning ☀️";
  if (hour < 17) return "Good afternoon 🌤️";
  return "Good evening 🌙";
}
