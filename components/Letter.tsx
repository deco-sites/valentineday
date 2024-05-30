export function Letter({ letter }: { letter: string }) {
  return (
    <div class="envelope-open">
      <p dangerouslySetInnerHTML={{ __html: letter }}></p>

      <p class="rubber">Seu amor</p>
    </div>
  );
}
