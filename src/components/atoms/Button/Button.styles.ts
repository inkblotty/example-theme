import { CSSObject } from "@emotion/react";
import makeStylesForBrand from "../../../theme/helpers/getStylesByBrand";
import { BrandStyleOverrides, StyleDefinition } from "../../../theme/themeHelpers.types";

const flexButtons: CSSObject = {
  alignItems: 'center',
  border: 0,
  borderRadius: 4,
  boxShadow: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 16,
  justifyContent: 'center',
};

const baseStyles: StyleDefinition = {
  primary: theme => ({
    ...flexButtons,
    background: theme.colors.primary[600],
    color: theme.colors.neutral[100],
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    ':hover, :focus': {
      background: theme.colors.primary[800],
    },
  }),
  secondary: theme => ({
    ...flexButtons,
    background: 'transparent',
    border: `2px solid ${theme.colors.primary[600]}`,
    color: theme.colors.primary[600],
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    ':hover, :focus': {
      borderColor: theme.colors.primary[800],
      color: theme.colors.primary[800],
    },
  }),
  link: theme => ({
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
    color: theme.colors.primary['500'],
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline',
  }),
  minimal: {
    background: 'transparent',
    boxShadow: 'none',
    border: 0,
    cursor: 'pointer',
  },
};
const overrides: BrandStyleOverrides = {
  fj: {
    minimal: {
      color: 'purple',
      backgroundColor: 'purple',
    },
    primary: {
      color: 'purple',
      backgroundColor: 'purple',
    }
  },
};

export default makeStylesForBrand(baseStyles, overrides);

/**
 * pre-smooshed styles could look like:
 * 
 * 
const allStyles = {
  baseStyles,
  fj: makeStylesForBrand(baseStyles, overrides, 'fj'),
  er: makeStylesForBrand(baseStyles, overrides, 'er'),
}

export default allStyles;
 */
