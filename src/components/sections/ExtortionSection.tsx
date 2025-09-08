import { Clock, MapPin, Phone, DollarSign } from 'lucide-react';

const ExtortionSection = () => {
  const timelineEvents = [
    {
      date: 'Enero 2023',
      title: 'Primer Contacto Extorsivo',
      description: 'Recepción de la primera llamada telefónica exigiendo pagos mensuales bajo amenaza de violencia física.',
      details: [
        'Llamada telefónica a las 22:30 horas',
        'Demanda de $500 USD mensuales',
        'Amenazas directas contra mi familia',
        'Conocimiento específico de mi dirección personal'
      ],
      severity: 'high'
    },
    {
      date: 'Febrero 2023',
      title: 'Escalada de Amenazas',
      description: 'Incremento en la frecuencia de contactos y demandas económicas, incluyendo amenazas contra familiares específicos.',
      details: [
        'Aumento a $800 USD mensuales',
        'Llamadas diarias durante una semana',
        'Mensajes con fotografías de mi residencia',
        'Amenazas específicas contra mis hijos'
      ],
      severity: 'high'
    },
    {
      date: 'Marzo 2023',
      title: 'Intimidación Física',
      description: 'Presencia de individuos sospechosos cerca de mi domicilio y lugar de trabajo, confirmando la seriedad de las amenazas.',
      details: [
        'Vehículos desconocidos vigilando mi casa',
        'Personas siguiendo a familiares',
        'Vandalismo menor en mi propiedad',
        'Llamadas amenazando con "visitas" inmediatas'
      ],
      severity: 'critical'
    },
    {
      date: 'Abril 2023',
      title: 'Decisión de Salida',
      description: 'Después de amenazas directas de muerte y demostración de capacidad operativa, tomé la decisión de abandonar el país.',
      details: [
        'Amenaza de muerte en 48 horas',
        'Demostración de conocimiento de rutinas familiares',
        'Última demanda de $2000 USD inmediatos',
        'Preparación urgente para salida del país'
      ],
      severity: 'critical'
    }
  ];

  return (
    <section id="extorsion" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#45246E' }}>
            Extorsión
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#0E0E0E' }}>
            Cronología detallada de los eventos de extorsión que motivaron mi solicitud de refugio,
            documentando la escalada sistemática de amenazas y la imposibilidad de obtener protección local.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#45246E' }}></div>

            {timelineEvents.map((event, index) => (
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
                        {event.title}
                      </h3>
                      <span className="font-semibold text-lg" style={{ color: '#45246E' }}>
                        {event.date}
                      </span>
                    </div>

                    <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0E0E0E' }}>
                      {event.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {event.details.map((detail, detailIndex) => (
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
              Impacto y Consecuencias
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Pérdidas Económicas</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Exigencias que superaban mis ingresos mensuales</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Desplazamiento Forzado</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Imposibilidad de permanecer en mi lugar de residencia</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-10 w-10" style={{ color: 'white', backgroundColor: '#45246E', padding: '5px' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#45246E' }}>Acoso Constante</h4>
                <p className="text-sm" style={{ color: '#0E0E0E' }}>Comunicaciones amenazantes diarias durante meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtortionSection;