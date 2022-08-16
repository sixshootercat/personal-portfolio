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

export const MockFooterElems = () => {
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
        sx={(theme) => ({
          [theme.fn.largerThan('xs')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
          },
          [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
          },
        })}
        spacing={40}
      >
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FooterLogo />
        </Box>
        <Group direction='column' sx={{ width: 100 }}>
          <Text size='lg' weight={600}>
            About Me
          </Text>
          {aboutCol.map((el) => (
            <Text
              key={el.id}
              sx={(theme) => ({
                ':hover': {
                  color: theme.colors.cyan[4],
                },
              })}
            >
              <Link href={el.link}>{el.name}</Link>
            </Text>
          ))}
        </Group>
        <Group direction='column' sx={{ width: 100 }}>
          <Text size='lg' weight={600}>
            Portoflio
          </Text>
          {portfolioCol.map((el) => (
            <Text
              key={el.id}
              sx={(theme) => ({
                ':hover': {
                  color: theme.colors.cyan[4],
                },
              })}
            >
              <Link href={el.link}>{el.name}</Link>
            </Text>
          ))}
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
