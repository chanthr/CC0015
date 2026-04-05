"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Target, TrendingUp, MessageCircle, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const mainItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/joy-sparks", icon: Sparkles, label: "Sparks" },
  { href: "/challenges", icon: Target, label: "Challenges" },
  { href: "/joy-score", icon: TrendingUp, label: "Score" },
  { href: "/chat", icon: MessageCircle, label: "Glow AI" },
];

const moreItems = [
  { href: "/community", label: "Community 🤝" },
  { href: "/glow-pod", label: "Glow Pod 🔮" },
  { href: "/settings", label: "Settings ⚙️" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const isMoreActive = moreItems.some((item) => pathname === item.href);

  return (
    <>
      {/* More menu overlay */}
      {showMore && (
        <div className="fixed inset-0 z-40" onClick={() => setShowMore(false)}>
          <div
            className="absolute bottom-20 right-4 bg-glow-white rounded-2xl shadow-lg border border-glow-purple-100 overflow-hidden min-w-[180px]"
            onClick={(e) => e.stopPropagation()}
          >
            {moreItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowMore(false)}
                className={`block px-4 py-3 text-sm border-b border-glow-purple-100/30 last:border-0 transition-colors ${
                  pathname === item.href
                    ? "bg-glow-purple-100 text-glow-purple-700 font-medium"
                    : "text-glow-purple-900 hover:bg-glow-purple-100/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-glow-white/90 backdrop-blur-md border-t border-glow-purple-100 safe-area-bottom">
        <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-1">
          {mainItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[52px] ${
                  isActive
                    ? "text-glow-purple-700"
                    : "text-glow-warm-gray/60 hover:text-glow-warm-gray"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : ""}`} />
                <span className="text-[10px] font-medium leading-none">{label}</span>
              </Link>
            );
          })}
          {/* More button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[52px] ${
              isMoreActive || showMore
                ? "text-glow-purple-700"
                : "text-glow-warm-gray/60 hover:text-glow-warm-gray"
            }`}
          >
            <MoreHorizontal className={`w-5 h-5 ${isMoreActive ? "stroke-[2.5px]" : ""}`} />
            <span className="text-[10px] font-medium leading-none">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
