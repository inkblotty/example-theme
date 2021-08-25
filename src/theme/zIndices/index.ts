import baseZIndices from "./base";
import { ZIndices } from "./zIndices.types";

const zIndicesByBrand = (code?:string):ZIndices => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseZIndices;
    }
  } catch(e) {
    return baseZIndices;
  }
}

export default zIndicesByBrand;