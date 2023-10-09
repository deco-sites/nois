import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons; href: string };

export type StringItem = {
  label: string;
  href?: string;
  /** @default blank */
  target?: "blank" | "self";
};
export type StringNewsletter = {
  Title: string;
  desc?: string;
  successText: string;
  errorText: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  href?: string;
  bold?: boolean;
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  Href_Instagram: string;
  sections?: Section[];
}

function Footer(
  {
    sections = [],

    Href_Instagram,
  }: Props,
) {
  const icon = "/LogoGrad.png";
  const logo = "/LogoNois.svg";
  const arrow = "/arrowup.svg";

  return (
    <>
      <footer class="relative w-full flex flex-col bg-[#1E2D32]  text-[#76DBD3] px-20  pt-20">
        <div class=" w-full flex flex-col border-b border-[#76DBD3] z-10">
          <FooterContainer class="">
            {/* Desktop view */}

            <div class="flex flex-col text-xl">
              <span>
                Tem dúvidas ou precisa de mais informações?
              </span>
              <span>
                nois@hotmail.com
              </span>
            </div>
            <img
              src={icon}
              width={50}
              height={55}
              class="shrink-0 w-auto  my-10"
              alt={"Icon nois"}
              loading={"lazy"}
            />

            <ul class="flex flex-col mb-10 text-xl">
              {sections.map((section) => (
                <li>
                  <a
                    href={section.href}
                    class={`${section.bold && "font-semibold"}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>

            <div class=" flex flex-row justify-between w-full items-end gap-6 text-xl shrink-0">
              <div class="flex flex-row items-end gap-10">
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
                <a href="/" aria-label="Page logo link">nois.com.br</a>
              </div>

              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="arrow up"
              >
                <img
                  src={arrow}
                  width={50}
                  height={50}
                  class="shrink-0 w-auto "
                  alt={"arrow up"}
                  loading={"lazy"}
                />
              </a>
            </div>
          </FooterContainer>
        </div>

        <div class="w-full ">
          <FooterContainer class="flex flex-row justify-between w-full">
            <div class="flex flex-row gap-10">
              <span class="text-base">
                Cookie setting
              </span>

              <span class="text-base">
                © 2023 nois Labs, Inc.
              </span>
            </div>
            <div class="flex flex-row object-center justify-start text-end gap-5">
              <a
                href={Href_Instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram logo"
              >
                <Icon
                  class=" text-[#76DBD3] "
                  width={30}
                  height={30}
                  id="Instagram"
                  strokeWidth={2}
                />
              </a>
            </div>
          </FooterContainer> 
        </div>
      </footer>
    </>
  );
}

export default Footer;
