import { MoonIcon, SunIcon } from '@/components/icons';
import { useMantineColorScheme } from '@mantine/core';
import { useTheme } from 'next-themes';

export const ThemeIcon = () => {
  // const { colorScheme, toggleColorScheme: toggleMantineTheme } =
  //   useMantineColorScheme();

  const { systemTheme, theme, setTheme } = useTheme();

  const toggleTailwindTheme = () => {
    if (theme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const toggleThemes = () => {
    // toggleMantineTheme();
    toggleTailwindTheme();
  };

  // const isMantineDark = colorScheme === 'dark';
  const tailwindTheme = theme === 'system' ? systemTheme : theme;
  const isTailwindDark = tailwindTheme === 'dark';

  return (
    <div className='cursor-pointer'>
      {isTailwindDark ? (
        <SunIcon onClick={toggleThemes} />
      ) : (
        <MoonIcon onClick={toggleThemes} />
      )}
    </div>
  );
};
