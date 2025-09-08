import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsSection from '@/components/sections/NewsSection';
import heroImage from '@/assets/hero-case.jpg';
import HeroSection from '@/components/sections/HeroSection';
import { newsData } from '@/mock/news.mock';

const Noticias = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">      
      <HeroSection casoData={newsData} />

      <NewsSection />
    </div>
  );
};

export default Noticias;