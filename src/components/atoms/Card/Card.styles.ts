import makeStylesForBrand from "../../../theme/helpers/getStylesByBrand";
import { BrandStyleOverrides, StyleDefinition } from "../../../theme/themeHelpers.types";

const baseStyles: StyleDefinition = {
  wrapper: theme => ({
    boxShadow: theme.elevations['03'],
    borderRadius: 5,
    padding: theme.spacing.md,
  }),
};
const overrides: BrandStyleOverrides = {};
export default makeStylesForBrand(baseStyles, overrides);
