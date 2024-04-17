import { Icon } from "./Icon";
import { Profile } from "./Profile";

export function ListHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Profile
          src="https://avatars.githubusercontent.com/u/109238541?v=4"
          className="h-12 w-12"
        />
        <h2 className="font-semibold">Filipe Avanzzo</h2>
      </div>
      <div className="flex items-center gap-5">
        <Icon src="./more.png" alt="saiba mais" />
        <Icon src="./camera.png" alt="camera" />
        <Icon src="./edit.png" alt="editar post" />
      </div>
    </header>
  );
}
