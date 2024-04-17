import { useEffect, useRef } from "react";
import ChatFooter from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import ChatMessage from "./ChatMessage";

export function Chat() {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-grow-2 flex-col border-l border-r border-l-metalic border-r-metalic">
      <ChatHeader />
      <section className="relative flex flex-1 flex-col gap-5 overflow-scroll border-b border-b-metalic p-5">
        <ChatMessage />
        <ChatMessage owner />
        <ChatMessage />
        <ChatMessage owner />
        <ChatMessage hasImg />
        <ChatMessage owner />
        <div ref={endRef} />
      </section>
      <ChatFooter />
    </div>
  );
}
