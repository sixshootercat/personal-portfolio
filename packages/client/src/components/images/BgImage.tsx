import { Box } from '@mantine/core';
import Image from 'next/image';

type Props = {
  src: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  alt: string;
};

export const BgImage = ({
  alignItems = 'center',
  children,
  alt = 'Background Image',
  src,
  height = '50vh',
  justifyContent = 'center',
  width = '100%',
}: Props) => {
  return (
    <Box
      sx={{
        alignItems,
        height,
        justifyContent,
        width,
        position: 'relative',
        display: 'flex',
      }}
    >
      <Image alt={alt} src={src} layout='fill' objectFit='cover' quality={80} />
      <Box sx={{ zIndex: 10 }}>{children}</Box>
    </Box>
  );
};
