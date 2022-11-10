import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { useTheme } from 'next-themes';

export const useToggleThemeHotkey = () => {
  const { toggleColorScheme } = useMantineColorScheme();

  const { theme: tailwindThemeColor, setTheme: setTailwindThemeColor } =
    useTheme();

  const toggleTailwindThemeColor = () => {
    setTailwindThemeColor(tailwindThemeColor === 'dark' ? 'light' : 'dark');
  };

  useHotkeys([
    [
      'mod+J',
      () => {
        toggleTailwindThemeColor();
        toggleColorScheme();
      },
    ],
  ]);
};
