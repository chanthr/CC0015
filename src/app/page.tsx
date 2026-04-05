"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, TrendingUp, MessageCircle, ChevronRight, Settings, Moon, Activity } from "lucide-react";
import { CardRoot, CardContent, ButtonRoot, ChipRoot } from "@heroui/react";
import { CONFIDENCE_SHIELDS, LADDER_MILESTONES, PROGRAMME_WEEKS } from "@/lib/constants";

export default function HomePage() {
  const [greeting, setGreeting] = useState("Welcome");
  const [currentWeek] = useState(2);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const todayShield = CONFIDENCE_SHIELDS[Math.floor(Math.random() * CONFIDENCE_SHIELDS.length)];
  const currentProgramme = PROGRAMME_WEEKS[currentWeek - 1];

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-sm text-own-gray">{greeting}</p>
          <h1 className="font-serif text-3xl font-bold text-own-deep mt-1">
            OwnPace
          </h1>
          <p className="text-xs text-own-gray mt-1">Detect · Interrupt · Guide · Reflect</p>
        </div>
        <Link href="/settings">
          <ButtonRoot variant="outline" isIconOnly className="rounded-full border-own-warm hover:bg-own-sand">
            <Settings className="w-5 h-5 text-own-indigo" />
          </ButtonRoot>
        </Link>
      </div>

      {/* CalmGrip Status */}
      <Link href="/calmgrip" className="block mb-6">
        <CardRoot className="bg-gradient-to-br from-own-indigo to-own-teal rounded-2xl p-5 text-white border-none shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">CalmGrip Band</p>
              <p className="text-lg font-semibold mt-1">Connected · Calm Entry</p>
              <p className="text-white/60 text-xs mt-1">Last squeeze: 2h ago · Anxiety trend: ↓ improving</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center animate-breathe">
              <Activity className="w-7 h-7 text-white" />
            </div>
          </div>
        </CardRoot>
      </Link>

      {/* 4-Week Programme Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-lg font-semibold text-own-deep">
            4-Week Reset
          </h2>
          <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-xs">
            Week {currentWeek}
          </ChipRoot>
        </div>
        <CardRoot className="rounded-2xl border border-own-warm shadow-sm">
          <CardContent className="p-5">
            <p className="font-semibold text-own-deep">{currentProgramme.theme}</p>
            <p className="text-sm text-own-gray mt-1">{currentProgramme.goal}</p>
            <div className="flex gap-1 mt-3">
              {PROGRAMME_WEEKS.map((w) => (
                <div
                  key={w.week}
                  className={`flex-1 h-2 rounded-full ${
                    w.week < currentWeek
                      ? "bg-own-teal"
                      : w.week === currentWeek
                      ? "bg-own-teal-light"
                      : "bg-own-warm"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </CardRoot>
      </div>

      {/* Today's Confidence Shield */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-lg font-semibold text-own-deep">
            Today&apos;s Shield
          </h2>
          <Link href="/confidence-shield" className="text-sm text-own-teal flex items-center gap-1">
            All shields <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <CardRoot className="rounded-2xl border border-own-warm shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{todayShield.emoji}</span>
              <div className="flex-1">
                <p className="text-sm text-own-gray italic">&ldquo;{todayShield.thought}&rdquo;</p>
                <p className="text-sm font-medium text-own-deep mt-2">{todayShield.reframe}</p>
                <p className="text-xs text-own-teal mt-2">→ {todayShield.action}</p>
              </div>
            </div>
          </CardContent>
        </CardRoot>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { href: "/confidence-shield", icon: <Shield className="w-6 h-6 text-own-teal" />, label: "Shield", sub: `${CONFIDENCE_SHIELDS.length} cards` },
          { href: "/ladder", icon: <TrendingUp className="w-6 h-6 text-own-gold" />, label: "Ladder", sub: `${LADDER_MILESTONES.length} milestones` },
          { href: "/calmgrip", icon: <span className="text-2xl">🤝</span>, label: "CalmGrip", sub: "4 modes" },
          { href: "/co-regulate", icon: <span className="text-2xl">💜</span>, label: "Co-Regulate", sub: "Trusted support" },
          { href: "/chat", icon: <MessageCircle className="w-6 h-6 text-own-indigo" />, label: "AI Coach", sub: "Talk anytime" },
          { href: "/closing-ritual", icon: <Moon className="w-6 h-6 text-own-lavender" />, label: "Ritual", sub: "8 min wind-down" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <CardRoot className="rounded-2xl p-4 border border-own-warm hover:border-own-teal-light hover:shadow-md transition-all cursor-pointer h-full">
              <div className="mb-2">{item.icon}</div>
              <p className="font-semibold text-sm text-own-deep">{item.label}</p>
              <p className="text-xs text-own-gray mt-0.5">{item.sub}</p>
            </CardRoot>
          </Link>
        ))}
      </div>

      {/* Joy Score Preview */}
      <Link href="/joy-score" className="block">
        <CardRoot className="rounded-2xl p-5 border border-own-warm shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-semibold text-own-deep">Joy Score</h2>
              <p className="text-xs text-own-gray mt-1">Feeling-based · Zero data mode</p>
            </div>
            <div className="flex gap-1">
              {["😌", "😊", "🤲", "💜"].map((e, i) => (
                <span key={i} className="text-lg">{e}</span>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2 mt-3">
            <span className="text-3xl font-bold text-own-teal">3.8</span>
            <span className="text-own-gray text-sm mb-1">/ 5.0 weekly avg</span>
          </div>
        </CardRoot>
      </Link>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning ☀️";
  if (hour < 17) return "Good afternoon 🌤️";
  return "Good evening 🌙";
}
