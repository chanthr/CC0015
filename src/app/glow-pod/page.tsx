"use client";

import { useState } from "react";
import { Power, Sun, Moon, Cloud, Waves, Trees, Flame, Snowflake, Volume2, VolumeX } from "lucide-react";
import { CardRoot, ButtonRoot } from "@heroui/react";

const LIGHT_PRESETS = [
  { id: "warm", label: "Warm Glow", color: "#F0C75E", icon: Sun },
  { id: "calm", label: "Calm Blue", color: "#7EC8E3", icon: Moon },
  { id: "nature", label: "Forest", color: "#7BC47F", icon: Trees },
  { id: "sunset", label: "Sunset", color: "#E8845C", icon: Flame },
  { id: "ocean", label: "Ocean", color: "#5B8FB9", icon: Waves },
  { id: "snow", label: "Frost", color: "#D8E8F0", icon: Snowflake },
];

const AMBIENT_SOUNDS = [
  { id: "rain", label: "Rain", emoji: "🌧️" },
  { id: "waves", label: "Ocean Waves", emoji: "🌊" },
  { id: "forest", label: "Forest", emoji: "🌲" },
  { id: "fire", label: "Fireplace", emoji: "🔥" },
  { id: "wind", label: "Gentle Wind", emoji: "🍃" },
  { id: "none", label: "Silence", emoji: "🤫" },
];

const PROJECTION_MODES = [
  { id: "breathe", label: "Breathing Guide", description: "Gentle pulsing light synced with breathing", emoji: "🌬️" },
  { id: "aurora", label: "Aurora Flow", description: "Flowing northern lights effect", emoji: "🌌" },
  { id: "stars", label: "Starry Night", description: "Calm starfield on your ceiling", emoji: "✨" },
  { id: "waves", label: "Wave Motion", description: "Soft ocean wave patterns", emoji: "🌊" },
];

export default function GlowPodPage() {
  const [isOn, setIsOn] = useState(false);
  const [selectedLight, setSelectedLight] = useState("warm");
  const [selectedSound, setSelectedSound] = useState("none");
  const [selectedMode, setSelectedMode] = useState("breathe");
  const [brightness, setBrightness] = useState(70);
  const [soundOn, setSoundOn] = useState(false);

  const activeLight = LIGHT_PRESETS.find((l) => l.id === selectedLight)!;

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Glow Pod
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          Control your room environment.
        </p>
      </div>

      {/* Power & Status */}
      <CardRoot
        className={`rounded-2xl p-6 mb-6 transition-all duration-500 border-none shadow-lg ${
          isOn
            ? "bg-gradient-to-br from-glow-purple-700 to-glow-purple-500 text-white"
            : "bg-glow-white border border-glow-purple-100"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm ${isOn ? "text-white/70" : "text-glow-warm-gray"}`}>
              Glow Pod
            </p>
            <p className={`text-lg font-semibold ${isOn ? "text-white" : "text-glow-purple-900"}`}>
              {isOn ? "Connected & Active" : "Standby"}
            </p>
          </div>
          <ButtonRoot
            isIconOnly
            onPress={() => setIsOn(!isOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isOn
                ? "bg-white/20 hover:bg-white/30"
                : "bg-glow-purple-100 hover:bg-glow-purple-200"
            }`}
          >
            <Power className={`w-6 h-6 ${isOn ? "text-white" : "text-glow-purple-700"}`} />
          </ButtonRoot>
        </div>

        {isOn && (
          <div className="mt-4 flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full animate-pulse"
              style={{ backgroundColor: activeLight.color }}
            />
            <span className="text-white/80 text-sm">
              {activeLight.label} &middot; {brightness}% brightness
            </span>
          </div>
        )}
      </CardRoot>

      {!isOn ? (
        <div className="text-center py-12">
          <p className="text-glow-warm-gray">Turn on your Glow Pod to control settings</p>
        </div>
      ) : (
        <>
          {/* Room Preview */}
          <div
            className="rounded-2xl h-40 mb-6 flex items-center justify-center transition-all duration-700 relative overflow-hidden"
            style={{
              backgroundColor: activeLight.color + "15",
              boxShadow: `inset 0 0 60px ${activeLight.color}40`,
            }}
          >
            <div
              className="absolute inset-0 opacity-20 animate-pulse"
              style={{ background: `radial-gradient(circle, ${activeLight.color}60 0%, transparent 70%)` }}
            />
            <p className="text-sm text-glow-purple-900/60 z-10 font-medium">
              Room Preview
            </p>
          </div>

          {/* Light Presets */}
          <div className="mb-6">
            <h2 className="font-semibold text-glow-purple-900 mb-3">Light Preset</h2>
            <div className="grid grid-cols-3 gap-2">
              {LIGHT_PRESETS.map((preset) => {
                const Icon = preset.icon;
                const isActive = selectedLight === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedLight(preset.id)}
                    className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 min-h-[72px] ${
                      isActive
                        ? "bg-glow-purple-700 text-white shadow-md"
                        : "bg-glow-white border border-glow-purple-100 hover:border-glow-purple-300"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-glow-purple-500"}`} />
                    <span className={`text-xs ${isActive ? "text-white" : "text-glow-purple-900"}`}>
                      {preset.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brightness */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-glow-purple-900">Brightness</h2>
              <span className="text-sm text-glow-warm-gray">{brightness}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full accent-glow-purple-700"
            />
          </div>

          {/* Projection Mode */}
          <div className="mb-6">
            <h2 className="font-semibold text-glow-purple-900 mb-3">Projection Mode</h2>
            <div className="space-y-2">
              {PROJECTION_MODES.map((mode) => (
                <CardRoot
                  key={mode.id}
                  className={`p-3 rounded-xl cursor-pointer transition-all ${
                    selectedMode === mode.id
                      ? "bg-glow-purple-100 border-2 border-glow-purple-400 shadow-sm"
                      : "bg-glow-white border border-glow-purple-100/50 hover:border-glow-purple-300"
                  }`}
                  onClick={() => setSelectedMode(mode.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{mode.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-glow-purple-900">{mode.label}</p>
                      <p className="text-xs text-glow-warm-gray">{mode.description}</p>
                    </div>
                  </div>
                </CardRoot>
              ))}
            </div>
          </div>

          {/* Ambient Sound */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-glow-purple-900">Ambient Sound</h2>
              <button
                onClick={() => setSoundOn(!soundOn)}
                className="text-glow-purple-700"
              >
                {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {AMBIENT_SOUNDS.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => { setSelectedSound(sound.id); setSoundOn(sound.id !== "none"); }}
                  className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 min-h-[72px] ${
                    selectedSound === sound.id
                      ? "bg-glow-purple-700 text-white"
                      : "bg-glow-white border border-glow-purple-100 hover:border-glow-purple-300"
                  }`}
                >
                  <span className="text-lg">{sound.emoji}</span>
                  <span className={`text-xs mt-1 ${selectedSound === sound.id ? "text-white" : "text-glow-purple-900"}`}>
                    {sound.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
