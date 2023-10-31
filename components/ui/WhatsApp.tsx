import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  phone: number;
  message: string;
}

function WhatsApp({ phone, message }: Props) {
  if (!phone) {
    return null;
  }

  const wppLink = (phone: number, message: string) => {
    const messageEncoded = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${messageEncoded}&type=phone_number&app_absent=0&lang=pt_BR`;
  };

  return (
    <a
      href={wppLink(phone, message)}
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
