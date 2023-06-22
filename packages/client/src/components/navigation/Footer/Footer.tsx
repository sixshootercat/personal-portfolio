import React from 'react';
import { Footer as MantineFooter } from '@mantine/core';

export const Footer = () => {
  return (
    <MantineFooter
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '30px',
      }}
      height='auto'
    >
      <div className='sm:justify-start flex justify-center'>
        <span className=''>All rights reserved </span>
        <span>© Kevin Ruhl 2023</span>
      </div>
    </MantineFooter>
  );
};
