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
    <section className="py-8 px-6 bg-wedding-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-wedding-gray mb-8 tracking-wide">
          Contagem Regressiva
        </h2>
        
        <div className="flex items-center justify-center text-wedding-gray animate-fade-in">
          <div className="text-4xl md:text-8xl font-light font-mono tracking-wider">
            {formatNumber(timeLeft.days)}
            <span className="text-wedding-gray/60 mx-2">:</span>
            {formatNumber(timeLeft.hours)}
            <span className="text-wedding-gray/60 mx-2">:</span>
            {formatNumber(timeLeft.minutes)}
            <span className="text-wedding-gray/60 mx-2">:</span>
            {formatNumber(timeLeft.seconds)}
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-4 text-sm md:text-base text-wedding-gray/80 tracking-widest uppercase space-x-6 md:space-x-12">
          <span>Dias</span>
          <span>Horas</span>
          <span>Minutos</span>
          <span>Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
