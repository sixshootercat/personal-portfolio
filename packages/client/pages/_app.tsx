import "../styles/globals.css";
import { MainLayout } from "@/components/layout";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { AppProps } from "next/app";
import { themeConfig } from "@/config/theme.config";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  colorSchemeProp: ColorScheme;
};

const MyApp = ({
  Component,
  pageProps,
  colorSchemeProp,
}: AppPropsWithLayout) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...themeConfig(colorScheme) }}
        withNormalizeCSS
        withGlobalStyles
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MyApp;
