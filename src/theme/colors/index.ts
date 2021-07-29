import baseColors from "./base";
import { Colors } from "./colors.types";

const colorByTheme = (code?:string):Colors => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseColors;
    }
  } catch(e) {
    return baseColors;
  }
}

export default colorByTheme;
