export function Icon({ src, alt, className }) {
  return (
    <img
      src={src}
      className={`size-5 cursor-pointer  ${className}`}
      alt={`icone de ${alt}`}
    />
  );
}
