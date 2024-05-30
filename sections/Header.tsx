export default function Header() {
  return (
    <header class="max-container-auto py-2.5">
      <div id="heart" />

      <div class="flex flex-col max-w-[558px] items-center justify-center mx-auto gap-2.5">
        <img src="/logo.png" width={42} height={42} />
        <hr class="border border-[#00664F] bg-[#00664F] h-[3px] w-full" />
      </div>
    </header>
  );
}
