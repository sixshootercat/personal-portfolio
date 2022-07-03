import { themeConfig } from '../config/theme.config';

export const MEDIA_QUERIES = {
  mobile: `(max-width: ${themeConfig().breakpoints?.xs}px)`,
  desktop: `(min-width: ${themeConfig().breakpoints?.sm}px)`,
};
