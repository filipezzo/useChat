export function DetailsFile() {
  return (
    <div className="my-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          className="size-8 rounded-md object-cover"
          src="./avatar.png"
          alt="foto do arquivo"
        />
        <h4>photo_2024_2.png</h4>
      </div>
      <div className="flex size-7 cursor-pointer items-center justify-center rounded-full bg-metalic p-0.5">
        <img className="size-3" src="./download.png" alt="icone de download" />
      </div>
    </div>
  );
}
