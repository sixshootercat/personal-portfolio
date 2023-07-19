import React, { ReactNode } from 'react';
import { Navbar as MantineNavbar } from '@mantine/core';

type MenuOverlayProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const MenuOverlay = ({ children, isOpen }: MenuOverlayProps) => {
  return (
    <MantineNavbar
      fixed
      className='md:hidden mt-[90px] h-full'
      hidden={!isOpen}
    >
      {children}
    </MantineNavbar>
  );
};
