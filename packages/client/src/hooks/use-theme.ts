import { useMantineColorScheme } from '@mantine/core';
import { useTheme as useTailwindTheme } from 'next-themes';

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { theme, setTheme } = useTailwindTheme();

  const toggleTailwindTheme = () => {
    if (theme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const toggleThemeColors = () => {
    toggleColorScheme();
    toggleTailwindTheme();
  };

  const isDarkTheme = colorScheme === 'dark' && theme === 'dark';

  return { isDarkTheme, toggleThemeColors };
};
