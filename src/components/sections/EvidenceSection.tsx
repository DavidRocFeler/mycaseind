import { useState } from 'react';
import { FileText, Image, MessageCircle, Calendar, ChevronDown, ChevronUp, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import { evidenceData } from '@/mock/evidemce.mock';

interface EvidenceSectionProps {
  currentLanguage: 'es' | 'nl';
}

const EvidenceSection = ({ currentLanguage }: EvidenceSectionProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Función para obtener el icono correspondiente
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'MessageCircle': return MessageCircle;
      case 'Image': return Image;
      case 'Calendar': return Calendar;
      default: return FileText;
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Configurar documento
    doc.setFontSize(16);
    doc.setTextColor(69, 36, 110);
    doc.text(evidenceData.title[currentLanguage], 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descLines = doc.splitTextToSize(evidenceData.description[currentLanguage], 170);
    doc.text(descLines, 20, 30);
    
    let yPosition = 50;
    
    // Agregar categorías de evidencia
    evidenceData.evidenceCategories.forEach((category, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(69, 36, 110);
      doc.text(category.title[currentLanguage], 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      const descLines = doc.splitTextToSize(category.description[currentLanguage], 170);
      doc.text(descLines, 20, yPosition);
      yPosition += descLines.length * 7 + 5;
      
      category.items[currentLanguage].forEach(item => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`• ${item}`, 25, yPosition);
        yPosition += 7;
      });
      
      yPosition += 10;
    });
    
    // Agregar nota importante
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.setTextColor(69, 36, 110);
    doc.text(currentLanguage === 'es' ? 'Nota importante:' : 'Belangrijke opmerking:', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const noteLines = doc.splitTextToSize(evidenceData.importantNote[currentLanguage], 170);
    doc.text(noteLines, 20, yPosition);
    
    // Descargar PDF
    doc.save(`evidencias_${currentLanguage}.pdf`);
  };

  return (
    <section id="pruebas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            {evidenceData.title[currentLanguage]}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            {evidenceData.description[currentLanguage]}
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {evidenceData.evidenceCategories.map((category) => {
            const IconComponent = getIconComponent(category.icon);
            
            return (
              <div key={category.id} className="bg-white border-2 border-black">
                <button
                  onClick={() => toggleAccordion(category.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#45246E] rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-5">
                      <IconComponent className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px'}} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#45246E' }}>
                        {category.title[currentLanguage]}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: '#0E0E0E' }}>
                        {category.description[currentLanguage]}
                      </p>
                    </div>
                  </div>
                  {openAccordion === category.id ? (
                    <ChevronUp className="h-5 w-5" style={{ color: '#45246E'}} />
                  ) : (
                    <ChevronDown className="h-5 w-5" style={{ color: '#45246E' }} />
                  )}
                </button>

                {openAccordion === category.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-16">
                      <ul className="space-y-2">
                        {category.items[currentLanguage].map((item, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#45246E' }} />
                            <span className="text-foreground" style={{ color: '#0E0E0E' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white max-w-2xl mx-auto border-2 border-black p-10">
            <p className="font-medium" style={{ color: '#0E0E0E' }}>
              <strong>{currentLanguage === 'es' ? 'Nota importante:' : 'Belangrijke opmerking:'}</strong> {evidenceData.importantNote[currentLanguage]}
            </p>
          </div>
        </div>

        {/* Botón de descarga PDF */}
        <div className="text-center mt-12">
          <button
            onClick={handleDownloadPDF}
            className="bg-[#45246E] text-white font-bold text-lg rounded-[10px] px-5 py-3 flex items-center justify-center mx-auto space-x-2"
            style={{ fontSize: '1rem' }}
          >
            <Download className="h-5 w-5 text-white" />
            <span>{evidenceData.downloadText[currentLanguage]}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;