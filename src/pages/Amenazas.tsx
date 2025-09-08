import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreatsSection from '@/components/sections/ThreatsSection';
import heroImage from '@/assets/hero-case.jpg';
import HeroSection from '@/components/sections/HeroSection';
import { peligrosData } from '@/mock/peligros.mock';

const Peligros = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
        
      <HeroSection casoData={peligrosData} />

      <ThreatsSection />
      
      
      <Footer />
    </div>
  );
};

export default Peligros;