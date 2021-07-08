import makeStylesForBrand from "../../../../theme/helpers/getStylesByBrand";
import { BrandStyleOverrides, StyleDefinition } from "../../../../theme/themeHelpers.types";

const styles: StyleDefinition = {
  wrapperDiv: theme => ({
    width: '100%',
  }),
  wrapper: {
    width: '100%',
  },
  multipleWrapper: theme => ({
    alignItems: 'center',
    backgroundColor: theme.colors.primary[600],
    color: 'white',
    display: 'flex',
    fontFamily: 'Verdana',
    justifyContent: 'space-between',
    height: '2.2em',
    width: '100%',
  }),
  plusMinusButton: {
    fontSize: 32,
  },
  soldOutButton: {
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 32,
    height: '2.2em',
    width: '100%',
  },
};
const overrides: BrandStyleOverrides = {
  fj: {
    wrapperDiv: theme => ({
      margin: `${theme.spacing.sm}px`,
    })
  }
}
export default makeStylesForBrand(styles, overrides);