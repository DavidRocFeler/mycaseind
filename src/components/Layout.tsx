import Header from './Header';
import Footer from './Footer';
import Index from '../pages/Index';

interface LayoutProps {
  children?: React.ReactNode;
  isIndex?: boolean;
  currentLanguage: 'nl' | 'es';
  onLanguageChange: (lang: 'nl' | 'es') => void;
}

const Layout = ({ children, isIndex = false, currentLanguage, onLanguageChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
      
      <main className="flex-1">
        {isIndex ? <Index currentLanguage={currentLanguage} /> : children}
      </main>
      
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Layout;