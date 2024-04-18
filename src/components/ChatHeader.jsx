import { capitalize } from "../helpers/capitalize";
import { useChatStore } from "../lib/chatStore";
import { Profile } from "./Profile";

export function ChatHeader() {
	const { user } = useChatStore();
	return (
		<header className="flex items-center justify-between border-b  border-b-metalic p-5">
			<div className="flex items-center gap-5">
				<Profile src={user.avatar || "./avatar.png"} className="h-16 w-16" />
				<div>
					<h2 className="text-xl">{capitalize(user?.username)}</h2>
				</div>
			</div>
		</header>
	);
}
