import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({ currentLanguage, onLanguageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navigation = [
    { name: 'Caso', href: '/caso' },
    { name: 'Pruebas', href: '/pruebas' },
    { name: 'Extorsión', href: '/extorsion' },
    { name: 'Amenazas', href: '/amenazas' },
    { name: 'Noticias', href: '/noticias' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 header-bg border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold title-purple hover:text-primary transition-colors">
                Caso de Refugio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`title-purple hover:text-primary transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-primary font-bold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-white">
                    <span className="mr-2">
                      {languages.find((l) => l.code === currentLanguage)?.flag}
                    </span>
                    {languages.find((l) => l.code === currentLanguage)?.code.toUpperCase()}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent align="end" className="bg-white border-1 border-gray-200">
                   {languages.map((lang) => (
                     <DropdownMenuItem
                       key={lang.code}
                       onClick={() => onLanguageChange(lang.code)}
                       className="flex items-center space-x-2 cursor-pointer"
                     >
                       <span>{lang.flag}</span>
                       <span>{lang.name}</span>
                     </DropdownMenuItem>
                   ))}
                 </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg title-purple hover:bg-purple-container transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="absolute right-0 top-16 w-64 h-full header-bg border-l border-border">
            <nav className="flex flex-col p-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`text-left py-3 px-4 title-purple hover:bg-purple-container rounded-lg transition-colors font-medium border-1 border-transparent hover:border-primary ${
                    location.pathname === item.href ? 'bg-purple-container border-1 border-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;