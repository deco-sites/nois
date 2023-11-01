import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";

function Navbar(
  { items, href_Instagram }: { items: INavItem[]; href_Instagram?: string },
) {
  const logo = "/LogoNois.svg";
  const { displayMenu } = useUI();

  return (
    <>
      {/* Desktop Version */}
      <div class="hidden lg:flex flex-row justify-between items-center w-full ">
        <div class={"w-[480px] flex justify-start items-center text-base"}>
          <ul class="flex justify-start font-medium text-[#76DBD3]  shrink-0  ">
            {items.map((item) => <NavItem item={item} />)}
          </ul>
        </div>

        <div class="flex-none  flex   mx-auto items-center py-4 shrink-0">
          <a href="/" aria-label="Page logo" class="block w-[120px]  ">
            <img
              src={logo}
              width={120}
              height={50}
              class="shrink-0 w-auto "
              alt={"Nois Agency Logo"}
              loading={"lazy"}
            />
          </a>
        </div>
        <div class={"w-[480px] flex justify-end items-center"}>
          <a
            href={href_Instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram logo"
          >
            <Icon
              class="text-[#76DBD3]"
              width={25}
              height={25}
              id="LinkedIn"
              strokeWidth={1}
            />
          </a>
        </div>
      </div>

      {/* Mobile Version */}
      <div class="flex lg:hidden flex-row justify-between items-center w-full py-4 ">
        {
          /* <div class={"w-[480px] flex justify-start items-center text-base"}>
          <ul class="flex justify-start font-medium text-[#76DBD3]  shrink-0  ">
            {items.map((item) => <NavItem item={item} />)}
          </ul>
        </div> */
        }

      

        <div class="flex-none  flex  shrink-0 justify-start">
          <a href="/" aria-label="Page logo" class="block w-[120px]  ">
            <img
              src={logo}
              width={120}
              height={50}
              class="shrink-0 w-auto "
              alt={"Logo nois"}
              loading={"lazy"}
            />
          </a>
        </div>
        <div class={" flex justify-end items-center"}>
          <a
            href={href_Instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram logo"
          >
            <Icon
              class="text-[#76DBD3]"
              width={25}
              height={25}
              id="LinkedIn"
              strokeWidth={1}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
