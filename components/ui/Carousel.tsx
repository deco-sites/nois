import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description when user clicks on the image, go to this link */
  href: string;
}

export interface Props {
  /** @description Title section */
  title?: string;
  titleHighlight?: string;

  images: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    href,
  } = image;

  return (
    <a
      href={href ?? "#"}
      aria-label={alt}
      class="relative overflow-y-hidden w-full"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={360}
          height={800}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1440}
          height={800}
        />
        <img
          class="object-cover w-full inline-block"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function Dots({ images, interval = 3 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  const arrow = "/arrowup.svg";

  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle bg-transparent">
          <img
            src={arrow}
            width={50}
            height={55}
            class="shrink-0 w-auto  my-10 -rotate-90"
            alt={"arrow "}
            loading={"lazy"}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle bg-transparent">
          <img
            src={arrow}
            width={50}
            height={55}
            class="shrink-0 w-auto  my-10 rotate-90"
            alt={"arrow "}
            loading={"lazy"}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function BannerCarousel(
  { images, preload, interval, title, titleHighlight }: Props,
) {
  const id = useId();

  return (
    <>
      <div class="text-5xl flex flex-row justify-center items-center w-full px-[30px] lg:px-[100px] pt-[65px] bg-[#1E2D32]">
        <span class="font-medium  text-5xl text-white mr-4">{title}</span>
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-t  text-5xl from-[#9990FF]  to-[#76DBD3]">
          {titleHighlight}
        </span>
      </div>

      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] pb-[65px] bg-[#1E2D32] px-[30px] lg:px-[100px]"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {images?.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItem image={image} lcp={index === 0 && preload} />
            </Slider.Item>
          ))}
        </Slider>

        {images!.length > 1 ? <Buttons /> : ("")}

        <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
      </div>
    </>
  );
}

export default BannerCarousel;
