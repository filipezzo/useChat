import { auth } from "../lib/firebase";
import { Button } from "./Button";

function DetailsList() {
	return (
		<ul className="flex flex-1 flex-col justify-end gap-5 overflow-scroll  p-5">
			<Button onClick={() => auth.signOut()}>Logout</Button>
		</ul>
	);
}

export default DetailsList;
