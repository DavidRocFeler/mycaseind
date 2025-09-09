import { CasoData } from '@/types/caso.type';
import heroImage from '@/assets/hero-case.jpg';

export const newsData: CasoData[] = [
  {
    id: '1',
    titulo: {
      es: "Contexto y Noticias",
      nl: "Context en Nieuws"
    },
    descripcion: {
      es: "Contexto mediático y cobertura noticiosa relevante que documenta la situación en mi país de origen, proporcionando evidencia del clima de inseguridad y violencia que justifica mi solicitud de protección internacional.",
      nl: "Mediacontext en relevant nieuwsdekking die de situatie in mijn land van herkomst documenteert, en bewijs levert van het klimaat van onveiligheid en geweld dat mijn verzoek om internationale bescherming rechtvaardigt."
    },
    imagenUrl: heroImage,
    textoBanner: {
      es: "Contexto y Noticias",
      nl: "Context en Nieuws"
    }
  }
];