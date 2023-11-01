import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  text?: string;
}

export default function BannnerGrid({
  text,
}: Props) {
  const icon = "/IconBlack.svg";

  return (
    <div class="w-full bg-[#1E2D32] py-[40px]  ">
      <section class="flex items-center w-full h-[650px] bg-gradient-to-b from-[#9990FF]  to-[#76DBD3]  px-[30px] lg:px-[100px] lg:rounded-b-[50px] ">
        <div class=" flex flex-col items-start ">
          <div class="flex  flex-row justify-center items-center lg:justify-start w-full  lg:text-left gap-2 lg:gap-5 mb-5">
            <div class="flex flex-row text-center lg:flex-col lg:text-left  ">
              <span class="text-2xl mr-2 lg:text-5xl text-black  ">
                Quem
              </span>
              <span class="text-2xl lg:text-5xl text-black font-bold ">
                Somos
              </span>
            </div>

            <a
              href="/"
              aria-label="Page logo"
              class="hidden lg:block w-[60px]  "
            >
              <img
                src={icon}
                width={65}
                height={70}
                class="shrink-0 w-auto "
                alt={"Logo nois"}
                loading={"lazy"}
              />
            </a>
          </div>

          {text &&
            (
              <div class="flex text-center lg:text-left text-base lg:text-xl w-full leading-5 lg:leading-10 font-extralight">
                <span class="">
                  {text}
                </span>
              </div>
            )}
          <div class="w-full flex justify-center py-[30px]  ">
            <a href="/" aria-label="Page logo" class="lg:hidden  block ">
              <img
                src={icon}
                width={65}
                height={70}
                class="shrink-0 w-auto "
                alt={"Logo nois"}
                loading={"lazy"}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
