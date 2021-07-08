import { BrandStyleOverrides, StyleDefinition } from "../themeHelpers.types";

export const recursiveSmooshTwoBrands = (obj1: StyleDefinition, obj2: StyleDefinition): StyleDefinition => {
  // recursively map so that overrides smooshes into baseStyles
  const simpleValueTypes = ['string', 'number', 'boolean'];
  const end: StyleDefinition = { ...obj1 };
  Object.entries(obj2).forEach(([key, value]) => {
    if (!value) {
      // special case for 0, null, and undefined since null would be type 'object'
      end[key] = value;
    } else if (simpleValueTypes.includes(typeof value)) {
      end[key] = value;
    } else if (typeof value === 'function') {
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
  return recursiveSmooshTwoBrands(baseStyles, overrides[brandName as keyof BrandStyleOverrides] || {});
};
export default makeStylesForBrand;
