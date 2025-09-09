export interface ThreatDetail {
    es: string;
    nl: string;
  }
  
  export interface ThreatItem {
    id: number;
    title: {
      es: string;
      nl: string;
    };
    date: {
      es: string;
      nl: string;
    };
    source: {
      es: string;
      nl: string;
    };
    severity: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    details: {
      es: string[];
      nl: string[];
    };
    icon: string;
  }
  
  export interface ProtectionItem {
    title: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    icon: string;
  }
  
  export interface ThreatsData {
    title: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    protectionTitle: {
      es: string;
      nl: string;
    };
    protectionDescription: {
      es: string;
      nl: string;
    };
    threatCategories: ThreatItem[];
    protectionItems: ProtectionItem[];
    sourceText: {
      es: string;
      nl: string;
    };

    downloadText: {
        es: string;
        nl: string;
      };
  }