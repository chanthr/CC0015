import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <div className="px-4 pt-10 pb-0 max-w-lg mx-auto h-[calc(100vh-5rem)]">
      <div className="mb-3">
        <h1 className="font-serif text-2xl font-bold text-own-deep">
          AI Companion
        </h1>
        <p className="text-xs text-own-gray">
          Contextual support · not a generic chatbot
        </p>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <ChatWindow />
      </div>
    </div>
  );
}
