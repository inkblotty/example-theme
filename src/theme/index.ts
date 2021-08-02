import { Theme } from "@emotion/react";
import colors from './colors';
import shadows from "./shadows";
import spacing from './spacing';
import typography from './typography';

const getTheme = (code?: string): Theme => ({
  colors: colors(code),
  shadows: shadows(code),
  spacing: spacing(code),
  typography: typography(code),
});

export default getTheme;