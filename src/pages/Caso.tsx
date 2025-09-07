import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-case.jpg';
import { useState } from 'react';

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
      
      <main className="w-full">
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white border-2 border-white/30 rounded-lg p-8 bg-black/20 backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mi Caso: Buscando Justicia y Seguridad
              </h1>
              
              <div className="relative inline-block">
                <img 
                  src={heroImage} 
                  alt="Caso de Refugio" 
                  className="w-64 h-48 object-cover rounded-lg mx-auto mb-6 border-2 border-white/50"
                />
                <button
                  onClick={handleDownloadPDF}
                  className="absolute bottom-2 right-2 bg-primary hover:bg-primary/80 text-white p-2 rounded-full transition-colors border-1 border-white/30"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed border-1 border-white/20 rounded p-4 bg-white/10">
                Una presentación completa y organizada de mi solicitud de refugio, 
                demostrando la necesidad real de protección internacional y documentando 
                cada aspecto de mi caso con evidencia verificable.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Caso;