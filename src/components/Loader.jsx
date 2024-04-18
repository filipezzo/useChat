export function Loader({ app = false }) {
	return (
		<div
			className={` animate-spin rounded-full ${app ? "h-40 w-40 border-r-2 border-t-2 border-t-blue-500 " : "h-5 w-5 border-r border-t "}`}
		/>
	);
}
