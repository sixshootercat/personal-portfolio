import { MantineThemeOverride } from "@mantine/core";

export const themeConfig = (
  colorScheme: MantineThemeOverride["colorScheme"]
): MantineThemeOverride => ({
  colorScheme,
  colors: {
    dark: [
      "#d5d7e0",
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#0c0d21",
      "#01010a",
    ],
  },
  // px value
  breakpoints: {
    xs: 440,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1440,
  },
  fontFamily: "Verdana, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
});
