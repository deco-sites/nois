import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  nameSection? :string;
  title?: string;  
  titleHighlight?: string;
  text?:string;
  image?: LiveImage;
  altImage?:string

}



export default function BannnerGrid({
    nameSection,title,titleHighlight,image,altImage,text
 
}: Props) {
  return (
    <section class="container flex flex-row justify-center items-center w-full md:px-0 mx-auto bg-[#1E2D32]">
        <div class=' flex flex-col justify-center items-start gap-4'>

        {nameSection && 
        (
          <div class="flex   text-left ">
            <h2 class="text-lg leading-5 font-semibold uppercase">
              {nameSection}
            </h2>

          </div>
        )}
        {title &&
        (
          <div class="flex   text-left">
            <h2 class="text-lg leading-5 font-semibold uppercase">
              {title}
            </h2>
            {titleHighlight && (<h2 class="text-lg leading-5 font-semibold uppercase">{titleHighlight}</h2>)}

          </div>
        )}
        {text &&
        (
          <div class=" flex text-left">
            <span class="text-2xl leading-5  text-white">
              {text}
            </span>

          </div>
        )}
        </div>
        <div
            class={`flex gap-4 max-w-[560px]  max-h-[370px] `}
        >
            {image &&  
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
            </Picture> }       
        </div>
    </section>
  );
}