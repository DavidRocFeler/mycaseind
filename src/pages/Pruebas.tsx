import { useState } from 'react';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EvidenceSection from '@/components/sections/EvidenceSection';
import heroImage from '@/assets/hero-case.jpg';
import { pruebasData } from '@/mock/prueba.mock';
import HeroSection from '@/components/sections/HeroSection';

const Pruebas = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection casoData={pruebasData} />

      <EvidenceSection />      
    </div>
  );
};

export default Pruebas;