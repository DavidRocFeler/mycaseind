import { useState } from 'react';
import { Clock, DollarSign, MapPin, Phone, Download, LucideIcon } from 'lucide-react';
import { extortionData } from '@/mock/extortion.mock';
import jsPDF from 'jspdf';

interface ExtortionSectionProps {
  currentLanguage: 'es' | 'nl';
}

const ExtortionSection = ({ currentLanguage }: ExtortionSectionProps) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Configurar documento
    doc.setFontSize(16);
    doc.setTextColor(69, 36, 110);
    doc.text(extortionData.title[currentLanguage], 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const descLines = doc.splitTextToSize(extortionData.description[currentLanguage], 170);
    doc.text(descLines, 20, 40);
    
    let yPosition = 60;
    
    // Agregar línea de tiempo
    extortionData.timeline.forEach((event, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(69, 36, 110);
      doc.text(`${event.date[currentLanguage]} - ${event.title[currentLanguage]}`, 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      const descLines = doc.splitTextToSize(event.description[currentLanguage], 170);
      doc.text(descLines, 20, yPosition);
      yPosition += descLines.length * 7 + 5;
      
      event.details[currentLanguage].forEach(detail => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`• ${detail}`, 25, yPosition);
        yPosition += 7;
      });
      
      yPosition += 10;
    });
    
    // Descargar PDF
    doc.save(`cronologia_extorsion_${currentLanguage}.pdf`);
  };

  return (
    <section id="extorsion" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            {extortionData.title[currentLanguage]}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            {extortionData.description[currentLanguage]}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#45246E' }}></div>

            {extortionData.timeline.map((event, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline Marker */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center z-10">
                  <Clock className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white p-8 border-2 border-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold mb-2 lg:mb-0" style={{ color: '#45246E' }}>
                        {event.title[currentLanguage]}
                      </h3>
                      <span className="font-semibold text-lg" style={{ color: '#45246E' }}>
                        {event.date[currentLanguage]}
                      </span>
                    </div>

                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0E0E0E' }}>
                      {event.description[currentLanguage]}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {event.details[currentLanguage].map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#45246E' }} />
                          <span style={{ color: '#0E0E0E' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16">
          <div className="bg-white max-w-4xl mx-auto border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#45246E' }}>
              {extortionData.impactTitle[currentLanguage]}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {extortionData.impactItems.map((item, index) => {
                const IconComponent = item.icon as React.ComponentType<{ 
                  className?: string; 
                  style?: React.CSSProperties;
                }>;
                
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent 
                        className="h-10 w-10" 
                        style={{ 
                          color: 'white', 
                          backgroundColor: '#45246E', 
                          padding: '5px' 
                        }} 
                      />
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
            <span>{extortionData.downloadText[currentLanguage]}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtortionSection;