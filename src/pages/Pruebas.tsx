import EvidenceSection from '@/components/sections/EvidenceSection';
import { pruebasData } from '@/mock/prueba.mock';
import HeroSection from '@/components/sections/HeroSection';
import { LanChange } from '@/types/lan.type';

const Pruebas = ({currentLanguage}: LanChange) => {

  return (
    <div className="min-h-screen bg-background">
      <HeroSection currentLanguage={currentLanguage} casoData={pruebasData} />

      <EvidenceSection 
      currentLanguage={currentLanguage} 
      />      
    </div>
  );
};

export default Pruebas;