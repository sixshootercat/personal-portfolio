import React, { ReactNode } from 'react';
import { Header as MantineHeader } from '@mantine/core';
import { useIsSSR, useScrollingUp } from '@/hooks';

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  const showHeader = useScrollingUp();
  const isSSR = useIsSSR();

  // necessary to prevent mismatch between client and server due to use of window API from useScrollingUp hook
  if (!isSSR) return null;

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
        },
        padding: '0 5%',
      }}
      height='90px'
    >
      {children}
    </MantineHeader>
  );
};
