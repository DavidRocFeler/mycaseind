import { useState } from 'react';
import ExtortionSection from '@/components/sections/ExtortionSection';
import HeroSection from '@/components/sections/HeroSection';
import { extorcionData } from '@/mock/extorcion.mock';

const Extorsion = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  return (
    <div className="min-h-screen bg-background">       
      <HeroSection casoData={extorcionData} />

      <ExtortionSection />    
    </div>
  );
};

export default Extorsion;