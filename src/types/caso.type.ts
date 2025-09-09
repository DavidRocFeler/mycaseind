export interface CasoData {
  id: string;
  titulo: {
    es: string;
    nl: string;
  };
  descripcion: {
    es: string;
    nl: string;
  };
  imagenUrl: string;
  textoBanner: {
    es: string;
    nl: string;
  };
}

export interface CasoDataArray extends Array<CasoData> {}