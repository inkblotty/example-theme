import { Colors } from "./colors/colors.types";
import { Spacing } from "./spacing/spacing.types";
import { Shadows } from './shadows/shadows.types';
import { Typography } from "./typography/typography.types";

declare module '@emotion/react' {
  export interface BaseTheme {
    colors: Colors;
    shadows: Shadows;
    typography: Typography;
    spacing: Spacing;
  }
  export interface Theme extends BaseTheme {
  }
}
