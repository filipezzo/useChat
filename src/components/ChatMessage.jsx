import { useChatStore } from "../lib/chatStore";
import { Profile } from "./Profile";

export function ChatMessage({ message }) {
	const { user } = useChatStore();

	const owner = message.senderId !== user.id;

	if (!message) return;
	return (
		<article className={`flex items-start gap-5 `}>
			{!owner && <Profile src={user.avatar || "./avatar.png"} size={8} />}
			<div
				className={`flex w-full max-w-[70%] flex-col gap-1  ${owner ? "ml-auto " : ""}`}
			>
				{user.img && (
					<img
						className="h-[300px] w-full rounded-md object-cover"
						src={user.img}
					/>
				)}
				<p
					className={`rounded-md p-5 ${owner ? " bg-blue-500" : "bg-metalic "}`}
				>
					{message.text}
				</p>
				<span className="text-sm ">1min</span>
			</div>
		</article>
	);
}

export default ChatMessage;
