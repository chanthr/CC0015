"use client";

import { useState } from "react";
import { Activity, Vibrate } from "lucide-react";
import { CardRoot, ButtonRoot, ChipRoot } from "@heroui/react";
import { CALMGRIP_MODES } from "@/lib/constants";

export default function CalmGripPage() {
  const [isConnected, setIsConnected] = useState(true);
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const [breathCount, setBreathCount] = useState(0);

  const startMode = (modeId: string) => {
    setActiveMode(modeId);
    setBreathCount(0);
  };

  const completeBreath = () => {
    setBreathCount((prev) => {
      if (prev >= 2) {
        setActiveMode(null);
        return 0;
      }
      return prev + 1;
    });
  };

  const activeModeData = CALMGRIP_MODES.find((m) => m.id === activeMode);

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          CalmGrip Band
        </h1>
        <p className="text-sm text-own-gray mt-1">
          Detects anxiety. Responds with calm.
        </p>
      </div>

      {/* Connection Status */}
      <CardRoot
        className={`rounded-2xl p-6 mb-6 transition-all duration-500 border-none shadow-lg ${
          isConnected
            ? "bg-gradient-to-br from-own-indigo to-own-teal text-white"
            : "bg-own-white border border-own-warm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm ${isConnected ? "text-white/70" : "text-own-gray"}`}>CalmGrip Band</p>
            <p className={`text-lg font-semibold ${isConnected ? "text-white" : "text-own-deep"}`}>
              {isConnected ? "Connected" : "Disconnected"}
            </p>
            {isConnected && (
              <p className="text-white/60 text-xs mt-1">Battery: 78% · Last squeeze: 2h ago</p>
            )}
          </div>
          <ButtonRoot
            isIconOnly
            onPress={() => setIsConnected(!isConnected)}
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              isConnected ? "bg-white/20 hover:bg-white/30" : "bg-own-sand hover:bg-own-warm"
            }`}
          >
            <Activity className={`w-6 h-6 ${isConnected ? "text-white" : "text-own-indigo"}`} />
          </ButtonRoot>
        </div>
      </CardRoot>

      {/* Active Mode Visualization */}
      {activeMode && activeModeData && (
        <CardRoot className="rounded-2xl p-6 mb-6 bg-own-sand border border-own-warm animate-fade-in-up">
          <div className="text-center">
            <span className="text-4xl">{activeModeData.emoji}</span>
            <h3 className="font-semibold text-own-deep mt-2">{activeModeData.label} Active</h3>
            <p className="text-sm text-own-gray mt-1">{activeModeData.vibration}</p>

            {/* Breathing visualization */}
            <div className="my-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-own-teal/20 flex items-center justify-center animate-breathe">
                <div className="w-16 h-16 rounded-full bg-own-teal/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-own-teal" />
                </div>
              </div>
            </div>

            <p className="text-sm text-own-deep font-medium">
              Breath {breathCount + 1} of 3
            </p>
            <p className="text-xs text-own-gray mt-1">Inhale 4s · Hold 2s · Exhale 6s</p>

            <div className="flex gap-2 mt-4">
              <ButtonRoot
                variant="primary"
                onPress={completeBreath}
                className="flex-1 bg-own-teal text-white py-2.5 rounded-xl text-sm font-medium"
              >
                {breathCount >= 2 ? "Complete ✓" : "Next Breath"}
              </ButtonRoot>
              <ButtonRoot
                variant="outline"
                onPress={() => setActiveMode(null)}
                className="flex-1 border-own-warm text-own-gray py-2.5 rounded-xl text-sm"
              >
                Stop
              </ButtonRoot>
            </div>
          </div>
        </CardRoot>
      )}

      {/* Anxiety Dashboard Mini */}
      {isConnected && !activeMode && (
        <CardRoot className="rounded-2xl p-5 border border-own-warm mb-6 shadow-sm">
          <h2 className="font-semibold text-own-deep mb-3">Anxiety Dashboard</h2>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-2xl font-bold text-own-teal">↓ 23%</p>
              <p className="text-[10px] text-own-gray mt-1">Squeeze intensity this week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-own-indigo">5</p>
              <p className="text-[10px] text-own-gray mt-1">Interventions used today</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-own-gold">7.2h</p>
              <p className="text-[10px] text-own-gray mt-1">Avg sleep this week</p>
            </div>
          </div>
        </CardRoot>
      )}

      {/* 4 Modes */}
      <div className="mb-6">
        <h2 className="font-semibold text-own-deep mb-3">Modes</h2>
        <div className="space-y-3">
          {CALMGRIP_MODES.map((mode) => (
            <CardRoot
              key={mode.id}
              className={`rounded-xl border transition-all ${
                activeMode === mode.id
                  ? "border-own-teal bg-own-teal-muted/30 shadow-sm"
                  : "border-own-warm hover:border-own-teal-light"
              }`}
            >
              <button
                onClick={() => isConnected && !activeMode && startMode(mode.id)}
                className="w-full p-4 text-left"
                disabled={!isConnected || (!!activeMode && activeMode !== mode.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{mode.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-own-deep">{mode.label}</p>
                    <p className="text-xs text-own-gray mt-0.5">{mode.description}</p>
                    <p className="text-[10px] text-own-gray-light mt-1">When: {mode.when}</p>
                  </div>
                  {!activeMode && isConnected && (
                    <Vibrate className="w-4 h-4 text-own-teal-light" />
                  )}
                </div>
              </button>
            </CardRoot>
          ))}
        </div>
      </div>
    </div>
  );
}
