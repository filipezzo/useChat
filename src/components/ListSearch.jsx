import { useState } from "react";
import { Icon } from "./Icon";
import { ListAddUser } from "./ListAddUser";

export function ListSearch() {
  const [isMinus, setIsMinus] = useState(false);
  return (
    <div className="my-8 flex w-full items-center justify-between gap-5 ">
      <div className="flex h-10 flex-1 items-center gap-2 rounded-md bg-metalic p-5 ">
        <Icon src="/search.png" alt=" pesquisa" className="size-3" />
        <input className="flex-1 bg-transparent outline-none" type="text" />
      </div>
      <div
        onClick={() => setIsMinus((prev) => !prev)}
        className="flex size-10 items-center justify-center rounded-md bg-metalic p-2"
      >
        <Icon
          src={isMinus ? "./minus.png" : "./plus.png"}
          alt="adicionar"
          className="size-3 object-center"
        />
      </div>
      {isMinus && <ListAddUser />}
    </div>
  );
}
