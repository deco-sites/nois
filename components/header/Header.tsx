import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { INavItem } from "./NavItem.tsx";
import Alert from "./Alert.tsx";

import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    tagAsNew?: boolean;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

export interface Props {
  // alerts: string[];
  /**
   * @title Logo
   */

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[] | undefined;

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  href_Instagram?: string | undefined;
}

function Header({
  // alerts,
  products,
  navItems,
  suggestions,
  href_Instagram,
}: Props) {
  const searchbar = { ...products, suggestions };
  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class=" w-full z-50 bg-transparent px-[80px]">
          {navItems && (
            <Navbar
              items={navItems as INavItem[]}
              href_Instagram={href_Instagram}
            />
          )}
        </div>

        {/* <Alert alerts={alerts} /> */}
      </header>
    </>
  );
}

export default Header;
