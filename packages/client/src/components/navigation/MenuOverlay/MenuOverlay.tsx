import React, { ReactNode } from 'react';
import { createStyles, Navbar as MantineNavbar } from '@mantine/core';

type MenuOverlayProps = {
  children: ReactNode;
  isOpen: boolean;
};

export const MenuOverlay = ({ children, isOpen }: MenuOverlayProps) => {
  const { classes } = useStyles();

  return (
    <MantineNavbar
      fixed
      className={classes.container}
      height='100%'
      hidden={!isOpen}
    >
      {children}
    </MantineNavbar>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    marginTop: '90px',
  },
}));
