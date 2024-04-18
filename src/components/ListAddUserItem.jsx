import { Button } from "./Button";
import { Profile } from "./Profile";

export function ListAddUserItem({ user, onAddUser }) {
	return (
		<li className="flex items-center justify-between">
			<div className="my-5 flex items-center gap-4">
				<Profile src={user.avatar || "./avatar.png"} className="h-12 w-12" />
				<h3>{user.username}</h3>
			</div>
			<Button onClick={onAddUser}>Adicionar</Button>
		</li>
	);
}
