import React, { ReactNode } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { useScrollingUp } from 'src/hooks';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  const showHeader = useScrollingUp();

  const animateSlide = () =>
    showHeader
      ? 'lg:-translate-y-0 lg:transition-all lg:duration-300 lg:ease-in'
      : 'lg:-translate-y-40 lg:transition-all lg:duration-300 lg:ease-out';

  return (
    <MantineHeader
      className={`${animateSlide()}`}
      fixed
      sx={{
        'button.mantine-UnstyledButton-root': {
          marginLeft: 'auto',
          marginRight: '10px',
        },
        padding: '0 5%',
      }}
      height='90px'
    >
      {children}
    </MantineHeader>
  );
};
