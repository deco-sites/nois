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
      class="flex cursor-pointer items-center justify-center z-10 col-start-1 row-start-2 border-2 text-base lg:text-[20px] px-[25px] py-[10px] mb-8 rounded-full border-[#76DBD3] hover:bg-[#76DBD3] hover:text-black transition-all duration-200"
    >
      Fale com um consultor
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
      class="relative overflow-y-hidden w-full h-[70vh] lg:h-[90vh]"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={690}
        />
        <Source
          media="(max-width: 1920px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1920}
        />

        <img
          class="w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>

      <div class="absolute top-[35px] lg:top-[100px] bottom-0 m-auto left-0 right-0  flex flex-col justify-around items-center w-full gap-8   text-[#76DBD3] ">
        <div class=" flex flex-col justify-center items-center w-full gap-5 mb-8  text-[#76DBD3]">
          <span class="text-4xl lg:text-6xl text-base-100 font-extralight">
            {action!.title}
          </span>
          <span class="text-4xl lg:text-6xl text-base-100 font-medium">
            {action!.title2}
          </span>
          <span class="text-4xl font-extrabold lg:text-6xl text-base-100">
            {action!.subTitle}
          </span>
          <span class="text-base lg:text-xl text-white text-center text-base-100 my-6 max-w-[300px] lg:max-w-[540px] font-extralight">
            {action!.text}
          </span>
        </div>

        <Buttons saibaMaisLink={saibaMaisLink} />
      </div>
    </div>
  );
}

export default BannerItem;
