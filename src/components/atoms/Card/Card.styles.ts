import makeStylesForBrand from "../../../theme/helpers/getStylesByBrand";
import { BrandStyleOverrides, StyleDefinition } from "../../../theme/themeHelpers.types";

const baseStyles: StyleDefinition = {
  wrapper: theme => ({
    boxShadow: theme.shadows['03'],
    borderRadius: 4,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 340,
    overflow: 'hidden',
    padding: 0,
  }),
};
const overrides: BrandStyleOverrides = {
  fj: {
    // wrapper: theme => ({
    //   padding: theme.spacing.md
    // }),
  },
};
export default makeStylesForBrand(baseStyles, overrides);
