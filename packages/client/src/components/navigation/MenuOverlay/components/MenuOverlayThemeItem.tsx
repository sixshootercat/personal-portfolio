import { MenuOverlayItem } from '.';
import { Space, Text, useMantineColorScheme } from '@mantine/core';
import { ThemeIcon } from '@/components/icons';

type MenuOverlayThemeItemProps = {
  onClick: () => void;
};

export const MenuOverlayThemeItem = ({
  onClick,
}: MenuOverlayThemeItemProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MenuOverlayItem divider={false} onClick={onClick}>
      <Text>{dark ? 'Light' : 'Dark'}</Text>
      <Space w='xs' />
      <ThemeIcon />
    </MenuOverlayItem>
  );
};
