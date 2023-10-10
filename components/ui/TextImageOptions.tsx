import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image?: LiveImage;
  altImage?: string;
  texts?: Text[];
  text?: Text;
}
export type Text = {
  label: string;
  size: 48 | 40 | 36 | 20 | 18;
  bold: "semibold" | "bold" | "none";
  italic: boolean;
  color: "black" | "white" | "green" | "gradient";
  uppercase: boolean;
  lineBreak: boolean;
};

const BOLDS = {
  "semibold": "font-semibold",
  "bold": "font-bold",
  "none": "",
};
const SIZE = {
  48: "text-5xl",
  40: "text-[40px]",
  36: "text-4xl",
  20: "text-xl",
  18: "text-lg",
};

const COLOR = {
  "black": "text-black",
  "white": "text-white",
  "green": " text-[#76DBD3]",
  "gradient":"text-transparent  bg-clip-text bg-gradient-to-t from-[#9990FF]  to-[#76DBD3]",
};
export default function BannnerGrid({
  text,
  image,
  altImage,
  texts,
}: Props) {
  return (
    <div class="w-full bg-[#1E2D32] px-[100px] py-[40px]  ">
      <section class="flex flex-row justify-between items-center w-full mx-auto h-full">
        <div class=" flex flex-col justify-center items-start gap-2 max-w-[540px] ">
          <div class="flex  flex-col text-left  mb-[40px]">
            <span class=" ">
              {texts && texts.map((text) => (
                <span
                  class={`  ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
                ${SIZE[text.size]}`}
                >
                  {text.label + " "}
                  {text.lineBreak && <br />}
                </span>
              ))}
            </span>
          </div>

          {text &&
            (
              <div class=" flex text-left w-full">
                <span
                  class={`  ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
                ${SIZE[text.size]}`}
                >
                  {text.label}
                </span>
              </div>
            )}
        </div>
        <div
          class={`flex justify-center items-end w-1/2`}
        >
          {image &&
            (
              <Image
                class="w-full object-cover"
                src={image}
                alt={altImage}
                width={700}
                height={630}
                loading="lazy"
                sizes="(max-width: 640px) "
                decoding="async"
              />
            )}
        </div>
      </section>
    </div>
  );
}
