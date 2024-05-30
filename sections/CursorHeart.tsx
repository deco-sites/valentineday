import { asset } from "$fresh/runtime.ts";
import { AppContext } from "site/apps/site.ts";

export default function CursorHeart({ device }: { device: string }) {
  if (device !== "desktop") {
    return <></>;
  }

  const heart = asset("/js/cursorHeart.js");

  return <script src={heart} type="text/javascript"></script>;
}

export const loader = (props: null, req: Request, ctx: AppContext) => {
  const device = ctx.device;

  return {
    device,
  };
};
