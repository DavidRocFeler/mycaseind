import { ThreatsData } from '@/types/peligros.type';

export const threatsData: ThreatsData = {
  title: {
    es: "Peligros",
    nl: "Gevaren"
  },
  description: {
    es: "Documentación detallada de los peligros recibidos, clasificados por tipo, fuente y nivel de gravedad, demostrando la necesidad urgente de protección internacional.",
    nl: "Gedetailleerde documentatie van de ontvangen gevaren, geclassificeerd op type, bron en ernstniveau, die de dringende behoefte aan internationale bescherming aantonen."
  },
  protectionTitle: {
    es: "Necesidad de Protección Internacional",
    nl: "Behoefte aan Internationale Bescherming"
  },
  protectionDescription: {
    es: "Los peligros documentados demuestran un patrón sistemático de persecución que excede la capacidad de protección de las autoridades locales. La naturaleza específica, escalatoria y continuada de estos peligros constituye una base sólida para la solicitud de refugio bajo las convenciones internacionales de protección.",
    nl: "De gedocumenteerde gevaren tonen een systematisch patroon van vervolging dat de beschermingscapaciteit van de lokale autoriteiten overstijgt. De specifieke, escalerende en voortdurende aard van deze gevaren vormt een solide basis voor het asielverzoek onder de internationale beschermingsconventies."
  },
  sourceText: {
    es: "Fuente:",
    nl: "Bron:"
  },
  downloadText: {
    es: "Descargar Amenazas en PDF",
    nl: "Download Bedreigingen in PDF"
  },
  threatCategories: [
    {
      id: 1,
      title: {
        es: "Peligros Directos de Muerte",
        nl: "Directe Doodsgevaren"
      },
      date: {
        es: "Enero - Abril 2023",
        nl: "Januari - April 2023"
      },
      source: {
        es: "Grupos criminales organizados",
        nl: "Georganiseerde criminele groepen"
      },
      severity: {
        es: "Crítica",
        nl: "Kritiek"
      },
      description: {
        es: "Peligros explícitos contra mi vida con fechas límite específicas y detalles sobre métodos que serían empleados.",
        nl: "Expliciete gevaren voor mijn leven met specifieke deadlines en details over methoden die zouden worden gebruikt."
      },
      details: {
        es: [
          "Peligros con armas de fuego especificadas",
          "Fechas límite para cumplir demandas",
          "Descripción detallada de consecuencias",
          "Conocimiento específico de rutinas personales"
        ],
        nl: [
          "Gevaren met gespecificeerde vuurwapens",
          "Deadlines voor het voldoen aan eisen",
          "Gedetailleerde beschrijving van consequenties",
          "Specifieke kennis van persoonlijke routines"
        ]
      },
      icon: "AlertTriangle"
    },
    {
      id: 2,
      title: {
        es: "Peligros Contra Familiares",
        nl: "Gevaren voor Familieleden"
      },
      date: {
        es: "Abril - Mayo 2023",
        nl: "April - Mei 2023"
      },
      source: {
        es: "Mismos grupos criminales",
        nl: "Zelfde criminele groepen"
      },
      severity: {
        es: "Crítica",
        nl: "Kritiek"
      },
      description: {
        es: "Peligros específicos contra miembros de mi familia, incluyendo menores de edad, con detalles sobre sus ubicaciones y horarios.",
        nl: "Specifieke gevaren voor mijn familieleden, inclusief minderjarigen, met details over hun locaties en schema's."
      },
      details: {
        es: [
          "Nombres específicos de familiares mencionados",
          "Conocimiento de horarios escolares y laborales",
          "Peligros de secuestro y violencia física",
          "Fotografías de familiares como prueba de vigilancia"
        ],
        nl: [
          "Specifieke namen van familieleden genoemd",
          "Kennis van school- en werkschema's",
          "Gevaren van ontvoering en fysiek geweld",
          "Foto's van familieleden als bewijs van surveillance"
        ]
      },
      icon: "Users"
    },
    {
      id: 3,
      title: {
        es: "Intimidación y Vigilancia",
        nl: "Intimidatie en Surveillance"
      },
      date: {
        es: "Juli 2023",
        nl: "Juli 2023"
      },
      source: {
        es: "Mismos grupos criminales",
        nl: "Zelfde criminele groepen"
      },
      severity: {
        es: "Alta",
        nl: "Hoog"
      },
      description: {
        es: "Presencia física constante de individuos sospechosos cerca de mi domicilio.",
        nl: "Constante fysieke aanwezigheid van verdachte individuen nabij mijn woning."
      },
      details: {
        es: [
          "Vehículos desconocidos estacionados cerca de casa",
          "Seguimiento a pie cerca a mi domicilio",
        ],
        nl: [
          "Onbekende voertuigen geparkeerd nabij huis",
          "Voetvolging nabij mijn woning",
        ]
      },
      icon: "Shield"
    }
  ],
  protectionItems: [
    {
      title: {
        es: "Riesgo Inmediato",
        nl: "Onmiddellijk Risico"
      },
      description: {
        es: "Peligros activos con fechas límite específicas",
        nl: "Actieve gevaren met specifieke deadlines"
      },
      icon: "AlertTriangle"
    },
    {
      title: {
        es: "Protección Familiar",
        nl: "Gezinsbescherming"
      },
      description: {
        es: "Peligros extendidos a miembros familiares",
        nl: "Gevaren uitgebreid naar familieleden"
      },
      icon: "Users"
    },
    {
      title: {
        es: "Falta de Protección Local",
        nl: "Gebrek aan Lokale Bescherming"
      },
      description: {
        es: "Incapacidad del estado para garantizar seguridad",
        nl: "Onvermogen van de staat om veiligheid te garanderen"
      },
      icon: "Shield"
    }
  ]
};