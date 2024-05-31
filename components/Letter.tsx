export function Letter({ letter }: { letter: string }) {
  return (
    <div class="envelope-open">
      <p class="rounded-mplus-1c" dangerouslySetInnerHTML={{ __html: letter }}>
      </p>

      <p class="rubber spicy-rice p-2">Seu amor</p>
    </div>
  );
}
