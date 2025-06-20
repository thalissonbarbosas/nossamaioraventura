
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-white to-wedding-cream">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in">
        <h2 className="text-dress-dark-gray text-xl md:text-2xl font-light mb-12 tracking-wide">
          Nossa Maior Aventura
        </h2>
        
        <h1 className="font-brittany text-6xl md:text-8xl text-dress-dark-gray mb-6 leading-none">
          Talyta & Thalisson
        </h1>
        
        <div className="text-dress-dark-gray font-light tracking-widest text-sm md:text-lg mt-12">
          <p className="mb-2">29 DE NOVEMBRO DE 2025</p>
          <p>SÁBADO · 9:30H</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rounded border-dress-dark-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dress-dark-gray mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
