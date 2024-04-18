export function Icon({ src, alt, className, ...rest }) {
	return (
		<img
			src={src}
			className={`size-5 cursor-pointer  ${className}`}
			alt={`icone de ${alt}`}
			{...rest}
		/>
	);
}
