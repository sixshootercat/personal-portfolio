import { MoonIcon, SunIcon } from '@/components/icons';
import { useTheme } from '@/hooks';

export const ThemeIcon = ({ onClick }: { onClick?: () => void }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div className='cursor-pointer' onClick={onClick}>
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
