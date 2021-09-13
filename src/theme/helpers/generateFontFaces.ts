import { Typography } from "../typography/typography.types";

export const generateFontFaces = (typography: Typography) => {
  const fonts = [
    typography.body.main,
    typography.body.large,
    typography.body.small,
    typography.body.caption,
    typography.headings.h1,
    typography.headings.h2,
    typography.headings.h3,
    typography.headings.h4,
  ];
  return fonts.map(font => {
    const urls = font.familyUrls.map(url => {
      const parts = url.split('.');
      return `url('${url}') format('${parts[parts.length - 1]}')`
    });
    return {
      // eslint-disable-next-line no-useless-computed-key
      ['@font-face']: {
        fontFamily: `'${font.family}'`,
        src: urls.join(', '),
      }
    }
  });
};
