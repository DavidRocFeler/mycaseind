import { useState } from 'react';
import ThreatsSection from '@/components/sections/ThreatsSection';
import HeroSection from '@/components/sections/HeroSection';
import { peligrosData } from '@/mock/peligros.mock';

const Peligros = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  return (
    <div className="min-h-screen bg-background">        
      <HeroSection casoData={peligrosData} />

      <ThreatsSection />
    </div>
  );
};

export default Peligros;