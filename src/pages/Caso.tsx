import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { casoData } from '@/mock/caso.mock';
import MyCase from '@/components/sections/MyCase';
import { LanChange } from '@/types/lan.type';

const Caso = ({ currentLanguage }: LanChange) => {
  // Especifica explícitamente el tipo 'nl' | 'es'

  return (
    <div className="min-h-screen bg-background">
      <HeroSection casoData={casoData} />
      <MyCase currentLanguage={currentLanguage} />
    </div>
  );
};

export default Caso;