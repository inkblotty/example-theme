import { Typography } from "../typography/typography.types";

export const generateFontFaces = (typography: Typography) => {
  const fonts = [
    typography.body.main,
    typography.body.bold,
    typography.headings.main,
    typography.headings.bold,
    typography.alternate.main,
    typography.alternate.bold,
  ];
  return fonts.map(font => {
    const urls = font.urls.map(url => {
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
