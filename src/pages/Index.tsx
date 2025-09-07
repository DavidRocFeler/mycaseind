import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import EvidenceSection from '@/components/sections/EvidenceSection';
import ExtortionSection from '@/components/sections/ExtortionSection';
import ThreatsSection from '@/components/sections/ThreatsSection';
import NewsSection from '@/components/sections/NewsSection';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    // In a real implementation, this would change the content language
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO and Accessibility */}
      <main className="w-full">
        <Header 
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
        
        {/* Main Content Sections */}
        <HeroSection />
        <EvidenceSection />
        <ExtortionSection />
        <ThreatsSection />
        <NewsSection />
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
