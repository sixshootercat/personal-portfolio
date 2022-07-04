import React, { ReactNode } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { useScrollingUp } from 'src/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { MEDIA_QUERIES } from 'src/constants';

type HeaderProps = {
  children: ReactNode;
  animation?: 'slide' | 'none';
};

export const Header = ({ children, animation = 'slide' }: HeaderProps) => {
  const show = useScrollingUp();
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);

  const animateSlide = () =>
    animation === 'slide' && show
      ? '-translate-y-0 transition-all duration-300 ease-in'
      : '-translate-y-40 transition-all duration-300 ease-out';

  return (
    <MantineHeader
      className={`${isDesktop && animateSlide()}`}
      fixed
      sx={{
        'button.mantine-UnstyledButton-root': {
          marginLeft: 'auto',
          marginRight: '10px',
        },
        padding: isDesktop ? '0 5%' : '0',
      }}
      height='90px'
    >
      {children}
    </MantineHeader>
  );
};
