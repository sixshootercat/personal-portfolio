import { ThemeIcon } from '@/components/icons';
import { Box, Burger, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { ReactNode } from 'react';
import { MEDIA_QUERIES } from 'src/constants';
import { NAV_ITEMS } from '../navigation.constants';

const HeaderLogo = ({
  bgColor = 'transparent',
  el = (
    <Text weight={600} size='xl'>
      Kevin Ruhl
    </Text>
  ),
}: {
  bgColor?: string;
  el?: ReactNode;
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        cursor: 'pointer',
      }}
    >
      <Link href='/'>{el}</Link>
    </Box>
  );
};

export const MockHeaderElems = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === 'dark';
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);

  return (
    <div className='h-full flex items-center'>
      {!isDesktop && (
        <>
          <HeaderLogo />
          <Burger opened={isOpen} onClick={onClick} size={30} />
        </>
      )}
      {isDesktop && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <HeaderLogo />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ThemeIcon />
            {NAV_ITEMS.map((el) => (
              <Box
                key={el.id}
                sx={(theme) => ({
                  margin: '0 1rem',
                  color: dark ? 'white' : 'black',
                  ':hover': {
                    color: theme.colors.cyan[4],
                  },
                })}
              >
                <Link href={el.link}>{el.name}</Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};
