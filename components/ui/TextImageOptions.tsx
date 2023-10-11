import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image?: Img;
  texts?: Text[];
  text?: Text;
}
export type Text = {
  label: string;
  size: 48 | 40 | 36 | 30 | 24 | 20 | 18 | 16 | 14 | 12;
  bold:
    | "extralight"
    | "light"
    | "medium"
    | "normal"
    | "semibold"
    | "bold"
    | "font-extrabold";
  italic: boolean;
  color: "black" | "white" | "green" | "gradient";
  uppercase: boolean;
  lineBreak: boolean;
};
export type Img = {
  desktop: LiveImage;
  mobile?: LiveImage;
  altImage?: string;
  scale: "1" | "1.05" | "1.10" | "1.25" | "1.5";
};

const BOLDS = {
  "extralight": "font-extralight",
  "light": "font-light",
  "medium": "font-medium",
  "normal": "font-normal",
  "semibold": "font-semibold",
  "bold": "font-bold",
  "font-extrabold": "font-extrabold",
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

const SCALE = {
  "1": "scale-100",
  "1.05": "scale-105",
  "1.10": "scale-110",
  "1.25": "scale-125",
  "1.5": "scale-150",
};

const COLOR = {
  "black": "text-black",
  "white": "text-white",
  "green": " text-[#76DBD3]",
  "gradient":
    "text-transparent  bg-clip-text bg-gradient-to-t from-[#9990FF]  to-[#76DBD3]",
};
export default function BannnerGrid({
  text,
  image,
  texts,
}: Props) {
  return (
    <div class="w-full bg-[#1E2D32]  py-[100px]  ">
      <section class="flex flex-row justify-between items-center w-full mx-auto h-full px-[100px]">
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
              <Picture preload={false}>
                <Source
                  media="(max-width: 767px)"
                  fetchPriority={"auto"}
                  src={image.mobile ? (image.mobile) : (image.desktop)}
                  width={360}
                  height={400}
                />
                <Source
                  media="(min-width: 768px)"
                  fetchPriority={"auto"}
                  src={image.desktop}
                  width={1900}
                  height={1840}
                />

                <img
                  class={`w-full ${SCALE[image.scale]}`}
                  loading={"lazy"}
                  src={image.desktop}
                  alt={image.altImage}
                />
              </Picture>
            )}
        </div>
      </section>
    </div>
  );
}
