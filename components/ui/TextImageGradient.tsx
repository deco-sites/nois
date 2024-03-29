import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

// Checar altura, e sopreposição da image

export interface Props {
  image?: Img;
  texts?: Text[];
  text?: Text;
  degrade:boolean;

}
export type Img = {
  desktop: LiveImage;
  mobile?: LiveImage;
  width: number;
  widthMobile: number;
  height: number;
  heightMobile: number;

  altImage?: string;
  scale: "1" | "1.05" | "1.10" | "1.25" | "1.5";
};

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
  color: "black" | "white" | "green" | "darkGreen" | "gradient";
  uppercase: boolean;
  lineBreak: boolean;
};
const SCALE = {
  "1": "lg:scale-100",
  "1.05": "lg:scale-105",
  "1.10": "lg:scale-110",
  "1.25": "lg:scale-125",
  "1.5": "lg:scale-150",
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

const COLOR = {
  "black": "text-black",
  "white": "text-white",
  "green": " text-[#76DBD3]",
  "darkGreen": "text-[#1E2D32]",
  "gradient":
    "text-transparent  bg-clip-text bg-gradient-to-t from-[#9990FF] to-[#76DBD3]",
};

export default function BannnerGrid({ text, image, texts,degrade }: Props) {
  return (
  <div class="bg-[#1E2D32] py-20 ">
    <div class={`w-full  ${degrade ? (" bg-gradient-to-b from-[#1E2D32] via-[#9990FF] to-[#76DBD3]" ):("bg-[#1E2D32]" )} lg:rounded-b-[50px]`}>
      <section class="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full   px-[30px] lg:px-[100px] py-[50px] lg:py-[0px] lg:rounded-b-[50px] ">
        <div class=" flex flex-col justify-center items-center lg:items-start gap-2 lg:max-w-[540px] mb-5">
          <div class="hidden lg:flex  flex-col text-center lg:text-left mb-5 lg:mb-10 w-full">
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
          <div class="flex lg:hidden  flex-col text-center lg:text-left mb-5 lg:mb-10 w-full">
            <span class=" ">
              {texts && texts.map((text) => (
                <span
                  class={`  ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}
                ${text.uppercase && "uppercase"}
                ${SIZEMOBILE[text.sizeMobile]}`}
                >
                  {text.label + " "}
                  {text.lineBreak && <br />}
                </span>
              ))}
            </span>
          </div>

          {text &&
            (
              <>
                <div class="hidden lg:flex text-center lg:text-left mb-5 w-full">
                  <span
                    class={`  ${BOLDS[text.bold]}
                ${COLOR[text.color]}
                ${text.italic && "italic"}+
                ${text.uppercase && "uppercase"}
                ${SIZE[text.size]}
            `}
                  >
                    {text.label}
                  </span>
                </div>

                <div class=" flex lg:hidden text-center lg:text-left mb-5 w-full">
                  <span
                    class={`  ${BOLDS[text.bold]}
               ${COLOR[text.color]}
               ${text.italic && "italic"}
               ${text.uppercase && "uppercase"}
               ${SIZEMOBILE[text.sizeMobile]}`}
                  >
                    {text.label}
                  </span>
                </div>
              </>
            )}
        </div>
        <div
          class={`flex justify-center items-center lg:items-end w-full lg:w-1/2 `}
        >
          {image &&
            (
              <Picture preload={false}>
                <Source
                  media="(max-width: 767px)"
                  fetchPriority={"auto"}
                  src={image.mobile ? (image.mobile) : (image.desktop)}
                  width={image.widthMobile}
                  height={image.heightMobile}
                />
                <Source
                  media="(min-width: 768px)"
                  fetchPriority={"auto"}
                  src={image.desktop}
                  width={image.width}
                  height={image.height}
                />

                <img
                  class={`w-full h-full object-cover ${SCALE[image.scale]}`}
                  loading={"lazy"}
                  src={image.desktop}
                  alt={image.altImage}
                />
              </Picture>
            )}
        </div>
      </section>
    </div>
    </div>
  );
}
