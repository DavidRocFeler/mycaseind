import { CasoDataArray } from "@/types/caso.type";
import caseImage from '@/assets/hero-case.jpg'

export const casoData: CasoDataArray = [
  {
    id: '1',
    titulo: {
      es: "Mi Caso de Refugio",
      nl: "Mijn Asielzaak"
    },
    descripcion: {
      es: "Presentación completa de mi solicitud de refugio basada en persecución por grupos criminales organizados. Documentación detallada de extorsiones, amenazas de muerte y la imposibilidad de protección estatal en Perú.",
      nl: "Volledige presentatie van mijn asielverzoek gebaseerd op vervolging door georganiseerde criminele groepen. Gedetailleerde documentatie van afpersing, doodsbedreigingen en de onmogelijkheid van staatsbescherming in Peru."
    },
    imagenUrl: caseImage,
    textoBanner: {
      es: "Solicitud de protección internacional por persecución criminal organizada",
      nl: "Verzoek om internationale bescherming wegens vervolging door georganiseerde criminaliteit"
    }
  }
];