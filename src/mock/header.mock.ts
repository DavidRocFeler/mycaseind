import { HeaderData } from "@/types/types.type";

export const headerData: HeaderData = {
  logoAlt: {
    es: "Logo Ind",
    nl: "Ind Logo"
  },
  logoResponsiveAlt: {
    es: "Logo Responsive", 
    nl: "Responsief Logo"
  },
  menuButton: {
    es: "Menu",
    nl: "Menu"
  },
  closeButton: {
    es: "Cerrar",
    nl: "Sluiten"
  },
  navigation: [
    { 
      name: { 
        es: "Caso", 
        nl: "Zaak" 
      }, 
      href: '/caso' 
    },
    { 
      name: { 
        es: "Pruebas", 
        nl: "Bewijs" 
      }, 
      href: '/pruebas' 
    },
    { 
      name: { 
        es: "Extorsión", 
        nl: "Afpersing" 
      }, 
      href: '/extorsion' 
    },
    { 
      name: { 
        es: "Peligros", 
        nl: "Gevaren" 
      }, 
      href: '/peligros' 
    },
    // { 
    //   name: { 
    //     es: "Noticias", 
    //     nl: "Nieuws" 
    //   }, 
    //   href: '/noticias' 
    // }
  ]
};