"use client";

import { useState } from "react";
import { COMMUNITY_POSTS } from "@/lib/constants";
import { Heart, MessageCircle, Send } from "lucide-react";
import { CardRoot, ButtonRoot, AvatarRoot, AvatarFallback, ChipRoot } from "@heroui/react";

export default function CommunityPage() {
  const [posts, setPosts] = useState(COMMUNITY_POSTS);
  const [newPost, setNewPost] = useState("");
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const submitPost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now().toString(),
      author: "you",
      content: newPost.trim(),
      likes: 0,
      timeAgo: "just now",
      tag: "Share",
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="px-5 pt-12 pb-4 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Community
        </h1>
        <p className="text-sm text-glow-warm-gray mt-1">
          A safe space for sharing and supporting each other.
        </p>
      </div>

      {/* Community Guidelines */}
      <CardRoot className="bg-glow-purple-100 rounded-2xl p-4 mb-6 border-none">
        <p className="text-xs text-glow-purple-900 leading-relaxed">
          💜 <strong>Community values:</strong> Be kind, be supportive, no judgment.
          Everyone here is on their own journey. What&apos;s shared here stays here.
        </p>
      </CardRoot>

      {/* Post Input */}
      <CardRoot className="rounded-2xl p-4 border border-glow-purple-100/50 mb-6 shadow-sm">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share something with the community..."
          rows={3}
          className="w-full text-sm text-glow-purple-900 placeholder:text-glow-warm-gray/50 bg-transparent resize-none focus:outline-none"
        />
        <div className="flex justify-end mt-2">
          <ButtonRoot
            variant="primary"
            onPress={submitPost}
            isDisabled={!newPost.trim()}
            className="flex items-center gap-1.5 bg-glow-purple-700 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-glow-purple-500 disabled:opacity-40"
          >
            <Send className="w-3 h-3" /> Share
          </ButtonRoot>
        </div>
      </CardRoot>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => {
          const isLiked = liked.has(post.id);
          return (
            <CardRoot
              key={post.id}
              className="rounded-2xl p-4 border border-glow-purple-100/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <AvatarRoot size="sm" className="w-8 h-8">
                  <AvatarFallback className="bg-glow-purple-100 text-xs font-bold text-glow-purple-700">
                    {post.author[0].toUpperCase()}
                  </AvatarFallback>
                </AvatarRoot>
                <div className="flex-1">
                  <p className="text-xs font-medium text-glow-purple-900">{post.author}</p>
                  <p className="text-[10px] text-glow-warm-gray">{post.timeAgo}</p>
                </div>
                <ChipRoot size="sm" variant="soft" className="bg-glow-purple-100 text-glow-purple-700 text-[10px]">
                  {post.tag}
                </ChipRoot>
              </div>
              <p className="text-sm text-glow-purple-900 leading-relaxed">{post.content}</p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-glow-purple-100/50">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1 text-xs transition-colors ${
                    isLiked ? "text-pink-500" : "text-glow-warm-gray hover:text-pink-500"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-pink-500" : ""}`} />
                  {post.likes + (isLiked ? 1 : 0)}
                </button>
                <button className="flex items-center gap-1 text-xs text-glow-warm-gray hover:text-glow-purple-700 transition-colors">
                  <MessageCircle className="w-4 h-4" /> Reply
                </button>
              </div>
            </CardRoot>
          );
        })}
      </div>
    </div>
  );
}
