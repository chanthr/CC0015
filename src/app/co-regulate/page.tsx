"use client";

import { useState } from "react";
import { Heart, Send, Bell } from "lucide-react";
import { CardRoot, ButtonRoot, ChipRoot, AvatarRoot, AvatarFallback } from "@heroui/react";
import { COREGULATE_MESSAGES } from "@/lib/constants";

export default function CoRegulatePage() {
  const [messages] = useState(COREGULATE_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          Co-Regulate
        </h1>
        <p className="text-sm text-own-gray mt-1">
          One trusted person. Safe accountability.
        </p>
      </div>

      {/* Trusted Person Card */}
      <CardRoot className="rounded-2xl p-5 border border-own-warm mb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <AvatarRoot size="lg" className="w-14 h-14">
            <AvatarFallback className="bg-own-teal-muted text-own-teal font-bold text-lg">
              A
            </AvatarFallback>
          </AvatarRoot>
          <div className="flex-1">
            <p className="font-semibold text-own-deep">Alex</p>
            <p className="text-xs text-own-gray">Trusted friend · Connected 3 weeks ago</p>
            <div className="flex gap-2 mt-2">
              <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-[10px]">
                Can send encouragement
              </ChipRoot>
              <ChipRoot size="sm" variant="soft" className="bg-own-teal-muted text-own-teal text-[10px]">
                Bedtime check-in
              </ChipRoot>
            </div>
          </div>
        </div>
      </CardRoot>

      {/* What they can do */}
      <CardRoot className="rounded-2xl p-4 bg-own-sand border-none mb-6">
        <p className="text-xs text-own-deep leading-relaxed">
          💜 <strong>Co-Regulate features:</strong> Your trusted person can send encouragement nudges,
          &ldquo;you can stop now&rdquo; reminders, and bedtime accountability check-ins. They cannot see your data.
        </p>
      </CardRoot>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <ButtonRoot
          variant="outline"
          className="p-3 rounded-xl border border-own-warm text-own-deep text-sm hover:bg-own-sand flex items-center gap-2"
        >
          <Bell className="w-4 h-4 text-own-teal" />
          Request check-in
        </ButtonRoot>
        <ButtonRoot
          variant="outline"
          className="p-3 rounded-xl border border-own-warm text-own-deep text-sm hover:bg-own-sand flex items-center gap-2"
        >
          <Heart className="w-4 h-4 text-own-rose" />
          Send thanks
        </ButtonRoot>
      </div>

      {/* Message Feed */}
      <h2 className="font-semibold text-own-deep mb-3">Recent</h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <CardRoot key={msg.id} className="rounded-2xl p-4 border border-own-warm hover:shadow-sm transition-all">
            <div className="flex items-start gap-3">
              <span className="text-xl">{msg.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-own-deep">{msg.from}</p>
                  <ChipRoot size="sm" variant="soft" className="bg-own-warm text-own-gray text-[10px]">
                    {msg.type}
                  </ChipRoot>
                </div>
                <p className="text-sm text-own-deep mt-1 leading-relaxed">{msg.content}</p>
                <p className="text-[10px] text-own-gray-light mt-2">{msg.timeAgo}</p>
              </div>
            </div>
          </CardRoot>
        ))}
      </div>

      {/* Reply */}
      <div className="mt-6">
        <CardRoot className="rounded-2xl p-4 border border-own-warm shadow-sm">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Send a message to Alex..."
            rows={2}
            className="w-full text-sm text-own-deep placeholder:text-own-gray-light bg-transparent resize-none focus:outline-none"
          />
          <div className="flex justify-end mt-2">
            <ButtonRoot
              variant="primary"
              isDisabled={!newMessage.trim()}
              className="flex items-center gap-1.5 bg-own-teal text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-own-teal-light disabled:opacity-40"
            >
              <Send className="w-3 h-3" /> Send
            </ButtonRoot>
          </div>
        </CardRoot>
      </div>
    </div>
  );
}
