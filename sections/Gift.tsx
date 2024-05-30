import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Envelope } from "site/islands/Envelope.tsx";

interface Props {
  title: string;
  subtitle: string;
  image?: ImageWidget;
  text: string;
}

export default function Gift({ title, subtitle, image, text }: Props) {
  return (
    <div class="flex flex-col items-center justify-center lg:max-w-[561px] mx-auto mt-5">
      <h1 class="uppercase mt-2.5 text-[#00664F] spicy-rice text-6xl lg:text-[90px]">
        {title}
      </h1>
      <h2 class="uppercase text-[#00664F] mt-9 lg:max-w-[340px] text-center inter font-black">
        {subtitle}
      </h2>

      {image
        ? (
          <Image
            class="my-4 hover:scale-110 transition-all duration-300"
            src={image}
            width={561}
            height={272}
          />
        )
        : <Envelope />}

      <p class="text-[#00664F] text-center mt-4 rounded-mplus-1c font-medium">
        {text}
      </p>
    </div>
  );
}
