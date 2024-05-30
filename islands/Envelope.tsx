import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export function Envelope() {
  const envelopeOpen = useSignal(false);
  const confetti = asset("/js/createConfetti.js");

  const handleClick = () => {
    if (envelopeOpen.value) return;

    const audio = new Audio("/music.mp3");
    // audio.play();

    envelopeOpen.value = true;
  };

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js">
      </script>

      <script src={confetti} type="text/javascript" defer></script>

      <button
        id="envelope"
        onClick={handleClick}
        class={`my-4 ${envelopeOpen.value ? "animate-none" : "animate-pulse"}`}
      >
        <div class="envelope" />
      </button>
    </>
  );
}
