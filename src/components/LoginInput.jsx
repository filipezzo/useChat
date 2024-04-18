export function LoginInput({ type = "text", ...rest }) {
  return (
    <input
      className="w-full rounded-md bg-metalic px-4 py-2 text-white outline-none"
      type={type}
      {...rest}
    />
  );
}
