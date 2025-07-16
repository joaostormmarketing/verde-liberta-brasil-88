import ceoPhoto from '@/assets/ceo-photo.png';

const CEOSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12">
          Nosso Advogado Responsável
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* CEO Photo */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={ceoPhoto} 
              alt="Dr. Aloisio Calado Neto" 
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* CEO Bio */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Dr. Aloisio Calado tem mais de 19 anos de experiência jurídica, com mais de 10 mil processos em seu currículo. Formado em Direito, especialista em Processo Civil e Doutor em Direito pela UNLZ/Argentina.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
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

export default CEOSection;