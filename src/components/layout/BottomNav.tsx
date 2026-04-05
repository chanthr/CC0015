"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Shield, TrendingUp, MessageCircle, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const mainItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/confidence-shield", icon: Shield, label: "Shield" },
  { href: "/ladder", icon: TrendingUp, label: "Ladder" },
  { href: "/joy-score", icon: Home, label: "Joy Score", useEmoji: "📊" },
  { href: "/chat", icon: MessageCircle, label: "AI Coach" },
];

const moreItems = [
  { href: "/calmgrip", label: "CalmGrip Band 🤝" },
  { href: "/co-regulate", label: "Co-Regulate 💜" },
  { href: "/closing-ritual", label: "Closing Ritual 🌙" },
  { href: "/settings", label: "Settings ⚙️" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const isMoreActive = moreItems.some((item) => pathname === item.href);

  return (
    <>
      {showMore && (
        <div className="fixed inset-0 z-40" onClick={() => setShowMore(false)}>
          <div
            className="absolute bottom-20 right-4 bg-own-white rounded-2xl shadow-lg border border-own-warm overflow-hidden min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {moreItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowMore(false)}
                className={`block px-4 py-3 text-sm border-b border-own-warm/30 last:border-0 transition-colors ${
                  pathname === item.href
                    ? "bg-own-teal-muted text-own-teal font-medium"
                    : "text-own-deep hover:bg-own-sand"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-own-white/90 backdrop-blur-md border-t border-own-warm safe-area-bottom">
        <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-1">
          {mainItems.map(({ href, icon: Icon, label, useEmoji }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[52px] ${
                  isActive
                    ? "text-own-teal"
                    : "text-own-gray-light hover:text-own-gray"
                }`}
              >
                {useEmoji ? (
                  <span className="text-base leading-5">{useEmoji}</span>
                ) : (
                  <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : ""}`} />
                )}
                <span className="text-[10px] font-medium leading-none">{label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[52px] ${
              isMoreActive || showMore
                ? "text-own-teal"
                : "text-own-gray-light hover:text-own-gray"
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
