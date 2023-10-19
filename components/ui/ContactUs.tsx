export interface Props {
  href: string;
}

export default function BannnerGrid({ href }: Props) {
  const icon = "/paper-plane-outline.svg";

  return (
    <div class="w-full bg-[#1E2D32] py-[40px] px-[30px] lg:px-[100px]  ">
      <section
        href={href}
        class="flex items-start w-full h-[120px] lg:h-[300px] bg-gradient-to-t from-[#9990FF]  to-[#76DBD3] p-6 rounded-[20px]  lg:py-[60px]  lg:px-[50px] lg:rounded-[50px] "
      >
        <div class=" flex flex-col  w-full h-full justify-between ">
          <div class="flex  flex-row  w-full justify-between text-left  mb-5">
            <a href={href}>
              <div class="flex flex-col text-[10px] lg:text-base text-left w-full">
                <span class="text-black">
                  Tem
                </span>
                <span class="text-black font-bold ">
                  duvidas?
                </span>
              </div>
            </a>

            <a
              href={href}
              class="hidden lg:flex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperPlane icon"
            >
              <img
                src={icon}
                width={36}
                height={36}
                id="PaperPlane"
              />
            </a>

            <a
              href={href}
              class="lg:hidden flex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperPlane icon"
            >
              <img
                src={icon}
                width={12}
                height={12}
                id="PaperPlane"
              />
            </a>
          </div>

          <div class="flex text-left text-2xl lg:text-5xl w-full lg:leading-10">
            <a href={href}>
              <span class="font-bold">
                Contate-
              </span>
              <span class="font-normal">
                nos
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
