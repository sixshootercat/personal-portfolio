import { MoonIcon, SunIcon } from '@/components/icons';
import { useMantineColorScheme } from '@mantine/core';
import { useTheme } from 'next-themes';

export const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { theme, setTheme } = useTheme();

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

  return (
    <div className='cursor-pointer'>
      {isDarkTheme ? (
        <SunIcon onClick={toggleThemeColors} />
      ) : (
        <MoonIcon onClick={toggleThemeColors} />
      )}
    </div>
  );
};
