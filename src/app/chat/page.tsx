import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <div className="px-4 pt-10 pb-0 max-w-lg mx-auto h-[calc(100vh-5rem)]">
      <div className="mb-3">
        <h1 className="font-serif text-2xl font-bold text-glow-purple-900">
          Glow AI 💬
        </h1>
        <p className="text-xs text-glow-warm-gray">
          Your wellness coach &middot; safe &amp; non-judgmental
        </p>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ChatWindow />
      </div>
    </div>
  );
}
