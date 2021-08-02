import baseRadii from "./base";
import { Radii } from "./radii.types";

const radii = (code?:string):Radii => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || baseRadii;
    }
  } catch(e) {
    return baseRadii;
  }
}

export default radii;
