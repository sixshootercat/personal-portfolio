import React from 'react';
import { Footer as MantineFooter } from '@mantine/core';

type FooterProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
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
