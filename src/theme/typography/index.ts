import fjTypography from "./FJ";
import { Typography } from "./typography.types";

const typographyByBrand = (code?:string):Typography => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || fjTypography;
    }
  } catch(e) {
    return fjTypography;
  }
}

export default typographyByBrand;
