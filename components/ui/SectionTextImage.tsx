import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  titleHighlight?: string;
  text?: string;
  image?: LiveImage;
  altImage?: string;
  texts?: Text[];
}
export type Text = {
  text: string;
  size?: 48 | 36 | 20 | 18;
  gradient?: boolean;
  bold: "semibold" | "bold" | "none";
  italic: boolean;
  color: "black" | "white" | "green";
};
export default function BannnerGrid({
  title,
  titleHighlight,
  image,
  altImage,
  text,
  texts,
}: Props) {
  return (
    <div class="w-full bg-[#1E2D32] px-[80px] py-[40px]">
      <section class="flex flex-row justify-around items-center w-full mx-auto min-h-[640px]">
        <div class=" flex flex-col justify-center items-start gap-2 max-w-[690px] ">
          <div class="flex  flex-col text-left text-5xl mb-[40px]">
            <span class=" uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#9990FF]  to-[#76DBD3] ">
              <span class="font-medium">{title}</span>
              <span class="font-extrabold">{titleHighlight}</span>
            </span>
          </div>

          {text &&
            (
              <div class=" flex text-left w-[690px]">
                <span class="text-[23px]  text-white">
                  {text}
                </span>
              </div>
            )}
        </div>
        <div
          class={`flex justify-center items-end mr-[-100px] w-[50%]`}
        >
          {image &&
            (
              <Image
                class="w-full object-cover"
                src={image}
                alt={altImage}
                width={830}
                height={700}
                loading="lazy"
              />
            )}
        </div>
      </section>
    </div>
  );
}
