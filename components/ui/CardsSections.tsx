import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "full";

export interface ImageItem {
  mobile: LiveImage;
  desktop: LiveImage;
  alt?: string;
  href?: string;
  borderColor: 1 | 2;
}

export interface Props {
  mobile?: BorderRadius;
  desktop?: BorderRadius;
  productCard: ImageItem[];
  preload: boolean;
}

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-[50px]",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "4xl": "sm:rounded-[50px]",
  "full": "sm:rounded-full",
};

const COLOR = {
  1: "border-[#9990FF]",
  2: "border-[#76DBD3]",
};
const COLORTEXT = {
  1: "text-[#9990FF]",
  2: "text-[#76DBD3]",
};

function CardItem(
  { product, preload, mobile, desktop }: {
    product: ImageItem;
    preload: boolean;
    mobile: BorderRadius;
    desktop: BorderRadius;
  },
) {
  const arrowR = "/ArrowRoxa.svg";
  const arrowV = "/ArrowVerde.svg";

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram logo"
      class={"w-1/2 justify-center  flex mb-[10px] lg:mb-0  lg:w-[350px] lg:h-[ 350px]"}
    >
      <div
        class={`flex flex-col lg:m-10 border  w-[125px] h-[125px]  lg:w-[250px] lg:h-[250px] justify-center items-center ${
          COLOR[product.borderColor]
        } ${RADIUS_MOBILE[mobile]} ${RADIUS_DESKTOP[desktop]} hover:border-2`}
        data-deco="view-product"
        id={`item-card-${product.alt}`}
      >
        <div class="flex w-full mr-[2rem] lg:mr-[4rem] mt-5 lg:mt-10 justify-end">
          <img
            src={product.borderColor == 1 ? arrowR : arrowV}
            width={30}
            height={30}
            class="shrink-0 w-auto hidden lg:flex"
            alt={"arrow up"}
            loading={"lazy"}
          />
          <img
            src={product.borderColor == 1 ? arrowR : arrowV}
            width={15}
            height={15}
            class="shrink-0 w-auto flex lg:hidden"
            alt={"arrow up"}
            loading={"lazy"}
          />
        </div>

        <div
          class={`flex w-full h-full justify-center items-center lg:pb-10 pb-5  lg:px-10 px-5`}
          data-deco="view-product"
        >
          <img
            class={`w-full object-cover `}
            loading={"lazy"}
            src={product.desktop}
            alt={product.alt}
          />
        </div>
      </div>
    </a>
  );
}

function CardsCamps(
  { desktop = "none", mobile = "none", preload, productCard }: Props,
) {
  return (
    <>
      <div class="w-full py-2 bg-[#1E2D32]">
        <div class="container mx-auto flex flex-col justify-center items-center">
          <div
            class={`w-full flex my-10 text-white justify-center items-center text-center text-3xl lg:text-5xl gap-2 px-5`}
          >
            <p>
              <span>Nossos</span>{" "}
              <span class={`text-[#9990ff] font-bold`}>Clientes</span> e{" "}
              <span class={`text-[#76DBD3] font-bold`}>Parceiros</span>
            </p>
          </div>
          <div class="flex flex-row flex-wrap justify-center items-center lg:justify-center ">
            {productCard !== undefined
              ? (productCard.map((product, index) => (
                <CardItem
                  mobile={mobile}
                  desktop={desktop}
                  product={product}
                  preload={preload}
                />
              )))
              : ("")}
          </div>
        </div>
      </div>
    </>
  );
}
function SearchResult(
  { ...props }: Props,
) {
  return <CardsCamps {...props} />;
}

export default SearchResult;
