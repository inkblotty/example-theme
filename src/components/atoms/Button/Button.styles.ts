import { CSSObject } from "@emotion/react";
import makeStylesForBrand from "../../../theme/helpers/getStylesByBrand";
import { BrandStyleOverrides, StyleDefinition } from "../../../theme/themeHelpers.types";

const flexButtons: CSSObject = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const baseStyles: StyleDefinition = {
  primary: theme => ({
    ...flexButtons,
    backgroundColor: theme.colors.primary[600],
    color: theme.colors.neutral[100],
    ':hover, :focus': {
      backgroundColor: theme.colors.primary[800],
    },
  }),
  secondary: theme => ({
    ...flexButtons,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.colors.primary[600]}`,
    color: theme.colors.primary[600],
    ':hover, :focus': {
      borderColor: theme.colors.primary[800],
      color: theme.colors.primary[800],
    },
  }),
  link: theme => ({
    boxShadow: 'none',
    color: theme.colors.primary['500'],
    padding: 0,
    textDecoration: 'underline',
  }),
  minimal: {
    boxShadow: 'none',
    border: 0,
  },
};
const overrides: BrandStyleOverrides = {
  fj: {
  },
};
export default makeStylesForBrand(baseStyles, overrides);
