import { BrandStyleOverrides, StyleDefinition } from "../themeHelpers.types";

const makeStylesForBrand = (
  baseStyles: StyleDefinition,
  overrides: StyleDefinition,
  brandName?: keyof BrandStyleOverrides,
) : StyleDefinition => {
  // recursively map so that overrides smooshes into baseStyles
  const simpleValueTypes = ['string', 'number', 'boolean'];
  const end: StyleDefinition = { ...baseStyles };
  Object.entries(overrides).forEach(([key, value]) => {
    if (!value) {
      // special case for 0, null, and undefined since null would be type 'object'
      end[key] = value;
    } else if (simpleValueTypes.includes(typeof value)) {
      end[key] = value;
    } else if (typeof value === 'function') {
      // @ts-ignore
      end[key] = theme => makeStylesForBrand(
        // @ts-ignore
        typeof end[key] === 'function' ? end[key](theme) : end[key],
        value(theme) as StyleDefinition,
        brandName,
      );
    } else {
      // @ts-ignore
      end[key] = makeStylesForBrand(end[key], value, brandName);
    }
  });
  return end;
};
export default makeStylesForBrand;
