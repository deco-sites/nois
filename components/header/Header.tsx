import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "apps/commerce/types.ts";
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
   * @title Instagram Nois
   */

  href_Instagram?: string | undefined;

  /**
   * @title Alert message
   */
  alerts?: string[];
}

function Header({
  alerts,

  navItems,
  href_Instagram,
}: Props) {
  return (
    <>
      <header>
        {alerts && <Alert alerts={alerts} />}

        <div class=" w-full absolute  z-50 bg-transparent mt-10 px-20">
          {navItems && (
            <Navbar
              items={navItems as INavItem[]}
              href_Instagram={href_Instagram}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
