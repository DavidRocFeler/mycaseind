export interface TimelineEvent {
    date: {
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
    details: {
      es: string[];
      nl: string[];
    };
  }
  
  export interface ImpactItem {
    title: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    icon: React.ComponentType;
  }
  
  export interface ExtortionData {
    title: {
      es: string;
      nl: string;
    };
    description: {
      es: string;
      nl: string;
    };
    timeline: TimelineEvent[];
    impactTitle: {
      es: string;
      nl: string;
    };
    impactItems: ImpactItem[];
    downloadText: {
      es: string;
      nl: string;
    };
  }