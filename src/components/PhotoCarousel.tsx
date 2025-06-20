import { useState, useEffect } from 'react';

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    '/images/carousel/1.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [photos.length]);

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
  };

  const goToPrevious = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="py-6 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-6 tracking-wide">
          Nossos Momentos
        </h2>
        
        <div className="relative overflow-hidden wedding-shadow bg-wedding-white p-4">
          <div className="relative h-96 overflow-hidden rounded-xl group">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentPhoto ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={photo}
                  alt={`Foto do casal ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 touch-manipulation"
              aria-label="Foto anterior"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 touch-manipulation"
              aria-label="Próxima foto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentPhoto
                    ? 'bg-wedding-gray scale-110'
                    : 'bg-wedding-gray opacity-40 hover:opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Final message */}
        <div className="mt-12 text-center">
          <p className="text-wedding-gray font-light text-lg mb-4">
            Mal podemos esperar para celebrar este momento especial com vocês!
          </p>
          <p className="font-brittany text-3xl text-wedding-gray mt-8">
            Talyta & Thalisson
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
