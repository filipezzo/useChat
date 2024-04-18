import {
	arrayUnion,
	collection,
	doc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { Button } from "./Button";
import { ListAddUserItem } from "./ListAddUserItem";
export function ListAddUser() {
	const [user, setUser] = useState(null);
	const { currentUser } = useUserStore();

	const handleSearch = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const username = formData.get("username");

		try {
			const userRef = collection(db, "users");

			const q = query(userRef, where("username", "==", username));

			const querySnapShot = await getDocs(q);

			if (!querySnapShot.empty) {
				setUser(querySnapShot.docs[0].data());
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleAdd = async () => {
		const chatRef = collection(db, "chats");
		const userChatsRef = collection(db, "userchats");

		try {
			const newChatRef = doc(chatRef);
			await setDoc(newChatRef, {
				createdAt: serverTimestamp(),
				messages: [],
			});
			await updateDoc(doc(userChatsRef, user.id), {
				chats: arrayUnion({
					chatId: newChatRef.id,
					lastMessage: "",
					receiverId: currentUser.id,
					updatedAt: Date.now(),
				}),
			});

			await updateDoc(doc(userChatsRef, currentUser.id), {
				chats: arrayUnion({
					chatId: newChatRef.id,
					lastMessage: "",
					receiverId: user.id,
					updatedAt: Date.now(),
				}),
			});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<section className="absolute left-[600px]  top-[200px] z-10 mx-auto h-max w-96 rounded-md bg-metalic2  p-4">
			<form
				onSubmit={handleSearch}
				className="flex items-center justify-between gap-5"
			>
				<input
					type="text"
					className="flex-1 rounded-md bg-white p-2 text-black outline-none"
					placeholder="Username"
					name="username"
				/>
				<Button>Search</Button>
			</form>

			<ul className="flex flex-col ">
				{user && <ListAddUserItem user={user} onAddUser={handleAdd} />}
			</ul>
		</section>
	);
}
