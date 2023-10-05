import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface INavItem {
  label: string;
  href: string;
  tagAsNew: boolean;
  children?: INavItem[];
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children } = item;

  return (
    <li class=" relative  group font-medium flex items-center border-b-2 border-transparent  b pt-[10px] pb-[10px] box-border h-[70px] ease-out duration-300">
      <a href={href} class="px-4 py-3">
        <span>
          {label}
          {children && children.length > 0 && (
            <Icon
              id="ChevronDown"
              strokeWidth={2}
              height="15px"
              width="15px"
              class="inline mx-2"
            />
          )}
        </span>
      </a>
      {children && children.length > 0 &&
        (
          <div
            class=" bg-transparent fixed hidden hover:flex group-hover:flex bg-base-100 z-50
              items-center justify-center  border-b-2 border-base-200 pl-10 py-8  max-w-[500px] "
            style={{ top: "0px", marginTop: "70px" }}
          >
            {/* items-start justify-center */}
            <ul class="flex flex-row items-center justify-start flex-wrap min-w-[450px] gap-[20px] ">
              {children.map((node) => (
                <li class="font-light w-[135px] text-start">
                  <a
                    class="uppercase text-[#76DBD3] hover:font-medium"
                    href={node.href}
                  >
                    <span>{node.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
