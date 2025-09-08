import { useState } from 'react';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExtortionSection from '@/components/sections/ExtortionSection';
import heroImage from '@/assets/hero-case.jpg';
import HeroSection from '@/components/sections/HeroSection';
import { extorcionData } from '@/mock/extorcion.mock';

const Extorsion = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const handleDownloadPDF = () => {
    console.log('Downloading Extorsion PDF...');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
       
      <HeroSection casoData={extorcionData} />

      <ExtortionSection />
    
      <Footer />
    </div>
  );
};

export default Extorsion;