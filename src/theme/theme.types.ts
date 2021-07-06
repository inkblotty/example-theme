import { Colors } from "./colors/colors.types";
import { Spacing } from "./spacing/spacing.types";
import { Elevations } from './elevations/elevations.types';
import { Typography } from "./typography/typography.types";

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    elevations: Elevations;
    typography: Typography;
    spacing: Spacing;
  }
}
