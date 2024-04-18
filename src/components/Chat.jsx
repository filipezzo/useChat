import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useChatStore } from "../lib/chatStore";
import { db } from "../lib/firebase";
import ChatFooter from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import ChatMessage from "./ChatMessage";

export function Chat() {
	const endRef = useRef(null);
	const [chat, setChat] = useState(null);

	const { chatId } = useChatStore();

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chat]);

	useEffect(() => {
		const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
			setChat(res.data());
		});

		return () => unSub();
	}, [chatId]);

	return (
		<div className="flex flex-grow-2 flex-col border-l border-r border-l-metalic border-r-metalic">
			<ChatHeader />
			<section className="relative flex flex-1 flex-col gap-5 overflow-scroll border-b border-b-metalic p-5">
				{chat?.messages?.map((message) => (
					<ChatMessage key={message?.createdAt} message={message} />
				))}

				<div ref={endRef} />
			</section>
			<ChatFooter />
		</div>
	);
}
