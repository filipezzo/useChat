import { Chat } from "./components/Chat";
import { Details } from "./components/Details";
import { List } from "./components/List";
import Login from "./components/Login";

function App() {
  const user = false;

  return (
    <div className="effect container mx-auto flex h-full w-full rounded-md  ">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
