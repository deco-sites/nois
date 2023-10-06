import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  nameSection?: string;
  title?: string;
  titleHighlight?: string;
  text?: string;
  image?: LiveImage;
  altImage?: string;
}

export default function BannnerGrid({
  nameSection,
  title,
  titleHighlight,
  image,
  altImage,
  text,
}: Props) {
  return (
    <div class="w-full bg-[#1E2D32]">
    <section class="container flex flex-row justify-around items-center w-full mx-auto h-[640px]">
      <div class=" flex flex-col justify-center items-start gap-2 max-w-[560px]">
        {nameSection &&
          (
            <div class="flex   text-left ">
              <h2 class="text-lg text-[#76DBD3] font-bold ">
                {nameSection}
              </h2>
            </div>
          )}
        {title &&
          (
            <div class="flex  flex-col text-left text-5xl mb-[40px]">
              <h2 class="  text-[#76DBD3] font-bold uppercase">
                {title}
              </h2>
              {titleHighlight && (
                <h2 class="  font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#83bee3]  to-[#7dcbdc] ">
                  {titleHighlight}
                </h2>
              )}
            </div>
          )}
        {text &&
          (
            <div class=" flex text-left w-[500px]">
              <span class="text-xl  text-white">
                {text}
              </span>
            </div>
          )}
      </div>
      <div
        class={`flex gap-4 max-w-[560px]  max-h-[370px] `}
      >
        {image &&
          (
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={image}
                width={355}
                height={345}
              />
              <Source
                media="(min-width: 768px)"
                src={image}
                width={560}
                height={370}
              />
              <img
                class="object-cover  inline-block w-full"
                src={image}
                alt={altImage}
                loading="lazy"
              />
            </Picture>
          )}
      </div>
    </section>
    </div>
  );
}
