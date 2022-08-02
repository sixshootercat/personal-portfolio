import { Box, Divider, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { MEDIA_QUERIES } from 'src/constants';
import { NAV_ITEMS } from '../navigation.constants';

const FooterLogo = ({
  el = (
    <Text weight={600} size='xl'>
      Kevin Ruhl
    </Text>
  ),
}: {
  el?: ReactNode;
}) => {
  return <Link href='/'>{el}</Link>;
};

export const MockFooterElems = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  return (
    <div>
      <Group
        sx={(theme) => ({
          [theme.fn.largerThan('xs')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
          {NAV_ITEMS.map((el) => (
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
        <span>All rights reserved </span>
        <span>© Kevin Ruhl 2022</span>
      </div>
    </div>
  );
};
