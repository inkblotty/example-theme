import backupSpacing from "./backupSpacing";

// const spacingByTheme = require(`./${process.env.BRAND_NAME}`) || {};
const spacingByTheme = require('./FJ.ts');
const spacingObj = { ...backupSpacing, spacingByTheme };
export default spacingObj
