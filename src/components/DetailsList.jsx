import { auth } from "../lib/firebase";
import { Button } from "./Button";
import { DetailsFile } from "./DetailsFile";
import { DetailsItem } from "./DetailsItem";

const links = [
	{
		text: "Configurações",
		icon: "./arrowUp.png",
		open: false,
	},

	{
		text: "Privacidade",
		icon: "./arrowUp.png",
		open: false,
	},

	{
		text: "Fotos compartilhadas",
		icon: "./arrowDown.png",
		open: true,
	},

	{
		text: "Arquivos compartilhados",
		icon: "./arrowUp.png",
		open: false,
	},
];
function DetailsList() {
	return (
		<ul className="flex flex-1 flex-col gap-5 overflow-scroll  p-5">
			{links.map((link, index) => (
				<DetailsItem key={index} link={link}>
					{link.open && (
						<>
							<DetailsFile />
							<DetailsFile />
							<DetailsFile />
							<DetailsFile />
						</>
					)}
				</DetailsItem>
			))}
			<Button className="my-4" variant="block">
				Bloquear User
			</Button>

			<Button onClick={() => auth.signOut()}>Logout</Button>
		</ul>
	);
}

export default DetailsList;
