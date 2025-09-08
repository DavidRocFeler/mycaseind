import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/logo.png';
import ButtonLan from './ui/ButtonLan';
import logoResponsive from '@/assets/logoResponsive.png';
import { headerData } from '@/mock/header.mock';

interface HeaderProps {
  currentLanguage: 'es' | 'nl';
  onLanguageChange: (lang: 'es' | 'nl') => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const location = useLocation();

  // Efecto para detectar scroll y tamaño de ventana
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0});
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobileView = windowWidth <= 1100;

  const getHeaderPositionClass = () => {
    if (isMobileView) {
      return 'top-0';
    } else {
      return isScrolled ? '-top-[6rem]' : 'top-0';
    }
  };

  return (
    <>
      <header className={`sticky z-50 header-bg border-[#EFE1F4] border-b border-borde bg-white flex flex-col transition-all duration-500 ease-in-out ${getHeaderPositionClass()}`}>
        {!isMobileView && (
          <div id='hiddenDiv'>
            <Link 
              onClick={scrollToTop}
              to='/'
              className='flex justify-center pb-4'
            >
              <img className='w-[15rem]' src={Logo} alt={headerData.logoAlt[currentLanguage]} />
            </Link>
            <div className='absolute right-[7rem] top-6 text-[0.9rem]'>
              <ButtonLan 
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />       
            </div>   
          </div>
        )}
        
        <div id='divSecondary' className="container w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-7 min-[1100px]:py-5">
          {isMobileView && (
            <Link 
              onClick={scrollToTop}
              to='/'
              className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img className='w-[3rem]' src={logoResponsive} alt={headerData.logoResponsiveAlt[currentLanguage]} />
            </Link>
          )}
          
          <div className="flex items-center justify-between">
            <button 
              className={`flex items-center space-x-2 text-black ${isMobileView ? '' : 'hidden'}`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <>
                  <X size={24} />
                  <span>{headerData.closeButton[currentLanguage]}</span>
                </>
              ) : (
                <>
                  <Menu size={24} />
                  <span>{headerData.menuButton[currentLanguage]}</span>
                </>
              )}
            </button>

            <nav className={`flex space-x-10 text-[0.9rem] font-medium ${isMobileView ? 'hidden' : ''}`}>
              {headerData.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`relative pb-1 transition-colors ${
                    location.pathname === item.href 
                      ? 'text-[#45246E] font-bold after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[#45246E]' 
                      : 'text-black hover:text-[#45246E]'
                  }`}
                >
                  {item.name[currentLanguage]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isMobileView && isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        ></div>
        
        <div className="absolute right-0 top-0 w-full h-full bg-white shadow-lg">
          <nav className="flex flex-col pt-[5.2rem] overflow-y-auto space-y-0">
            {headerData.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={scrollToTop}
                className={`py-4 px-6 transition-colors border-b border-[#EFE1F4] relative ${
                  location.pathname === item.href 
                    ? 'text-[#45246E] font-bold' 
                    : 'text-black hover:text-[#45246E]'
                }`}
              >
                {item.name[currentLanguage]}
              </Link>
            ))}
            
            <div className="pt-5 px-6">
              <ButtonLan 
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;