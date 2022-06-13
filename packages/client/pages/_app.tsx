import "../styles/globals.css";
import { MainLayout } from "@/components/layout";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { GetServerSidePropsContext, NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { AppProps } from "next/app";
import { getCookie, setCookies } from "cookies-next";
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
  const [colorScheme, setColorScheme] = useState<ColorScheme>(colorSchemeProp);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
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

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => {
  return {
    colorSchemeProp: getCookie("mantine-color-scheme", ctx) || "light",
  };
};

export default MyApp;
