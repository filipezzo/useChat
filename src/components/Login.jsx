import { CreateUserForm } from "./CreateUserForm";
import { LoginForm } from "./LoginForm";
import { Separator } from "./Separator";

export function Login() {
  return (
    <main className="flex w-full items-center justify-center ">
      <LoginForm />
      <Separator />
      <CreateUserForm />
    </main>
  );
}
