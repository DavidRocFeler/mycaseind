import { AlertTriangle, Shield, Users, Calendar } from 'lucide-react';

const ThreatsSection = () => {
  const threatCategories = [
    {
      id: 1,
      title: 'Peligros Directos de Muerte',
      date: 'Enero - Abril 2023',
      source: 'Grupos criminales organizados',
      severity: 'Crítica',
      description: 'Peligros explícitos contra mi vida con fechas límite específicas y detalles sobre métodos que serían empleados.',
      details: [
        'Peligros con armas de fuego especificadas',
        'Fechas límite para cumplir demandas',
        'Descripción detallada de consecuencias',
        'Conocimiento específico de rutinas personales'
      ],
      icon: AlertTriangle,
      bgColor: 'bg-white',
      borderColor: 'border-black',
      iconColor: 'text-primary'
    },
    {
      id: 2,
      title: 'Peligros Contra Familiares',
      date: 'Febrero - Marzo 2023',
      source: 'Mismos grupos criminales',
      severity: 'Crítica',
      description: 'Peligros específicos contra miembros de mi familia, incluyendo menores de edad, con detalles sobre sus ubicaciones y horarios.',
      details: [
        'Nombres específicos de familiares mencionados',
        'Conocimiento de horarios escolares y laborales',
        'Peligros de secuestro y violencia física',
        'Fotografías de familiares como prueba de vigilancia'
      ],
      icon: Users,
      bgColor: 'bg-white',
      borderColor: 'border-black',
      iconColor: 'text-primary'
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
      bgColor: 'bg-white',
      borderColor: 'border-black',
      iconColor: 'text-primary'
    }
  ];

  return (
    <section id="peligros" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            Peligros
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            Documentación detallada de los peligros recibidos, clasificados por tipo, fuente y nivel de gravedad,
            demostrando la necesidad urgente de protección internacional.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {threatCategories.map((threat) => (
            <div 
              key={threat.id}
              className="bg-white border-2 border-black p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-4 lg:w-32">
                  <div className="p-5">
                    <threat.icon className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                  </div>
                  <span className="px-3 py-1 text-sm font-medium border-2 border-black bg-white" style={{ color: '#45246E' }}>
                    {threat.severity}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2 lg:mb-0" style={{ color: '#45246E' }}>
                      {threat.title}
                    </h3>
                    <div className="flex items-center space-x-2" style={{ color: '#45246E' }}>
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{threat.date}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium" style={{ color: '#0E0E0E' }}>
                      <strong>Fuente:</strong> {threat.source}
                    </p>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0E0E0E' }}>
                    {threat.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {threat.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#45246E' }} />
                        <span className="text-sm" style={{ color: '#0E0E0E' }}>{detail}</span>
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
          <div className="bg-white max-w-4xl mx-auto border-2 border-black p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#45246E' }}>
              Necesidad de Protección Internacional
            </h3>
            
            <div className="prose max-w-none">
              <p className="font-medium text-center leading-relaxed" style={{ color: '#0E0E0E' }}>
                Los peligros documentados demuestran un patrón sistemático de persecución que excede 
                la capacidad de protección de las autoridades locales. La naturaleza específica, 
                escalatoria y continuada de estos peligros constituye una base sólida para la 
                solicitud de refugio bajo las convenciones internacionales de protección.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Riesgo Inmediato</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Peligros activos con fechas límite específicas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Protección Familiar</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Peligros extendidos a miembros familiares</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Falta de Protección Local</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Incapacidad del estado para garantizar seguridad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatsSection;