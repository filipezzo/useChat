import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Chat } from "./components/Chat";
import { Details } from "./components/Details";
import { List } from "./components/List";
import { Loader } from "./components/Loader";
import { Login } from "./components/Login";
import { Notification } from "./components/Notification";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {
	const { currentUser, isLoading, fetchUserInfo } = useUserStore();

	useEffect(() => {
		const unSub = onAuthStateChanged(auth, (user) => {
			fetchUserInfo(user?.uid);
		});
		return () => {
			unSub();
		};
	}, [fetchUserInfo]);

	if (isLoading)
		return (
			<div className="flex h-screen w-full items-center justify-center">
				<Loader app />;
			</div>
		);
	return (
		<div className="effect container mx-auto flex h-full w-full rounded-md  ">
			{currentUser ? (
				<>
					<List />
					<Chat />
					<Details />
				</>
			) : (
				<Login />
			)}
			<Notification />
		</div>
	);
}

export default App;
