import fjShadows from "./FJ";
import { Shadows } from "./shadows.types";

const shadowsByTheme = (code?:string):Shadows => {
  try {
    if (code) {
      return require(`./${code}.ts`).default;
    } else {
      return require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default || fjShadows;
    }
  } catch(e) {
    return fjShadows;
  }
}

export default shadowsByTheme;
