import { useChatStore } from "../lib/chatStore";
import DetailsHeader from "./DetailsHeader";
import DetailsList from "./DetailsList";

export function Details() {
	const { user } = useChatStore();

	return (
		<div className="hidden  min-w-[300px] flex-1 flex-col  xl:flex ">
			<DetailsHeader user={user} />
			<DetailsList user={user} />
		</div>
	);
}
