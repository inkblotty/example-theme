import baseTypography from "./base";
import { Typography } from "./typography.types";

const typographyByBrand = (code?:string):Typography => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseTypography;
    }
  } catch(e) {
    return baseTypography;
  }
}

export default typographyByBrand;
