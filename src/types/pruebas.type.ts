export interface EvidenceItem {
    id: string;
    title: {
      es: string;
      nl: string;
    };
    icon: string;
    description: {
      es: string;
      nl: string;
    };
    items: {
      es: string[];
      nl: string[];
    };
  }
  
  export interface EvidenceData {
    evidenceCategories: EvidenceItem[];
    importantNote: {
      es: string;
      nl: string;
    };
    title: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    downloadText: {
      es: string;
      nl: string;
    };
  }