import { capitalize } from "../helpers/capitalize";
import { useUserStore } from "../lib/userStore";
import { Profile } from "./Profile";
export function ListHeader() {
	const {
		currentUser: { username, avatar },
	} = useUserStore();

	const capitalizeUser = capitalize(username);

	return (
		<header className="flex items-center justify-between">
			<div className="flex items-center gap-5">
				<Profile src={avatar || "./avatar.png"} className="h-12 w-12" />
				<h2 className="font-semibold">{capitalizeUser}</h2>
			</div>
		</header>
	);
}
