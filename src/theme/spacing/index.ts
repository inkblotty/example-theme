import baseSpacing from "./base";
import { Spacing } from "./spacing.types";

const spacing = (code?:string):Spacing => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseSpacing;
    }
  } catch(e) {
    return baseSpacing;
  }
}

export default spacing;
