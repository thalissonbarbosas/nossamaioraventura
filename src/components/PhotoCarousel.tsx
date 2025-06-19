
import { useState, useEffect } from 'react';

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=800&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-12 tracking-wide">
          Nossos Momentos
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl wedding-shadow bg-wedding-white p-4">
          <div className="relative h-96 overflow-hidden rounded-xl">
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
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
          <p className="font-brittany text-3xl text-wedding-gray">
            Com amor, Talyta & Thalisson
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
