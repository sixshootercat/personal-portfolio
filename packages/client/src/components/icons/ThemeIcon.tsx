import { MoonIcon, SunIcon } from '@/components/icons';
import { useMantineColorScheme } from '@mantine/core';
import { useTheme } from 'next-themes';

export const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme: toggleMantineTheme } =
    useMantineColorScheme();

  const { theme, setTheme } = useTheme();

  const toggleTailwindTheme = () => {
    if (theme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const toggleThemes = () => {
    toggleMantineTheme();
    toggleTailwindTheme();
  };

  const isMantineDark = colorScheme === 'dark';

  return (
    <div className='cursor-pointer'>
      {isMantineDark ? (
        <SunIcon onClick={toggleThemes} />
      ) : (
        <MoonIcon onClick={toggleThemes} />
      )}
    </div>
  );
};
