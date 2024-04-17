import { Profile } from "./Profile";

export function ListItem() {
  return (
    <li className="flex cursor-pointer items-start gap-2.5 border-b border-b-metalic py-4 font-semibold ">
      <Profile src="./avatar.png" size={10} />
      <div className="flex flex-col gap-0.5">
        <h3>Marianne</h3>
        <p className="text-sm font-light">hello</p>
      </div>
    </li>
  );
}
