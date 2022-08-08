import React from 'react';
import { Footer as MantineFooter } from '@mantine/core';
import { MEDIA_QUERIES } from 'src/constants';
import { useMediaQuery } from '@mantine/hooks';

type FooterProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);

  return (
    <MantineFooter
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px 5%',
      }}
      height='auto'
    >
      {children}
    </MantineFooter>
  );
};
