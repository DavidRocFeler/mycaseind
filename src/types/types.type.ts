export interface HeaderNavigationItem {
    name: {
      es: string;
      nl: string;
    };
    href: string;
  }
  
  export interface HeaderData {
    logoAlt: {
      es: string;
      nl: string;
    };
    logoResponsiveAlt: {
      es: string;
      nl: string;
    };
    menuButton: {
      es: string;
      nl: string;
    };
    closeButton: {
      es: string;
      nl: string;
    };
    navigation: HeaderNavigationItem[];
  }