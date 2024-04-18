import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useChatStore } from "../lib/chatStore";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { ListChat } from "./ListChat";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import { ListSearch } from "./ListSearch";

export function List() {
	const [chats, setChats] = useState([]);
	const [inputSearch, setInputSearch] = useState("");
	const { currentUser } = useUserStore();
	const { changeChat } = useChatStore();

	const handleSearch = (input) => {
		setInputSearch(input);
	};

	const handleFetchChat = async (chat) => {
		const userChats = chats.map((item) => {
			const { user, ...rest } = item;
			return rest;
		});

		const chatIndex = userChats.findIndex(
			(item) => item.chatId === chat.chatId,
		);

		userChats[chatIndex].isSeen = true;

		const userChatsRef = doc(db, "userchats", currentUser.id);

		try {
			await updateDoc(userChatsRef, {
				chats: userChats,
			});
			changeChat(chat.chatId, chat.user);
		} catch (err) {
			console.log(err);
		}
	};

	const filteredChats = chats.filter((c) =>
		c.user.username.toLowerCase().includes(inputSearch.toLowerCase()),
	);

	useEffect(() => {
		const unSub = onSnapshot(
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
			unSub();
		};
	}, [currentUser.id]);

	return (
		<div className="flex flex-1 flex-col p-5">
			<ListHeader />
			<ListSearch onSearch={handleSearch} inputSearch={inputSearch} />
			<ListChat>
				{filteredChats?.map((chat) => (
					<ListItem key={chat.chatId} chat={chat} onFetch={handleFetchChat} />
				))}
			</ListChat>
		</div>
	);
}
