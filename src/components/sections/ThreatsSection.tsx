import { AlertTriangle, Shield, Users, Calendar } from 'lucide-react';
import protectionIcon from '@/assets/protection-icon.jpg';

const ThreatsSection = () => {
  const threatCategories = [
    {
      id: 1,
      title: 'Amenazas Directas de Muerte',
      date: 'Enero - Abril 2023',
      source: 'Grupos criminales organizados',
      severity: 'Crítica',
      description: 'Amenazas explícitas contra mi vida con fechas límite específicas y detalles sobre métodos que serían empleados.',
      details: [
        'Amenazas con armas de fuego especificadas',
        'Fechas límite para cumplir demandas',
        'Descripción detallada de consecuencias',
        'Conocimiento específico de rutinas personales'
      ],
      icon: AlertTriangle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600'
    },
    {
      id: 2,
      title: 'Amenazas Contra Familiares',
      date: 'Febrero - Marzo 2023',
      source: 'Mismos grupos criminales',
      severity: 'Crítica',
      description: 'Amenazas específicas contra miembros de mi familia, incluyendo menores de edad, con detalles sobre sus ubicaciones y horarios.',
      details: [
        'Nombres específicos de familiares mencionados',
        'Conocimiento de horarios escolares y laborales',
        'Amenazas de secuestro y violencia física',
        'Fotografías de familiares como prueba de vigilancia'
      ],
      icon: Users,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 3,
      title: 'Intimidación y Vigilancia',
      date: 'Marzo 2023',
      source: 'Operadores locales de los grupos',
      severity: 'Alta',
      description: 'Presencia física constante de individuos sospechosos cerca de mi domicilio, lugar de trabajo y ubicaciones frecuentadas por familiares.',
      details: [
        'Vehículos desconocidos estacionados cerca de casa',
        'Seguimiento a pie en espacios públicos',
        'Presencia en lugares de trabajo de familiares',
        'Vandalismo menor como advertencia'
      ],
      icon: Shield,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600'
    }
  ];

  const getSeverityBadge = (severity: string) => {
    const colors = {
      'Crítica': 'bg-red-100 text-red-800 border-red-200',
      'Alta': 'bg-orange-100 text-orange-800 border-orange-200',
      'Media': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[severity as keyof typeof colors] || colors['Media'];
  };

  return (
    <section id="amenazas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={protectionIcon} 
              alt="Protección y Seguridad" 
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold title-purple mb-4">
            Amenazas
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Documentación detallada de las amenazas recibidas, clasificadas por tipo, fuente y nivel de gravedad,
            demostrando la necesidad urgente de protección internacional.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {threatCategories.map((threat) => (
            <div 
              key={threat.id}
              className={`${threat.bgColor} border-2 ${threat.borderColor} rounded-xl p-8 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-4 lg:w-32">
                  <div className={`p-4 bg-white rounded-lg shadow-md`}>
                    <threat.icon className={`h-8 w-8 ${threat.iconColor}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityBadge(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold title-purple mb-2 lg:mb-0">
                      {threat.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{threat.date}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-1">
                      <strong>Fuente:</strong> {threat.source}
                    </p>
                  </div>

                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    {threat.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {threat.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Protection Needs Summary */}
        <div className="mt-16">
          <div className="container-blue max-w-4xl mx-auto border-2 border-blue-300">
            <h3 className="text-2xl font-bold title-purple mb-6 text-center">
              Necesidad de Protección Internacional
            </h3>
            
            <div className="prose max-w-none">
              <p className="text-primary font-medium text-center leading-relaxed">
                Las amenazas documentadas demuestran un patrón sistemático de persecución que excede 
                la capacidad de protección de las autoridades locales. La naturaleza específica, 
                escalatoria y continuada de estas amenazas constituye una base sólida para la 
                solicitud de refugio bajo las convenciones internacionales de protección.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold title-purple mb-2">Riesgo Inmediato</h4>
                <p className="text-sm text-foreground">Amenazas activas con fechas límite específicas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold title-purple mb-2">Protección Familiar</h4>
                <p className="text-sm text-foreground">Amenazas extendidas a miembros familiares</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold title-purple mb-2">Falta de Protección Local</h4>
                <p className="text-sm text-foreground">Incapacidad del estado para garantizar seguridad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;