import { Icon } from "./Icon";
import { Profile } from "./Profile";

export function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b  border-b-metalic p-5">
      <div className="flex items-center gap-5">
        <Profile src="./avatar.png" className="h-16 w-16" />
        <div>
          <h2 className="text-xl">Marianne</h2>
          <p className="text-sm text-gray-400">Lorem ipsum dolor, sit amet.</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Icon src="./phone.png" alt="telefone" />
        <Icon src="./camera.png" alt="camera" />
        <Icon src="./info.png" alt="informações" />
      </div>
    </header>
  );
}
