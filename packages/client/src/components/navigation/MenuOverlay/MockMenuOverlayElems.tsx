import { Group, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { NAV_ITEMS } from '../navigation.constants';
import { MenuOverlayThemeItem, MenuOverlayLinkItem } from './components';

export const MockMenuOverlayElems = ({
  onItemClick,
}: {
  onItemClick: () => void;
}) => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Group direction='column' sx={{ height: '100%', gap: 0 }}>
      {NAV_ITEMS.map((el) => {
        return (
          <MenuOverlayLinkItem item={el} key={el.id} onClick={onItemClick} />
        );
      })}
      <MenuOverlayThemeItem onClick={() => toggleColorScheme()} />
    </Group>
  );
};
