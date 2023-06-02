import { MenuOverlayItem } from '.';
import { Space, Text } from '@mantine/core';
import { ThemeIcon } from '@/components/icons';
import { useTheme } from '@/hooks';

type MenuOverlayThemeItemProps = {
  onClick?: () => void;
};

export const MenuOverlayThemeItem = ({
  onClick,
}: MenuOverlayThemeItemProps) => {
  const { isDarkTheme, toggleThemeColors } = useTheme();

  return (
    <MenuOverlayItem divider={false} onClick={toggleThemeColors}>
      <Text>{isDarkTheme ? 'Light' : 'Dark'}</Text>
      <Space w='xs' />
      <ThemeIcon />
    </MenuOverlayItem>
  );
};
