import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image?: Img;
  texts?: Text[];
  text?: Text;
  degrade:boolean;
}
export type Text = {
  label: string;
  size: 48 | 40 | 36 | 30 | 24 | 20 | 18 | 16 | 14 | 12;
  sizeMobile: 48 | 40 | 36 | 30 | 24 | 20 | 18 | 16 | 14 | 12;

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
  48: "lg:text-5xl",
  40: "lg:text-[40px]",
  36: "lg:text-4xl",
  30: "lg:text-3xl",
  24: "lg:text-2xl",
  20: "lg:text-xl",
  18: "lg:text-lg",
  16: "lg:text-base",
  14: "lg:text-sm",
  12: "lg:text-xs",
};
const SIZEMOBILE = {
  48: "text-5xl",
  40: "text-[40px]",
  36: "text-4xl",
  30: "text-3xl",
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  12: "text-xs",
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
  texts,degrade
}: Props) {
  return (
    <div class={`w-full  py-5 ${degrade ? (" bg-gradient-to-b from-[#000]  to-[#1E2D32]" ):("bg-[#1E2D32]")}`}>
      <section class="flex flex-col lg:flex-row justify-between items-center w-full mx-auto h-full lg:px-[100px] px-[20px]">
        <div class=" flex flex-col w-full justify-center items-start gap-2  mb-5 text-center lg:max-w-[540px]">
          <div class="hidden lg:flex w-full flex-col text-center lg:text-left mb-2 lg:mb-10">
            <span class=" ">
              {texts && texts.map((text) => (
                <p
                  class={`
                my-4
                ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
                ${SIZE[text.size]}
               `}
                >
                  {text.label + "  "}
                  {text.lineBreak && <br />}
                </p>
              ))}
            </span>
          </div>
          <div class="flex lg:hidden w-full flex-col text-center lg:text-left mb-2 lg:mb-10">
            <p class=" ">
              {texts && texts.map((text) => (
                <p
                  class={`
                ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
               
                ${SIZEMOBILE[text.sizeMobile]}`}
                >
                  {text.label + "  "}
                  {text.lineBreak && <br />}
                </p>
              ))}
            </p>
          </div>

          {text &&
            (
              <>
                <div class="hidden lg:flex text-center lg:text-left w-full">
                  <p
                    class={`  ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
                ${SIZE[text.size]}
            `}
                  >
                    {text.label}
                  </p>
                </div>
                <div class=" flex lg:hidden text-center lg:text-left w-full">
                  <p
                    class={`  ${BOLDS[text.bold]}
               ${COLOR[text.color]}
               ${text.italic && "italic"}
               ${text.uppercase && "uppercase"}
               ${SIZEMOBILE[text.sizeMobile]}`}
                  >
                    {text.label}
                  </p>
                </div>
              </>
            )}
        </div>

        <div
          class={`flex justify-center items-end w-full lg:w-1/2`}
        >
          {image &&
            (
              <Picture preload={false}>
                <Source
                  media="(max-width: 767px)"
                  fetchPriority={"auto"}
                  src={image.mobile ? (image.mobile) : (image.desktop)}
                  width={350}
                  height={320}
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
