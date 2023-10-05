import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface INavItem {
  label: string;
  href: string;
  tagAsNew: boolean;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  return (
    <li class=" relative   font-semibold flex items-center pt-[10px] pb-[10px]  h-[70px] ">
      <a href={href} class="px-5">
        <span>
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
