import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description Title 1 */
    title: string;
    /** @description Title 2 */
    title2: string;
    /** @description SubTitle */
    subTitle: string;
    /** @description Text label */
    text: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  saibaMaisLink?: string;
}
function Buttons({ saibaMaisLink }: { saibaMaisLink: string }) {
  return (
    <a
      href={saibaMaisLink}
      class="flex cursor-pointer items-center justify-center z-10 col-start-1 row-start-2 border-2 text-[20px] px-[25px] py-[10px] mb-14 rounded-full border-[#76bdd3]"
    >
      Saiba mais
    </a>
  );
}
function BannerItem(
  { image, lcp, saibaMaisLink }: {
    image: Banner;
    lcp?: boolean;
    saibaMaisLink: string;
  },
) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;
  const logo = "/IconLogo.png";
  return (
    <div
      aria-label={action?.text}
      class="relative overflow-y-hidden w-full h-full"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={360}
          height={600}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1920}
          height={950}
        />

        <img
          class="w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>

      <div class="absolute top-[120px] bottom-0 m-auto left-0 right-0  flex flex-col justify-center items-center w-full gap-8  text-[#76DBD3] ">
        <div class=" flex flex-col justify-center items-center w-full gap-8 mb-10  text-[#76DBD3]">
          <span class="text-6xl font-medium text-base-100">
            {action!.title}
          </span>
          <span class="text-6xl  font-semibold text-base-100">
            {action!.title2}
          </span>
          <span class="font-extrabold text-5xl  text-base-100">
            {action!.subTitle}
          </span>
          <span class=" text-xl text-white text-center text-base-100 max-w-[294px] ">
            {action!.text}
          </span>
        </div>

        <Buttons  saibaMaisLink={saibaMaisLink} />

        <img
          src={logo}
          width={60}
          height={65}
          class="shrink-0 w-auto mt-10 "
          alt={"Icon nois"}
          loading={"lazy"}
        />
      </div>
    </div>
  );
}

export default BannerItem;
