export function Profile({ size = 5, src, className, ...rest }) {
  return (
    <img
      className={`size-${size}  rounded-full object-cover object-center ${className}`}
      src={src}
      alt="avatar img"
      {...rest}
    />
  );
}
