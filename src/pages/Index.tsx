import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-case.jpg';
import { indexData } from '@/mock/index.mock';

interface IndexProps {
  currentLanguage: 'es' | 'nl';
}

const Index = ({ currentLanguage }: IndexProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <section className="relative py-[5rem] flex items-center">
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
                {indexData.title[currentLanguage]}
              </h1>
              
              <p className="text-md md:text-2xl lg:text-3xl mb-8 text-gray-200 leading-relaxed border-1 border-white/20 rounded p-4 bg-white/10">
                {indexData.description[currentLanguage]}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <Link 
                  to="/caso" 
                  onClick={scrollToTop}
                  className="bg-white/10 hover:bg-white/20 border-1 border-white/30 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-lg">
                    {indexData.cards.caso.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {indexData.cards.caso.description[currentLanguage]}
                  </p>
                </Link>
                <Link 
                  to="/pruebas" 
                  onClick={scrollToTop}
                  className="bg-white/10 hover:bg-white/20 border-1 border-white/30 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-lg">
                    {indexData.cards.pruebas.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {indexData.cards.pruebas.description[currentLanguage]}
                  </p>
                </Link>
                <Link 
                  to="/extorsion" 
                  onClick={scrollToTop}
                  className="bg-white/10 hover:bg-white/20 border-1 border-white/30 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-lg">
                    {indexData.cards.extorsion.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {indexData.cards.extorsion.description[currentLanguage]}
                  </p>
                </Link>
                <Link 
                  to="/peligros" 
                  onClick={scrollToTop}
                  className="bg-white/10 hover:bg-white/20 border-1 border-white/30 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-lg">
                    {indexData.cards.peligros.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {indexData.cards.peligros.description[currentLanguage]}
                  </p>
                </Link>
                <Link 
                  to="/noticias" 
                  onClick={scrollToTop}
                  className="bg-white/10 hover:bg-white/20 border-1 border-white/30 rounded-lg p-4 transition-colors"
                >
                  <h3 className="font-semibold text-lg">
                    {indexData.cards.noticias.title[currentLanguage]}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {indexData.cards.noticias.description[currentLanguage]}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;