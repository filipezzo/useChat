export function DetailsItem({ link, children }) {
  return (
    <li>
      <div className="flex items-center justify-between">
        <h3>{link.text}</h3>
        <div className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-metalic p-0.5">
          <img src={link.icon} className="size-3" alt={`icone ${link.text}`} />
        </div>
      </div>
      {children}
    </li>
  );
}
