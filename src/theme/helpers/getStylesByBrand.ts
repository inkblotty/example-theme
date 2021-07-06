import { BrandStyleOverrides, StyleDefinition } from "../themeHelpers.types";

const makeStylesForBrand = (
  baseStyles: StyleDefinition,
  overrides: BrandStyleOverrides,
  brandName = process.env.BRAND_NAME,
) : StyleDefinition => {
  // recursively map so that overrides smooshes into baseStyles
  return baseStyles;
};
export default makeStylesForBrand;
