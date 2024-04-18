import { capitalize } from "../helpers/capitalize";
import { Profile } from "./Profile";

export function ListItem({ chat, onFetch }) {
	if (!chat) return;
	return (
		<li
			onClick={() => onFetch(chat)}
			className="flex cursor-pointer items-start gap-2.5 border-b border-b-metalic py-4 font-semibold duration-300 hover:opacity-70 "
			style={{
				fontWeight: chat?.isSeen ? "400" : "700",
				color: chat?.isSeen ? "white" : "snow",
			}}
		>
			<Profile src={chat.user.avatar || "./avatar.png"} size={10} />
			<div className="flex flex-col gap-0.5">
				<h3>{capitalize(chat.user.username)}</h3>
				<p className="text-sm font-light">{chat.lastMessage}</p>
			</div>
			{!chat?.isSeen && <p>👀</p>}
		</li>
	);
}
