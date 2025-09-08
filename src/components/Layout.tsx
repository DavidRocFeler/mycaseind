import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Index from '../pages/Index';

interface LayoutProps {
  children?: React.ReactNode;
  isIndex?: boolean;
}

const Layout = ({ children, isIndex = false }: LayoutProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'nl'>('nl');

  const handleLanguageChange = (lang: 'es' | 'nl') => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      <main className="flex-1">
        {isIndex ? <Index currentLanguage={currentLanguage} /> : children}
      </main>
      
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Layout;