import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

// Checar altura, e sopreposição da image

export interface Props {
  image?: LiveImage;
  altImage?: string;
  texts?: Text[];
  text?: Text;
}
export type Text = {
  label: string;
  size: 48 | 40 | 36 | 30 | 24 | 20 | 18 | 16 | 14 | 12 ;
  bold: "extralight"| "light"| "medium" | "normal"|"semibold"|"bold"|"font-extrabold";
  italic: boolean;
  color: "black" | "white" | "green"| "dark green" | "gradient";
  uppercase: boolean;
  lineBreak: boolean;
};

const BOLDS = {
  "extralight"      :"font-extralight",
  "light"           :"font-light",
  "medium"          :"font-medium",
  "normal"          :"font-normal",
  "semibold"        :"font-semibold",
  "bold"            :"font-bold",
  "font-extrabold"  :"font-extrabold",
};
const SIZE = {
  48: "text-5xl",
  40: "text-[40px]",
  36: "text-4xl",
  30: "text-3xl",
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  12: "text-xs-",
};

const COLOR = {
  "black": "text-black",
  "white": "text-white",
  "green": " text-[#76DBD3]",
  "dark green": " text-[#1E2D32]",
  "gradient":
    "text-transparent  bg-clip-text bg-gradient-to-t from-[#9990FF] to-[#76DBD3]",
};

export default function BannnerGrid({ text, altImage, image, texts }: Props) {
  return (
    <div class="w-full  bg-[#1E2D32] py-[70px]  ">
      <section class="flex flex-row justify-between items-center w-full  bg-gradient-to-b from-[#9990FF]  to-[#76DBD3]  px-[100px] rounded-b-[50px] ">
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
              <div class="flex text-left w-full">
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
          class={`flex justify-center items-end w-1/2 `}
        >
          {image &&
            (
              <Image
                class="w-full object-cover scale-110"
                src={image}
                alt={altImage}
                width={1900}
                height={1840}
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
