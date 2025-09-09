import { AlertTriangle, Shield, Users, Calendar, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import { threatsData } from '@/mock/peligrosAmenazas.mock';

interface ThreatsSectionProps {
  currentLanguage: 'es' | 'nl';
}

const ThreatsSection = ({ currentLanguage }: ThreatsSectionProps) => {
  // Función para obtener el icono correspondiente
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle': return AlertTriangle;
      case 'Shield': return Shield;
      case 'Users': return Users;
      case 'Calendar': return Calendar;
      default: return AlertTriangle;
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Configurar documento
    doc.setFontSize(16);
    doc.setTextColor(69, 36, 110);
    doc.text(threatsData.title[currentLanguage], 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descLines = doc.splitTextToSize(threatsData.description[currentLanguage], 170);
    doc.text(descLines, 20, 30);
    
    let yPosition = 50;
    
    // Agregar categorías de amenazas
    threatsData.threatCategories.forEach((threat, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(69, 36, 110);
      doc.text(threat.title[currentLanguage], 20, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${threatsData.sourceText[currentLanguage]} ${threat.source[currentLanguage]} | ${threat.date[currentLanguage]} | ${threat.severity[currentLanguage]}`, 20, yPosition);
      yPosition += 6;
      
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      const descLines = doc.splitTextToSize(threat.description[currentLanguage], 170);
      doc.text(descLines, 20, yPosition);
      yPosition += descLines.length * 5 + 5;
      
      threat.details[currentLanguage].forEach(detail => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`• ${detail}`, 25, yPosition);
        yPosition += 6;
      });
      
      yPosition += 10;
    });
    
    // Agregar sección de protección internacional
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(14);
    doc.setTextColor(69, 36, 110);
    doc.text(threatsData.protectionTitle[currentLanguage], 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const protectionLines = doc.splitTextToSize(threatsData.protectionDescription[currentLanguage], 170);
    doc.text(protectionLines, 20, yPosition);
    yPosition += protectionLines.length * 5 + 10;
    
    // Agregar items de protección
    threatsData.protectionItems.forEach(item => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setFontSize(12);
      doc.setTextColor(69, 36, 110);
      doc.text(`• ${item.title[currentLanguage]}`, 20, yPosition);
      yPosition += 6;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(`  ${item.description[currentLanguage]}`, 20, yPosition);
      yPosition += 8;
    });
    
    // Descargar PDF
    doc.save(`amenazas_${currentLanguage}.pdf`);
  };

  return (
    <section id="peligros" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            {threatsData.title[currentLanguage]}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            {threatsData.description[currentLanguage]}
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {threatsData.threatCategories.map((threat) => {
            const IconComponent = getIconComponent(threat.icon);
            
            return (
              <div 
                key={threat.id}
                className="bg-white border-2 border-black p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-4 lg:w-32">
                    <div className="p-5">
                      <IconComponent className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                    </div>
                    <span className="px-3 py-1 text-sm font-medium border-2 border-black bg-white" style={{ color: '#45246E' }}>
                      {threat.severity[currentLanguage]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold mb-2 lg:mb-0" style={{ color: '#45246E' }}>
                        {threat.title[currentLanguage]}
                      </h3>
                      <div className="flex items-center space-x-2" style={{ color: '#45246E' }}>
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{threat.date[currentLanguage]}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium" style={{ color: '#0E0E0E' }}>
                        <strong>{threatsData.sourceText[currentLanguage]}</strong> {threat.source[currentLanguage]}
                      </p>
                    </div>

                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0E0E0E' }}>
                      {threat.description[currentLanguage]}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {threat.details[currentLanguage].map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#45246E' }} />
                          <span className="text-sm" style={{ color: '#0E0E0E' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Protection Needs Summary */}
        <div className="mt-16">
          <div className="bg-white max-w-4xl mx-auto border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#45246E' }}>
              {threatsData.protectionTitle[currentLanguage]}
            </h3>
            
            <div className="prose max-w-none">
              <p className="font-medium text-center leading-relaxed" style={{ color: '#0E0E0E' }}>
                {threatsData.protectionDescription[currentLanguage]}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {threatsData.protectionItems.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                    </div>
                    <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>
                      {item.title[currentLanguage]}
                    </h4>
                    <p className="text-sm" style={{ color: '#0E0E0E' }}>
                      {item.description[currentLanguage]}
                    </p>
                  </div>
                );
              })}
            </div>
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
            <span>{threatsData.downloadText[currentLanguage]}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;