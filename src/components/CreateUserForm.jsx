import { createUserWithEmailAndPassword } from "firebase/auth";
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../lib/firebase";
import { upload } from "../lib/upload";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { LoginInput } from "./LoginInput";
import { Profile } from "./Profile";
export function CreateUserForm() {
	const [avatar, setAvatar] = useState({
		file: null,
		url: "",
	});

	const [loading, setLoading] = useState(false);

	const handleAvatar = (e) => {
		if (e.target.files[0]) {
			setAvatar({
				file: e.target.files[0],
				url: URL.createObjectURL(e.target.files[0]),
			});
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.target);

		const { username, email, password } = Object.fromEntries(formData);

		if (!username || !email || !password) {
			setLoading(false);
			return toast.warn("Por favor preencha todos os campos");
		}

		if (!avatar.file) {
			setLoading(false);
			return toast.warn("Por favor selecione um avatar");
		}

		const usersRef = collection(db, "users");
		const q = query(usersRef, where("username", "==", username));
		const querySnapshot = await getDocs(q);
		if (!querySnapshot.empty) {
			setLoading(false);
			return toast.warn("Selecione outro user");
		}

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			const imgURL = await upload(avatar.file);

			await setDoc(doc(db, "users", res.user.uid), {
				username,
				email,
				avatar: imgURL,
				id: res.user.uid,
				blocked: [],
			});

			await setDoc(doc(db, "userchats", res.user.uid), {
				chats: [],
			});

			toast.success("Conta criada com sucesso!");
		} catch (e) {
			console.error(e);
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<section className="flex flex-1 justify-center">
			<form
				onSubmit={handleRegister}
				className="flex h-72 w-96 flex-col gap-5  p-1"
			>
				<h2 className=" text-center text-2xl font-semibold">Crie sua conta</h2>
				<div className="flex items-center justify-center gap-5 ">
					<Profile src={avatar.url || "./avatar.png"} className="h-20 w-20" />
					<label className="text-gray-300 underline" htmlFor="file">
						Selecione um avatar
					</label>
					<input
						type="file"
						className="hidden"
						id="file"
						onChange={handleAvatar}
					/>
				</div>
				<LoginInput placeholder="Username" name="username" />
				<LoginInput type="email" placeholder="Email" name="email" />
				<LoginInput type="password" placeholder="Senha" name="password" />
				<Button disabled={loading}>
					{loading ? (
						<div className="flex w-full items-center justify-center gap-2">
							<Loader />
							<p>Criando</p>
						</div>
					) : (
						"Criar"
					)}
				</Button>
			</form>
		</section>
	);
}
