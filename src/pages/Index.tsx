
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import RomanticText from '../components/RomanticText';
import Countdown from '../components/Countdown';
import Schedule from '../components/Schedule';
import DressCode from '../components/DressCode';
import PhotoCarousel from '../components/PhotoCarousel';
import GuestConfirmation from '../components/GuestConfirmation';

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <Hero />
      <RomanticText />
      <Countdown />
      <Schedule />
      <DressCode />
      <PhotoCarousel />
      <GuestConfirmation />
    </div>
  );
};

export default Index;
