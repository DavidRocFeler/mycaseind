import { useState } from 'react';
import { FileText, User, Building, Shield, Users, AlertTriangle, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { myCaseData } from '@/mock/myCase.mock';
import jsPDF from 'jspdf';

interface MyCaseProps {
  currentLanguage: 'es' | 'nl';
}

const MyCase = ({ currentLanguage }: MyCaseProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const sections = [
    {
      id: 'antecedentes',
      title: myCaseData.sections.antecedentes.title[currentLanguage],
      icon: Building,
      content: myCaseData.sections.antecedentes.content[currentLanguage]
    },
    {
      id: 'cierreNegocio',
      title: myCaseData.sections.cierreNegocio.title[currentLanguage],
      icon: FileText,
      content: myCaseData.sections.cierreNegocio.content[currentLanguage]
    },
    {
      id: 'escaladaAmenaza',
      title: myCaseData.sections.escaladaAmenaza.title[currentLanguage],
      icon: AlertTriangle,
      content: myCaseData.sections.escaladaAmenaza.content[currentLanguage]
    },
    {
      id: 'imposibilidadProteccion',
      title: myCaseData.sections.imposibilidadProteccion.title[currentLanguage],
      icon: Shield,
      content: myCaseData.sections.imposibilidadProteccion.content[currentLanguage]
    },
    {
      id: 'vulnerabilidadFamiliar',
      title: myCaseData.sections.vulnerabilidadFamiliar.title[currentLanguage],
      icon: Users,
      content: myCaseData.sections.vulnerabilidadFamiliar.content[currentLanguage]
    },
    {
      id: 'conclusion',
      title: myCaseData.sections.conclusion.title[currentLanguage],
      icon: User,
      content: myCaseData.sections.conclusion.content[currentLanguage]
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Configurar documento
    doc.setFontSize(16);
    doc.setTextColor(69, 36, 110); // Color morado #45246E
    doc.text(myCaseData.title[currentLanguage], 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Color negro
    const introLines = doc.splitTextToSize(myCaseData.introduction[currentLanguage], 170);
    doc.text(introLines, 20, 40);
    
    let yPosition = 40 + (introLines.length * 7) + 15; // Espacio después de la introducción
    
    // Agregar cada sección
    sections.forEach(section => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Título de la sección - Aumentar espacio antes del título
      yPosition += 10;
      doc.setFontSize(14);
      doc.setTextColor(69, 36, 110);
      doc.text(section.title, 20, yPosition);
      yPosition += 15; // Más espacio después del título
      
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      
      section.content.forEach(paragraph => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        
        const lines = doc.splitTextToSize(paragraph, 170);
        doc.text(lines, 20, yPosition);
        yPosition += lines.length * 7 + 5; // Espacio entre párrafos
      });
      
      yPosition += 10; // Espacio adicional después de cada sección
    });
    
    // Agregar nota final
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    yPosition += 10; // Espacio antes de la nota
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const noteLines = doc.splitTextToSize(myCaseData.note[currentLanguage], 170);
    doc.text(noteLines, 20, yPosition);
    
    // Descargar PDF
    doc.save(`beëdigde_verklaring_${currentLanguage === 'es' ? 'es' : 'nl'}.pdf`);
    
    console.log(`PDF generado y descargado en ${currentLanguage === 'es' ? 'español' : 'holandés'}`);
  };

  return (
    <section id="my-case" className="py-[5rem] bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#45246E' }}>
            {myCaseData.title[currentLanguage]}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            {myCaseData.introduction[currentLanguage]}
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <div key={section.id} className="bg-white border-2 border-black">
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#45246E] rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-5">
                    <section.icon className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px'}} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: '#45246E' }}>
                      {section.title}
                    </h3>
                  </div>
                </div>
                {openAccordion === section.id ? (
                  <ChevronUp className="h-6 w-6" style={{ color: '#45246E' }} />
                ) : (
                  <ChevronDown className="h-6 w-6" style={{ color: '#45246E' }} />
                )}
              </button>

              {openAccordion === section.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-16">
                    <div className="space-y-4">
                      {section.content.map((paragraph, index) => (
                        <p key={index} className="text-foreground leading-relaxed" style={{ color: '#0E0E0E' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white max-w-2xl mx-auto border-2 border-black p-10">
            <p className="font-medium" style={{ color: '#0E0E0E' }}>
              <strong>{myCaseData.note[currentLanguage]}</strong>
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
            <span>{currentLanguage === 'es' ? 'Descargar PDF' : 'PDF Downloaden'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyCase;