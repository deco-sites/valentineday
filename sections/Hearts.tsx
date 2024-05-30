import { asset } from "$fresh/runtime.ts";
import Hearts from "site/islands/Hearts.tsx";

export default function Heart() {
  const hearts = asset("/js/animationHeart.js");

  return (
    <>
      <script src={hearts} type="text/javascript" defer></script>
      <Hearts />
    </>
  );
}
