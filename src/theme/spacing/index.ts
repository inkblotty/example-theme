import backupSpacing from "./backupSpacing";

const spacingByTheme = require(`./${process.env.BRAND_NAME}`) || {};
export default { ...backupSpacing, spacingByTheme };
