import { useState } from 'react';
import { FileText, Image, MessageCircle, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const EvidenceSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const evidenceCategories = [
    {
      id: 'documentos',
      title: 'Documentos Oficiales',
      icon: FileText,
      description: 'Certificados, reportes policiales, documentos de identidad y registros gubernamentales que validan los hechos presentados.',
      items: [
        'Certificados de amenazas recibidas',
        'Reportes policiales archivados',
        'Documentos de identidad personal',
        'Registros de comunicaciones oficiales'
      ]
    },
    {
      id: 'comunicaciones',
      title: 'Comunicaciones y Mensajes',
      icon: MessageCircle,
      description: 'Registro completo de amenazas, extorsiones y comunicaciones hostiles recibidas a través de diferentes medios.',
      items: [
        'Mensajes de texto amenazantes',
        'Llamadas telefónicas grabadas',
        'Comunicaciones por redes sociales',
        'Correos electrónicos intimidatorios'
      ]
    },
    {
      id: 'multimedia',
      title: 'Evidencia Multimedia',
      icon: Image,
      description: 'Material audiovisual que documenta los eventos, incluyendo fotografías, videos y grabaciones de audio.',
      items: [
        'Fotografías de daños materiales',
        'Videos de amenazas directas',
        'Grabaciones de audio de extorsiones',
        'Capturas de pantalla de amenazas online'
      ]
    },
    {
      id: 'cronologia',
      title: 'Cronología Detallada',
      icon: Calendar,
      description: 'Línea de tiempo precisa con fechas, horarios y contexto de cada evento relevante para el caso.',
      items: [
        'Fechas exactas de cada amenaza',
        'Horarios de llamadas extorsivas',
        'Ubicaciones de eventos específicos',
        'Testigos presentes en cada situación'
      ]
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="pruebas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Icono eliminado como solicitaste */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            Pruebas
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            Documentación completa y verificable que sustenta cada aspecto de mi solicitud de refugio,
            organizada de manera profesional para facilitar su revisión por parte de las autoridades.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {evidenceCategories.map((category) => (
            <div key={category.id} className="bg-white border-2 border-black">
              <button
                onClick={() => toggleAccordion(category.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#45246E] rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-5">
                    <category.icon className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px'}} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: '#45246E' }}>
                      {category.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: '#0E0E0E' }}>
                      {category.description}
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
                      {category.items.map((item, index) => (
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
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white max-w-2xl mx-auto border-2 border-black p-10">
            <p className="font-medium" style={{ color: '#0E0E0E' }}>
              <strong>Nota importante:</strong> Toda la evidencia ha sido recopilada siguiendo 
              protocolos legales apropiados y está disponible para verificación oficial por 
              parte de las autoridades competentes del IND.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;