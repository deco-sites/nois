import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import Image from "deco-sites/std/components/Image.tsx";
function Navbar({ items }: { items: INavItem[] }) {
  const logo = "/LogoNois.svg";

  return (
    <>
      {/* Desktop Version */}
      <div class="mb:hidden flex flex-row justify-between items-center w-full pl-2 pr-6 gap-8">
        <ul class="flex justify-start  text-[#76DBD3] ml-0 shrink-0 gap-4 ">
          {items.map((item) => <NavItem item={item} />)}
        </ul>

        <div class="flex-none w-44 shrink-0">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <img
              src={logo}
              width={50}
              class="shrink-0 w-auto h-[27px]"
              alt={"Logo Baw"}
              loading={"lazy"}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
