export interface Typography {
  body: {
    main: {
      family: string;
      lineHeight: string;
      size: {
        sm: string; // small devices
        lg: string; // large devices
      };
      weight: number;
      familyUrls: string[];
    };
    large: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    };
    small: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    };
    title: { // do we want this? seems like it should be a heading
      
    },
  };
  figcaption: { // this is called microtext in associated docs
    family: string;
    lineHeight: string;
    size: {
      sm: string;
      lg: string;
    };
    weight: number;
    familyUrls: string[];
  },
  headings: {
    h1: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
    h2: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
    h3: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
    h4: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
    h5: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
    h6: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
      familyUrls: string[];
    },
  };
}
