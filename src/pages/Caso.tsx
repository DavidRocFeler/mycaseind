import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-case.jpg';
import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { casoData } from '@/mock/caso.mock';

const Caso = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const handleDownloadPDF = () => {
    // Simulate PDF download
    console.log('Downloading Caso PDF...');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      <HeroSection casoData={casoData} />
      
      <Footer />
    </div>
  );
};

export default Caso;