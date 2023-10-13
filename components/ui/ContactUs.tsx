import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  href: string;
}

export default function BannnerGrid({ href }: Props) {
  const icon = "/paper-plane-outline.svg";

  return (
    <div class="w-full bg-[#1E2D32] py-[40px] px-[100px]  ">
      <section
        href={href}
        class="flex items-start w-full h-[300px] bg-gradient-to-t from-[#9990FF]  to-[#76DBD3] py-[60px]  px-[50px] rounded-[50px] "
      >
        <div class=" flex flex-col  w-full h-full justify-between ">
          <div class="flex  flex-row  w-full justify-between text-left  mb-5">
            <a href={href}>
              <div class="flex flex-col text-base text-left w-full">
                <span class="text-black  ">
                  Tem
                </span>
                <span class="text-black font-bold ">
                  duvidas?
                </span>
              </div>
            </a>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperPlane icon"
            >
              <img
                src={icon}
                width={36}
                height={36}
                id="PaperPlane"
              />
            </a>
          </div>

          <div class="flex text-left text-5xl w-full leading-10">
            <a href={href}>
              <span class="font-bold">
                Contate-
              </span>
              <span class="font-normal">
                nos
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
