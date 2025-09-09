import ThreatsSection from '@/components/sections/ThreatsSection';
import HeroSection from '@/components/sections/HeroSection';
import { peligrosData } from '@/mock/peligros.mock';
import { LanChange } from '@/types/lan.type';

const Peligros = ({currentLanguage}: LanChange) => {

  return (
    <div className="min-h-screen bg-background">        
      <HeroSection casoData={peligrosData} />

      <ThreatsSection />
    </div>
  );
};

export default Peligros;