import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  titleHighlight?: string;
  text?: string;
  image?: LiveImage;
  imageMobile?: LiveImage;
  altImage?: string;
}

export default function BannnerGrid({
  title,
  titleHighlight,
  image,
  imageMobile,
  altImage,
  text,
}: Props) {
  return (
    <div class="w-full bg-[#1E2D32] px-[30px] lg:px-[100px] py-[100px]">
      <section class="flex flex-col lg:flex-row justify-between items-center w-full mx-auto lg:min-h-[640px]">
        <div class=" flex flex-col justify-center items-center lg:items-start gap-2 lg:max-w-[690px] ">
          <div class="flex  flex-col text-center lg:text-left text-2xl lg:text-5xl ">
            <span class=" uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#9990FF]  to-[#76DBD3] ">
              <span class="font-medium">{title}</span>
              <span class="font-extrabold">{titleHighlight}</span>
            </span>
          </div>

          {text &&
            (
              <div class="flex text-center my-[20px] lg:my-[40px] lg:text-left w-full">
                <span class="text-[15px] lg:text-[23px] text-white font-extralight">
                  {text}
                </span>
              </div>
            )}
        </div>
        <div
          class={`flex justify-center items-center lg:items-end mr-[-100px] w-[50%]`}
        >
          {image &&
            (
              <Image
                class="hidden lg:flex w-full object-cover"
                src={image}
                alt={altImage}
                width={830}
                height={700}
                loading="lazy"
              />
            )}
          {imageMobile &&
            (
              <Image
                class="lg:hidden flex w-full object-cover"
                src={imageMobile}
                alt={altImage}
                width={265}
                height={360}
                loading="lazy"
              />
            )}
        </div>
      </section>
    </div>
  );
}
