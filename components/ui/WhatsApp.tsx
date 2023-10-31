import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  phone?: number;
}

function WhatsApp({ phone }: Props) {
  if (!phone) {
    return null;
  }

  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0&text=Ol%C3%A1%20Daniel%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20a%20nois%20agency%20pode%20me%20ajudar%20a%20alavancar%20meu%20neg%C3%B3cio!&lang=pt_BR`}
      class="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="bg-[#45D268] text-center text-white p-2 rounded-full shadow-lg w-[80px] h-[80px] transition-all duration-200 group-hover:w-[250px] group-hover:h-[250px] px-2 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <Icon id="WhatsApp" size={42} class="flex w-full" />
        <span class="hidden w-full group-hover:inline group-hover:mx-2 transition-colors duration-500 py-5">
          Fale com um consultor
        </span>
      </button>
    </a>
  );
}

export default WhatsApp;
