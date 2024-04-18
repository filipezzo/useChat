import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { ListChat } from "./ListChat";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import { ListSearch } from "./ListSearch";

export function List() {
	const [chats, setChats] = useState([]);
	const { currentUser } = useUserStore();
	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, "userchats", currentUser.id),
			async (res) => {
				const items = res.data().chats;

				const promises = items.map(async (item) => {
					const userDocRef = doc(db, "users", item.receiverId);
					const userDocSnap = await getDoc(userDocRef);

					const user = userDocSnap.data();

					return { ...item, user };
				});

				const chatData = await Promise.all(promises);
				setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
			},
		);

		return () => {
			unsub();
		};
	}, [currentUser.id]);

	return (
		<div className="flex flex-1 flex-col p-5">
			<ListHeader />
			<ListSearch />
			<ListChat>
				{chats?.map((chat) => (
					<ListItem key={chat.chatId} chat={chat} />
				))}
				<ListItem />
			</ListChat>
		</div>
	);
}
