import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { INavItem } from "./NavItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  items: INavItem[];
}

function Sidebar({ interval = 5, items }: Props, logo: LiveImage) {
  const id = useId();
  return (
    <div id={id}>
      <div class="w-[80px] flex flex-col min-h-[300px]  bg-white pr-8 justify-center items-center ">
        <div class="w-full flex text-center justify-center items-start mb-6">
          <a
            class="transform transition   duration-100 hover:scale-125  text-center justify-center items-start"
            aria-label="Log in"
          >
            <Icon id="User" width={25} height={25} strokeWidth={0.4} />
          </a>
        </div>
        <div class="w-full flex text-center justify-center items-start mb-6">
          <a
            class=" transform transition  duration-100 hover:scale-125  text-center justify-center  items-start "
            href="/account#/orders"
            aria-label="Orders"
          >
            <Icon id="User" width={25} height={25} strokeWidth={0.4} />
          </a>
        </div>
        <div class="w-full flex text-center justify-center items-start mb-6">
          <a
            class="transform transition  duration-100 hover:scale-125  text-center justify-center  items-start"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon id="User" size={25} strokeWidth={2} fill="none" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
