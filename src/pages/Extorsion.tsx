import ExtortionSection from '@/components/sections/ExtortionSection';
import HeroSection from '@/components/sections/HeroSection';
import { extorcionData } from '@/mock/extorcion.mock';
import { LanChange } from '@/types/lan.type';

const Extorsion = ({currentLanguage}: LanChange) => {

  return (
    <div className="min-h-screen bg-background">       
      <HeroSection currentLanguage={currentLanguage} casoData={extorcionData} />

      <ExtortionSection 
      currentLanguage={currentLanguage}
      />    
    </div>
  );
};

export default Extorsion;