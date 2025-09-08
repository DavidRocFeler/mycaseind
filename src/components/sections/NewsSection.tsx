import { ExternalLink, Newspaper, Globe, FileText } from 'lucide-react';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Incremento de Violencia Criminal en la Región',
      source: 'Organización Internacional de Derechos Humanos',
      date: '2023',
      type: 'Informe Oficial',
      description: 'Informe detallado sobre el aumento exponencial de actividades criminales organizadas y la falta de respuesta efectiva por parte de las autoridades locales.',
      relevance: 'Contextualiza la situación general de inseguridad que afecta mi caso específico',
      icon: FileText,
      url: '#'
    },
    {
      id: 2,
      title: 'Testimonio de Casos Similares en Medios Internacionales',
      source: 'Agencias de Noticias Internacionales',
      date: '2023',
      type: 'Cobertura Mediática',
      description: 'Artículos periodísticos que documentan casos similares de extorsión y amenazas en la misma región geográfica durante el mismo período.',
      relevance: 'Demuestra que mi caso no es aislado sino parte de un patrón regional documentado',
      icon: Newspaper,
      url: '#'
    },
    {
      id: 3,
      title: 'Reportes de Organizaciones No Gubernamentales',
      source: 'ONGs de Derechos Humanos',
      date: '2023',
      type: 'Informe de ONG',
      description: 'Documentación por parte de organizaciones internacionales sobre la situación de derechos humanos y la incapacidad del estado para proteger a ciudadanos vulnerables.',
      relevance: 'Proporciona contexto oficial sobre la falta de protección estatal efectiva',
      icon: Globe,
      url: '#'
    }
  ];

  const getTypeColor = (type: string) => {
    return 'border-2 border-black';
  };

  return (
    <section id="noticias" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            Contexto y Noticias
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            Documentación externa que contextualiza mi caso dentro del panorama general de la situación 
            en mi país de origen, proporcionando evidencia independiente de las condiciones que motivaron mi solicitud.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {newsArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-white p-8 border-2 border-black"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                {/* Icon and Type */}
                <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-4 lg:w-32">
                  <div className="p-5">
                    <article.icon className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium ${getTypeColor(article.type)}`} style={{ color: '#45246E', backgroundColor: 'white' }}>
                    {article.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 lg:mb-0 lg:flex-1 lg:pr-4" style={{ color: '#45246E' }}>
                      {article.title}
                    </h3>
                    <div className="text-sm font-medium" style={{ color: '#45246E' }}>
                      {article.date}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium" style={{ color: '#0E0E0E' }}>
                      <strong>Fuente:</strong> {article.source}
                    </p>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0E0E0E' }}>
                    {article.description}
                  </p>

                  <div className="bg-white border-2 border-black p-4 mb-6">
                    <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>
                      Relevancia para mi caso:
                    </h4>
                    <p className="text-sm" style={{ color: '#0E0E0E' }}>
                      {article.relevance}
                    </p>
                  </div>

                  <button 
                    className="inline-flex items-center space-x-2 font-medium border-2 border-black px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                    style={{ color: '#45246E' }}
                    onClick={() => {
                      alert('En una implementación completa, esto abriría el documento o enlace original.');
                    }}
                  >
                    <span>Ver documento completo</span>
                    <ExternalLink className="h-4 w-4" style={{ color: '#45246E' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Statement */}
        <div className="mt-16">
          <div className="bg-white max-w-4xl mx-auto border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#45246E' }}>
              Verificabilidad y Credibilidad
            </h3>
            
            <div className="prose max-w-none text-center">
              <p className="font-medium leading-relaxed mb-6" style={{ color: '#0E0E0E' }}>
                Todas las fuentes documentales aquí referenciadas son de dominio público y pueden ser 
                verificadas independientemente por las autoridades del IND. Esta documentación externa 
                refuerza la credibilidad de mi testimonio personal al demostrar que los eventos descritos 
                ocurren dentro de un contexto regional documentado y reconocido internacionalmente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h4 className="font-semibold mb-3" style={{ color: '#45246E' }}>Fuentes Verificables:</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#0E0E0E' }}>
                    <li>• Informes de organizaciones internacionales</li>
                    <li>• Cobertura mediática de fuentes reconocidas</li>
                    <li>• Documentación de ONGs establecidas</li>
                    <li>• Reportes gubernamentales públicos</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold mb-3" style={{ color: '#45246E' }}>Estándares de Evidencia:</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#0E0E0E' }}>
                    <li>• Fuentes independientes y diversas</li>
                    <li>• Correspondencia temporal con mi caso</li>
                    <li>• Relevancia geográfica específica</li>
                    <li>• Consistencia con mi testimonio personal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;