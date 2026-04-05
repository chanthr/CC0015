"use client";

import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-glow-cream pb-20">
      {children}
      <BottomNav />
    </div>
  );
}
