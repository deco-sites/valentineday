import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Letter from "site/islands/Letter.tsx";
import { animationComplete } from "site/islands/Letter.tsx";

export function Envelope({ letter }: { letter: string }) {
  const confetti = asset("/js/createConfetti.js");
  const envelopeOpen = useSignal(false);

  const handleClick = () => {
    if (envelopeOpen.value) return;

    const audio = new Audio("/music.mp3");
    audio.play();

    envelopeOpen.value = true;
  };

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js">
      </script>

      {animationComplete.value && (
        <script src={confetti} type="text/javascript" defer></script>
      )}

      <div class="my-4 px-4 lg:px-0">
        {envelopeOpen.value ? <Letter letter={letter} /> : (
          <button
            id="envelope"
            onClick={handleClick}
            class="animate-pulse"
          >
            <div class="envelope" />
          </button>
        )}
      </div>
    </>
  );
}
