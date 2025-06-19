
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import RomanticText from '../components/RomanticText';
import Countdown from '../components/Countdown';
import Schedule from '../components/Schedule';
import DressCode from '../components/DressCode';
import PhotoCarousel from '../components/PhotoCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <Hero />
      <RomanticText />
      <Countdown />
      <Schedule />
      <DressCode />
      <PhotoCarousel />
    </div>
  );
};

export default Index;
