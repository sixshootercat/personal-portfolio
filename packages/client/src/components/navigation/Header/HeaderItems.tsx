import { ThemeIcon } from '@/components/icons';
import { Box, Burger, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { MEDIA_QUERIES } from 'src/constants';
import { NAV_ITEMS } from '../navigation.constants';
import { useTheme } from '@/hooks';

const HeaderLogo = () => {
  return (
    <Box className='h-full flex items-center justify-center bg-transparent cursor-pointer'>
      <Link href='/'>
        <Text weight={600} size='xl'>
          Kevin Ruhl
        </Text>
      </Link>
    </Box>
  );
};

export const HeaderItems = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const { toggleThemeColors } = useTheme();

  return (
    <div className='h-full flex items-center'>
      {!isDesktop && (
        <>
          <HeaderLogo />
          <Burger opened={isOpen} onClick={onClick} size={30} />
        </>
      )}
      {isDesktop && (
        <Box className='flex justify-between items-center w-full h-full'>
          <HeaderLogo />
          <Box className='flex justify-center items-center'>
            <ThemeIcon onClick={toggleThemeColors} />
            {NAV_ITEMS.map((el) => (
              <div key={el.id} className='mx-4 hover:text-cyan-400'>
                <Link href={el.link}>{el.name}</Link>
              </div>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};
