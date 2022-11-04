import '../styles/globals.css';
import { MainLayout } from '@/components/layouts';
import { ErrorBoundary } from '@/components/error-boundary';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { themeConfig } from '@/config/theme-config';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [mantineThemeColor, setMantineThemeColor] =
    useLocalStorage<ColorScheme>({
      key: 'mantine-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
    });

  const mantineTheme = useMantineTheme();

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  const toggleColorScheme = (value?: ColorScheme) => {
    setMantineThemeColor(
      value || (mantineThemeColor === 'dark' ? 'light' : 'dark')
    );
  };

  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <ColorSchemeProvider
        colorScheme={mantineThemeColor}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...themeConfig(mantineThemeColor) }}
          withNormalizeCSS
          withGlobalStyles
        >
          <NextNProgress
            color={mantineTheme.colors.cyan[4]}
            options={{ showSpinner: false }}
          />
          {getLayout(
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          )}
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
