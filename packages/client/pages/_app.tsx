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
import { AppProps } from 'next/app';
import { themeConfig } from '@/config/theme-config';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('test log');
  const [mantineThemeColor, setMantineThemeColor] =
    useLocalStorage<ColorScheme>({
      key: 'mantine-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
    });

  const mantineTheme = useMantineTheme();

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
          <ErrorBoundary>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ErrorBoundary>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
