import { ListChat } from "./ListChat";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import { ListSearch } from "./ListSearch";

export function List() {
  return (
    <div className="flex flex-1 flex-col p-5">
      <ListHeader />
      <ListSearch />
      <ListChat>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ListChat>
    </div>
  );
}
