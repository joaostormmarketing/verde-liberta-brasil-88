
const StatsSection = () => {
  const stats = [
    {
      number: "+10.000",
      label: "Clientes Atendidos",
      description: "Pessoas que confiaram em nosso trabalho"
    },
    {
      number: "+R$ 400M",
      label: "Economizados",
      description: "Valor total economizado pelos nossos clientes"
    },
    {
      number: "98%",
      label: "Taxa de Sucesso",
      description: "Clientes com nome limpo em até 10 dias"
    }
  ];

  return (
    <section className="bg-green-500 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-4 sm:mb-6">
            RESULTADOS QUE IMPRESSIONAM
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
            Mais de uma década transformando vidas e devolvendo dignidade financeira aos brasileiros
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-black bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-opacity-30 transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-black mb-2 sm:mb-3 leading-tight">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl font-bold text-black mb-2">
                {stat.label}
              </div>
              <p className="text-sm sm:text-base text-black opacity-90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl font-bold text-black mb-4">
            🏆 LÍDER EM LIMPEZA DE NOME NO BRASIL 🏆
          </p>
          <p className="text-base sm:text-lg text-black max-w-2xl mx-auto">
            Enquanto outros prometem, nós <strong>ENTREGAMOS RESULTADOS REAIS</strong>. 
            Nossos números falam por si só!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
