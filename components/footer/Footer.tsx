import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { ComponentChildren } from "preact";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

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
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-white text-[14px]">
      {isIcon(item)
        ? (
          <div class="border-white border border-solid py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          item.href
            ? (
              <a
                href={item.href}
                target={item.target ? `_${item.target}` : "_blank"}
              >
                {item.label}
              </a>
            )
            : <span>{item.label}</span>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  Service: string;
  Href_Instagram: string;

  sections?: Section[];
}

function Footer(
  {
    sections = [],
    Service,
    Href_Instagram,
  }: Props,
) {
  return (
    <>
      <footer class="relative w-full flex flex-col bg-[#1E2D32]  text-[#76DBD3] px-20">
        <div class=" w-full flex flex-col border-b border-[#76DBD3] z-10">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="flex flex-col  justify-start gap-8 ">
              {sections.map((section) => (
                <li>
                  <span class="text-[14px]">
                    {section.label}
                  </span>

                  <ul
                    class={`flex ${
                      isIcon(section.children[0]) ? "flex-row" : "flex-col"
                    } gap-2 pt-2 flex-wrap`}
                  >
                    {section.children.map((item) => (
                      <li>
                        <SectionItem item={item} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li class='class="text-[14px]'>
                <span>
                  Fale Conosco
                </span>
                <ul class="flex flex-col gap-2 pt-2 flex-wrap">
                  <li>
                  </li>

                  <li>
                  </li>
                </ul>
              </li>
            </ul>
          </FooterContainer>
        </div>

        <div class="w-full ">
          <FooterContainer class="flex flex-row justify-between w-full">
            <div>
              <span class="text-xs">
                Cookie setting
              </span>

              <span class="text-xs">
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
                  class=" text-[#76DBD3] pb-1"
                  width={32}
                  height={32}
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
