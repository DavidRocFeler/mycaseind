import { CasoData } from '@/types/caso.type';

interface HeroSectionProps {
  casoData: CasoData[];
}

const HeroSection = ({ casoData }: HeroSectionProps) => {
  // Tomamos el primer elemento del array (asumiendo que solo hay uno)
  const caso = casoData[0];

  if (!caso) {
    return null; // o un mensaje de carga/error
  }

  return (
    <main className="w-full">
      <section className="relative flex items-center pb-[20rem] pt-[5rem]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${caso.imagenUrl})` 
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white border-2 border-white/30 rounded-lg p-8 bg-black/20 backdrop-blur-sm">
            <p className="text-sm md:text-2xl lg:text-3xl text-gray-200 leading-relaxed p-4 bg-white/10 rounded">
              {caso.descripcion}
            </p>
          </div>
        </div>

        <div className='absolute w-[100%] lg:w-[50%] flex justify-center items-center px-10 bg-[#45246E] bottom-0 h-[15rem]'>
          <p className='text-white text-[2rem] sm:text-[2.5rem] font-extralight leading-8 sm:leading-10 md:leading-[3rem]'>
            {caso.textoBanner}
          </p>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;