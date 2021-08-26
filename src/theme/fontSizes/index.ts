import baseFontSizes from "./base";
import { FontSizes } from "./fontSizes.types";

const fontSizesByBrand = (code?:string):FontSizes => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseFontSizes;
    }
  } catch(e) {
    return baseFontSizes;
  }
}

export default fontSizesByBrand;
