import { capitalize } from "../helpers/capitalize";
import { Profile } from "./Profile";

export function DetailsHeader({ user }) {
	return (
		<header className="flex w-full flex-col items-center justify-center gap-5 border-b border-b-metalic p-5">
			<Profile
				src={user.avatar || "./avatar.png"}
				className="h-[100px] w-[100px] "
			/>
			<h2 className="text-2xl font-semibold">{capitalize(user.username)}</h2>
			<p>lorem ipsum dolor sit amet.</p>
		</header>
	);
}

export default DetailsHeader;
