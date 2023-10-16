import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
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
}

export interface Props {
  images: Banner;
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;

  /** @description Ex: 5511222225555 */
  numberWhats?: number
}

function BannerItem(
  { images, numberWhats,preload  }:Props,
) {
  const {
    desktop,
    mobile,
    alt,
  } = images;
  const logo = "/IconLogo.png";

  
  return (
    <div
      class="relative overflow-y-hidden w-full h-full"
    >
      <Picture preload={preload}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={preload ? "high" : "auto"}
          src={mobile}
          width={360}
          height={600}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={preload ? "high" : "auto"}
          src={desktop}
          width={1920}
          height={950}
        />

        <img
          class="w-full h-full"
          loading={preload ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>

      <div class="absolute top-[100px] bottom-0 left-0 right-0  flex flex-col justify-center items-center w-full gap-8   text-[#76DBD3] ">
        
        <form >
          <div class="flex flex-row flex-wrap justify-evenly gap-8 w-[500px]  mt-8 ">
            <div class={`w-[230px]`}>
              <label for="name-1" class="sr-only">
                Nome
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="name-1"
                  class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]  focus:outline-none "
                  placeholder="Nome"  
                  
                  />
              
              </div>
            </div>

            <div  class={`w-[230px]`}>
              <label for="Sobre-1" class="sr-only">
                Sobre nome
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="Sobre-1"
                  class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]  focus:outline-none   "
                  placeholder="Sobre nome"
                />
              
              </div>
            </div>
            <div  class={`w-[230px]`}>
              <label for="E-mail-1" class="sr-only">
                E-mail
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="E-mail-1"
                  class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]   focus:outline-none  " 
                  placeholder="E-mail"
                />
              
              </div>
            </div>

            <div  class={`w-[230px]`}>
              <label for="Telefone-1" class="sr-only">
                Telefone
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="Telefone-1"
                  class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]  focus:outline-none "
                  placeholder="Telefone"
                />
              
              </div>
            </div>
            <div  class={`w-full h-[200px]`}>
              <label for="Mensagem-1" class="sr-only">
                Mensagem...
              </label>
              <div class="flex justify-start items-start  w-full h-[200px] ">
                <textarea  
                  id="Mensagem-1"
                  class="py-3 ps-5 pe-4 block w-full h-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]   focus:outline-none "
                  placeholder="Mensagem...">
                </textarea>
              </div>
            </div>

            <div class="grid">
              <a
                href={`https://wa.me/${numberWhats}?text=`}
                target="_blank"
                type="submit"
                class="flex flex-row justify-center items-center py-3 ps-5 pe-4  w-full h-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3] "
                >
                Enviar
                <svg
                  class="w-3 h-3 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </form>

        <img
          src={logo}
          width={60}
          height={65}
          class="shrink-0 w-auto mt-8 "
          alt={"Icon nois"}
          loading={"lazy"}
        />
      </div>
    </div>
  );
}

export default BannerItem;
