export function Profile({ size = 5, src, className, ...rest }) {
  return (
    <img
      className={`size-${size}  rounded-full object-cover ${className}`}
      src={src}
      alt="avatar img"
      {...rest}
    />
  );
}
