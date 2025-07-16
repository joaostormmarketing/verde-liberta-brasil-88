

import { useCallback } from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-green-500 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pt-20 sm:pt-24 overflow-hidden">
      <div className="container mx-auto text-center max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
          CHEGA DE NOME SUJO!
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-green-400 max-w-3xl mx-auto px-2 font-bold">
          🔥 MAIS DE 10.000 BRASILEIROS JÁ LIMPARAM SEU NOME CONOSCO! 🔥
        </p>
        
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-white max-w-3xl mx-auto px-2">
          Regularize sua situação financeira com nossa equipe especializada de advogados e
          <strong className="text-green-400"> junte-se aos milhares que economizaram mais de R$ 400 MILHÕES</strong>
        </p>

        {/* VSL Video */}
        <div className="w-full max-w-5xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4">
          <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-contain bg-black"
              autoPlay
              playsInline
              controls
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              onLoadedData={useCallback(() => {
                // Garante que o vídeo tenha som - apenas uma vez
                const video = document.querySelector('video') as HTMLVideoElement;
                if (video && video.muted) {
                  video.muted = false;
                  video.play().catch(() => {
                    console.log('Autoplay bloqueado pelo navegador');
                  });
                }
              }, [])}
              style={{ 
                pointerEvents: 'auto'
              }}
            >
              <source src="/video-vsl.mp4" type="video/mp4" />
              <p className="absolute inset-0 flex items-center justify-center text-white">
                Seu navegador não suporta o elemento de vídeo.
              </p>
            </video>
          </div>
        </div>
        
        {/* Video Caption */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <span>🔊</span>
            <span>verifique se seu volume está ligado</span>
          </p>
        </div>

        <button
          onClick={useCallback(() => {
            const priceSection = document.getElementById('price-section');
            priceSection?.scrollIntoView({ behavior: 'smooth' });
          }, [])}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 shadow-lg w-full max-w-md mx-auto"
        >
          <span className="text-center">QUERO LIMPAR MEU NOME AGORA!</span>
        </button>
        
        <div className="text-xs sm:text-sm text-gray-400 mt-4 max-w-2xl mx-auto px-4 flex flex-wrap justify-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1">⚡ Atendimento imediato</span>
          <span className="flex items-center gap-1">🛡️ 100% seguro</span>
          <span className="flex items-center gap-1">📱 Processo 100% digital</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
