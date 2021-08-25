import baseBorderWidths from "./base";
import { BorderWidths } from "./borderWidths.types";

const borderWidthsByBrand = (code?:string):BorderWidths => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseBorderWidths;
    }
  } catch(e) {
    return baseBorderWidths;
  }
}

export default borderWidthsByBrand;