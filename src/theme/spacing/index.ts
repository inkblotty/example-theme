import backupSpacing from "./backupSpacing";
import { Spacing } from "./spacing.types";

const spacing = (code?:string):Spacing => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || backupSpacing;
    }
  } catch(e) {
    return backupSpacing;
  }
}

export default spacing;
