import { CasoDataArray } from '@/types/caso.type';
import heroImage from '@/assets/hero-case.jpg';

export const peligrosData: CasoDataArray = [
  {
    id: '1',
    titulo: {
      es: "Peligros Constantes",
      nl: "Constante Gevaren"
    },
    descripcion: {
      es: "Registro detallado de las amenazas y peligros constantes que enfrento, documentando el riesgo inminente para mi seguridad y la necesidad de protección internacional ante las autoridades holandesas.",
      nl: "Gedetailleerd overzicht van de constante bedreigingen en gevaren die ik tegenkom, waarbij het directe risico voor mijn veiligheid en de noodzaak van internationale bescherming bij de Nederlandse autoriteiten wordt gedocumenteerd."
    },
    imagenUrl: heroImage,
    textoBanner: {
      es: "Peligros Constantes",
      nl: "Constante Gevaren"
    }
  }
];