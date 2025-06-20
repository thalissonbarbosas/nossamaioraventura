
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-29T09:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="py-16 px-6 bg-wedding-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-12 tracking-wide">
          Contagem Regressiva
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center animate-fade-in">
            <div className="bg-wedding-gray text-wedding-white p-4 mb-3">
              <div className="text-4xl md:text-6xl font-light">
                {formatNumber(timeLeft.days)}
              </div>
            </div>
            <div className="text-sm md:text-base text-wedding-gray tracking-widest uppercase">
              Dias
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="bg-wedding-gray text-wedding-white p-4 mb-3">
              <div className="text-4xl md:text-6xl font-light">
                {formatNumber(timeLeft.hours)}
              </div>
            </div>
            <div className="text-sm md:text-base text-wedding-gray tracking-widest uppercase">
              Horas
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="bg-wedding-gray text-wedding-white p-4 mb-3">
              <div className="text-4xl md:text-6xl font-light">
                {formatNumber(timeLeft.minutes)}
              </div>
            </div>
            <div className="text-sm md:text-base text-wedding-gray tracking-widest uppercase">
              Minutos
            </div>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="bg-wedding-gray text-wedding-white p-4 mb-3">
              <div className="text-4xl md:text-6xl font-light">
                {formatNumber(timeLeft.seconds)}
              </div>
            </div>
            <div className="text-sm md:text-base text-wedding-gray tracking-widest uppercase">
              Segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
