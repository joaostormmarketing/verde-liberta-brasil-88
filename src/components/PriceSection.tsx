
import WhatsAppIcon from '@/components/ui/whatsapp-icon';

const PriceSection = () => {
  return (
    <section id="price-section" className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          OFERTA ESPECIAL 🔥
        </h2>
        
        <p className="text-red-500 text-lg sm:text-xl font-bold mb-6 sm:mb-8 animate-pulse-slow">
          🔥 <strong>ÚLTIMAS 5 VAGAS RESTANTES!</strong> 🔥<br />
          <span className="text-white text-base sm:text-lg">
            <strong>Não perca essa oportunidade única de limpar seu nome com desconto exclusivo!</strong>
          </span>
        </p>
        
        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 w-full">
          <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl line-through">
              DE R$1.899,99
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <span className="text-green-500 text-2xl sm:text-3xl lg:text-4xl font-black">
                POR:
              </span>
              <span className="text-green-500 text-2xl sm:text-3xl lg:text-4xl font-black">
                R$999,00
              </span>
            </div>
            <p className="text-white text-sm sm:text-base lg:text-lg">
              À vista ou parcelado
            </p>
          </div>
        </div>
        
        <div className="flex justify-center w-full px-4">
          <a
            href="https://wa.me/553131574738?text=Olá,%20quero%20limpar%20meu%20nome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-4 sm:px-8 lg:px-12 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg w-full max-w-full sm:max-w-md lg:max-w-2xl"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-center leading-tight">QUERO LIMPAR MEU NOME AGORA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
