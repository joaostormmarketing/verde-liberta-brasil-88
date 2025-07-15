import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

import logoImage from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center md:text-left">
            <img src={logoImage} alt="ABCN Logo" className="h-24 sm:h-32 w-auto mx-auto md:mx-0 mb-3 sm:mb-4" />
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Escritório especializado em limpeza de nome e regularização financeira.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              CNPJ: 53.600.065/0001-34<br />
              ALOISIO CALADO NETO SOCIEDADE INDIVIDUAL DE ADVOCACIA
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Nossas Sedes</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-sm sm:text-base">São Paulo - SP</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Sul, Sudeste e Centro-Oeste</p>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-sm sm:text-base">Campina Grande - PB</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Nordeste e Norte</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm sm:text-base">(31) 3157-4738</p>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm sm:text-base">aloisio@abcn.com.br</p>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/abcn.advocacia.digital?igsh=MTVncmhhbzUzOTc2Zw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-green-500 transition-colors"
                >
                  @abcn.advocacia.digital
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <button
            onClick={() => {
              const priceSection = document.getElementById('price-section');
              priceSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 mb-4 sm:mb-6 w-full max-w-sm mx-auto"
          >
            Fale Conosco
          </button>
          
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 ABCN. Todos os direitos reservados. | Política de Privacidade | Termos de Uso
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
