
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-white to-wedding-cream opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h2 className="text-wedding-gray text-lg md:text-xl font-light mb-4 tracking-wide">
          Nossa Maior Aventura
        </h2>
        
        <h1 className="font-brittany text-6xl md:text-8xl text-wedding-gray mb-6 leading-none">
          Talyta & Thalisson
        </h1>
        
        <div className="text-wedding-gray font-light tracking-widest text-sm md:text-base">
          <p className="mb-2">15 DE MARÇO DE 2025</p>
          <p>SÁBADO · 16:00H</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wedding-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wedding-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
