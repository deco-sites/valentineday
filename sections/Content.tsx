import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Button } from "site/components/Button.tsx";

interface Props {
  card: {
    image: ImageWidget;
    title: string;
    text: string;
  }[];
  button: string;
}

export default function Content({ card, button }: Props) {
  return (
    <div class="relative lg:max-w-[585px] mx-auto flex flex-col items-center justify-center mt-5 gap-6">
      <hr class="border border-[#00664F] bg-[#00664F] h-[3px] w-full" />

      <div class="flex flex-col lg:flex-row gap-7 lg:gap-14 px-3 lg:px-0">
        {card.map((item) => (
          <div class="flex flex-col gap-4 w-full">
            <Image
              src={item.image}
              width={246}
              height={304}
              class="hover:scale-110 transition-all duration-300 w-full flex-1"
            />
            <div class="flex flex-col lg:px-0">
              <p class="text-[#00664F] rounded-mplus-1c font-extrabold">
                {item.title}
              </p>
              <p class="text-[#00664F] rounded-mplus-1c font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button>{button}</Button>
    </div>
  );
}
