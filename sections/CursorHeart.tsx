import { asset } from "$fresh/runtime.ts";

export default function CursorHeart() {
  const heart = asset("/js/heart.js");
  const music = asset("/music.mp3");

  return (
    <>
      <script src={heart} type="text/javascript"></script>

      <audio autoPlay>
        <source src={music} type="audio/mp3" />
        Seu navegador não suporte a música! :(
      </audio>
    </>
  );
}
