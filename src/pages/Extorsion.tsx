import { useState } from 'react';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExtortionSection from '@/components/sections/ExtortionSection';
import protectionIcon from '@/assets/protection-icon.jpg';

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
      
      <main className="w-full pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8 border-2 border-gray-200 rounded-lg p-6 bg-white">
            <div className="flex justify-center mb-4 relative inline-block">
              <img 
                src={protectionIcon} 
                alt="Protección" 
                className="w-24 h-24 rounded-full object-cover border-1 border-gray-300"
              />
              <button
                onClick={handleDownloadPDF}
                className="absolute bottom-0 right-0 bg-primary hover:bg-primary/80 text-white p-1.5 rounded-full transition-colors border-1 border-white"
              >
                <Download className="h-3 w-3" />
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold title-purple">
              Extorsión
            </h1>
          </div>
        </div>
        
        <ExtortionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Extorsion;