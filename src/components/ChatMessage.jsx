import { Profile } from "./Profile";

export function ChatMessage({ owner = false, hasImg = false }) {
  return (
    <article className={`flex items-start gap-5 `}>
      {!owner && <Profile src="./avatar.png" size={8} />}
      <div
        className={`flex w-full max-w-[70%] flex-col gap-1  ${owner ? "ml-auto " : ""}`}
      >
        {hasImg && (
          <img
            className="h-[300px] w-full rounded-md object-cover"
            src="https://picsum.photos/500/300"
          />
        )}
        <p
          className={`rounded-md p-5 ${owner ? " bg-blue-500" : "bg-metalic "}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dignissimos voluptatem officia dicta praesentium tempore qui eius
          saepe cupiditate, quis neque odio quidem amet, exercitationem aliquid
          laboriosam nostrum, aspernatur magnam.
        </p>
        <span className="text-sm ">há 2 min</span>
      </div>
    </article>
  );
}

export default ChatMessage;
