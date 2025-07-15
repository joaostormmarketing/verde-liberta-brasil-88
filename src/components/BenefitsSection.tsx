
import { Shield, Zap, Users, CheckCircle } from 'lucide-react';


const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Atendimento 100% Digital e Seguro",
      description: "Processo totalmente online com máxima segurança de dados"
    },
    {
      icon: Users,
      title: "Advogados Especialistas",
      description: "Equipe especializada em direito do consumidor e negociação"
    },
    {
      icon: Zap,
      title: "Processo Rápido e Sem Burocracia",
      description: "Agilidade na resolução sem complicações desnecessárias"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Satisfação",
      description: "Comprometimento total com os resultados do seu caso"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16">
          Por que limpar seu nome conosco?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => {
              const priceSection = document.getElementById('price-section');
              priceSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
          >
            QUERO LIMPAR MEU NOME AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
