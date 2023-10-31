import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useState } from "preact/hooks";
import { RefObject, useEffect, useRef } from "preact/compat";


export interface Props {

}
  

function ContactForm(
  { }: Props,
) {
  
  const logo = "/IconLogo.png";

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div class="relative w-full h-full pt-11 bg-[#121212]">
      <div class="container m-auto py-11">
        <div class="flex flex-col justify-center items-center w-full gap-8 text-[#76DBD3] ">
          <form>
            <div class="flex flex-row flex-wrap justify-evenly gap-8 w-[500px]  mt-8 ">
              <div class={`w-full`}>
                <label for="name-1" class="sr-only">
                  Nome
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="name-1"
                    class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]  focus:outline-none "
                    placeholder="Nome"
                    value={name}
                    required
                  />
                </div>
              </div>
              <div class={`w-[230px]`}>
                <label for="E-mail-1" class="sr-only">
                  E-mail
                </label>
                <div class="relative">
                  <input
                    type="email"
                    id="E-mail-1"
                    class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]   focus:outline-none  "
                    placeholder="E-mail"
                    value={email}
                    required
                  />
                </div>
              </div>

              <div class={`w-[230px]`}>
                <label for="Telefone-1" class="sr-only">
                  Telefone
                </label>
                <div class="relative">
                  <input
                    type="phone"
                    id="Telefone-1"
                    class="py-3 ps-5 pe-4 block w-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]  focus:outline-none "
                    placeholder="Telefone"
                    value={phone}
                    required
                  />
                </div>
              </div>
              <div class={`w-full h-[200px]`}>
                <label for="Mensagem-1" class="sr-only">
                  Mensagem...
                </label>
                <div class="flex justify-start items-start  w-full h-[200px] ">
                  <textarea
                    id="Mensagem-1"
                    class="py-3 ps-5 pe-4 block w-full h-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3]   focus:outline-none "
                    placeholder="Mensagem..."
                    value={message}
                  >
                  </textarea>
                </div>
              </div>

              <div class="grid">
                <a
                  href={`https://wa.me/+5561998121416`}
                  target="_blank"
                  type="submit"
                  class="flex flex-row justify-center items-center py-3 ps-5 pe-4  w-full h-full rounded-md bg-transparent border text-sm border-[#76DBD3]  text-[#76DBD3] placeholder:text-[#76dbd3] "
                >
                  Enviar
                  <svg
                    class="w-3 h-3 ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </form>

          <img
            src={logo}
            width={60}
            height={65}
            class="shrink-0 w-auto mt-8 "
            alt={"Icon nois"}
            loading={"lazy"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
