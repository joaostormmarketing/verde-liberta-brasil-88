
import WhatsAppIcon from '@/components/ui/whatsapp-icon';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/553131574738?text=Olá,%20quero%20limpar%20meu%20nome"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
    >
      <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden group-hover:block whitespace-nowrap pr-2 font-medium text-sm sm:text-base">
        Fale Conosco
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
