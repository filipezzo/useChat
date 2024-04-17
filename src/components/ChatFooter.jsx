import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function ChatFooter() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <footer className="flex items-center justify-evenly gap-5 p-5">
      <div className="flex items-center gap-5">
        <Icon src="./img.png" alt="galeria" />
        <Icon src="./camera.png" alt="camera" />
        <Icon src="./mic.png" alt="microfone" />
      </div>
      <input
        className="  ml-5 w-full  rounded-md bg-metalic p-2.5  outline-none"
        placeholder="Digite sua mensagem..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex size-8 items-center justify-center">
        <img
          onClick={() => setOpen((prev) => !prev)}
          className="w-full cursor-pointer object-cover"
          src="./emoji.png"
          alt="icone de emojis"
        />
      </div>
      <div className="right-50 absolute top-60">
        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
      </div>

      <Button>Enviar</Button>
    </footer>
  );
}

export default ChatFooter;
