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
    };
    large: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
    };
    small: {
      family: string;
      lineHeight: string;
      size: {
        sm: string;
        lg: string;
      };
      weight: number;
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
