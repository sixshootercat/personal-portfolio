import { MoonIcon, SunIcon } from '@/components/icons';
import { useMantineColorScheme } from '@mantine/core';

export const ThemeIcon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className='cursor-pointer'>
      {dark ? (
        <SunIcon onClick={() => toggleColorScheme()} />
      ) : (
        <MoonIcon onClick={() => toggleColorScheme()} />
      )}
    </div>
  );
};
