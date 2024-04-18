import EmojiPicker from "emoji-picker-react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useChatStore } from "../lib/chatStore";
import { db } from "../lib/firebase";
import { upload } from "../lib/upload";
import { useUserStore } from "../lib/userStore";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function ChatFooter() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");
	const [img, setImg] = useState({
		file: null,
		url: "",
	});
	const [openFile, setOpenFile] = useState(false);

	const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
		useChatStore();
	const { currentUser } = useUserStore();

	const handleEmoji = (e) => {
		setText((prev) => prev + e.emoji);
		setOpen(false);
	};

	const handleImg = (e) => {
		if (e.target.files[0]) {
			setImg({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	const handleSend = async () => {
		if (text === "") return;

		let imgUrl = null;

		try {
			if (img.file) {
				imgUrl = await upload(img.file);
			}

			await updateDoc(doc(db, "chats", chatId), {
				messages: arrayUnion({
					senderId: currentUser.id,
					text,
					createdAt: new Date(),
					...(imgUrl && { img: imgUrl }),
				}),
			});

			const userIDs = [currentUser.id, user.id];

			userIDs.forEach(async (id) => {
				const userChatsRef = doc(db, "userchats", id);
				const userChatsSnapshot = await getDoc(userChatsRef);

				if (userChatsSnapshot.exists()) {
					const userChatsData = userChatsSnapshot.data();

					const chatIndex = userChatsData.chats.findIndex(
						(c) => c.chatId === chatId,
					);

					userChatsData.chats[chatIndex].lastMessage = text;
					userChatsData.chats[chatIndex].isSeen =
						id === currentUser.id ? true : false;
					userChatsData.chats[chatIndex].updatedAt = Date.now();

					await updateDoc(userChatsRef, {
						chats: userChatsData.chats,
					});
				}
			});
		} catch (err) {
			console.log(err);
		} finally {
			setImg({
				file: null,
				url: "",
			});

			setText("");
			setOpenFile(false);
		}
	};

	return (
		<footer className="flex items-center justify-evenly gap-5 p-5">
			<div className="flex items-center gap-5">
				<Icon
					src="./img.png"
					alt="galeria"
					onClick={() => setOpenFile((prev) => !prev)}
				/>
				{openFile && (
					<input
						type="file"
						name="img"
						id="file"
						className="w-40"
						onChange={handleImg}
					/>
				)}
			</div>
			<input
				className="  ml-5 w-full  rounded-md bg-metalic p-2.5  outline-none disabled:cursor-not-allowed disabled:opacity-50"
				placeholder={
					isCurrentUserBlocked || isReceiverBlocked
						? "Você não pode mandar uma mensagem"
						: "Digite uma mensagem..."
				}
				onChange={(e) => setText(e.target.value)}
				value={text}
				disabled={isCurrentUserBlocked || isReceiverBlocked}
			/>
			<div className="flex size-8 items-center justify-center">
				<img
					onClick={() => setOpen((prev) => !prev)}
					className="w-full cursor-pointer object-cover"
					src="./emoji.png"
					alt="icone de emojis"
				/>
			</div>
			<div className="right-50 absolute top-60">
				<EmojiPicker open={open} onEmojiClick={handleEmoji} />
			</div>

			<Button
				disabled={isCurrentUserBlocked || isReceiverBlocked}
				onClick={handleSend}
			>
				Enviar
			</Button>
		</footer>
	);
}

export default ChatFooter;
