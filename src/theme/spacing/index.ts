import backupSpacing from "./backupSpacing";

const spacingByTheme = require(`./${process.env.REACT_APP_BRAND_NAME}.ts`).default;
const spacingObj = { ...backupSpacing, spacingByTheme };
export default spacingObj
