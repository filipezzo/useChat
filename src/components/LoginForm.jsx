import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../lib/firebase";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { LoginInput } from "./LoginInput";

export function LoginForm() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData(e.target);

		const { email, password } = Object.fromEntries(formData);

		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			console.log(e);
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<section className="flex flex-1 justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex h-72 w-96 flex-col gap-5  p-1"
			>
				<h2 className=" text-center text-2xl font-semibold">
					Bem vindo de volta,
				</h2>
				<LoginInput type="email" placeholder="Email" name="email" />
				<LoginInput type="password" placeholder="Senha" name="password" />

				<Button disabled={loading}>
					{loading ? (
						<div className="flex w-full items-center justify-center gap-2">
							<Loader />
							<p>Logando...</p>
						</div>
					) : (
						"Entrar"
					)}
				</Button>
			</form>
		</section>
	);
}
