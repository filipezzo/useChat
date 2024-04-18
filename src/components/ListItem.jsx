import { Profile } from "./Profile";

export function ListItem({ chat }) {
	if (!chat) return;
	return (
		<li className="flex cursor-pointer items-start gap-2.5 border-b border-b-metalic py-4 font-semibold ">
			<Profile src={chat.user.avatar || "./avatar.png"} size={10} />
			<div className="flex flex-col gap-0.5">
				<h3>{chat.user.username}</h3>
				<p className="text-sm font-light">{chat.lastMessage}</p>
			</div>
		</li>
	);
}
