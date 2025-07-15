
import React, { useMemo, useCallback } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = React.memo(() => {
  const testimonials = useMemo(() => [
    {
      name: "Jonathan",
      location: "São Paulo - SP",
      rating: 5,
      videoUrl: "/video-jonathan-depoimento.mp4"
    },
    {
      name: "Nathalia",
      location: "Recife - PE",
      rating: 5,
      videoUrl: "/video-nathalia-depoimento.mp4"
    },
    {
      name: "Jéssica",
      location: "Belo Horizonte - MG",
      rating: 5,
      videoUrl: "https://youtube.com/shorts/7-zDjooqHxw?feature=share",
      isYoutube: true
    }
  ], []);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 lg:mb-16">
          O que nossos clientes dizem
        </h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="relative rounded-lg shadow-lg overflow-hidden bg-black mb-3 sm:mb-4" style={{ aspectRatio: '9/16' }}>
                {testimonial.videoUrl ? (
                  testimonial.isYoutube ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${testimonial.videoUrl.split('/').pop()?.split('?')[0]}?modestbranding=1&showinfo=0&rel=0&controls=1`}
                      title={`Depoimento ${testimonial.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      key={`${testimonial.name}-${testimonial.videoUrl}`}
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                      playsInline
                      poster={`${testimonial.videoUrl}#t=1`}
                      onError={(e) => {
                        console.error(`Erro ao carregar vídeo de ${testimonial.name}:`, testimonial.videoUrl, e);
                      }}
                      onLoadStart={() => {
                        console.log(`Iniciando carregamento do vídeo de ${testimonial.name}:`, testimonial.videoUrl);
                      }}
                      onLoadedData={() => {
                        console.log(`Vídeo de ${testimonial.name} carregado com sucesso:`, testimonial.videoUrl);
                      }}
                      onCanPlay={() => {
                        console.log(`Vídeo de ${testimonial.name} pronto para reprodução:`, testimonial.videoUrl);
                      }}
                      onLoadedMetadata={() => {
                        console.log(`Metadados do vídeo de ${testimonial.name} carregados:`, testimonial.videoUrl);
                      }}
                      style={{
                        backgroundColor: 'black'
                      }}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  )
                ) : (
                  <div className="flex items-center justify-center border-2 border-dashed border-gray-300 h-full bg-gray-800">
                    <p className="text-gray-300 text-center">
                      <span className="block text-sm sm:text-base font-semibold mb-1">Vídeo Depoimento</span>
                      <span className="text-xs sm:text-sm">Adicione o vídeo aqui</span>
                    </p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-bold text-black text-sm sm:text-base">{testimonial.name}</p>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={() => {
              const priceSection = document.getElementById('price-section');
              priceSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-lg text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
          >
            <span className="text-center">QUERO RESULTADOS COMO ESTES!</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
