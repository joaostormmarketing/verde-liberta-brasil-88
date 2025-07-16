
import { MapPin, Users } from 'lucide-react';

import logoImage from '@/assets/logo.png';
import jusBrasilPrint from '@/assets/jus-brasil-print.png';
import cnpjImage from '@/assets/cnpj-image.png';
import serviceImage1 from '@/assets/service-image-1.png';
import serviceImage2 from '@/assets/service-image-2.png';

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12">
          Conheça a ABCN, solução para seu problema financeiro..
        </h2>
        
        {/* Estatísticas e credibilidade */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">+ 10.000</h3>
            <p className="text-gray-700 font-medium">processos em todo o Brasil</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <img 
              src={jusBrasilPrint} 
              alt="Print do JusBrasil" 
              className="w-full h-32 object-cover rounded-lg mb-4 animate-pulse"
            />
          </div>
        </div>
        
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Escritório físico para atender suas necessidades
          </h3>
        </div>
        
        {/* Vídeo do escritório */}
        <div className="mb-8 sm:mb-12">
          <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-gray-100" style={{ aspectRatio: '16/10' }}>
            <video 
              className="w-full h-full object-contain"
              controls
              poster={logoImage}
              preload="metadata"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              playsInline
            >
              <source src="/video-escritorio.mp4" type="video/mp4" />
              <p className="absolute inset-0 flex items-center justify-center text-gray-500">
                Seu navegador não suporta o elemento de vídeo.
              </p>
            </video>
          </div>
        </div>
        
        {/* CNPJ Image */}
        <div className="mb-8 sm:mb-12 text-center">
          <img 
            src={cnpjImage} 
            alt="CNPJ da empresa" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* O que fazemos section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-6 sm:mb-8">
            O que fazemos?
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            Retiramos todas as restrições de Protestos em Cartórios (CENPROT), Serasa, SPC e SCPC Boa Vista sem o pagamento das dívidas, independente da quantidade de registros ou valores.
          </p>
          
          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <img 
                src={serviceImage1} 
                alt="Serviço 1" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <img 
                src={serviceImage2} 
                alt="Serviço 2" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            Nosso escritório conta com duas sedes estratégicas para garantir um atendimento eficiente e regionalizado em todo o país.
          </p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-black mb-2 text-sm sm:text-base">São Paulo - SP</h3>
                <p className="text-gray-700 text-sm sm:text-base">Responsável pelo suporte aos estados das regiões Sul, Sudeste e Centro-Oeste.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-black mb-2 text-sm sm:text-base">Campina Grande - PB</h3>
                <p className="text-gray-700 text-sm sm:text-base">Nossa matriz atende de forma dedicada os estados das regiões Nordeste e Norte.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
            <p className="text-gray-700 text-sm sm:text-base text-justify">
              Somos um escritório de advocacia devidamente registrado na Ordem dos Advogados do Brasil, sob CNPJ nº 53.600.065/0001-34 - RAZÃO SOCIAL: ALOISIO CALADO NETO SOCIEDADE INDIVIDUAL DE ADVOCACIA.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => {
              const priceSection = document.getElementById('price-section');
              priceSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 w-full max-w-sm mx-auto"
          >
            Quero atendimento on-line agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
