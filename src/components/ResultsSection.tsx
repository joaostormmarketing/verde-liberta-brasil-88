import { MessageCircle } from 'lucide-react';

const ResultsSection = () => {
  return (
    <section className="bg-green-500 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">
          RESULTADOS QUE IMPRESSIONAM
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-white mb-8 sm:mb-12">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              98%
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold">
              Clientes com nome limpo em até 10 dias
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              +5.000
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold">
              Clientes Atendidos
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              R$ 2Mi+
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold">
              Em Dívidas Resolvidas
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => {
              const priceSection = document.getElementById('price-section');
              priceSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-green-500 font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 w-full max-w-sm mx-auto"
          >
            Quero atendimento on-line agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;