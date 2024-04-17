export function Button({ children, className, variant, ...rest }) {
  return (
    <button
      className={`rounded-md  px-2.5 py-1.5 font-semibold text-white duration-300 hover:opacity-80 ${variant === "block" ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
