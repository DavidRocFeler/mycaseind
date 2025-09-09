import NewsSection from '@/components/sections/NewsSection';
import HeroSection from '@/components/sections/HeroSection';
import { newsData } from '@/mock/news.mock';
import { LanChange } from '@/types/lan.type';

const Noticias = ({currentLanguage}: LanChange) => {

  return (
    <div className="min-h-screen bg-background">      
      <HeroSection  currentLanguage={currentLanguage} casoData={newsData} />

      <NewsSection />
    </div>
  );
};

export default Noticias;