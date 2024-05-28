import { Button } from "site/components/Button.tsx";

interface Props {
  title: string;
  button: string;
  text: string;
}

export default function Promocode({ title, button, text }: Props) {
  return (
    <div class="flex flex-col items-center justify-center max-w-[585px] mx-auto mt-5 gap-8">
      <p class="text-[#00664F] inter font-black">{title}</p>
      <Button>{button}</Button>
      <p class="text-[#00664F] text-center rounded-mplus-1c font-medium">
        {text}
      </p>
    </div>
  );
}
