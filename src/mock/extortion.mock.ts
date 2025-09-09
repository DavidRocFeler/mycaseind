import { ExtortionData } from '@/types/extortion.type';
import { DollarSign, MapPin, Phone } from 'lucide-react';

export const extortionData: ExtortionData = {
  title: {
    es: "Extorsión",
    nl: "Afpersing"
  },
  description: {
    es: "Cronología detallada de los eventos de extorsión que motivaron mi solicitud de refugio, documentando la escalada sistemática de amenazas y la imposibilidad de obtener protección local.",
    nl: "Gedetailleerde chronologie van de afpersingsgebeurtenissen die mijn vluchtverzoek motiveerden, documenterende systematische escalatie van bedreigingen en de onmogelijkheid om lokale bescherming te krijgen."
  },
  timeline: [
    {
      date: {
        es: "2017-2019",
        nl: "2017-2019"
      },
      title: {
        es: "Extorsión Inicial a Mi Barbería",
        nl: "Initiële Afpersing van Mijn Kapperszaak"
      },
      description: {
        es: "Inicio de extorsiones por parte del Tren de Aragua exigiendo pagos mensuales de 1000 soles por 'protección'.",
        nl: "Start van afpersingen door de Tren de Aragua die maandelijkse betalingen van 1000 sol eisten voor 'bescherming'."
      },
      details: {
        es: [
          "Apertura de barbería en Lima en 2017",
          "Primeras llamadas extorsivas en 2019",
          "Exigencia de 1000 soles mensuales (284 USD)",
          "Amenazas específicas sobre rutinas familiares",
          "Conocimiento detallado de movimientos personales"
        ],
        nl: [
          "Opening kapperszaak in Lima in 2017",
          "Eerste afpersende telefoontjes in 2019",
          "Eis van 1000 sol per maand (284 USD)",
          "Specifieke bedreigingen over familie routines",
          "Gedetailleerde kennis van persoonlijke bewegingen"
        ]
      }
    },
    {
      date: {
        es: "Diciembre 2021",
        nl: "December 2021"
      },
      title: {
        es: "Agresión Física y Cierre Forzado",
        nl: "Fysieke Aanval en Gedwongen Sluiting"
      },
      description: {
        es: "Agresión violenta con arma de fuego que resultó en dislocación de hombro y cierre definitivo del negocio.",
        nl: "Gewelddadige aanval met vuurwapen resulterend in schouderontwrichting en definitieve sluiting van het bedrijf."
      },
      details: {
        es: [
          "Golpe en la cabeza con pistola",
          "Patadas repetidas mientras estaba en el suelo",
          "Severa dislocación del hombro derecho",
          "Lesión permanente con dolor constante",
          "Decisión de cierre inmediato por seguridad"
        ],
        nl: [
          "Klap op het hoofd met pistool",
          "Herhaaldelijk geschopt terwijl ik op de grond lag",
          "Ernstige ontwrichting rechterschouder",
          "Permanente blessure met constante pijn",
          "Onmiddellijke sluitingsbeslissing uit veiligheid"
        ]
      }
    },
    {
      date: {
        es: "2022-2023",
        nl: "2022-2023"
      },
      title: {
        es: "Reanudación con Negocio de Alquileres",
        nl: "Herstart met Verhuurbedrijf"
      },
      description: {
        es: "Reinicio de extorsiones al dedicarme al negocio de alquiler de departamentos, demostrando vigilancia continua.",
        nl: "Herstart van afpersingen bij wijding aan verhuur van appartementen, aantonende continue surveillance."
      },
      details: {
        es: [
          "Un año de relativa calma inicial",
          "Mismo modus operandi y sujetos",
          "Conocimiento de nuevo negocio",
          "Exigencia de pagos continuos",
          "Demostración de vigilancia permanente"
        ],
        nl: [
          "Een jaar van relatieve initiële rust",
          "Zelfde modus operandi en personen",
          "Kennis van nieuw bedrijf",
          "Eis van continue betalingen",
          "Demonstratie van permanente surveillance"
        ]
      }
    },
    {
      date: {
        es: "Julio 2023",
        nl: "Juli 2023"
      },
      title: {
        es: "Alianza Criminal y Vigilancia Intensificada",
        nl: "Criminele Alliantie en Geïntensiveerde Surveillance"
      },
      description: {
        es: "Establecimiento físico del grupo frente a mi domicilio y alianza con mafia local, aumentando exponencialmente el riesgo.",
        nl: "Fysieke vestiging van de groep voor mijn woning en alliantie met lokale maffia, exponentieel verhogend het risico."
      },
      details: {
        es: [
          "Construcción de escuela frente a mi casa",
          "Extorsión a ingenieros de obra",
          "Alianza con mafia local de toda la vida",
          "Control de tráfico de drogas y armas",
          "Vigilancia 24/7 desde la obra"
        ],
        nl: [
          "Bouw school voor mijn huis",
          "Afpersing van bouwingenieurs",
          "Alliantie met levenslange lokale maffia",
          "Controle drugshandel en wapenhandel",
          "24/7 surveillance vanaf de bouwplaats"
        ]
      }
    }
  ],
  impactTitle: {
    es: "Impacto y Consecuencias",
    nl: "Impact en Gevolgen"
  },
  impactItems: [
    {
      title: {
        es: "Pérdidas Económicas",
        nl: "Economische Verliezen"
      },
      description: {
        es: "Exigencias que superaban mis ingresos mensuales y pérdida de dos negocios",
        nl: "Eisen die mijn maandinkomen overtroffen en verlies van twee bedrijven"
      },
      icon: DollarSign
    },
    {
      title: {
        es: "Desplazamiento Forzado",
        nl: "Gedwongen Verplaatsing"
      },
      description: {
        es: "Imposibilidad de permanecer en mi lugar de residencia y trabajo",
        nl: "Onmogelijkheid om te blijven in mijn woon- en werkplaats"
      },
      icon: MapPin
    },
    {
      title: {
        es: "Acoso Constante",
        nl: "Constante Achtervolging"
      },
      description: {
        es: "Comunicaciones amenazantes diarias durante años y vigilancia permanente",
        nl: "Dagelijkse bedreigende communicatie gedurende jaren en permanente surveillance"
      },
      icon: Phone
    }
  ],
  downloadText: {
    es: "Descargar Cronología PDF",
    nl: "Download Chronologie PDF"
  }
};