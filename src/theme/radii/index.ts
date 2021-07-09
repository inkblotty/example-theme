// alternate way we could do this:
/*
const radii = code => require(`./${code}.ts`)?.default || require('./base.ts');

// note the above method could allow for run-time theme changes
*/
const radii = require(`./${process.env.REACT_APP_BRAND_NAME}.ts`)?.default;
export default radii;
