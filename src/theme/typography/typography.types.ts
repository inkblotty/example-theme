export interface Typography {
  body: {
    main: {
      face: string;
      urls: string[];
    };
    bold:  {
      face: string;
      urls: string[];
    };
  };
  headings: {
    main:  {
      face: string;
      urls: string[];
    };
    bold:  {
      face: string;
      urls: string[];
    };
  };
  alternate: {
    main:  {
      face: string;
      urls: string[];
    };
    bold:  {
      face: string;
      urls: string[];
    };
  }
}

// export interface FontInformation {
//   face: string;
//   urls: string[];
// };
// export interface FontFaces {
//   [key:string]: { // @font-face
//     fontFamily: string;
//     src: string;
//   }
// };
