import { Colors } from "./colors.types";
import erColors from "./ER";

const colorByTheme = (code?:string):Colors => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || erColors;
    }
  } catch(e) {
    return erColors;
  }
}

export default colorByTheme;
