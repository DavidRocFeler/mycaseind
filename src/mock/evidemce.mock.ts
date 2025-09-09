import { EvidenceData } from '@/types/pruebas.type';

export const evidenceData: EvidenceData = {
  title: {
    es: "Pruebas y Evidencias",
    nl: "Bewijs en Bewijsstukken"
  },
  description: {
    es: "Documentación completa y verificable que sustenta cada aspecto de mi solicitud de refugio, incluyendo evidencias de extorsión, agresión física y la imposibilidad de protección estatal.",
    nl: "Volledige en verifieerbare documentatie die elk aspect van mijn asielverzoek ondersteunt, inclusief bewijs van afpersing, fysieke agressie en de onmogelijkheid van staatsbescherming."
  },
  downloadText: {
    es: "Descargar Pruebas en PDF",
    nl: "Download Bewijs in PDF"
  },
  evidenceCategories: [
    {
      id: 'documentos',
      title: {
        es: "Documentos Oficiales",
        nl: "Officiële Documenten"
      },
      icon: 'FileText',
      description: {
        es: "Certificados médicos, registros de propiedad, documentos de identidad y registros oficiales que validan los hechos presentados.",
        nl: "Medische certificaten, eigendomsregistraties, identiteitsdocumenten en officiële registers die de gepresenteerde feiten valideren."
      },
      items: {
        es: [
          'Registros de propiedad del edificio multifamiliar',
          'Documento de identidad peruano',
          'Certificado médico del padre con Alzheimer',
        ],
        nl: [
          'Eigendomsregistraties van het multifunctionele gebouw',
          'Peruaans identiteitsdocument',
          'Medisch certificaat van vader met Alzheimer',
        ]
      }
    },
    {
      id: 'multimedia',
      title: {
        es: "Evidencia Multimedia",
        nl: "Multimedia Bewijs"
      },
      icon: 'Image',
      description: {
        es: "Material audiovisual que documenta los eventos, incluyendo fotografías, videos y registros de la obra.",
        nl: "Audiovisueel materiaal dat de gebeurtenissen documenteert, inclusief foto\'s, video\'s en registraties van de bouwplaats."
      },
      items: {
        es: [
          'Fotografías de la barbería y su ubicación',
          'Imágenes de la construcción frente al domicilio (julio 2023)',
          'Fotografías de la lesión en el hombro derecho',
          'Fotografias de los bienes inmuebles disponibles para alquiler'
        ],
        nl: [
          'Foto\'s van de kapperszaak en de locatie',
          'Beelden van de bouwplaats voor de woning (juli 2023)',
          'Foto\'s van het schouderletsel',
          'Foto\'s van de beschikbare vastgoedobjecten te huu',
        ]
      }
    },
  ],
  importantNote: {
    es: "Toda la evidencia ha sido recopilada siguiendo protocolos legales apropiados y está disponible para verificación oficial por parte de las autoridades competentes del IND. Incluye pruebas de la agresión física, extorsiones del Tren de Aragua, alianza con mafia local, y la imposibilidad de protección estatal debido a la corrupción policial.",
    nl: "Alle bewijsmateriaal is verzameld volgens de juiste juridische protocollen en is beschikbaar voor officiële verificatie door de bevoegde autoriteiten van de IND. Het omvat bewijs van fysieke agressie, afpersing door Tren de Aragua, alliantie met de lokale maffia, en de onmogelijkheid van staatsbescherming vanwege politiecorruptie."
  }
};