import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/logo.png'
import ButtonLan from './ui/ButtonLan';
import logoResponsive from '@/assets/logoResponsive.png'

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const location = useLocation();

  const navigation = [
    { name: 'Caso', href: '/caso' },
    { name: 'Pruebas', href: '/pruebas' },
    { name: 'Extorsión', href: '/extorsion' },
    { name: 'Peligros', href: '/peligros' },
    { name: 'Noticias', href: '/noticias' },
  ];

  // Efecto para detectar scroll y tamaño de ventana
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Inicializar el ancho de ventana
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para scroll al top al navegar
  const scrollToTop = () => {
    window.scrollTo({ top: 0});
    setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determinar si estamos en vista móvil (≤ 1100px)
  const isMobileView = windowWidth <= 1100;

  // Calcular la clase de posición del header
  const getHeaderPositionClass = () => {
    if (isMobileView) {
      // En móviles: siempre top-0, sin efecto de scroll
      return 'top-0';
    } else {
      // En desktop: efecto de scroll que desplaza el header
      return isScrolled ? '-top-[6rem]' : 'top-0';
    }
  };

  return (
    <>
      <header className={`sticky z-50 header-bg border-[#EFE1F4] border-b border-borde bg-white flex flex-col transition-all duration-500 ease-in-out ${getHeaderPositionClass()}`}>
        {/* Contenedor hiddenDiv - se oculta en viewports ≤ 1100px */}
        {!isMobileView && (
          <div id='hiddenDiv'>
            <Link 
            onClick={scrollToTop}
            to='/' className='flex justify-center pb-4'>
              <img className='w-[15rem]' src={Logo} alt="Logo Ind" />
            </Link>
            <div className='absolute right-[7rem] top-6 text-[0.9rem]'>
            <ButtonLan/>       
            </div>   
          </div>
        )}
        
        <div id='divSecondary' className="container w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-7 min-[1100px]:py-5">
          {/* Logo responsivo - solo visible en viewports ≤ 1100px, centrado absolutamente */}
          {isMobileView && (
            <Link 
            onClick={scrollToTop}
            to='/' className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
              <img className='w-[3rem]' src={logoResponsive} alt="Logo Responsive" />
            </Link>
          )}
          
          <div className="flex items-center justify-between">
            {/* Botón de menú hamburguesa (solo visible en viewports ≤ 1100px) */}
            <button 
              className={`flex items-center space-x-2 text-black ${isMobileView ? '' : 'hidden'}`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <>
                  <X size={24} />
                  <span>Cerrar</span>
                </>
              ) : (
                <>
                  <Menu size={24} />
                  <span>Menu</span>
                </>
              )}
            </button>

            {/* Desktop Navigation (oculto en viewports ≤ 1100px) */}
            <nav className={`flex space-x-10 text-[0.9rem] font-medium ${isMobileView ? 'hidden' : ''}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`relative pb-1 transition-colors ${
                    location.pathname === item.href 
                      ? 'text-[#45246E] font-bold after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[#45246E]' 
                      : 'text-black hover:text-[#45246E]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay con animación de deslizamiento (solo en viewports ≤ 1100px) */}
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isMobileView && isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Fondo semitransparente */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        ></div>
        
        {/* Panel deslizante desde la derecha */}
        <div className="absolute right-0 top-0 w-full h-full bg-white shadow-lg">
          <nav className="flex flex-col pt-[4rem] space-y-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={`py-4 px-6 transition-colors border-b border-[#EFE1F4] relative ${
                  location.pathname === item.href 
                    ? 'text-[#45246E] font-bold' 
                    : 'text-black hover:text-[#45246E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* ButtonLan al final del menú móvil */}
            <div className="pt-5 px-6">
              <ButtonLan />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;