import { footerData } from '@/mock/footer.mock';

interface FooterProps {
  currentLanguage: 'es' | 'nl';
}

const Footer = ({ currentLanguage }: FooterProps) => {
  return (
    <footer className="bg-[#F8F4FF] header-bg border-[#EFE1F4] border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-[#0E0E0E] text-xs">
            {footerData.declaration[currentLanguage]}
          </p>
          <p className="text-[#0E0E0E] text-xs mt-2">
            {footerData.documentation[currentLanguage]} - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;