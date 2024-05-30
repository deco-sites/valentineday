import { useSignal } from "@preact/signals";

export function Envelope() {
  const envelopeOpen = useSignal(false);

  const handleClick = () => {
    if (envelopeOpen.value) return;

    const audio = new Audio("/music.mp3");
    audio.play();

    envelopeOpen.value = true;
  };

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js">
      </script>

      <button
        onClick={handleClick}
        class={`my-4 ${envelopeOpen.value ? "animate-none" : "animate-pulse"}`}
      >
        <div class="envelope" />
      </button>
    </>
  );
}
