import { Box, Divider, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { MEDIA_QUERIES } from 'src/constants';
import { FOOTER_NAV_ITEMS } from '../navigation.constants';

const FooterLogo = ({
  children = (
    <Text weight={600} size='xl'>
      Kevin Ruhl
    </Text>
  ),
}: {
  children?: ReactNode;
}) => {
  return (
    <div className='my-auto'>
      <Link href='/'>{children}</Link>
    </div>
  );
};

export const FooterItems = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const aboutCol = FOOTER_NAV_ITEMS.filter(
    (item) => item.column === 'about me'
  );

  const portfolioCol = FOOTER_NAV_ITEMS.filter(
    (item) => item.column === 'portfolio'
  );

  return (
    <>
      <Group
        className='flex-col sm:flex-row sm:items-start sm:justify-between'
        spacing={40}
      >
        <Box className='cursor-pointer flex'>
          <FooterLogo />
        </Box>
        <Group className='items-start gap-24'>
          <Group direction='column'>
            <Text size='lg' weight={600}>
              About
            </Text>
            {aboutCol.map((el) => (
              <Text key={el.id} className='hover:text-cyan-400'>
                <Link href={el.link}>{el.name}</Link>
              </Text>
            ))}
          </Group>
          <Group direction='column'>
            <Text size='lg' weight={600}>
              Portoflio
            </Text>
            {portfolioCol.map((el) => (
              <Text key={el.id} className='hover:text-cyan-400'>
                <Link href={el.link}>{el.name}</Link>
              </Text>
            ))}
          </Group>
        </Group>
        {isMobile && <Divider size='xs' sx={{ width: '50%' }} />}
      </Group>
      <div className='mt-16'>
        <span className=''>All rights reserved </span>
        <span>© Kevin Ruhl 2022</span>
      </div>
    </>
  );
};
