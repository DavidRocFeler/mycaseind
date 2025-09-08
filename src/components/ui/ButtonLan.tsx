interface ButtonLanProps {
  currentLanguage: string;
  onLanguageChange: (lang: 'es' | 'nl') => void;
}

const ButtonLan = ({ currentLanguage, onLanguageChange }: ButtonLanProps) => {
  return (
    <div className="flex flex-row space-x-2">
      <button
        onClick={() => onLanguageChange('nl')}
        className={currentLanguage === 'nl' ? 'font-bold' : 'font-normal'}
        style={{
          letterSpacing: '-0.5px'
        }}
      >
        In het Nederlands 
      </button>
      <span>|</span>
      <button
        onClick={() => onLanguageChange('es')}
        className={currentLanguage === 'es' ? 'font-bold' : 'font-normal'}
        style={{
          letterSpacing: '-0.5px'
        }}
      >
        Ver en Español
      </button>
    </div>
  );
};

export default ButtonLan;