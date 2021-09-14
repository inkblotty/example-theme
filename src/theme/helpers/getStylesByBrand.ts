import { BrandStyleOverrides, StyleDefinition } from "../themeHelpers.types";

export const recursiveSmooshTwoBrands = (obj1: StyleDefinition, obj2: StyleDefinition): StyleDefinition => {
  // recursively map so that overrides smooshes into baseStyles
  const simpleValueTypes = ['string', 'number', 'boolean'];
  const end: StyleDefinition = { ...obj1 };
  const obj2Entries = Object.entries(obj2)

  let i = 0;
  obj2Entries.forEach(([key, value]) => {
    i++
    if (i >= obj2Entries.length) return end
    if (!value) {
      // special case for 0, null, and undefined since null would be type 'object'
      end[key] = value;
    } else if (simpleValueTypes.includes(typeof value)) {
      end[key] = value;
    } else if (typeof value === 'function') {
      console.log(0, key, 1, value)
      console.log(2, end[key])
      // @ts-ignore
      end[key] = theme => recursiveSmooshTwoBrands(
        // @ts-ignore
        typeof end[key] === 'function' ? end[key](theme) : end[key],
        value(theme) as StyleDefinition,
      );
    } else {
      // @ts-ignore
      end[key] = recursiveSmooshTwoBrands(end[key], value);
    }
  });
  return end;
}
const makeStylesForBrand = (
  baseStyles: StyleDefinition,
  overrides: BrandStyleOverrides,
  brandName?: keyof BrandStyleOverrides,
) : StyleDefinition => {
  const overridesByBrand = overrides[(brandName?.toLowerCase() || process.env.REACT_APP_BRAND_NAME?.toLowerCase()) as keyof BrandStyleOverrides] || {}
  return recursiveSmooshTwoBrands(baseStyles, overridesByBrand);
};
export default makeStylesForBrand;
