import { HomeIcon } from '@/components/icons';
import { Box, Divider, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { MEDIA_QUERIES } from 'src/constants';
import { FOOTER_ELEMS } from './Footer.constants';

const FooterLogo = ({ el = <HomeIcon /> }: { el?: ReactNode }) => {
  return <Link href='/'>{el}</Link>;
};

const filterElemsByCol = (
  elems: {
    col: number;
    id: number;
    name: string;
    link: string;
  }[],
  col: 1 | 2
) => {
  return elems.filter((el) => el.col === col);
};

export const MockFooterElems = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  const col1 = filterElemsByCol(FOOTER_ELEMS, 1);
  const col2 = filterElemsByCol(FOOTER_ELEMS, 2);

  return (
    <div>
      <Group
        sx={(theme) => ({
          [theme.fn.largerThan('xs')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: '2rem',
          },
          [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
          },
        })}
        spacing={40}
      >
        <Box
          sx={{
            width: 100,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FooterLogo />
        </Box>
        <Group direction='column' sx={{ width: 100 }}>
          {col1.map((el) => (
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
        <Group direction='column' sx={{ width: 100 }}>
          {col2.map((el) => (
            <Text
              sx={(theme) => ({
                ':hover': {
                  color: theme.colors.cyan[4],
                },
              })}
              key={el.id}
            >
              <Link href={el.link}>{el.name}</Link>
            </Text>
          ))}
        </Group>
      </Group>
      <div className='mt-16'>
        <span>All rights reserved </span>
        <span>© Kevin Ruhl 2022</span>
      </div>
    </div>
  );
};
