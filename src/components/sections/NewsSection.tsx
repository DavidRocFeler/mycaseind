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
    switch (type) {
      case 'Informe Oficial':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cobertura Mediática':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Informe de ONG':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="noticias" className="py-20 bg-purple-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold title-purple mb-4">
            Contexto y Noticias
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Documentación externa que contextualiza mi caso dentro del panorama general de la situación 
            en mi país de origen, proporcionando evidencia independiente de las condiciones que motivaron mi solicitud.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {newsArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                {/* Icon and Type */}
                <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-4 lg:w-32">
                  <div className="p-4 bg-primary rounded-lg">
                    <article.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(article.type)}`}>
                    {article.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold title-purple mb-2 lg:mb-0 lg:flex-1 lg:pr-4">
                      {article.title}
                    </h3>
                    <div className="text-sm text-primary font-medium">
                      {article.date}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground">
                      <strong>Fuente:</strong> {article.source}
                    </p>
                  </div>

                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="container-blue mb-6 border-1 border-blue-300">
                    <h4 className="font-semibold text-primary mb-2">
                      Relevancia para mi caso:
                    </h4>
                    <p className="text-sm text-foreground">
                      {article.relevance}
                    </p>
                  </div>

                  <button 
                    className="inline-flex items-center space-x-2 text-primary hover:text-purple-title transition-colors font-medium"
                    onClick={() => {
                      // In a real implementation, this would open the actual document/link
                      alert('En una implementación completa, esto abriría el documento o enlace original.');
                    }}
                  >
                    <span>Ver documento completo</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Statement */}
        <div className="mt-16">
          <div className="container-purple max-w-4xl mx-auto border-2 border-purple-300">
            <h3 className="text-2xl font-bold title-purple mb-6 text-center">
              Verificabilidad y Credibilidad
            </h3>
            
            <div className="prose max-w-none text-center">
              <p className="text-foreground font-medium leading-relaxed mb-6">
                Todas las fuentes documentales aquí referenciadas son de dominio público y pueden ser 
                verificadas independientemente por las autoridades del IND. Esta documentación externa 
                refuerza la credibilidad de mi testimonio personal al demostrar que los eventos descritos 
                ocurren dentro de un contexto regional documentado y reconocido internacionalmente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-left">
                  <h4 className="font-semibold title-purple mb-3">Fuentes Verificables:</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Informes de organizaciones internacionales</li>
                    <li>• Cobertura mediática de fuentes reconocidas</li>
                    <li>• Documentación de ONGs establecidas</li>
                    <li>• Reportes gubernamentales públicos</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold title-purple mb-3">Estándares de Evidencia:</h4>
                  <ul className="space-y-2 text-sm text-foreground">
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